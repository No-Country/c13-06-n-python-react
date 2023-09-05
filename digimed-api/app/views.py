from flask import Blueprint, request, jsonify
from .models import User, Patient
from .db import session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, jwt_required

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
        access_token = create_access_token(identity=user.id)
        message = 'inicio correcto'
        return jsonify({
        'access_token':access_token,
        'user.id':user.id,
        'messages': message

        }),200
    else:
        return jsonify({
        'messages': message

        })
@api_v1.route('/user/<id>', methods={'GET'})
@jwt_required()
def get_user(id):
    user = session.query(User).filter(User.id==id).first()
    print(user)
    return jsonify({
            'id':user.id,
            'username':user.username,
            'email':user.email
        })
    
#get all patients
@api_v1.route('/patients', methods={'GET'})
@jwt_required()
def get_patients():
    patients = session.query(Patient).all()
    #convert patients to json array
    patients_json = []
    for patient in patients:
        patient_data = patient.__dict__
        del patient_data['_sa_instance_state']
        patients_json.append(patient_data)
    #return patients as json
    return jsonify(patients_json)

#get patient by id
@api_v1.route('/patients/<int:id>', methods={'GET'})
@jwt_required()
def get_patient_by_id(id):
    patient = session.query(Patient).filter(Patient.id == id).first()
    #convert patient to json
    patient_json = patient.__dict__
    del patient_json['_sa_instance_state']
    #return patient as json
    return jsonify(patient_json)
        
