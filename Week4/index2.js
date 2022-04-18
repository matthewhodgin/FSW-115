document.getElementById("Submit").addEventListener('click', function(){
    axios.get('https://api.vschool.io/pokemon')
    .then(response => {
        var array = response.data.results
        for (let i = 0; i < array.length; i++){
            console.log(array[i])
            const h1 = document.createElement('h1')
            document.getElementById('API2').append(h1)
            h1.textContent = array[i].name
            document.body.style.backgroundColor = "darkgreen"
        }
    })
})