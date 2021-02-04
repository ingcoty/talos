# talos
Repo to show concurrency on flask, it's a simple Backend Flask that can be run on single process and multiprocess just adding unicorn, and a Frontend React App
to calculate the time response on those escenarios.

How Run Backend: 
1. Create a virtual enviroment and activate it, run "pip install -r requirements.txt"
2. To run on single process, run "python test.py"
3. To run multiplocess run "gunicorn test:app --host 0.0.0.0 -k gevent"

How Run Frontend: 
1. run "npm install"
2. run "npm start"
