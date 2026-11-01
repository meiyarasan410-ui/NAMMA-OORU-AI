# Running Namma Ooru AI in Visual Studio Code

This project has been fully configured for seamless 1-click execution in Visual Studio Code.

---

## ⚡ How to Run in VS Code (Choose Any Option)

### Option 1: Press the Play Button (Easiest)
1. In VS Code, open [`main.py`](file:///M:/hackthon%202/main.py) from the file explorer.
2. Click the **▶ Play button** (Run Python File) in the top-right corner of the editor.
3. Both servers will launch automatically, and your browser will open to the website!

---

### Option 2: 1-Click Run & Debug (`F5`)
1. Press **`F5`** on your keyboard (or click **Run** > **Start Debugging**).
2. VS Code starts the full-stack app and opens the browser.

---

### Option 3: Using the Integrated Terminal
1. Open the VS Code terminal (**`` Ctrl + ` ``** or **Terminal** > **New Terminal**).
2. Type:
   ```bash
   python main.py
   ```
   *(or `npm run dev` or `.\run.bat`)*

---

### Option 4: Backend Only (Direct Python)
If you only want to run Python without Node:
1. Open [`backend/main.py`](file:///M:/hackthon%202/backend/main.py).
2. Click the **▶ Play button**.
3. FastAPI will serve both the React web application and backend APIs at:
   - **Web Portal**: [http://localhost:8000](http://localhost:8000)
   - **Interactive API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🌐 URLs
- **Web Portal (Vite Dev)**: [http://localhost:5173](http://localhost:5173)
- **Web Portal (FastAPI)**: [http://localhost:8000](http://localhost:8000)
- **Interactive Backend API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Health Check**: [http://localhost:8000/api/health](http://localhost:8000/api/health)

---

## 🏛️ Direct Access (No Login Required)
- **Citizens**: Report problems, track grievances, view citizen portal freely.
- **Municipal Officers**: Click **"Officer Portal"** for direct access to the Officer Command Center and Chart.js Analytics.
