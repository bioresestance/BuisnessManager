from flask import Blueprint, jsonify, Response
from server import serverconfig
from flask_restx import Resource, Api


invoice_route = Blueprint("Invoices", __name__)

api = Api(invoice_route)


@api.route("/")
class InvoiceRoute(Resource):
    def get(self):
        return "Success"
