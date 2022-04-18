const axios = require('axios');
axios.get('http://api.bryanuniversity.edu/matthewhodgin/list').then(resp => {

    console.log(resp.data);
});

var newTodo = {
    title: "Axios Todo pt1", 
    description: "Week 4 Assignment 1",
    price: 2000,
    imgUrl: "https://www.flickr.com/photos/cogdog/6706527857",
    completed: false 
};


