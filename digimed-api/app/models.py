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

    def __str__(self):
       return self.email

# Modelo Paciente
class Patient(Base):
    __tablename__ = 'patients'

    id = Column(Integer(), primary_key=True)
    name = Column(String(70), nullable=True)
    last_name = Column(String(100), nullable=False, unique=True)
    dni = Column(String(250), nullable=False)
    member = Column(String(100), nullable=False, unique=True)
    user_id = Column(Integer(), ForeignKey('users.id')) 

    def __str__(self):
       return f'{self.name}, {self.last_name}'