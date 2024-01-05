from os import environ
from prisma import Prisma, register

class Config:
    # Server configuration
    PORT = environ.get('PORT', 5000)

    # Database configuration
    PRISMA = Prisma()

    # Auth configuration
    SECRET_KEY = environ.get('SECRET_KEY', 'secret-key')

    # Other configurations
    # ...

# Initialize Prisma client
Config.PRISMA.connect()
register(Config.PRISMA)

