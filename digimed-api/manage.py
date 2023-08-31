from app import create_app
from config import config
from app import db
from app.models import Base

environment = config['development']
app = create_app(environment)

if __name__=='__main__':
    Base.metadata.create_all(db.engine)
    app.run()