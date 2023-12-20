export const hideShowBody = (overflow, opacity, events) => {
  document.body.style.overflowY = overflow;
  document.querySelector("#welcome").style.opacity = opacity;
  document.querySelector("#welcome").style.pointerEvents = events;
  document.querySelector("#sale").style.opacity = opacity;
  document.querySelector("#sale").style.pointerEvents = events;
  document.querySelector("#offers").style.opacity = opacity;
  document.querySelector("#offers").style.pointerEvents = events;
  document.querySelector("#products").style.opacity = opacity;
  document.querySelector("#products").style.pointerEvents = events;
  document.querySelector("#workingstages").style.opacity = opacity;
  document.querySelector("#workingstages").style.pointerEvents = events;
  document.querySelector("#consultation").style.opacity = opacity;
  document.querySelector("#consultation").style.pointerEvents = events;
  document.querySelector("#contacts").style.opacity = opacity;
  document.querySelector("#contacts").style.pointerEvents = events;
  document.querySelector("#partners").style.opacity = opacity;
  document.querySelector("#partners").style.pointerEvents = events;
  document.querySelector("#form").style.opacity = opacity;
  document.querySelector("#form").style.pointerEvents = events;
};

export const hideShowBodyProduct = (overflow, opacity, events) => {
  document.body.style.overflowY = overflow;
  document.querySelector("#partners").style.opacity = opacity;
  document.querySelector("#partners").style.pointerEvents = events;
  document.querySelector("#form").style.opacity = opacity;
  document.querySelector("#form").style.pointerEvents = events;
};
