const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let poke = JSON.parse(xhr.responseText)
    showData(poke)
    }else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}
function showData(poke){
    for(i=0; i <= 1126; i++){
        const pokemon = document.createElement('p')
        pokemon.textContent = poke.objects[0].pokemon[i].name
        document.body.appendChild(pokemon)
    } 
}

// XMLHttpRequest

// how do we create a request (xhr)
// what parts of this object are important for our request

// xhr.onreadystatechange
// xhr.readyState
// xhr.status

// xhr.readyState  
    // 1 - request has been sent
    // 2 
    // 3
    // 4
    
// xhr.status
    // 200
    // 404 - not found
    // 201
    // 500


//  XMLHttpRequest constructor

//  The Javascript XMLHttpRequest constructor is used to make asynchronous HTTP requests 
//  from a javascript application.

//  This constructor uses callbacks to track the progress of a server requests and 
//  handle the response sent back.