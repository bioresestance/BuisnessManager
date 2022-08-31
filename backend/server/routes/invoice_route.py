from flask import Blueprint, send_file
from flask_restx import Resource, Api, fields

from server.models import db, Client, Invoice
from server.utilities.Invoice_utils import (
    create_invoice,
)


invoice_route = Blueprint("Invoices", __name__)

api = Api(invoice_route)


def listAllClients():
    return [client.to_dict() for client in Client.query.all()]


@api.route("/")
class InvoiceRoute(Resource):
    def get(self):
        invoices = Invoice.query.all()

        if len(invoices) <= 0:
            return []

        # Create JSON to represent each file.
        data = []
        for invoice in invoices:
            data.append(invoice.to_dict())

        return data

    def post(self):
        return create_invoice(api.payload)


@api.route("/<id>")
class InvoiceIdRoute(Resource):
    def get(self, id: int):
        file: Invoice = Invoice.query.filter_by(id=id).first()

        if file == None:
            return "ERROR: That invoice does not exist", 404
        else:
            return send_file(
                file.file_path,
                attachment_filename=f"{file.client.client_name}_invoice_{file.id}.pdf",
                as_attachment=True,
            )

    def delete(self, id: int):
        invoice = Invoice.query.filter_by(id=id).first()

        if invoice != None:
            db.session.delete(invoice)
            db.session.commit()
            return "Invoice Deleted", 200
        else:
            return "That Invoice does not exist", 404


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
