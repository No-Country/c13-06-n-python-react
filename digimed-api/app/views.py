from flask import Blueprint, request, jsonify
from .models import User, Patient
from .db import session

api_v1 = Blueprint('api', __name__, url_prefix='/api/v1')
  
@api_v1.route('/users', methods={'GET'})
def get_users():
    all_users = session.query(User).all()
    print(all_users)
    return jsonify({'usuarios':all_users[0]})

@api_v1.route('/users/<id>', methods={'GET'})
def get_user(id):
    print('entro')
    user = session.query(User).get(id)
    return jsonify({
        'id':user.id,
        'username':user.username,
        'email':user.email,
        'password':user.password,
    })

@api_v1.route('/users', methods={'POST'})
def create_user():
    
    email = request.json['email']
    password = request.json['password']
    
    new_user = User(email=email, password=password)

    session.add(new_user)
    session.commit()

    return jsonify({
        'id':new_user.id,
        'email':new_user.email,
        'password':new_user.password,
        'username':new_user.username
        })

@api_v1.route('/users/<id>', methods={'PUT'})
def update_user(id):
    user = User.query.get(id)

    email = request.json['email']
    password = request.json['password']

    user.email = email
    user.password = password

    db.session.commit()

    return user_schema.jsonify(user)

@api_v1.route('/users/<id>', methods={'DELETE'})
def delet_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)