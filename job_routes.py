from flask import Flask, Blueprint, redirect, url_for, jsonify, request, render_template
from prisma import Client
from flask_mail import Mail, Message
from flask import current_app as app  # Import current_app


job_routes = Blueprint("job_routes", __name__, url_prefix="/app")
prisma = Client()

# Connect the Prisma client
prisma.connect()

# @job_routes.route('/api/jobs', methods=['GET'])
# def get_jobs():
#     try:
#         # Fetch job data from the database using Prisma Client
#         jobs = prisma.job.find_many(include={'company': True})
#         # print(f"Fetched {len(jobs)} jobs with company info")
#         # print(jobs)
#         job_data = []

#         for job in jobs:
#             company = job.company
#             if company is not None:
#                 job_data.append({
#                     'id': job.id,
#                     # Handle cases where company.logo is None
#                     'logo': company.logo if company.logo else '',
#                     'title': job.title,
#                     'location': job.location,
#                     'employmentType': job.employmentType,
#                     'salary': job.salaryRange,
#                     'description': job.description,
#                     'responsibilities': job.responsibilities,
#                     'qualifications': job.qualifications
#                 })

#         return jsonify(job_data)

#     except Exception as e:
#         # Log the exception details
#         print(f"Error fetching job data: {str(e)}")
#         return jsonify({'error': 'Internal Server Error'}), 500


@job_routes.route('/api/jobs', methods=['GET'])
def get_jobs():
    try:
        search_query = request.args.get('search', '')

        # Fetch job data from the database using Prisma Client
        jobs = prisma.job.find_many(
            where={'title': {'contains': search_query.lower()}}, include={'company': True})

        job_data = []

        for job in jobs:
            company = job.company
            if company is not None:
                # Check if the search query matches the job title
                if search_query.lower() in job.title.lower():
                    job_data.append({
                        'id': job.id,
                        # Handle cases where company.logo is None
                        'logo': company.logo if company.logo else '',
                        'title': job.title,
                        'location': job.location,
                        'employmentType': job.employmentType,
                        'salary': job.salaryRange,
                        'description': job.description,
                        'responsibilities': job.responsibilities,
                        'qualifications': job.qualifications
                    })

        return jsonify(job_data)

    except Exception as e:
        # Log the exception details
        print(f"Error fetching job data: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500


@job_routes.route('/job-detail/<int:job_id>')
def job_detail(job_id):
    try:
        # Fetch job data from the database based on the job ID
        job = prisma.job.find_unique(
            where={'id': job_id}, include={'company': True})

        if job:
            # Render HTML template and pass the job data
            return render_template('job-detail.html', job=job)
        else:
            # Handle the case where the job with the specified ID is not found
            return render_template('job-not-found.html')

    except Exception as e:
        # Log the exception details
        print(f"Error fetching job data: {str(e)}")
        return render_template('error.html'), 500


# Register the route with the updated endpoint name
job_routes.add_url_rule('/job-detail/<int:job_id>', 'job_detail', job_detail)

# Function to send an email to the applicant


def send_email(name, email, portfolio, cover_letter):
    subject = "Job Application Submitted"
    body = f"Dear {name},\n\nThank you for submitting your job application to our company. We have received your application and will review it shortly.\n\nBest regards,\nThe Hiring Team"

    # Access the mail instance from the app context
    mail = Mail(app)

    msg = Message(subject, recipients=[email], body=body)

    try:
        mail.send(msg)
        app.logger.info(f'Email sent to {email} for job application')
    except Exception as e:
        app.logger.error(f'Error sending email to {email}: {str(e)}')


@job_routes.route('/form-submission', methods=['POST'])
def handle_form_submission():

    try:

        # Log form data for debugging
        app.logger.info(f'Form Data: {request.form}')

        # Extract data from the form submission
        name = request.form.get('name')
        email = request.form.get('email')
        portfolio = request.form.get('portfolio', '')
        cover_letter = request.form.get('cover-letter', '')

        # Send an email to the applicant
        send_email(name, email, portfolio, cover_letter)

        # Return a JSON response (you can customize this based on your needs)
        return jsonify({'status': 'success', 'message': 'Application submitted successfully'})

    except Exception as e:
        # Log the exception details
        print(f"Error processing job application: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500


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


@job_routes.route('/error')
def error():
    return render_template('404.html')


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


@job_routes.route('/search')
def search():
    return render_template('search.html')
