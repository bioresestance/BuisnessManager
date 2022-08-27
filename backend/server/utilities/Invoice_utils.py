from lib.InvoiceGenerator import (
    BillableItem,
    Client,
    ClientInfo,
    Company,
    InvoiceGenerator,
)
from server import serverconfig
from server.models.clients import Client as ClientDB


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
        items.append(BillableItem(item["description"], item["quantity"], item["price"]))

    print(items)
