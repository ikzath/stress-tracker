
from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS, cross_origin


app = Flask(__name__)
model = joblib.load('rf_model.pkl')
CORS(app)


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


# def build_preflight_response():
#     response = make_response()
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add('Access-Control-Allow-Headers', "*")
#     response.headers.add('Access-Control-Allow-Methods', "*")
#     return response


# def build_actual_response(response):
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     return response


if __name__ == "__main__":
    app.run(host='0.0.0.0')
