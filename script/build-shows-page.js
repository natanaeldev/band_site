const apiKey = "b755b467-27d6-4447-ad13-f5267b05306c";
const url = "https://project-1-api.herokuapp.com/showdates?api_key=";
const showsDates = [];

axios.get(`${url}${apiKey}`).then((show) => {
  showsDates.push(show.data);
  showsDates.forEach((show) => {
    show.forEach((data) => {
      displayShows(data);
    });
  });
});

// Creating the div for the shows table
let displayShows = (show) => {
  let shows = document.querySelector(".shows");
  let showsWrapper = document.createElement("div");
  showsWrapper.classList.add("shows__wrapper");
  let showList = document.createElement("ul");
  showList.classList.add("shows__list");
  //creating the li for the title
  let showItemtDate = document.createElement("li");
  let showItemtVenue = document.createElement("li");
  let showItemtLocation = document.createElement("li");
  showItemtDate.classList.add("shows__item-title");
  showItemtDate.classList.add("hidden");
  showItemtVenue.classList.add("shows__item-title");
  showItemtVenue.classList.add("hidden");
  showItemtLocation.classList.add("shows__item-title");
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

  let date = (date) => {
    let dates = new Date(Number(date));

    let day = dates.getDate();
    let month = dates.getMonth() + 1;
    let year = dates.getFullYear();
    let fullDate = `${month}/${day}/${year}`;

    return fullDate;
  };

  // // console.log(date);
  // date.toLocaleString();
  showsWrapper.appendChild(showList);
  showList.appendChild(showItemtDate).innerText = "DATE";
  showList.appendChild(showItemDate).innerText = date(show.date);
  showList.appendChild(showItemtVenue).innerText = "VENUE";
  showList.appendChild(showItemVenue).innerText = show.place;
  showList.appendChild(showItemtLocation).innerText = "LOCATION";
  showList.appendChild(showItemLocation).innerText = show.location;
  showList.appendChild(showItemButton);
  showList.appendChild(showDisplayButton);
  showButton.classList.add("hidden");
  showItemButton.appendChild(showButton);
  showList.addEventListener("click", () => {
    showList.classList.add("active");
  });
};
