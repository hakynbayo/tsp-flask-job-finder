from flask_bcrypt import Bcrypt
from flask_jwt_extended import decode_token
from ..config import Config  

bcrypt = Bcrypt()

def authenticate(email, password):
    user = Config.PRISMA.user.find_unique(where={'email': email})
    if not user:
        return None

    is_match = bcrypt.check_password_hash(user.password, password)
    if not is_match:
        return None

    return user

def register_user(name, email, password):
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = Config.PRISMA.user.create(
        data = {
            'name': name,
            'email': email,
            'password': hashed_password,
        }
    )
    return new_user

# Checks that the user is logged in and has the correct id for the action they
# are trying to perform.
def authorize(id, token):
    if not token:
        return None
    try:
        data = decode_token(token)
        if int(id) != int(data['sub']['user']['id']):
            return False
        return True
    except Exception :
        return False
