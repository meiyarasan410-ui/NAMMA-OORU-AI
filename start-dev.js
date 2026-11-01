// Namma Ooru AI - Full-Stack Development Runner for VS Code
// Automatically launches FastAPI Backend and Vite Frontend together

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('\x1b[36m=======================================================================\x1b[0m');
console.log('\x1b[32m🚀 Starting Namma Ooru AI — Cybernaut Hackathon 2026\x1b[0m');
console.log('\x1b[36m=======================================================================\x1b[0m');

const rootDir = __dirname;
const backendDir = path.join(rootDir, 'backend');
const frontendDir = path.join(rootDir, 'frontend');

// Determine Python executable path (prefer local .venv)
let pythonExe = path.join(backendDir, '.venv', 'Scripts', 'python.exe');
if (!fs.existsSync(pythonExe)) {
  pythonExe = path.join(backendDir, '.venv', 'bin', 'python');
}
if (!fs.existsSync(pythonExe)) {
  pythonExe = 'python'; // Fallback to system python
}

console.log(`\x1b[34m[Runner]\x1b[0m Using Python: ${pythonExe}`);
console.log(`\x1b[34m[Runner]\x1b[0m Backend Directory: ${backendDir}`);
console.log(`\x1b[34m[Runner]\x1b[0m Frontend Directory: ${frontendDir}`);

// 1. Launch FastAPI Backend
console.log('\x1b[32m[1/2] Starting Python FastAPI Backend on http://localhost:8000 ...\x1b[0m');
const backendProcess = spawn(pythonExe, ['-m', 'uvicorn', 'main:app', '--host', '0.0.0.0', '--port', '8000', '--reload'], {
  cwd: backendDir,
  shell: true,
  env: { ...process.env, PYTHONUNBUFFERED: '1' }
});

backendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line) console.log(`\x1b[32m[Backend]\x1b[0m ${line}`);
  });
});

backendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line) console.log(`\x1b[33m[Backend]\x1b[0m ${line}`);
  });
});

backendProcess.on('error', (err) => {
  console.error('\x1b[31m[Backend Error]\x1b[0m', err.message);
});

// 2. Launch Vite Frontend
console.log('\x1b[35m[2/2] Starting React Vite Frontend on http://localhost:5173 ...\x1b[0m');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const frontendProcess = spawn(npmCmd, ['run', 'dev', '--', '--host', '0.0.0.0', '--port', '5173'], {
  cwd: frontendDir,
  shell: true
});

frontendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line) console.log(`\x1b[35m[Frontend]\x1b[0m ${line}`);
  });
});

frontendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach(line => {
    if (line) console.log(`\x1b[33m[Frontend]\x1b[0m ${line}`);
  });
});

frontendProcess.on('error', (err) => {
  console.error('\x1b[31m[Frontend Error]\x1b[0m', err.message);
});

console.log('\x1b[36m-----------------------------------------------------------------------\x1b[0m');
console.log('\x1b[1m\x1b[32m✔ Frontend URL:\x1b[0m \x1b[4mhttp://localhost:5173\x1b[0m (opening in browser...)');
console.log('\x1b[1m\x1b[32m✔ Backend Docs:\x1b[0m \x1b[4mhttp://localhost:8000/docs\x1b[0m');
console.log('\x1b[36mPress Ctrl+C at any time to stop both servers.\x1b[0m');
console.log('\x1b[36m-----------------------------------------------------------------------\x1b[0m');

// Auto-open browser on Windows/macOS/Linux
setTimeout(() => {
  try {
    const openCmd = process.platform === 'win32' ? 'start http://localhost:5173' : 'open http://localhost:5173';
    require('child_process').exec(openCmd);
  } catch (e) {}
}, 2500);

// Handle clean shutdown
const cleanup = () => {
  console.log('\n\x1b[33mShutting down Namma Ooru AI services...\x1b[0m');
  try { backendProcess.kill(); } catch (e) {}
  try { frontendProcess.kill(); } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
