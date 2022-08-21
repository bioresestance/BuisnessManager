from server.models import db


class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_name = db.Column(db.String(50), unique=True, nullable=False)
    recipient = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    province_state = db.Column(db.String(30), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    area_code_zip = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(80))
