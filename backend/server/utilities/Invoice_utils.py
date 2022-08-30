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


_INVOICE_ROOT = _APP_ROOT / "invoices"


def create_invoice(jsonData):
    print(jsonData)
    invoice = InvoiceDB(
        date=datetime.strptime(jsonData["date"], "%Y/%m/%d"),
        client_id=jsonData["client"],
        items=jsonData["items"],
    )

    db.session.add(invoice)
    db.session.commit()

    return invoice.to_dict()


def generateInvoice(data):
    print(data)

    client: ClientDB = ClientDB.query.filter_by(id=data["client"]).first()

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
    for item in data["items"]:
        items.append(
            BillableItem(
                item["description"], float(item["quantity"]), float(item["price"])
            )
        )

    invoice_num = get_next_invoice_number()

    document = InvoiceGenerator(
        company=company,
        client=Client(clientInfo, clientInfo),
        tax_rate_percent=serverconfig.invoice.gst_rate,
        invoice_date=datetime.strptime(data["date"], "%Y/%m/%d"),
        invoice_due_period=serverconfig.invoice.due_date,
        invoice_number=invoice_num,
    )

    document.create_default_document(
        billing_items=items,
        image_path=serverconfig.invoice.logo_url,
        output_file_name=_INVOICE_ROOT
        / f"invoice_{ client.client_name }_{invoice_num}.pdf",
    )


def find_invoice_by_id(id: int):
    files = glob(str(_INVOICE_ROOT) + f"/invoice_*_{id}.pdf")
    if len(files) >= 1:
        return files[0]
    else:
        return None
