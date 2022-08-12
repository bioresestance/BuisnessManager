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


class InvoiceGenerateForm(FlaskForm):

    date = DateField("Invoice Date", validators=[DataRequired()])
    hours = FloatField("Hours to Bill", validators=[DataRequired()])
    rate = FloatField("Hourly Rate", validators=[DataRequired()])
    file = FileField("Append a file")  # Optional
    submit = SubmitField("Generate")


class GeneralSettingsForm(FlaskForm):
    def CommonName(self):
        return "General Settings"

    def __init__(self, settings) -> None:
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

    def __repr__(self) -> str:
        return f"GeneralSettingsForm(title:{self.title.data})"


class InvoiceSettingsForm(FlaskForm):
    def CommonName(self):
        return "Invoice Settings"

    name: str = StringField("Company Name", validators=[DataRequired()])
    address: str = StringField("Company Address", validators=[DataRequired()])
    phone: str = StringField("Company Phone Number", validators=[DataRequired()])
    email: str = StringField("Company Email", validators=[DataRequired()])
    website: str = StringField("Company Website", validators=[DataRequired()])
    gst_num: str = StringField("Company GST Number", validators=[DataRequired()])

    submit = SubmitField("Save")

    def __repr__(self) -> str:
        return f"InvoiceSettingsForm(title:{self.name.data})"
