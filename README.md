# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/jayrnoel/snap](https://github.com/jayrnoel/snap)
- Live Site URL: [https://snap12.netlify.app/](https://snap12.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- Flexbox
- Mobile-first workflow
- SASS

### What I learned

The first thing that I had no I had how to do was the dropdown accordion in the navigation but I knew it has something to do with the element's height. I learned that `height` cannot be animated but `max-height` and `min-height` does.

```css
.nav__dropdown {
  max-height: 0;
  overflow: hidden;
  transition: all 250ms ease-in;
}

.nav__dropdown.open {
  max-height: 500px;
}
```

In this solution, I have used `max-height` because for some reason, in the desktop size the dropdown doesn't fit all the way through. I just cuts everything above the `min-height` value so I opted for `max-height` and it worked.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

For using SASS I used the[SASS Documentation](https://sass-lang.com/guide) and watched [Coder Coder's video](https://www.youtube.com/watch?v=jfMHA8SqUL4)

## Author

- Frontend Mentor - [@jayrnoel](https://www.frontendmentor.io/profile/jayrnoel)
