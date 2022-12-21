# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshots/overview.png.png)


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/profile/grassfinn/solutions)
- Live Site URL: [Frontend Mentor Solution Master Site](https://grassfinn.github.io/FrontendMentorSolutions/)

## My process
* I made the separate media queries for mobile and desktop
* Created a card section and applied the classes flex or flex-col so the flex orientation can be adjusted based on the screen's width
* I used a series of details and summaries to created the accordian with HTML/CSS. Js could have been used as well to provide smoother transitions but I did not deem those as necessary.
* I used JS to allow only one tab to be opened at a time.
```
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

```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - Plan to add this as my next feature


### What I learned

* I learned how you can use the Picture tag to allow images to change based on the sources media attribute.
```
    <!-- picture needs img for reference -->
          <picture>
            <!-- source allows to change images based off the medias option -->
            <source media="(min-width:756px)" srcset="/images/illustration-woman-online-desktop.svg">
            <source srcset="/images/illustration-woman-online-mobile.svg" >

            <img
              class="girl"
              src="./images/illustration-woman-online-desktop.svg"
              alt="Girl working on the computer"
            />
          </picture>
          <img class="box" src="./images/illustration-box-desktop.svg" />
```
* I learned more about attributes such as open and how to manipulate the DoM a little bit more.
* Using absolute and relative is always a pain but I learn how to use them a little bit better.

### Continued development

I plan to add this as a react component and add it so my react frontend mentor solution site


### Useful resources

- [How to remove the detail's arrows](https://stackoverflow.com/questions/56758098/how-to-position-detail-marker-to-come-after-summary )
- [Learning about how the picture tag works](https://stackoverflow.com/questions/39236087/html5-picture-element-does-not-seem-to-be-supported-by-chrome-52-srcset-not-wor) 


## Author

- Website - [Andrew harper](https://grassfinn.github.io/Portfolio-site/)
- Frontend Mentor - [@grassfinn](https://www.frontendmentor.io/profile/grassfinn)
- Twitter - [@hobojohn61](https://www.twitter.com/hobojohn61)

