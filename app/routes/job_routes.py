from flask import Blueprint, jsonify, request, render_template
from prisma import Client

job_routes = Blueprint("job_routes", __name__)
prisma = Client()

@job_routes.route("/", methods=["GET"])
def get_jobs():
    jobs = prisma.job.find_many()
    return jsonify(jobs)

@job_routes.route("/", methods=["POST"])
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

@job_routes.route("/index")
def job_listings():
    # Fetch job data from the database
    jobs = prisma.job.find_many()
    # Render HTML template and pass the job data
    return render_template('index.html', jobs=jobs)
