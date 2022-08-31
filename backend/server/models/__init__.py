from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

from .invoices import Invoice
from .clients import Client
