from datetime import datetime

from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey

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

    #Override del metodo __repr__ para mostrar los datos del paciente
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
    user_id = Column(Integer(), ForeignKey('users.id')) 
    
    #Override del metodo __repr__ para mostrar los datos del paciente
    def __repr__(self):
        return f"<Patient(id='{self.id}', name='{self.name}, last_name={self.last_name}, dni={self.dni}, menber={self.member}, user_id={self.user_id}')>"