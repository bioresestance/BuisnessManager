from server.models import db
from sqlalchemy_serializer import SerializerMixin


class Invoice(db.Model, SerializerMixin):

    serialize_rules = ("-client.invoices",)

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    items = db.Column(db.JSON, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
