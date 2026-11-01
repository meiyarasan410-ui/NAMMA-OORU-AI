"""
Namma Ooru AI - VS Code Full Stack Launcher
Cybernaut Hackathon 2026

Runs both Backend (FastAPI :8000) and Frontend (Vite :5173) together in VS Code.
Simply click the Run button or execute:
    python main.py
"""

import os
import sys
import subprocess
import time
import signal

# Enable UTF-8 encoding on Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def free_port(port):
    """Automatically free ports if held by orphan processes from earlier sessions"""
    if sys.platform != "win32":
        return
    try:
        out = subprocess.check_output(f'netstat -ano | findstr LISTENING | findstr :{port}', shell=True).decode('utf-8', errors='ignore')
        for line in out.strip().splitlines():
            parts = line.split()
            if len(parts) >= 5 and parts[1].endswith(f":{port}"):
                pid = parts[-1]
                if pid and pid != "0":
                    subprocess.call(f'taskkill /F /PID {pid} /T', shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        pass

# Free dev ports if lingering from a previous VS Code session
free_port(8000)
free_port(5173)

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.join(ROOT_DIR, "backend")
FRONTEND_DIR = os.path.join(ROOT_DIR, "frontend")

# Locate local virtualenv Python
VENV_PYTHON = os.path.join(BACKEND_DIR, ".venv", "Scripts", "python.exe")
if not os.path.exists(VENV_PYTHON):
    VENV_PYTHON = sys.executable

print("=======================================================================")
print("[Namma Ooru AI] Starting Full-Stack Application in VS Code")
print("=======================================================================")
print(f"-> Backend Path:  {BACKEND_DIR}")
print(f"-> Frontend Path: {FRONTEND_DIR}")
print(f"-> Python Exec:   {VENV_PYTHON}")
print("=======================================================================")

npm_cmd = "npm.cmd" if sys.platform == "win32" else "npm"

processes = []

try:
    # 1. Start FastAPI Backend in backend directory
    print("\n[1/2] Launching Python FastAPI Backend on http://localhost:8000 ...")
    backend_proc = subprocess.Popen(
        [VENV_PYTHON, "main.py"],
        cwd=BACKEND_DIR,
        shell=False
    )
    processes.append(backend_proc)

    # 2. Start React Vite Frontend (or fallback to FastAPI static bundle)
    has_node = False
    try:
        subprocess.check_call([npm_cmd, "--version"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, shell=True)
        has_node = True
    except Exception:
        has_node = False

    target_url = "http://localhost:5173"
    if has_node:
        print("[2/2] Launching React Vite Frontend on http://localhost:5173 ...")
        frontend_proc = subprocess.Popen(
            [npm_cmd, "run", "dev"],
            cwd=FRONTEND_DIR,
            shell=True
        )
        processes.append(frontend_proc)
    else:
        print("[2/2] Node.js not detected in PATH. Serving compiled React portal directly via FastAPI on :8000.")
        target_url = "http://localhost:8000"

    # Automatically open default browser after 2.5 seconds
    def open_browser():
        time.sleep(2.5)
        try:
            import webbrowser
            webbrowser.open(target_url)
        except Exception:
            pass

    import threading
    threading.Thread(target=open_browser, daemon=True).start()

    print("\n-----------------------------------------------------------------------")
    print(f" [OK] Web Portal: {target_url} (opening in your browser...)")
    print(" [OK] Backend API: http://localhost:8000/docs")
    print(" Press Ctrl+C in this terminal to stop the servers.")
    print("-----------------------------------------------------------------------\n")

    # Keep alive and monitor child processes
    while True:
        time.sleep(1)
        for p in processes:
            ret = p.poll()
            if ret is not None and ret != 0:
                print(f"[Process exited with code {ret}]")

except KeyboardInterrupt:
    print("\n[Shutting down Namma Ooru AI services...]")
finally:
    for p in processes:
        try:
            p.terminate()
            if sys.platform == "win32":
                subprocess.call(["taskkill", "/F", "/T", "/PID", str(p.pid)], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
        except Exception:
            pass
    print("[Done. All services stopped.]")
