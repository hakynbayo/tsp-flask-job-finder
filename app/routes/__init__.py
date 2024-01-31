from flask import Flask, render_template
from prisma import Client
from job_routes import job_routes  # Import the job_routes blueprint

app = Flask(__name__)
prisma = Client()

# Register the job_routes blueprint
app.register_blueprint(job_routes)

if __name__ == '__main__':
    app.run(debug=True)