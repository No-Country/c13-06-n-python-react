from app import create_app
from config import config
from app import db
from app.models import Base
from gevent.pywsgi import WSGIServer

environment = config['development']
app = create_app(environment)

if __name__=='__main__':
    Base.metadata.create_all(db.engine)
    #app.run(host='0.0.0.0')
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()