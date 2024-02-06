from flask import Flask, render_template
from prisma import Client
from job_routes import job_routes 

app = Flask(__name__)
prisma = Client()

# Connect the Prisma client
prisma.connect()

# Register the job_routes blueprint
app.register_blueprint(job_routes)

@app.route("/")
def home():
    # Fetch job data from the database
    jobs = prisma.job.find_many()
    # Render HTML template and pass the job data
    return render_template('index.html', jobs=jobs)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/testimonial')
def testimonial():
    return render_template('testimonial.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/joblist')
def joblist():
    return render_template('joblist.html')

@app.route('/job-detail')
def jobdetail():
    return render_template('job-detail.html')

@app.route('/job-apply')
def jobapply():
    return render_template('job-apply.html')

@app.route('/login')
def login():
    return render_template('login-page.html')

if __name__ == '__main__':
    app.run(debug=True)