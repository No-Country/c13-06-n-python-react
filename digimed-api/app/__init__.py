import os
from flask import Flask, send_from_directory
from .views import api_v1
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__, static_folder='../dist', static_url_path='/')
cors = CORS(app, resources={r"/*": {"origins":"*"}})

# Serving static files
@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
@app.route('/<path:path>')
def index(path):
    return app.send_static_file('index.html')


def create_app(enviroment):
    app.config.from_object(enviroment)
    app.register_blueprint(api_v1)
    jwt = JWTManager(app)
    return app