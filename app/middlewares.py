from flask import session, g
from flask_session import Session
import os
from .config import Config

def setup_middlewares(app):
    app.config['SECRET_KEY'] = Config.SECRET_KEY
    app.config['SESSION_TYPE'] = 'filesystem'  # or any other session type as per requirement
    Session(app)
    app.before_request(session_message_middleware)

def session_message_middleware():
    err = session.pop('error', None)
    msg = session.pop('success', None)
    g.message = ''
    if err:
        g.message = f'<div class="alert alert-warning" role="alert">{err}</div>'
    if msg:
        g.message = f'<div class="alert alert-success" role="alert">{msg}</div>'
