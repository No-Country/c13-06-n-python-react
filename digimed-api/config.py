import os

class DevelopmentConfig():
    DEBUG = True
    JWT_SECRET_KEY = f'{os.getenv("JWT_SECRET_KEY")}'
config = {
    'development':DevelopmentConfig,
}