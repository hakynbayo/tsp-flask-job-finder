from flask import Flask, Blueprint, redirect, url_for, jsonify, request, render_template
from prisma import Client

job_routes = Blueprint ("job_routes", __name__, url_prefix="/app")
prisma = Client()

# Connect the Prisma client
prisma.connect()


@job_routes.route('/about')
def about():
    return render_template('about.html')

@job_routes.route('/testimonial')
def testimonial():
    return render_template('testimonial.html')

@job_routes.route('/contact')
def contact():
    return render_template('contact.html')


@job_routes.route('/joblist')
def joblist():
    return render_template('joblist.html')

@job_routes.route("/")
def home():
    # Fetch job data from the database
    jobs = prisma.job.find_many()
    # Render HTML template and pass the job data
    return render_template('index.html', jobs=jobs)

@job_routes.route('/job-detail')
def jobdetail():
    return render_template('job-detail.html')

@job_routes.route('/job-apply')
def jobapply():
    return render_template('job-apply.html')

@job_routes.route('/login')
def login():
    return render_template('login-page.html')

