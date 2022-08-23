from flask import Blueprint, jsonify, Response
from server import serverconfig
from flask_restx import Resource, Api, fields
from os import listdir, mkdir
from os.path import isfile, join, exists
from server.config import _APP_ROOT
from pathlib import Path

from server.models.clients import Client
from server.models import db


invoice_route = Blueprint("Invoices", __name__)

api = Api(invoice_route)


def listAllInvoices(path):
    if not exists(path):
        mkdir(path)
    return [f for f in listdir(path) if isfile(join(path, f))]


def listAllClients():
    return [client.to_dict() for client in Client.query.all()]


@api.route("/")
class InvoiceRoute(Resource):
    def get(self):
        return listAllInvoices(_APP_ROOT / "invoices")


@api.route("/clients")
class InvoiceClientsRoute(Resource):
    def get(self):
        return listAllClients()

    def post(self):
        print(api.payload)
        client = Client(**api.payload)
        db.session.add(client)
        db.session.commit()


@api.route("/new")
class InvoiceCreateRoute(Resource):
    def post(self):
        print(api.payload)
