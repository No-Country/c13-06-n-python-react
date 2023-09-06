from flask import Flask
from .views import api_v1
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins":"*"}})

def create_app(enviroment):
    app.config.from_object(enviroment)
    app.register_blueprint(api_v1)
    jwt = JWTManager(app)
    return app