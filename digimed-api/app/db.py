from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql --comments --connect-timeout 15 -u '44PYurTpzd7eMmW.root' -h gateway01.us-west-2.prod.aws.tidbcloud.com -P 4000 -D digimed --ssl-ca=/etc/ssl/certs/ca-certificates.crt -pj7oSq00ENmJ4pq0v")
Session = sessionmaker(bind=engine)
session = Session()
