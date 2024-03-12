"""Application configuration module."""
from os import environ
from prisma import Prisma, register
from flask_mail import Mail


# pylint: disable-next=R0903
class Config:
    """Set Flask configuration vars from .env file."""

    # Server configuration
    PORT = environ.get("PORT", 5000)

    # Database configuration
    PRISMA = Prisma()

    # Auth configuration
    SECRET_KEY = environ.get("SECRET_KEY", "secret-key")

    # Other configurations
    # Flask-Mail configuration
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587  # Use the appropriate port for your mail server
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'faith.abiola@kibo.school'
    MAIL_PASSWORD = 'ojpq mtnd cwch lexl'
    MAIL_DEFAULT_SENDER = 'faith.abiola@kibo.school'



# Initialize Prisma client
Config.PRISMA.connect()
register(Config.PRISMA)
