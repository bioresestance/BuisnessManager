from flask_wtf import FlaskForm
from wtforms import SubmitField, DateField, FloatField, FileField
from wtforms.validators import DataRequired


class InvoiceGenerateForm(FlaskForm):

    date = DateField("Invoice Date", validators=[DataRequired()])
    hours = FloatField("Hours to Bill", validators=[DataRequired()])
    rate = FloatField("Hourly Rate", validators=[DataRequired()])
    file = FileField("Append a file") # Optional
    submit = SubmitField("Generate")