from flask import Blueprint, request, render_template, abort
from app.utils.auth import authorize
from app.config import Config

prisma = Config.PRISMA

user_routes = Blueprint('user', __name__)

@user_routes.route('/<int:id>/posts')
def user_posts(id):
    if authorize(id, request.cookies.get('access_token')):
        author = prisma.user.find_unique(where={'id': id})
        if author:
            posts = prisma.post.find_many(where={'authorId': id})
            return render_template('posts.html', showLogout=True, author=author, posts=posts)
        else:
            return "User not found", 404
    else:
        abort(403)
