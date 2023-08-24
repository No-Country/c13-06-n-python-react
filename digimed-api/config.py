class DevelopmentConfig():
    DEBUG = True
    #Conexion a la base de datos
    SQLALCHEMY_DATABASE_URI=''
    SQLALCHEMY_TRACK_MODIFICATIONS = False

config = {
    'development':DevelopmentConfig,
}