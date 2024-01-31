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

const data = [
    { logo: 'img/com-logo-1.jpg', position: 'Software Engineer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-2.jpg', position: 'Marketing Manager', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-3.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-4.jpg', position: 'WordPress Developer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-5.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-3.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-2.jpg', position: 'Marketing Manager', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },
    { logo: 'img/com-logo-5.jpg', position: 'Product Designer', location: 'Lagos, Nigeria', employmentType: 'Full Time', salary: 'N123 - N456' },

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
                                                <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                                                <h4 class="mb-3">Responsibility</h4>
                                                <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                                                <ul class="list-unstyled">
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                                                </ul>
                                                <h4 class="mb-3">Qualifications</h4>
                                                <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                                                <ul class="list-unstyled">
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                                                    <li><i class="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
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
                                                            <button class="btn btn-primary w-100" type="submit">Apply Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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
                                                <p class="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                                            </div>
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

// Generate the HTML structure for each data object and add it to the container
data.map(dataItem => {
    container.innerHTML += generateHTML(dataItem);
});
