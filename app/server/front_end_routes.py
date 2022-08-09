import imp
from flask import Blueprint, request, render_template, flash
from server import serverconfig
from server.forms import InvoiceGenerateForm
from lib.InvoiceGenerator.invoice_generator import (
    InvoiceGenerator,
    BillableItem,
    Client,
    ClientInfo,
    Company,
)


fe_routes = Blueprint("front End", __name__)


@fe_routes.route("/")
def home_route():
    return render_template("index.html")


@fe_routes.route("/settings")
def settings_route():
    return render_template("settings.html", config=serverconfig._DEFAULT_SETTINGS)


test_company = Company(
    "XYZ Inc.",
    "123 Main St, Victoria, BC, Canada",
    "1-234-567-8910",
    "billing@xyz.ca",
    "www.xyz.ca",
    "123456789-RT01",
)
test_client_info = ClientInfo(
    "Bob Smith",
    "ABC Inc.",
    "321 Secondary St",
    "Victoria, BC, V4G 3D6, Canada",
    "1-234-567-8911",
)


@fe_routes.route("/invoices", methods=["GET", "POST"])
def settings_invoices():

    form = InvoiceGenerateForm()

    if form.is_submitted():
        print(form.date.data)
        if form.validate():
            flash("success", "success")
            billing = [
                BillableItem("Engineering Hours", form.hours.data, form.rate.data)
            ]

            document = InvoiceGenerator(
                client=Client(test_client_info, test_client_info),
                company=test_company,
                invoice_date=form.date.data,
            )

        document.add_image(
            "https://www.ajb-tech.ca/assets/photos/AJB-Tech-Logo-borders-transparent.png"
        )

        document.add_table(document.build_header())
        document.add_blank_line()
        document.add_table(document.build_billing_shipping())
        document.add_blank_line()
        document.add_table(document.build_items(billing))

        # document.embed_file("./pay.txt")

        document.generate("output.pdf")

    return render_template("invoices.html", form=form)
