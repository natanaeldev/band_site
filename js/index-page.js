"use strict";
const apiKey = "b755b467-27d6-4447-ad13-f5267b05306c";
const url = "https://project-1-api.herokuapp.com/comments?api_key=";

const commentsArray = [];
let form = document.querySelector("#conversation__form");
let commentsWrapper = document.querySelector(".comments__wrapper");
let currentDate = new Date().toLocaleDateString();

// This api call display all the comments
axios.get(`${url}${apiKey}`).then((comment) => {
  commentsArray.push(comment.data);
  commentsArray.forEach((comment) => {
    comment.forEach((data) => {
      displayComment(data);
    });
  });
});

let displayComment = (comment) => {
  console.log(comment);
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

  let date = (date) => {
    let dates = new Date(Number(date));
    dates.toISOString();
    let day = dates.getDay();
    let month = dates.getMonth();
    let year = dates.getFullYear();
    let fullDate = `${month}/${day}/${year}`;

    return fullDate;
  };

  commentsWrapper.appendChild(comments);
  comments.appendChild(headerDiv);

  headerDiv.appendChild(img);
  headerDiv.appendChild(commentUl);

  commentUl.appendChild(names).innerText = comment.name;
  commentUl.appendChild(Dates).innerText = date(comment.timestamp);

  comments.appendChild(paragraph).innerText = comment.comment;
};

// this is the code for the button which is going to submit the comments.

let handleSubmit = (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let comment = e.target.comments.value;
  let newComment = {
    name: name,
    comment: comment,
  };

  if (name && comment) {
    commentsWrapper.innerText = "";
    axios
      .post(`${url}${apiKey}`, newComment)
      .then((response) => {
        axios
          .get(`${url}${apiKey}`)
          .then((response) => {
            console.log("Iam working");
            let comments = response.data;
            comments.sort((a, b) => {
              return b.timestamp - a.timestamp;
            });
            comments.forEach((comment) => {
              console.log("Iam working1");
              displayComment(comment);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  }
};

form.addEventListener("submit", handleSubmit);
