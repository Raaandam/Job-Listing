const jobListings = [
    {
      title: "Frontend Developer",
      location: "India",
      company: "ABC Inc.",
      fullTime: true,
      overview: "We are looking for a Frontend Developer to join our team.",
      requirements: "At least 3 years of experience in web development.",
      workInvolved: "Develop and maintain websites using HTML, CSS, and JavaScript."
    },
    {
      title: "Backend Developer",
      location: "United States",
      company: "XYZ Corp.",
      fullTime: false,
      overview: "We are seeking a Backend Developer to help us build scalable and reliable systems.",
      requirements: "Strong understanding of databases, web servers, and APIs.",
      workInvolved: "Design and implement backend architecture for web applications."
    },
  ];
  
  function displayJobListings(listings) {
    const jobListingsContainer = document.getElementById("job-listings-container");
    
    jobListingsContainer.innerHTML = "";
    
    listings.forEach(function(listing) {
      const listingDiv = document.createElement("div");
      listingDiv.classList.add("job-listing");
      
      const titleElem = document.createElement("h2");
      titleElem.textContent = listing.title;
      listingDiv.appendChild(titleElem);
      
      const locationElem = document.createElement("p");
      locationElem.textContent = "Location: " + listing.location;
      listingDiv.appendChild(locationElem);
      
      const companyElem = document.createElement("p");
      companyElem.textContent = "Company: " + listing.company;
      listingDiv.appendChild(companyElem);
      
      const fullTimeElem = document.createElement("p");
      fullTimeElem.textContent = "Type: " + (listing.fullTime ? "Full Time" : "Part Time");
      listingDiv.appendChild(fullTimeElem);
      
      const overviewElem = document.createElement("p");
      overviewElem.textContent = "Overview: " + listing.overview;
      listingDiv.appendChild(overviewElem);
      
      const requirementsElem = document.createElement("p");
      requirementsElem.textContent = "Requirements: " + listing.requirements;
      listingDiv.appendChild(requirementsElem);
      
      const workInvolvedElem = document.createElement("p");
      workInvolvedElem.textContent = "Work Involved: " + listing.workInvolved;
      listingDiv.appendChild(workInvolvedElem);
      
      jobListingsContainer.appendChild(listingDiv);
    });
  }
  

  
function filterJobListings(listings, searchTerm, location, fullTime) {
    if (location === "Rajasthan") {
      location = "India";
    }

    const filteredListings = listings.filter(function (listing) {
      return (
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        listing.location.toLowerCase() === location.toLowerCase() &&
        (fullTime === null || listing.fullTime === fullTime)
      );
    });
  
    return filteredListings;
  }
  
  function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    const searchTermInput = document.getElementById("search-term-input");
    const locationInput = document.getElementById("location-input");
    const fullTimeCheckbox = document.getElementById("full-time-checkbox");
  
    const searchTerm = searchTermInput.value.trim();
    const location = locationInput.value.trim();
    const fullTime = fullTimeCheckbox.checked;
  
    const filteredListings = filterJobListings(jobListings, searchTerm, location, fullTime);
  
    displayJobListings(filteredListings);
  
    searchFormSubmitButton.textContent = "Search Again";
  }
 
  const searchButton = document.getElementById("search-button");
  
  searchButton.addEventListener("click", handleSearchFormSubmit);
  
  const searchForm = document.getElementById("search-form");
  const searchFormSubmitButton = document.getElementById("search-form-submit-button");
  
  searchFormSubmitButton.addEventListener("click", handleSearchFormSubmit);
  
  function resetSearchForm(event) {
    event.preventDefault();
  
    searchForm.reset();
  
    searchFormSubmitButton.textContent = "Search";
  }
  
  const resetButton = document.getElementById("reset-button");
  
  resetButton.addEventListener("click", resetSearchForm);
  
  
  