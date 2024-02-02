
import asyncio
from prisma import Prisma

client = Prisma()
client.connect()

userData = [
    {
        'name': 'Alice',
        'email': 'alice@prisma.io',
        'password': 'password123',
    },
    {
        'name': 'Nilu',
        'email': 'nilu@prisma.io',
        'password': 'qazwsx123',
    },
    {
        'name': 'Mahmoud',
        'email': 'mahmoud@prisma.io',
        'password': 'password456',
    },
]

def seed_jobs(client):
    jobs_data = [
        {
            "title": "Software Engineer",
            "description": "Developing and maintaining software applications.",
            "responsibilities": "Write clean, maintainable code.",
            "qualifications": "Bachelor's degree in Computer Science, etc.",
            "employmentType": "Full Time",
            "salaryRange": "N123 - N456",
            "location": "San Francisco, CA",
            "companyId": 1
        },
        {
            "title": "Data Scientist",
            "description": "Analyzing large datasets and deriving insights.",
            "responsibilities": "Analyze data, build models.",
            "qualifications": "Master's degree in Data Science, etc.",
            "employmentType": "Part Time",
            "salaryRange": "N789 - N1011",
            "location": "New York, NY",
            "companyId": 2
        },
        {
            "title": "Marketing Manager",
            "description": "Creating and executing marketing campaigns.",
            "responsibilities": "Develop marketing strategies.",
            "qualifications": "Bachelor's degree in Marketing, etc.",
            "employmentType": "Full Time",
            "salaryRange": "N1213 - N1415",
            "location": "London, UK",
            "companyId": 3
        }
    ]

    for job_data in jobs_data:
        client.job.create(**job_data)
        

async def fetch_jobs():
    jobs = await client.job.find_many()  # Fetches all jobs from the database
    jobs_data = []

    for job in jobs:  
        job_data = {
            "title": job.title,
            "location": job.location,
            "employmentType": job.employmentType,
            "salaryRange": job.salaryRange,
            "description": job.description,
            "responsibilities": job.responsibilities,
            "qualifications": job.qualifications,
            "company": {
                "id": job.company.id,
            },
        }
        jobs_data.append(job_data)  

    return jobs_data

if __name__ == "__main__":
    asyncio.run(seed_jobs(client))
