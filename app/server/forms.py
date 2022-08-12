from flask_wtf import FlaskForm
from wtforms import (
    SubmitField,
    DateField,
    FloatField,
    FileField,
    StringField,
    IntegerField,
)
from wtforms.widgets import ColorInput
from wtforms.validators import DataRequired

from server.config import GeneralSettings, InvoiceSettings


class InvoiceGenerateForm(FlaskForm):

    date = DateField("Invoice Date", validators=[DataRequired()])
    hours = FloatField("Hours to Bill", validators=[DataRequired()])
    rate = FloatField("Hourly Rate", validators=[DataRequired()])
    file = FileField("Append a file")  # Optional
    submit = SubmitField("Generate")


class GeneralSettingsForm(FlaskForm):
    def CommonName(self):
        return "General Settings"

    def __init__(self, settings: GeneralSettings = GeneralSettings()) -> None:
        super(GeneralSettingsForm, self).__init__()
        self.title.data = settings.title
        self.main_color.data = str(settings.main_color)
        self.secondary_color.data = str(settings.secondary_color)

    title = StringField("Website Title", validators=[DataRequired()])
    main_color = StringField(
        "Main Website Color", validators=[DataRequired()], widget=ColorInput()
    )
    secondary_color = StringField(
        "Secondary Website Color", validators=[DataRequired()], widget=ColorInput()
    )

    submit = SubmitField("Save")


class InvoiceSettings:
    def CommonName(self):
        return "Invoice Settings"

    name: str = " "
    address: str = " "
    phone: str = " "
    email: str = " "
    website: str = " "
    gst_num: str = " "
