@echo off
rem Local preview server — needed for YouTube embeds, which refuse to play
rem when index.html is opened directly from disk (file://). Close this
rem window to stop the server.
cd /d "%~dp0"
start "" http://localhost:8080
python -m http.server 8080
