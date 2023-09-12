from flask import Blueprint, request, jsonify
from .models import User, Patient, Doctor, Medicine, Prescription
from .db import session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .schemas import user_schema, users_schema, params_user_schema
from .schemas import patient_schema, patients_schema, params_patient_schema
from .schemas import doctor_schema, doctors_schema
from .schemas import medicine_schema, medicines_schema
from .schemas import prescription_schema, prescriptions_schema
from .responses import response, not_found, bad_request

api_v1 = Blueprint('api', __name__, url_prefix='/api/v1')

# Registrar un nuevo paciente
@api_v1.route('/register', methods={'POST'})
def create_patient():
    
    json = request.get_json(force=True)
    error = params_patient_schema.validate(json)
    if error:
        return bad_request(error)
    
    user = session.query(User).filter(User.email == json['email']).first()
    
    if user is None:
        new_user = User(username=json['name']+' '+json['last_name'], email=json['email'], password=generate_password_hash(json['password']))
        session.add(new_user)
        session.commit()
    
        user = session.query(User).filter(User.email==json['email']).first()
        new_patient = Patient(name=json['name'], last_name=json['last_name'], dni=json['dni'], member=json['member'], user_id=user.id)
        session.add(new_patient)
        session.commit()
    else:
        return  bad_request('Ese mail ya esta registrado')

    return response(patient_schema.dump(new_patient))

# Realizar el login
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

#Obtemer usuario por id
@api_v1.route('/user/<id>', methods={'GET'})
@jwt_required()
def get_user(id):
    user = session.query(User).filter(User.id==id).first()

    if user is None:
        return not_found()
    
    return response(user_schema.dump(user))
    
#Mostrar todos los pacientes
@api_v1.route('/patients', methods={'GET'})
@jwt_required()
def get_patients():
    patients = session.query(Patient).all()
    return response(patients_schema.dump(patients))

#Mostrar pacientes por id
@api_v1.route('/patients/<int:id>', methods={'GET'})
@jwt_required()
def get_patient_by_id(id):
    patient = session.query(Patient).filter(Patient.id == id).first()

    if patient is None:
        return not_found()
    
    return response(patient_schema.dump(patient))

#Registra un nuevo Doctor
@api_v1.route('/register/doctor', methods={'POST'})
def create_doctor():
    
    name = request.json['name']
    last_name = request.json['last_name']
    registration = request.json['registration']
    speciality = request.json['speciality']
    active = request.json['active']
    username = name + ' ' + last_name
    email = request.json['email']
    password = request.json['password']
    
    user = session.query(User).filter(User.email == email).first()
    
    if user is None:
        new_user = User(username=username, email=email, password=generate_password_hash(password))
        session.add(new_user)
        session.commit()
        user = session.query(User).filter(User.email==email).first()
        new_doctor = Doctor(name=name, last_name=last_name, registration=registration, speciality=speciality, active=active, user_id=user.id)
        session.add(new_doctor)
        session.commit()
        message = 'Doctor creado correctamente'
    else:
        message = 'Ese mail ya esta registrado'

    return jsonify({
        'messages': message
    })

#Ingresar una nueva medicina
@api_v1.route('/register/medicine', methods={'POST'})
@jwt_required()
def create_medicine():
    medicine = request.json['medicine']
    tradename = request.json['tradename']
    presentation = request.json['presentation']

    new_medicine = Medicine(medicine=medicine, tradename=tradename, presentation=presentation)
    session.add(new_medicine)
    session.commit()
    return jsonify({
        'messages': 'Medicamento creado correctamente'
    })

#Mostrar Doctores
@api_v1.route('/doctors', methods={'GET'})
@jwt_required()
def get_doctors():
    doctors = session.query(Doctor).all()
    return response(doctors_schema.dump(doctors))

#Mostrar doctores por id
@api_v1.route('/doctors/<int:id>', methods={'GET'})
@jwt_required()
def get_doctor_by_id(id):
    doctor = session.query(Doctor).filter(Doctor.id == id).first()

    if doctor is None:
        return not_found()
    
    return response(doctor_schema.dump(doctor))
    
#Mostrar medicinas
@api_v1.route('/medicines', methods={'GET'})
@jwt_required()
def get_medicines():
    medicines = session.query(Medicine).all()
    return response(medicines_schema.dump(medicines))

#Mostrar pacientes por id
@api_v1.route('/medicines/<int:id>', methods={'GET'})
@jwt_required()
def get_medicine_by_id(id):
    medicine = session.query(Medicine).filter(Medicine.id == id).first()

    if medicine is None:
        return not_found()
    
    return response(medicine_schema.dump(medicine))

#Crear nueva Receta
@api_v1.route('/prescription', methods={'POST'})
@jwt_required()
def create_prescription():
    
    prescription_date = request.json['prescription_date']
    signature = True
    patient_id = get_jwt_identity()
    doctor_id = request.json['doctor_id']
    medicine_id = request.json['medicine_id']

    new_prescription = Prescription(prescription_date=prescription_date, patient_id=patient_id, doctor_id=doctor_id, medicine_id=medicine_id, signature=signature)
    session.add(new_prescription)
    session.commit()
    return jsonify({
        'message':'Receta creada corectamente'
    })

#Mostrar receta por paciente
@api_v1.route('/prescription/patient/<int:id>', methods={'GET'})
@jwt_required()
def get_prescription_by_patient_id(id):
    prescriptions = session.query(Prescription).filter(Prescription.patient_id == id)

    if prescriptions is None:
        return not_found()
    
    return response(prescriptions_schema.dump(prescriptions))

#Mostrar receta por id
@api_v1.route('/prescription/<int:id>', methods={'GET'})
@jwt_required()
def get_prescription_by_id(id):
    prescription = session.query(Prescription).filter(Prescription.id == id).first()

    if prescription is None:
        return not_found()
    
    return response(prescription_schema.dump(prescription))