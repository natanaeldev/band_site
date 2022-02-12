const showsDates = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Marylin Javier",
    location: "San Francisco, CA",
  },
];

// Creating the div for the shows table
// let headers = ["DATE", "VENUE", "LOCATION"];

// console.log(shows);

function displayShows(show) {
  let shows = document.querySelector(".shows");
  let showsWrapper = document.createElement("div");
  showsWrapper.classList.add("shows__wrapper");
  let showList = document.createElement("ul");
  showList.classList.add("shows__list");
  //creating the li for the title
  let showItemtDate = document.createElement("li");
  let showItemtVenue = document.createElement("li");
  let showItemtLocation = document.createElement("li");
  showItemtDate.classList.add("shows__item--title");
  showItemtDate.classList.add("hidden");
  showItemtVenue.classList.add("shows__item--title");
  showItemtVenue.classList.add("hidden");
  showItemtLocation.classList.add("shows__item--title");
  showItemtLocation.classList.add("hidden");

  //creating the li for the content
  let showItemDate = document.createElement("li");
  let showItemVenue = document.createElement("li");
  let showItemLocation = document.createElement("li");
  let showItemButton = document.createElement("li");
  let showDisplayButton = document.createElement("button");
  let showButton = document.createElement("button");
  showDisplayButton.innerText = "BUY TICKETS";
  showDisplayButton.classList.add("shows__button");
  showDisplayButton.classList.add("phone-hidden");

  //adding the information
  showItemDate.classList.add("shows__item");
  showItemVenue.classList.add("shows__item");
  showItemLocation.classList.add("shows__item");
  showItemButton.classList.add("shows__item");

  showButton.innerText = "BUY TICKETS";
  showButton.classList.add("shows__button");

  shows.appendChild(showsWrapper);

  //applying information to the list.
  showsWrapper.appendChild(showList);
  showList.appendChild(showItemtDate).innerText = "DATE";
  showList.appendChild(showItemDate).innerText = show.date;
  showList.appendChild(showItemtVenue).innerText = "VENUE";
  showList.appendChild(showItemVenue).innerText = show.venue;
  showList.appendChild(showItemtLocation).innerText = "LOCATION";
  showList.appendChild(showItemLocation).innerText = show.location;
  showList.appendChild(showItemButton);
  showList.appendChild(showDisplayButton);
  showButton.classList.add("hidden");
  showItemButton.appendChild(showButton);

  showList.addEventListener("click", () => {
    showList.classList.add("active");
  });
}

showsDates.map((show) => {
  displayShows(show);
});
