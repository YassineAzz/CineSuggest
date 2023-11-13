from flask import Flask, request, jsonify
from flask_cors import CORS
from imdb import Cinemagoer
from class_Film import Film

ia = Cinemagoer()

app = Flask(__name__)
CORS(app, resources={r"/search/*": {"origins": "http://localhost:8081"}})

@app.route('/search/keyword', methods=['POST'])
def receive_data():
    data = request.get_json()
    print((data['message']))
    f1 = Film(str(data['message']))
    print(f1.titre)
    print(f1.annee)
    return jsonify({'message': 'Données enregistrées avec succès'})
if __name__ == '__main__':
    app.run()