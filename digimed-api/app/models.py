from datetime import datetime

from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text

# Clase base para crear modelos
class Base(DeclarativeBase):
    pass

# Modelo Usuarios
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer(), primary_key=True)
    username = Column(String(70), nullable=True)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(String(250), nullable=False)
    created_at = Column(DateTime(), default=datetime.now())

    #Override del metodo __repr__ para mostrar los datos del usuario
    def __repr__(self):
        return f"<User(id='{self.id}', username='{self.username}, email={self.email}, password={self.password}, created_at={self.created_at}')>"

# Modelo Paciente
class Patient(Base):
    __tablename__ = 'patients'

    id = Column(Integer(), primary_key=True)
    name = Column(String(70), nullable=True)
    last_name = Column(String(100), nullable=False)
    dni = Column(String(250), nullable=False)
    member = Column(String(100), nullable=False)
    profile_img = Column(Text, nullable=True)
    user_id = Column(Integer(), ForeignKey('users.id')) 

    #Override del metodo __repr__ para mostrar los datos del paciente
    def __repr__(self):
        return f"<Patient(id='{self.id}', name='{self.name}, last_name={self.last_name}, dni={self.dni}, menber={self.member}, user_id={self.user_id}')>"
    
# Modelo Medico
class Doctor(Base):
    __tablename__ = 'doctors'

    id = Column(Integer(), primary_key=True)
    name = Column(String(70), nullable=True)
    last_name = Column(String(100), nullable=False)
    registration = Column(String(100), nullable=False)
    speciality = Column(String(100), nullable=False)
    active = Column(Boolean(), default=False)
    user_id = Column(Integer(), ForeignKey('users.id'))

    #Override del metodo __repr__ para mostrar los datos del medico
    def __repr__(self):
        return f"<Doctor(id='{self.id}', name='{self.name}, last_name={self.last_name}, registration={self.registration}, speciality={self.speciality}, active={self.active}, user_id={self.user_id}')>"

# Modelo Medicamento
class Medicine(Base):
    __tablename__ = 'medicines'

    id = Column(Integer(), primary_key=True)
    medicine = Column(String(70), nullable=False)
    tradename = Column(String(70))
    presentation = Column(String(70), nullable=False)
    
    #Override del metodo __repr__ para mostrar los datos del medicamento
    def __repr__(self):
        return f"<Medicine(id='{self.id}', medicine='{self.medicine}', tradename='{self.tradename}', presentation='{self.presentation}')>"

# Modelo Recetas
class Prescription(Base):
    __tablename__ = 'prescriptions'

    id = Column(Integer(), primary_key=True)
    prescription_date = Column(DateTime(), nullable=True)
    signature = Column(Boolean(), default=False)
    patient_id = Column(Integer(), ForeignKey('patients.id'))
    doctor_id = Column(Integer(), ForeignKey('doctors.id'))
    medicine_id = Column(Integer(), ForeignKey('medicines.id'))
    created_at = Column(DateTime(), default=datetime.now())
    
    #Override del metodo __repr__ para mostrar los datos de la receta
    def __repr__(self):
        return f"<Prescription(id='{self.id}', prescription_date='{self.prescription_date}', signature='{self.signature}', patient_id='{self.patient_id}',doctor_id='{self.doctor_id}', medicine_id='{self.medicine_id}')>"