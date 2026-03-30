#!/bin/sh
uvicorn app.main:app --host 0.0.0.0 --port 8000 --app-dir /backend &
nginx -g "daemon off;"