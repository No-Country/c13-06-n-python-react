from marshmallow import Schema, fields
from marshmallow.validate import Length

class UserSchema(Schema):
    class Meta:
        fields = ('id', 'username', 'email')

class ParamsUserSchema(Schema):
    
    email = fields.Email(required=True)
    password = fields.Str(required=True, validate=Length(max=250))

user_schema = UserSchema()
users_schema = UserSchema(many=True)
params_user_schema = ParamsUserSchema()

class PatientSchema(Schema):
    class Meta:
        fields = ('id', 'name', 'last_name','dni', 'member', 'user_id')

class ParamsPatientSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True, validate=Length(max=250))
    name = fields.Str(required=True, validate=Length(max=70))
    last_name = fields.Str(required=True, validate=Length(max=100))
    dni = fields.Str(required=True, validate=Length(max=250))
    member = fields.Str(required=True, validate=Length(max=100))

patient_schema = PatientSchema()
patients_schema = PatientSchema(many=True)
params_patient_schema = ParamsPatientSchema()

class DoctorSchema(Schema):
    class Meta:
        fields = ('id', 'name', 'last_name','registration', 'speciality', 'active', 'user_id')

doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)

class MedicineSchema(Schema):
    class Meta:
        fields = ('id', 'medicine', 'tradename','presentation')

medicine_schema = MedicineSchema()
medicines_schema = MedicineSchema(many=True)

class PrescriptionSchema(Schema):
    class Meta:
        fields = ('id', 'medicine', 'tradename','presentation')

prescription_schema = PrescriptionSchema()
prescriptions_schema = PrescriptionSchema(many=True)