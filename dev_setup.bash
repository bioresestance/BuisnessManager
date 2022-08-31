#! /bin/bash

if [[ "$1" == "backend" ]]; then

cd ./backend
pip install -r requirements.txt
flask run

elif [[ "$1" == "frontend" ]]; then

cd ./frontend
npm install
npm run dev

fi
