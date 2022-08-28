from flask import Blueprint, jsonify, Response
from server import serverconfig
from flask_restx import Resource, Api, fields
from os import listdir, mkdir
from os.path import isfile, join, exists
from server.config import _APP_ROOT
from pathlib import Path

from server.models.clients import Client
from server.models import db
from server.utilities.Invoice_utils import generateInvoice, get_all_invoices


invoice_route = Blueprint("Invoices", __name__)

api = Api(invoice_route)


def listAllClients():
    return [client.to_dict() for client in Client.query.all()]


@api.route("/")
class InvoiceRoute(Resource):
    def get(self):
        return get_all_invoices()

    def post(self):
        generateInvoice(api.payload)
        return {"id": 1}


@api.route("/clients")
class InvoiceClientsRoute(Resource):
    # Gets all Clients.
    def get(self):
        return listAllClients()

    # Create a new Client.
    def post(self):
        print(api.payload)
        client = Client(**api.payload)
        db.session.add(client)
        db.session.commit()


## Client access by ID.
@api.route("/clients/<id>")
class InvoiceClientRoute(Resource):
    def get(self, id: int):
        client = Client.query.filter_by(id=id).first()

        if client != None:
            return client.to_dict()
        else:
            return "That Client does not exist", 404

    def delete(self, id):
        client = Client.query.filter_by(id=id).first()

        if client != None:
            db.session.delete(client)
            db.session.commit()
            return "Client Deleted", 200
        else:
            return "That Client does not exist", 404

    def put(self, id):
        client = Client.query.filter_by(id=id).first()

        if client != None:
            client.update(api.payload)
            db.session.commit()
            return client.to_dict(), 200
        else:
            return "That Client does not exist", 404
