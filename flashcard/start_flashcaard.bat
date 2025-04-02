@echo off
cd /d %~dp0
start python -m http.server 5500
start http://localhost:5500
