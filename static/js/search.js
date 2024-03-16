function submitSearch() {
  // Prevent default form submission
  event.preventDefault();

  // Get the search query from the input field
  const searchQuery = document.getElementById("searchInput").value;

  // Here, you can perform additional tasks with the search query before making the request (optional)

  // Make the API call using Fetch API (or any preferred method like Axios)
  fetch("/app/api/jobs?search=" + searchQuery)
    .then((response) => response.json())
    .then((data) => {
      // Process the received JSON data and update the search results section
      updateSearchResults(data);
    })
    .catch((error) => {
      console.error("Error fetching search results:", error);
      // Handle errors appropriately, like displaying an error message
    });
}

function updateSearchResults(data) {
  // This function should update the HTML content of the searchcontainer div
  // based on the received data (loop through jobs, create elements, etc.)
  const searchContainer = document.getElementById("searchcontainer");
  searchContainer.innerHTML = ""; // Clear the container before adding new results

  // Check if any jobs were found
  if (data.length === 0) {
    searchContainer.innerHTML = `<p>No jobs found matching your search criteria.</p>`;
    return;
  }

  // Update jobs variable with received data
  const jobs = data;

  // Use Jinja templating to render search results
  function generateHTML(
    jobId,
    logo,
    title,
    location,
    employmentType,
    salaryRange
  ) {
    return `
        <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="accordion">
                    <div class="accordion-header" >
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                
                                <div class="text-start ps-4" data-job-id="${jobId}">
                                    <h5 class="mb-3">${title}</h5>
                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${location}</span>
                                    <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>${employmentType}</span>
                                    <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${salaryRange}</span>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <div class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></div>
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

  searchContainer.innerHTML = template;
}

// Add event listener to the search button (assuming it has an ID)
document.getElementById("searchButton").addEventListener("click", submitSearch);
