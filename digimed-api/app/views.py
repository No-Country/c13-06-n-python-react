from flask import Blueprint, request, jsonify
from .models import User, Patient
from .db import session
from werkzeug.security import check_password_hash, generate_password_hash

api_v1 = Blueprint('api', __name__, url_prefix='/api/v1')

@api_v1.route('/register', methods={'POST'})
def create_patient():
    
    name = request.json['name']
    last_name = request.json['last_name']
    dni = request.json['dni']
    member = request.json['member']
    username = name + ' ' + last_name
    email = request.json['email']
    password = request.json['password']
    
    user = session.query(User).filter(User.email == email).first()
    
    if user is None:
        new_user = User(username=username, email=email, password=generate_password_hash(password))
        session.add(new_user)
        session.commit()
        user = session.query(User).filter(User.email==email).first()
        new_patient = Patient(name=name, last_name=last_name, dni=dni, member=member, user_id=user.id)
        session.add(new_patient)
        session.commit()
        message = 'Paciente creado correctamente'
    else:
        message = 'Ese mail ya esta registrado'

    return jsonify({
        'messages': message

        })

@api_v1.route('/login', methods={'POST'})
def login():
    email = request.json['email']
    password = request.json['password']
    message = None

    user = session.query(User).filter(User.email == email).first()
    
    if user is None:
        message = 'El correo no se encuentra registrado'
    elif not check_password_hash(user.password, password):
        message = 'La contraseña es incorrecta'
    
    if message is None:
        message = 'inicio correcto'
        return f'{message}'
    else:
        return f'{message}'