

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

//  // Add event listener to accordion header for navigation
//  $('#container').on('click', '.accordion-header', function () {
//     window.location.href = 'job-detail'; 
// });


//  // Add event listener to accordion header for navigation
//  $('#container').on('click', '.accordion-header', function () {
//     // Retrieve the job ID from the data attribute or another source
//     const jobId = $(this).attr('data-job-id');
//     window.location.href = `/app/job-detail/${jobId}`;
// });
// Function to handle "Apply Now" button click
// function handleApplyNowClick(button) {
//     const jobId = $(button).closest('.accordion-header').attr('data-job-id');
//     window.location.href = `/app/job-detail/${jobId}`;
// }

// // Add event listener to "Apply Now" button for navigation
// $('#container').on('click', '.btn-primary', function (event) {
//     event.preventDefault();
//     handleApplyNowClick(this);
// });
// Function to handle navigation based on job ID
function handleNavigation(element) {
    const jobId = $(element).closest('.accordion-header').attr('data-job-id');
    window.location.href = `/app/job-detail/${jobId}`;
}

// Add event listener to accordion header for navigation
$('#container').on('click', '.accordion-header', function () {
    handleNavigation(this);
});

// Add event listener to "Apply Now" button for navigation
$('#container').on('click', '.btn-primary', function (event) {
    event.preventDefault();
    handleNavigation(this);
});
    
})(jQuery);

function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("active");
}




// Function to generate the HTML structure for each data object
function generateHTML(jobId, logo, title, location, employmentType, salaryRange) {
    return `
        <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="accordion">
                    <div class="accordion-header" data-job-id="${jobId}">
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="${logo}" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">${title}</h5>
                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${location}</span>
                                    <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>${employmentType}</span>
                                    <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${salaryRange}</span>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                    <a class="btn btn-primary" href="job-detail">Apply Now</a>
                                </div>
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// Get the container element where the generated HTML will be added
const container = document.querySelector('#container');

// Assuming you have an AJAX call to fetch job data
$.ajax({
    url: '/app/api/jobs', // Update the URL to match the correct endpoint
    method: 'GET',
    success: function (data) {
        console.log(data);

        // Clear existing content in the container
        container.innerHTML = '';

        // Iterate through the job data and generate HTML
        data.forEach(job => {
            console.log(job);
            console.log('Job ID:', job.id); 
            const jobHtml = generateHTML(job.id, job.logo, job.title, job.location, job.employmentType, job.salary);
            container.innerHTML += jobHtml;
        });
    },
    error: function (error) {
        console.error('Error fetching job data:', error);
    }
});


