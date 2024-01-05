from flask import Blueprint, request, redirect, render_template, session, make_response, url_for
from flask_jwt_extended import create_access_token

from app.utils.auth import authenticate, register_user
from app.config import Config

prisma = Config.PRISMA

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/login', methods=['GET'])
def login():
    return render_template('login.html', showLogout=False)

@auth_routes.route('/login', methods=['POST'])
def login_post():
    user = authenticate(request.form['email'], request.form['password'])
    if user:
        session.clear()
        session['success'] = 'Authenticated as {} click to <a href="/logout">logout</a>.'.format(user.name)
        token = create_access_token(identity={'user': {'id': user.id}})
        resp = make_response(redirect(url_for('user.user_posts', id=user.id)))
        resp.set_cookie('access_token', token, httponly=True, max_age=60*60)
        return resp
    else:
        session['error'] = 'Authentication failed, please check your email and password.'
        return redirect('/login')

@auth_routes.route('/logout', methods=['GET'])
def logout():
    session.clear()
    resp = make_response(redirect('/'))
    resp.delete_cookie('access_token')
    return resp

@auth_routes.route('/register', methods=['GET'])
def register():
    return render_template('register.html', showLogout=False)

@auth_routes.route('/register', methods=['POST'])
def register_post():
    email = request.form['email']
    existing_user = prisma.user.find_unique(where={'email': email})

    if existing_user:
        session['error'] = 'Registration failed, email already exists.'
        return redirect('/register')
    else:
        register_user(request.form['name'], email, request.form['password'])
        session['error'] = 'Registration Successful, please login.'
        return redirect('/login')