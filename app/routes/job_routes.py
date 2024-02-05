from flask import Flask, Blueprint, redirect, url_for, jsonify, request, render_template
from prisma import Client

job_routes = Blueprint("job_routes", __name__)
prisma = Client()

# Connect the Prisma client
prisma.connect()


# @job_routes.route("/", methods=["GET"])
# def home():
#     return render_template('/index.html')


# print("Creating post")


@job_routes.route("/jobs", methods=["GET"])
def job_list():
    jobs = prisma.job.find_many()
    return jsonify(jobs)

@job_routes.route('/about')
def about():
    return render_template('about.html')


@job_routes.route("/create_jobs", methods=["POST"])
def create_job():
    data = request.json
    job = prisma.job.create(
        title=data['title'],
        description=data['description'],
        responsibilities=data['responsibilities'],
        qualifications=data['qualifications'],
        employmentType=data['employmentType'],
        salaryRange=data['salaryRange'],
        location=data['location'],
        companyId=data['companyId']
    )
    return jsonify(job)


@job_routes.route("/")
def home():
    # Fetch job data from the database
    jobs = prisma.job.find_many()
    # Render HTML template and pass the job data
    return render_template('index.html', jobs=jobs)
