

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Accordion
   

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("active");
}

// const data = [
//     { logo: 'static/img/com-logo-1.jpg', position: 'Software Engineer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-2.jpg', position: 'Marketing Manager', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-3.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-4.jpg', position: 'WordPress Developer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-5.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-3.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-2.jpg', position: 'Marketing Manager', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
//     { logo: 'static/img/com-logo-5.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },

// ];

const data = [
    {
        logo: 'static/img/com-logo-1.jpg',
        position: 'Software Engineer',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are seeking a skilled Software Engineer to join our dynamic team. In this role, you will be responsible for developing, testing, and maintaining high-quality software applications. If you are passionate about technology and enjoy working in a collaborative environment, we would love to hear from you!`,
        responsibilities: [
            'Design and implement software solutions',
            'Collaborate with cross-functional teams to define, design, and ship new features',
            'Troubleshoot, debug, and optimize application performance',
            'Stay up-to-date with emerging technologies and industry trends',
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field',
            'Proven experience as a Software Engineer',
            'Proficient in one or more programming languages (e.g., Python, Java, JavaScript)',
            'Strong problem-solving and communication skills',
        ],
        companyDetail: `Our company is a leading technology firm dedicated to creating innovative solutions that empower businesses. We foster a collaborative and inclusive work environment, encouraging continuous learning and professional growth.`,
    },

    {
        logo: 'static/img/com-logo-2.jpg',
        position: 'Cybersecurity Analyst',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N140 - N480',
        jobDescription: `Join our cybersecurity team as a Cybersecurity Analyst and play a crucial role in protecting our organization from cyber threats. As a Cybersecurity Analyst, you will assess security vulnerabilities, implement security measures, and respond to security incidents. If you have a strong understanding of cybersecurity principles and a commitment to keeping data secure, we welcome your expertise!`,
        responsibilities: [
            'Conduct regular security assessments and risk analysis',
            'Implement and manage security measures, including firewalls and encryption protocols',
            'Monitor security incidents and respond to breaches',
            'Stay updated on emerging cybersecurity threats and technologies',
        ],
        qualifications: [
            'Bachelor\'s degree in Cybersecurity, Information Technology, or related field',
            'Proven experience as a Cybersecurity Analyst',
            'Knowledge of cybersecurity frameworks and standards',
            'Certifications such as CISSP, CompTIA Security+, or CEH are a plus',
        ],
        companyDetail: `Our company is dedicated to maintaining the highest standards of cybersecurity to ensure the safety and confidentiality of our data. Join us in the fight against cyber threats!`,
    },

    {
        logo: 'static/img/com-logo-3.jpg',
        position: 'Marketing Manager',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are looking for an experienced Marketing Manager to join our team. In this role, you will be responsible for developing and executing marketing strategies to drive business growth. If you have a creative mindset and a proven track record in marketing, we want to hear from you!`,
        responsibilities: [
            'Develop and implement marketing plans and campaigns',
            'Analyze market trends and competitors to identify opportunities',
            'Manage and coordinate marketing projects and events',
            'Collaborate with cross-functional teams to achieve marketing goals',
        ],
        qualifications: [
            'Bachelor\'s degree in Marketing or related field',
            'Proven experience in marketing roles',
            'Excellent communication and interpersonal skills',
            'Creative and strategic thinking',
        ],
        companyDetail: `Our company is a leading marketing agency committed to delivering exceptional results for our clients. We value innovation and teamwork, providing our employees with opportunities for professional development.`,
    },

    {
        logo: 'static/img/com-logo-4.jpg',
        position: 'Data Scientist',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are seeking an experienced Data Scientist to join our data analytics team. In this role, you will be responsible for analyzing complex datasets to extract valuable insights and support data-driven decision-making. If you have a strong background in data science and a passion for solving challenging problems, we want to hear from you!`,
        responsibilities: [
            'Develop and implement machine learning models',
            'Analyze large datasets to identify trends and patterns',
            'Collaborate with cross-functional teams on data-related projects',
            'Present findings and insights to stakeholders',
        ],
        qualifications: [
            'Master\'s or Ph.D. in Data Science, Statistics, or related field',
            'Proven experience as a Data Scientist',
            'Strong programming skills (Python, R, etc.)',
            'Excellent analytical and problem-solving abilities',
        ],
        companyDetail: `Our company is a leading data-driven organization dedicated to harnessing the power of data for business success. We provide a collaborative and innovative work environment for our employees.`,
    },

    {
        logo: 'static/img/com-logo-5.jpg',
        position: 'UX/UI Designer',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are looking for a creative and detail-oriented UX/UI Designer to join our design team. In this role, you will be responsible for creating visually appealing and user-friendly interfaces. If you have a passion for design and a strong portfolio showcasing your work, we would love to hear from you!`,
        responsibilities: [
            'Create wireframes, prototypes, and visual designs',
            'Collaborate with product and development teams on design concepts',
            'Conduct user research to inform design decisions',
            'Stay up-to-date with design trends and industry best practices',
        ],
        qualifications: [
            'Bachelor\'s degree in Design, HCI, or related field',
            'Proven experience as a UX/UI Designer',
            'Proficiency in design tools (Sketch, Figma, Adobe XD, etc.)',
            'Strong communication and collaboration skills',
        ],
        companyDetail: `Our company values creativity and user-centric design. We offer a dynamic work environment where innovation is encouraged and recognized.`,
    },

    {
        logo: 'static/img/com-logo-2.jpg',
        position: 'Network Engineer',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are hiring a skilled Network Engineer to join our IT team. In this role, you will be responsible for designing, implementing, and managing our organization's network infrastructure. If you have a strong background in network administration and enjoy solving technical challenges, we want to hear from you!`,
        responsibilities: [
            'Design and implement network solutions',
            'Troubleshoot and resolve network issues',
            'Collaborate with IT teams to ensure network security',
            'Stay informed about industry trends and advancements',
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field',
            'Proven experience as a Network Engineer',
            'Certifications such as CCNA or CCNP are a plus',
            'Excellent problem-solving and communication skills',
        ],
        companyDetail: `Our company is committed to maintaining a robust and secure network infrastructure. We offer a supportive work environment where employees are encouraged to enhance their skills.`,
    },

    {
        logo: 'static/img/com-logo-1.jpg',
        position: 'Frontend Developer',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are seeking a talented Frontend Developer to join our development team. In this role, you will be responsible for implementing user interfaces and enhancing the overall user experience. If you have a passion for web development and a strong portfolio showcasing your skills, we'd love to hear from you!`,
        responsibilities: [
            'Develop responsive and user-friendly web interfaces',
            'Collaborate with back-end developers to integrate UI elements',
            'Optimize web applications for maximum speed and scalability',
            'Stay updated on emerging frontend technologies and best practices',
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field',
            'Proven experience as a Frontend Developer',
            'Proficiency in HTML, CSS, and JavaScript',
            'Experience with frontend frameworks (React, Vue, Angular, etc.)',
        ],
        companyDetail: `Our company values innovation and cutting-edge technology. Join us in creating seamless and visually appealing web applications for our users.`,
    },

    {
        logo: 'static/img/com-logo-4.jpg',
        position: 'HR Manager',
        location: 'Lagos, Nigeria',
        employmentType: 'Full Time',
        salary: 'N123 - N456',
        jobDescription: `We are looking for an experienced HR Manager to lead our human resources department. In this role, you will be responsible for recruiting, training, and managing the overall well-being of our employees. If you have a strong background in human resources and excellent interpersonal skills, we want to hear from you!`,
        responsibilities: [
            'Lead the recruitment and onboarding processes',
            'Develop and implement HR policies and procedures',
            'Handle employee relations and conflict resolution',
            'Ensure compliance with labor laws and regulations',
        ],
        qualifications: [
            'Bachelor\'s degree in Human Resources or related field',
            'Proven experience as an HR Manager',
            'Excellent communication and leadership skills',
            'Familiarity with HR software and tools',
        ],
        companyDetail: `Our company prioritizes a positive and inclusive work culture. Join our team and contribute to the growth and success of our organization.`,
    },
];


