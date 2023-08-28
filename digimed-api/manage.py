from app import create_app
from config import config
from flask_sqlalchemy import SQLAlchemy

environment = config['development']
app = create_app(environment)

if __name__=='__main__':
    app.run()