from datetime import datetime
from glob import glob
from os import listdir, mkdir
from os.path import isfile, join, exists
from pydoc import doc
from lib.InvoiceGenerator import (
    BillableItem,
    Client,
    ClientInfo,
    Company,
    InvoiceGenerator,
)
from server.config import _APP_ROOT
from server import serverconfig
from server.models import db, Client as ClientDB, Invoice as InvoiceDB
from uuid import uuid4


_INVOICE_ROOT = _APP_ROOT / "invoices"


def create_invoice(jsonData):

    # Create the DB entry
    invoice = InvoiceDB(
        date=datetime.strptime(jsonData["date"], "%Y/%m/%d"),
        client_id=jsonData["client"],
        items=jsonData["items"],
    )

    # Create the invoice file
    invoice.file_path = generateInvoice(invoice)

    # Save the db entry to the db
    db.session.add(invoice)
    db.session.commit()

    return invoice.to_dict()


def generateInvoice(invoice):

    client: ClientDB = ClientDB.query.filter_by(id=invoice.client_id).first()

    company = Company(
        serverconfig.invoice.name,
        serverconfig.invoice.address,
        serverconfig.invoice.phone,
        serverconfig.invoice.email,
        serverconfig.invoice.website,
        serverconfig.invoice.gst_num,
    )

    clientInfo = ClientInfo(
        client.recipient,
        client.client_name,
        client.address,
        f"{client.city}, {client.province_state}, {client.area_code_zip}",
        client.phone,
    )

    items = []
    for item in invoice.items:
        items.append(
            BillableItem(
                item["description"], float(item["quantity"]), float(item["price"])
            )
        )

    invoice_num: int = invoice.id

    document = InvoiceGenerator(
        company=company,
        client=Client(clientInfo, clientInfo),
        tax_rate_percent=serverconfig.invoice.gst_rate,
        invoice_date=invoice.date,
        invoice_due_period=serverconfig.invoice.due_date,
        invoice_number=invoice_num,
    )

    file_name = _INVOICE_ROOT / f"{uuid4().hex}.pdf"
    print(file_name)

    document.create_default_document(
        billing_items=items,
        image_path=serverconfig.invoice.logo_url,
        output_file_name=file_name,
    )
    return str(file_name)
