const commentsArray = [
  {
    name: "Connor Walton",
    date: "02 / 17 / 2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton",
    date: "02 / 17 / 2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton",
    date: " 02 / 17 / 2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

let form = document.querySelector("#conversation__form");
let commentsWrapper = document.querySelector(".comments__wrapper");
let currentDate = new Date().toLocaleDateString();

function displayComment(comment) {
  let comments = document.createElement("div");
  comments.classList.add("comment");
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("comment__header");
  let img = document.createElement("img");
  img.setAttribute("src", "./assets/Images/Mohan-muruge.jpg");
  img.classList.add("avatar1");
  let commentUl = document.createElement("ul");
  commentUl.classList.add("comment__ul");
  let names = document.createElement("li");
  names.classList.add("comment__li");
  let Dates = document.createElement("li");
  Dates.classList.add("comment__li--date");
  let paragraph = document.createElement("p");
  paragraph.classList.add("comment__p");
  commentsWrapper.classList.add("comments__wrapper");
  commentsWrapper.prepend(comments);
  comments.appendChild(headerDiv);
  headerDiv.appendChild(img);
  headerDiv.appendChild(commentUl);
  commentUl.appendChild(names).innerText = comment.name;
  commentUl.appendChild(Dates).innerText = comment.date;
  comments.appendChild(paragraph).innerText = comment.comment;
}

commentsArray.forEach((comment) => {
  displayComment(comment);
});

// this is the code for the button which is going to submit the comments.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;

  let comment = e.target.comments.value;
  let comments = document.createElement("div");
  comments.classList.add("comment");
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("comment__header");
  let img = document.createElement("img");
  img.setAttribute("src", "./assets/Images/Mohan-muruge.jpg");
  img.classList.add("avatar1");
  let commentUl = document.createElement("ul");
  commentUl.classList.add("comment__ul");
  let names = document.createElement("li");
  names.classList.add("comment__li");
  let Dates = document.createElement("li");
  Dates.classList.add("comment__li--date");
  let paragraph = document.createElement("p");
  paragraph.classList.add("comment__p");
  commentsWrapper.prepend(comments);
  commentsWrapper.classList.add("comments__wrapper");
  comments.appendChild(headerDiv);
  headerDiv.appendChild(img);
  headerDiv.appendChild(commentUl);
  commentUl.appendChild(names).innerText = name;
  commentUl.appendChild(Dates).innerText = currentDate;
  comments.appendChild(paragraph).innerText = comment;
});
