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
];

// Creating the div for the shows table
// let headers = ["DATE", "VENUE", "LOCATION"];
let shows = document.querySelector(".shows");

// console.log(shows);

function displayShows(showArray) {
  let showsWrapper = document.createElement("div");
  showsWrapper.classList.add("shows__wrapper");
  let showList = document.createElement("ul");
  showList.classList.add("shows__list");
  let showItemtDate = document.createElement("li");
  let showItemtVenue = document.createElement("li");
  let showItemtLocation = document.createElement("li");
  showItemtDate.classList.add("shows__item--title");
  showItemtVenue.classList.add("shows__item--title");
  showItemtLocation.classList.add("shows__item--title");
  let showItemDate = document.createElement("li");
  let showItemVenue = document.createElement("li");
  let showItemLocation = document.createElement("li");
  let showItemButton = document.createElement("li");
  showItemDate.classList.add("shows__item");
  showItemVenue.classList.add("shows__item");
  showItemLocation.classList.add("shows__item");
  showItemButton.classList.add("shows__item");
  let showButton = document.createElement("button");
  showButton.innerText = "BUY TICKETS";
  showButton.classList.add("shows__button");

  showArray.forEach((show) => {
    shows.appendChild(showsWrapper);
    showsWrapper.appendChild(showList);
    showList.appendChild(showItemtDate).innerText = "DATE";
    showList.appendChild(showItemDate).innerText = show.date;
    showList.appendChild(showItemtVenue).innerText = "VENUE";
    showList.appendChild(showItemVenue).innerText = show.venue;
    showList.appendChild(showItemtLocation).innerText = "LOCATION";
    showList.appendChild(showItemLocation).innerText = show.location;
    showList.appendChild(showItemButton);
    showItemButton.appendChild(showButton);
  });
}

showsDates.forEach(() => {
  displayShows(showsDates);
});
