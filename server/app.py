from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/search/*": {"origins": "http://localhost:8081"}})

@app.route('/search/keyword', methods=['POST'])
def receive_data():
    data = request.get_json()
    keyWord = data['message']
    print(keyWord)
    return keyWord

if __name__ == '__main__':
    app.run()