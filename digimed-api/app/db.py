from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://root:Fiamma10@localhost/nueva")

Session = sessionmaker(bind=engine)
session = Session()
