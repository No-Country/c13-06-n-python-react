class DevelopmentConfig():
    DEBUG = True
    #Conexion a la base de datos
    SQLALCHEMY_DATABASE_URI="mysql+pymysql://root:44PYurTpzd7eMmW@gateway01.us-west-2.prod.aws.tidbcloud.com"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

config = {
    'development':DevelopmentConfig,
}