
from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder='stress-tracker/build', static_url_path='')
model = joblib.load('rf_model.pkl')
CORS(app)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


@app.route('/api')
def hello_world():
    return {
        'name': 'Hello 786',
        'id': 1,
        'completed': False
    }


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():

    features = [x for x in request.json.values()]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    output = prediction[0]
    prediction = output
    return prediction


if __name__ == "__main__":
    app.run(host='0.0.0.0')
