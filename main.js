// array that contains duck info
const ducks = [
   {
        isRubber: true,
        color: 'blue',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imageUrl: "http://www.duckshop.com/shop_cfg/rubberducks/105-img_0485.jpg"
   },
   {
       isRubber: true,
       color: 'pink',
       gender: 'female',
       isMigrator: true,
       socialStatus: 'popular',
       diet: 'yes',
       age: 98,
       featherNum: 185,
       name: 'Veronica',
       imageUrl: "http://www.duckshop.com/shop_cfg/rubberducks/badeente5434-001.JPG"
   },
   {
       isRubber: true,
       color: 'brown',
       gender: 'female',
       isMigrator: true,
       socialStatus: 'loner',
       diet: 'seeds',
       age: 2,
       featherNum: 287,
       name: 'Yanika',
       imageUrl: "https://cdn11.bigcommerce.com/s-nf2x4/products/503/images/10447/Green-Rubber-Duck-Ad-Line-3__60140.1569352483.560.850.jpg?c=2",
   },
   {
    isRubber: true,
    color: 'blue',
    gender: 'male',
    isMigrator: false,
    socialStatus: 'On the prowl',
    diet: 'Opportunistic omnivore',
    age: 15,
    featherNum: 3,
    name: 'Horatio',
    imageUrl: "http://www.duckshop.com/shop_cfg/rubberducks/026-img_0968-001.jpg"
},
{
    isRubber: true,
    color: 'pink',
    gender: 'male',
    isMigrator: false,
    socialStatus: 'very social',
    diet: 'none',
    age: 185,
    featherNum: 2578,
    name: 'Duck',
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51aSn5CmfYL._SX425_.jpg"
},
{
    isRubber: false,
    color: 'blue',
    gender: 'male',
    isMigrator: true,
    socialStatus: 'Ducking around',
    diet: 'Duck Diet',
    age: 25,
    featherNum: 1244,
    name: 'Mr. Awesome Duck',
    imageUrl: "https://www.thespruce.com/thmb/QYRPFpp4gxudeBC1EHefmMoiWTQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wood-duck-5898a1ad5f9b5874ee96a5e3.jpg",
},
{
    isRubber: false,
    color: 'pink',
    gender: 'male',
    isMigrator: true,
    socialStatus: 'Social',
    diet: 'yes',
    age: 45,
    featherNum: 78,
    name: 'Ducky McDuckerson',
    imageUrl: "https://www.audubon.org/sites/default/files/styles/hero_mobile/public/nyc-mandarin-duck_holly-mascaro.jpg?itok=QAmqWXkG"
},
{
    isRubber: false,
    color: 'brown',
    gender: 'male',
    isMigrator: true,
    socialStatus: 'anti-social',
    diet: 'duck diet 2.0',
    age: 1,
    featherNum: 65,
    name: 'Baby Duck',
    imageUrl: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
]

// standard printToDom function we will be using
const printToDom = (divId, textToPrint) => { 
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// function to populate page with duck stuff
const duckPrinter = (quacks) => {
    let domString = '';
    for(let i = 0; i < quacks.length; i++) {
        domString += '<div class ="col-md-6 col-lg-4">'
        domString += '<div class="card">';
        domString += `  <img src=${quacks[i].imageUrl} class="card-img-top" alt="...">`;
        domString += '  <div class="card-body">';
        domString += `      <h5 class="card-title">${quacks[i].name}</h5>`;
        domString += `      <p class="card-text">${quacks[i].socialStatus}</p>`;
        domString += `      <p class="card-text">${quacks[i].diet}</p>`;
        domString += '  </div>';
        domString += '</div>';
        domString += '</div>'
    }
    printToDom('ducks', domString);
}

// builds page always do init function to tidy code
const init = () => {
    duckPrinter(ducks);
}
// make sure to call the init function after defining it
init(); 