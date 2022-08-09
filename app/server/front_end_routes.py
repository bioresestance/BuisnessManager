import imp
from flask import Blueprint, request, render_template, flash
from server import serverconfig
from server.forms import InvoiceGenerateForm
from lib.InvoiceGenerator.invoice_generator import InvoiceGenerator


fe_routes = Blueprint("front End", __name__)


@fe_routes.route("/")
def home_route():
    return render_template("index.html")


@fe_routes.route("/settings")
def settings_route():
    return render_template("settings.html", config=serverconfig._DEFAULT_SETTINGS)


@fe_routes.route("/invoices", methods=["GET", "POST"])
def settings_invoices():

    form = InvoiceGenerateForm()

    if form.is_submitted():
        print(form.date.data)
        if form.validate():
             flash("success", "success")
        else:
            flash("Error", "danger")
    return render_template("invoices.html", form=form)
