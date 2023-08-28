from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://root:Fiamma10@localhost/digimed")
#engine = create_engine("mysql+pymysql://44PYurTpzd7eMmW.root:j7oSq00ENmJ4pq0v@gateway01.us-west-2.prod.aws.tidbcloud.com:4000/digimed?ssl_ca=/etc/ssl/certs/ca-certificates.crt")
Session = sessionmaker(bind=engine)
session = Session()