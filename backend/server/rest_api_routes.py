from flask import Blueprint, request, render_template, flash, redirect, url_for
from server import serverconfig

api_routes = Blueprint("front End", __name__)


@api_routes.route("/")
def home_route():
    return {"ping": "pong"}


@api_routes.route("/settings", methods=["POST", "GET"])
def settings_route():

    return serverconfig.asDict()
