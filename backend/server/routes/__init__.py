from flask import Blueprint

from .settings_route import setting_routes
from .invoice_route import invoice_route


# Top Level route for Rest Api
api_routes = Blueprint("api_routes", __name__)

# Nest all individual routes under the api_route.
api_routes.register_blueprint(setting_routes, url_prefix="/settings")
api_routes.register_blueprint(invoice_route, url_prefix="/invoice")
