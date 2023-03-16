# Tech Unicorn Assessment
## I used in this assessment:
- Sass: preprocessing language, axios, react-router-dom

## The Structure Of The Folders and Files and their contents:

### src: main folder contains:
-       src |
            index.js: has the config of axios.defaults.baseURL and the Router
            |
            App.js: The path of pages
            |
            components : reusable components
            |   |
            |   heder   |
            |   |       Header.jsx
            |   |       header.scss
            |   |       |
            |   button  |
            |   |       Button.jsx
            |   |       Button.scss
            |   |
            images
            |   |
            |   icon    |
            |   |       heartIcon.svg
            |   |       shopIcon.svg
            |   |
            |   shape   |
            |   |       shape1.svg 
            |   |
            pages: each separate page will navigate to it
            |   |
            |   home            |: home consists of components 
            |   |               Home.Jsx
            |   |               home.scss
            |   |               |
            |   |               products    |
            |   |               |           Products.jsx
            |   |               |           products.scss
            |   |       
            |   singleProduct   | Details product /functionality in this file filtering...
            |   |               |
            |   |               SingleProduct.jsx
            |   |               singleProduct.scss


#### I added some features in `Our Premium Collection` in Home page:
- search input.
- 2 price input, to specify the products that will appear depending on the price.
#### what is the expected:
- The products have this character or the words will appear in their title when entering any character.
- Products in this range will appear in relation to the price
- You can specify the category also from the categories
- I have taken great care to make the app responsive from 2500px to 350px

 Run this app on your PC `npm install` Then `npm start`
