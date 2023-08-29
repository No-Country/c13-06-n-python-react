import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()
#engine = create_engine("mysql+pymysql://root:Fiamma10@localhost/digimed")
engine = create_engine(f"mysql+mysqlconnector://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASS')}@{os.getenv('MYSQL_HOST')}:{os.getenv('MYSQL_PORT')}/{os.getenv('DBNAME')}?ssl_ca=/etc/ssl/certs/ca-certificates.crt")
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = Session()