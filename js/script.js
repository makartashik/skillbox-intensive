var button = document.querySelectorAll(".section-order-button");
var wrap = document.querySelector(".modal-order-wrap");
var modal = document.querySelector(".modal-order");
var close = document.querySelector(".modal-close");

for(var i=0;i<button.length;i++) {
  button[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-order-show");
    wrap.classList.add("modal-order-wrap-show");
  });
};

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-order-show");
  wrap.classList.remove("modal-order-wrap-show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-order-show")) {
      modal.classList.remove("modal-order-show");
    }
    if (wrap.classList.contains("modal-order-wrap-show")) {
      wrap.classList.remove("modal-order-wrap-show");
    }
  }
});
