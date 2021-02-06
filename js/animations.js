const elements = [
  ...document.querySelectorAll('.animate-from-right'),
  ...document.querySelectorAll('.animate-from-left'),
];
elements.forEach((element) => {
  const observer = new IntersectionObserver(
    (results) => {
      results.forEach((result) => {
        if (result.isIntersecting) {
          element.classList.add('slideIn');
        } else {
          element.classList.remove('slideIn');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  observer.observe(element);
});
