from marshmallow import Schema, fields
from marshmallow.validate import Length

class UserSchema(Schema):
    class Meta:
        fields = ('id', 'username', 'email')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

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


class ParamsDoctorSchema(Schema):
    
    email = fields.Email(required=True)
    password = fields.Str(required=True, validate=Length(max=250))
    name = fields.Str(required=True, validate=Length(max=70))
    last_name = fields.Str(required=True, validate=Length(max=100))
    registration = fields.Str(required=True, validate=Length(max=100))
    speciality = fields.Str(required=True, validate=Length(max=100))
    active = fields.Bool(required=True)

doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)
params_doctor_schema = ParamsDoctorSchema()

class MedicineSchema(Schema):
    class Meta:
        fields = ('id', 'medicine', 'tradename','presentation')

class ParamsMedicineSchema(Schema):
    
    medicine = fields.Str(required=True, validate=Length(max=70))
    tradename = fields.Str( validate=Length(max=70))
    presentation = fields.Str(required=True, validate=Length(max=70))

medicine_schema = MedicineSchema()
medicines_schema = MedicineSchema(many=True)
params_medicine_schema = ParamsMedicineSchema()

class PrescriptionSchema(Schema):
    class Meta:
        fields = ('id', 'prescription_date', 'signature','patient_id', 'doctor_id', 'medicine_id')

class ParamsPrescriptionSchema(Schema):
    
    prescription_date = fields.Date(required=True)
    signature = fields.Bool(required=True)
    patient_id = fields.Int(required=True)
    doctor_id = fields.Int(required=True)
    medicine_id = fields.Int(required=True)


prescription_schema = PrescriptionSchema()
prescriptions_schema = PrescriptionSchema(many=True)
params_prescription_schema = ParamsPrescriptionSchema()