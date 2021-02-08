const elements = [
  ...document.querySelectorAll(".animate-from-right"),
  ...document.querySelectorAll(".animate-from-left"),
  ...document.querySelectorAll(".animate-from-down"),
];
elements.forEach((element) => {
  const observer = new IntersectionObserver(
    (results) => {
      results.forEach((result) => {
        if (result.isIntersecting) {
          element.classList.add("slideIn");
        } else {
          element.classList.remove("slideIn");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  observer.observe(element);
});

// Popup animation

const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup-btn");
const popupClose = document.querySelector(".popup-close");
const popupSub = document.querySelector(".popup-sub");

popupBtn.addEventListener("click", () => {
  popup.classList.add("popup-active");
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup-active");
});

popupSub.addEventListener("click", () => {
  popup.classList.remove("popup-active");
});
