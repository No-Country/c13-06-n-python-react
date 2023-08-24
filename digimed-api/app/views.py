from flask import Blueprint

api_v1 = Blueprint('api', __name__, url_prefix='/api/v1')

@api_v1.route('/users', methods={'GET'})
def get_users():
    pass

@api_v1.route('/users/<id>', methods={'GET'})
def get_user(id):
    pass

@api_v1.route('/users', methods={'POST'})
def create_user():
    pass

@api_v1.route('/users/<id>', methods={'PUT'})
def update_user():
    pass

@api_v1.route('/users/<id>', methods={'DELETE'})
def delet_user():
    pass
