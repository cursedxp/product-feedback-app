# Frontend Mentor - Product feedback app solution

This is a solution to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

<img src='https://github.com/cursedxp/product-feedback-app/blob/main/preview.jpg' style="width: 717px; height: 461px;">

### Links

- Solution URL: [https://github.com/cursedxp/product-feedback-app](https://github.com/cursedxp/product-feedback-app)
- Live Site URL: [https://github.com/cursedxp/product-feedback-app](https://github.com/cursedxp/product-feedback-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- Redux ToolKit
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Throughout this project, my first foray into Redux Toolkit, I had the opportunity to delve into various key concepts and gained invaluable insights. Let's summarize what I learned from this endeavor.

I started by grasping the fundamentals of Redux Toolkit, including the usage of asyncThunk. This powerful middleware allowed me to handle asynchronous actions seamlessly, such as API requests and responses. Leveraging asyncThunk, I could initiate asynchronous operations and effectively manage the resulting data, enhancing the responsiveness of my applications.

In addition, I explored the concept of extra reducers, which provided me with the flexibility to modify state and handle specific actions separately. This modular approach kept my codebase organized and maintainable, allowing for easy extensibility and separation of concerns.

Another essential skill I acquired was the creation of useSelector functions. These functions allowed me to selectively extract specific slices of state from the Redux store. By utilizing the useSelector hook, I could efficiently access the required data for component rendering, leading to improved performance and a streamlined state management process.

Moreover, I delved into the power of useMemo to optimize app performance. By memoizing the results of expensive computations or complex transformations, I could avoid unnecessary re-calculations and significantly improve efficiency. This technique proved particularly useful when working with computationally intensive operations or large datasets, ensuring a smoother user experience by reducing unnecessary computational load.

To summarize, this project provided me with a comprehensive understanding of Redux Toolkit and its various features. From utilizing asyncThunk for asynchronous actions to leveraging extra reducers and the creation of useSelector functions, I gained the necessary skills to develop robust and scalable applications. Additionally, by harnessing the power of useMemo, I learned how to optimize app performance and enhance the overall user experience. Armed with these newfound skills, I am well-prepared to create high-quality applications using Redux Toolkit.

### Useful resources

- [ReduxToolkit Tutorial](https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3) - This helped me learn more about Redux and its concept.

## Author

- Website - [Anil Ozsoy](https://github.com/cursedxp)
- Frontend Mentor - [@cursedxp](https://www.frontendmentor.io/profile/cursedxp)
- Twitter - [@anil_ozsoy](https://www.twitter.com/anil_ozsoy)
