from flask import Blueprint, request, render_template
from . import serverconfig


fe_routes = Blueprint("front End", __name__)


@fe_routes.route("/")
def home_route():
    return render_template("index.html")


@fe_routes.route("/settings")
def settings_route():
    return render_template("settings.html", config=serverconfig._DEFAULT_SETTINGS)