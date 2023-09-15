from flask import Blueprint, request, jsonify
from .models import User, Patient, Doctor, Medicine, Prescription
from .db import Session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .schemas import user_schema, users_schema
from .schemas import patient_schema, patients_schema, params_patient_schema
from .schemas import doctor_schema, doctors_schema, params_doctor_schema
from .schemas import medicine_schema, medicines_schema, params_medicine_schema
from .schemas import prescription_schema, prescriptions_schema, params_prescription_schema
from .responses import response, not_found, bad_request

api_v1 = Blueprint('api', __name__, url_prefix='/api/v1')

# Registrar un nuevo paciente
@api_v1.route('/register', methods={'POST'})
def create_patient():
    try:
        session = Session()
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
    except Exception as e:
        return bad_request(e)
    finally:
        session.close()
# Realizar el login
@api_v1.route('/login', methods={'POST'})
def login():
    try:
        session = Session()
        email = request.json['email']
        password = request.json['password']
        message = None

        user = session.query(User).filter(User.email == email).first()
        
        if user is None:
            error=404
            message = 'El correo no se encuentra registrado'
        elif not check_password_hash(user.password, password):
            error = 401
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
            }),error
    except Exception as e:
        return bad_request(e)
    finally:
        session.close()

#Obtemer usuario por id
@api_v1.route('/user/<id>', methods={'GET'})
@jwt_required()
def get_user(id):
    try:
        session = Session()
        user = session.query(User).filter(User.id==id).first()
        patient = session.query(Patient).filter(Patient.user_id==id).first()
        if user is None:
            return not_found()
        
        return jsonify({
            'user': user_schema.dump(user),
            'patient': patient_schema.dump(patient)
        })
    except Exception as e:
        return bad_request(e)
    
    
#Mostrar todos los pacientes
@api_v1.route('/patients', methods={'GET'})
@jwt_required()
def get_patients():
    try:
        session = Session()
        patients = session.query(Patient).all()
        return response(patients_schema.dump(patients))
    except Exception as e:
        return bad_request(e)

#Mostrar pacientes por id
@api_v1.route('/patients/<int:id>', methods={'GET'})
@jwt_required()
def get_patient_by_id(id):
    try:
        session = Session()
        patient = session.query(Patient).filter(Patient.id == id).first()

        if patient is None:
            return not_found()
        
        return response(patient_schema.dump(patient))
    except Exception as e:
        return bad_request(e)

#Actualizar datos del paciente
@api_v1.route('/patients/<int:id>', methods={'PUT'})
@jwt_required()
def update_patient(id):
    try:
        session = Session()
        json = request.get_json(force=True)   
        patient = session.query(Patient).filter(Patient.id == id).first()

        if patient is None:
            return not_found()
        
        patient.name = json['name']
        patient.last_name = json['last_name']
        patient.dni = json['dni']
        patient.profile_img = json['profile_img']
        session.commit()
        
        return response(patient_schema.dump(patient))
    except Exception as e:
        return bad_request(e)

#Registra un nuevo Doctor
@api_v1.route('/register/doctor', methods={'POST'})
def create_doctor():
    try:
        session = Session()
        json = request.get_json(force=True)
        error = params_doctor_schema.validate(json)
        
        if error:
            return bad_request(error)
        
        user = session.query(User).filter(User.email == json['email']).first()
        
        if user is None:
            new_user = User(username=json['name']+' '+json['last_name'], email=json['email'], password=generate_password_hash(json['password']))
            session.add(new_user)
            session.commit()

            user = session.query(User).filter(User.email==json['email']).first()
            new_doctor = Doctor(name=json['name'], last_name=json['last_name'], registration=json['registration'], speciality=json['speciality'], active=json['active'], user_id=user.id)
            session.add(new_doctor)
            session.commit()
            
        else:
            return bad_request('Ese mail ya esta registrado') 

        return response(doctor_schema.dump(new_doctor))
    except Exception as e:
        return bad_request(e)
    

#Ingresar una nueva medicina
@api_v1.route('/register/medicine', methods={'POST'})
@jwt_required()
def create_medicine():
    try:
        session = Session()
        json = request.get_json(force=True)
        error = params_medicine_schema.validate(json)
        if error:
            return bad_request(error)

        new_medicine = Medicine(medicine=json['medicine'], tradename=json['tradename'], presentation=json['presentation'])
        session.add(new_medicine)
        session.commit()
        return response(medicine_schema.dump(new_medicine))
    except Exception as e:
        return bad_request(e)

#Mostrar Doctores
@api_v1.route('/doctors', methods={'GET'})
@jwt_required()
def get_doctors():
    try:
        session = Session()
        doctors = session.query(Doctor).all()
        return response(doctors_schema.dump(doctors))
    except Exception as e:
        return bad_request(e)

#Mostrar doctores por id
@api_v1.route('/doctors/<int:id>', methods={'GET'})
@jwt_required()
def get_doctor_by_id(id):
    try:
        session = Session()
        doctor = session.query(Doctor).filter(Doctor.id == id).first()

        if doctor is None:
            return not_found()
        
        return response(doctor_schema.dump(doctor))
    except Exception as e:
        return bad_request(e)
    
#Mostrar medicinas
@api_v1.route('/medicines', methods={'GET'})
@jwt_required()
def get_medicines():
    try:
        session = Session()
        medicines = session.query(Medicine).all()
        return response(medicines_schema.dump(medicines))
    except Exception as e:
        return bad_request(e)

#Mostrar pacientes por id
@api_v1.route('/medicines/<int:id>', methods={'GET'})
@jwt_required()
def get_medicine_by_id(id):
    try:
        session = Session()
        medicine = session.query(Medicine).filter(Medicine.id == id).first()

        if medicine is None:
            return not_found()
        
        return response(medicine_schema.dump(medicine))
    except Exception as e:
        return bad_request(e)

#Crear nueva Receta
@api_v1.route('/prescription', methods={'POST'})
@jwt_required()
def create_prescription():
    try:
        session = Session()
        json = request.get_json(force=True)
        error = params_prescription_schema.validate(json)
        if error:
            return response(error)

        new_prescription = Prescription(prescription_date=json['prescription_date'], patient_id=json['patient_id'], doctor_id=json['doctor_id'], medicine_id=json['medicine_id'], signature=json['signature'])
        session.add(new_prescription)
        session.commit()
        return response(prescription_schema.dump(new_prescription))
    except Exception as e:
        return bad_request(e)

#Mostrar receta por paciente
@api_v1.route('/prescription/patient/<int:id>', methods={'GET'})
@jwt_required()
def get_prescription_by_patient_id(id):
    try:
        session = Session()
        prescriptions = session.query(Prescription).filter(Prescription.patient_id == id)

        if prescriptions is None:
            return not_found()
        
        return response(prescriptions_schema.dump(prescriptions))
    except Exception as e:
        return bad_request(e)

#Mostrar receta por id
@api_v1.route('/prescription/<int:id>', methods={'GET'})
@jwt_required()
def get_prescription_by_id(id):
    try:
        session = Session()
        prescription = session.query(Prescription).filter(Prescription.id == id).first()

        if prescription is None:
            return not_found()
        
        return response(prescription_schema.dump(prescription))
    except Exception as e:
        return bad_request(e)
