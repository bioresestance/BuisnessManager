from os import environ
from os.path import exists
from os import mkdir
from dataclasses import dataclass, asdict, field, fields
from pathlib import Path
from typing import List
from dataclass_wizard import YAMLWizard

"""
Base Class for all setting group classes.
"""


class Setting(YAMLWizard):
    def update(self, new):
        for f in fields(self):
            setattr(self, f.name, getattr(new, f.name))

    def get_name(self):
        try:
            return self.common_name()
        except Exception as details:
            print("Error:", details)
        return None

    def common_name(self):
        raise Exception("Common Name is not implemented")


@dataclass
class GeneralSettings(Setting):
    def common_name(self):
        return "General Settings"

    title: str = field(
        default="Home Lab Supervisor",
        metadata={"name": "Website Title", "type": "text"},
    )
    main_color: int = field(
        default=0x47748B, metadata={"name": "Main Website Color", "type": "color"}
    )
    secondary_color: int = field(
        default=0xCDCDCD, metadata={"name": "Secondary Website Color", "type": "color"}
    )


@dataclass
class InvoiceSettings(Setting):
    def common_name(self):
        return "Invoice Settings"

    name: str = field(default=" ", metadata={"name": "Company Name", "type": "string"})
    logo_url: str = field(
        default=" ", metadata={"name": "Company Logo URL", "type": "url"}
    )
    address: str = field(
        default=" ", metadata={"name": "Company Address", "type": "address"}
    )
    phone: str = field(default=" ", metadata={"name": "Company Phone", "type": "phone"})
    email: str = field(default=" ", metadata={"name": "Company Email", "type": "email"})
    website: str = field(
        default=" ", metadata={"name": "Company Website", "type": "url"}
    )
    gst_num: str = field(
        default=" ", metadata={"name": "Company GST/HST Number", "type": "text"}
    )
    gst_rate: float = field(
        default=5.0, metadata={"name": "Company GST/HST Tax Rate", "type": "number"}
    )
    due_date: int = field(
        default=15, metadata={"name": "Invoice Due Date", "type": "number"}
    )


"""
Class that holds the configurations for the server.

Some of the values are gotten from ENV vars, while others
are gotten from the setting.yml file.

"""
_SECRET_KEY = environ.get("SERVER_SECRET_KEY")
_APP_ROOT = Path("/home/aaron/app")
_APP_CONFIG_FILE = "config.cfg"


@dataclass
class Configuration(Setting):

    config_data = [GeneralSettings(), InvoiceSettings()]

    def init(self):
        # First ensure the root user folder exists
        if not exists(_APP_ROOT):
            mkdir(_APP_ROOT)
        # Load any existing config file from disk.
        self.loadFromDisk()

    def asDict(self):

        ret_val = []

        for idx, data in enumerate(self.config_data):
            # Create the basic structure of the setting group
            data_dict = {"index": idx, "name": data.common_name(), "items": []}

            # Create list of formated items in each group.
            for item_idx, [key, value] in enumerate(asdict(data).items()):
                # Metadata of each field lists its name and type.
                meta = fields(data)[item_idx].metadata
                # Add the current item to the dictionaries items, all formated.
                data_dict["items"].append(
                    {
                        "key": key,
                        "value": value,
                        "common_name": meta["name"],
                        "type": meta["type"],
                    }
                )
            ret_val.append(data_dict)
        return ret_val

    def loadFromDisk(self):
        config_file = _APP_ROOT / _APP_CONFIG_FILE
        # First ensure the file even exists
        if exists(config_file):
            self.update(self.from_yaml_file(config_file))
        else:
            self.to_yaml_file(config_file)

    def saveToDisk(self):
        config_file = _APP_ROOT / _APP_CONFIG_FILE
        self.to_yaml_file(config_file)
