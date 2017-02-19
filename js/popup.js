var link = body.querySelector(".btn-contact");
var popup = body.querySelector(".modal-content");
var close =  body.querySelector(".modal-content-close");
var name = body.querySelector(".name-user");
var email = body.querySelector(".icon-email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add(".modal-content-show");
  name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove(".modal-content-show");
