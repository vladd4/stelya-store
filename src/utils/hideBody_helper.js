export const hideShowBody = (elementIds, overflow, opacity, events) => {
  document.body.style.overflowY = overflow;

  elementIds.forEach((id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.style.opacity = opacity;
      element.style.pointerEvents = events;
    }
  });
};

export const handleOpacity = (action, main_ids, product_ids) => {
  if (action.payload === true) {
    if (document.querySelector("#welcome")) {
      hideShowBody(main_ids, "hidden", "0.6", "none");
    } else {
      hideShowBody(product_ids, "hidden", "0.6", "none");
    }
  } else {
    if (document.querySelector("#welcome")) {
      hideShowBody(main_ids, "scroll", "1", "auto");
    } else {
      hideShowBody(product_ids, "scroll", "1", "auto");
    }
  }
};
