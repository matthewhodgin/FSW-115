axios.get("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0")
    .then((res) => {
        console.log(res);
            var menu = document.querySelector("#poke")
            menu.options[0] = new Option("Select an Item")
                for (let x = 0; x < res.data.results.length; x++) {
                    menu.options[x+1] = new Option(res.data.results[x].name)
    }})
    .catch((err) => console.log(err));


axios.get('http://api.bryanuniversity.edu/matthewhodgin/list')
.then(response => {
    console.log(response.data)
    console.log(response.data.length)
        for(var i = 0; i < response.data.length; i++){
            var todo = document.createElement('div')
            todo.id = response.data[i]._id

            var h1 = document.createElement('h1')
            h1.textContent = response.data[i].name
            todo.append(h1)

            var h2 = document.createElement('h2')
            h2.textContent = response.data[i].description
            todo.append(h2)

            console.log(response.data[i].isComplete)

            if (response.data[i].isComplete === true){
                h1.style.textDecoration = "line-through"
                h1.style.backgroundColor = "red"
            }
            
            var button = document.createElement('button')
            button.textContent = "DELETE"
            todo.append(button)
            button.id = response.data[i]._id

            var button2 = document.createElement("INPUT")
            button2.setAttribute("type", "checkbox")
            todo.append(button2)
            button2.id = response.data[i]._id

            document.querySelector(".app").append(todo)
            button.addEventListener('click', e =>{
            axios.delete("http://api.bryanuniversity.edu/matthewhodgin/list/" + e.target.id)
                .then(res => {
                console.log(document.getElementById(e.target.id))
                document.getElementById(e.target.id).remove()
            })
            .catch(err => console.log(err))
    
})
}})
            .catch(err => console.log (err))


document.todoForm.addEventListener("submit", post)

function post(e){
    e.preventDefault()
    let nameData = document.todoForm.Name.value;
    let descriptionData = document.todoForm.Desc.value;

    
    let data = {
        name: nameData,
        description: descriptionData,

    };
    
    console.log(data)
    axios
        .post("http://api.bryanuniversity.edu/matthewhodgin/list/", data)
        .then((res) => {console.log(res)
        window.location.reload()
    })
        .catch((err) => console.log(err));
};



