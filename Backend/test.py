import time
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/<peticion>')
def hello(peticion):
    start_time = time.time()
    print('get request ', start_time)
    time.sleep(5)
    print('end request ', (time.time() - start_time))
    return('<h1>Ok</h1>')

if __name__ == '__main__':    
    app.run(threaded=False)