// Function to generate the HTML structure for each data object
function generateHTML(dataItem) {
    return `
        <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="accordion">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="${dataItem.logo}" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">${dataItem.position}</h5>
                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${dataItem.location}</span>
                                    <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>${dataItem.employmentType}</span>
                                    <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${dataItem.salary}</span>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                    <a class="btn btn-primary" href="">Apply Now</a>
                                </div>
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-content">
                        <div class="container-xxl py-5 " data-wow-delay="0.1s">
                            <div class="container">
                            <div class="accordion-content">
                            <div class="container-xxl py-5 " data-wow-delay="0.1s">
                                <div class="container">
                                    <div class="row gy-5 gx-4">
                                        <div class="col-lg-8">
                    
                                            <div class="mb-5">
                                                <h4 class="mb-3">Job description</h4>
                                                <p>${dataItem.jobDescription}</p>
                                                <h4 class="mb-3">Responsibility</h4>
                                                <ul class="list-unstyled">
                                                        ${dataItem.responsibilities.map(responsibility => `<li><i class="fa fa-angle-right text-primary me-2"></i>${responsibility}</li>`).join('')}
                                                    </ul>
                                                <h4 class="mb-3">Qualifications</h4>
                                                <ul class="list-unstyled">
                                                ${dataItem.qualifications.map(qualification => `<li><i class="fa fa-angle-right text-primary me-2"></i>${qualification}</li>`).join('')}
                                            </ul>
                                            </div>
                            
                                            <div class="">
                                                <h4 class="mb-4">Apply For The Job</h4>
                                                <form>
                                                    <div class="row g-3">
                                                        <div class="col-12 col-sm-6">
                                                            <input type="text" class="form-control" placeholder="Your Name">
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <input type="email" class="form-control" placeholder="Your Email">
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <input type="text" class="form-control" placeholder="Portfolio Website">
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <input type="file" class="form-control bg-white">
                                                        </div>
                                                        <div class="col-12">
                                                            <textarea class="form-control" rows="5" placeholder="Coverletter"></textarea>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#applyNowModal" type="button">Apply Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- Apply Now Start -->
                <div class="modal fade" id="applyNowModal" tabindex="-1" aria-labelledby="applyNowModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="applyNowModalLabel">Apply Now</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="jobApplicationForm">
                                    <div class="mb-3">
                                        <label for="applicantName" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="applicantName" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="applicantEmail" class="form-label">Your Email</label>
                                        <input type="email" class="form-control" id="applicantEmail" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="resumeUpload" class="form-label">Resume Upload</label>
                                        <input type="file" class="form-control" id="resumeUpload"
                                            accept=".pdf,.doc,.docx" required>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit Application</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                 <!-- Apply Now End -->
                                        </div>
                            
                                        <div class="col-lg-4">
                                            <div class="bg-white rounded p-5 mb-4 " data-wow-delay="0.1s">
                                                <h4 class="mb-4">Job Summary</h4>
                                                <p><i class="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2045</p>
                                                <p><i class="fa fa-angle-right text-primary me-2"></i>Vacancy: 123 Position</p>
                                                <p><i class="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p>
                                                <p><i class="fa fa-angle-right text-primary me-2"></i>Salary: $123 - $456</p>
                                                <p><i class="fa fa-angle-right text-primary me-2"></i>Location: New York, USA</p>
                                                <p class="m-0"><i class="fa fa-angle-right text-primary me-2"></i>Date Line: 01 Jan, 2045</p>
                                            </div>
                                            <div class="bg-white rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                                <h4 class="mb-4">Company Detail</h4>
                                                <p class="m-0">${dataItem.companyDetail}</p>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
        $(document).ready(function () {
            $('#jobApplicationForm').submit(function (event) {
                event.preventDefault();
                // Here, you can send the form data to your server using Ajax or any other method
                alert('Application submitted successfully!');
                $('#applyNowModal').modal('hide'); // Close the modal
            });
        });


// Get the container element where the generated HTML will be added
const container = document.querySelector('#container');

// Generate the HTML structure for each data object and add it to the container
data.map(dataItem => {
    container.innerHTML += generateHTML(dataItem);
});