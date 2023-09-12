from marshmallow import Schema

class UserSchema(Schema):
    class Meta:
        fields = ('id', 'username', 'email')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class PatientSchema(Schema):
    class Meta:
        fields = ('id', 'name', 'last_name','dni', 'member', 'user_id')

patient_schema = PatientSchema()
patients_schema = PatientSchema(many=True)

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