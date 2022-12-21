const accordian = document.querySelectorAll('details');
function closeAll(index) {
  const accordian = document.querySelectorAll('details');
  for (let i = 0; i < accordian.length; i++) {
    if (i !== index) {
      document.querySelector('details')[i].removeAttribute('open');
    }
  }
}

// target the elements
const elements = document.querySelectorAll('details');
function handleClick(item) {
  // loop through the elements, if it does not equal the item then remove open
  elements.forEach((element) => {
    if (element !== item) {
      element.removeAttribute('open');
    }
  });
}
elements.forEach((item) =>
  item.addEventListener('click', () => handleClick(item))
);
