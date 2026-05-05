document.getElementById("display").innerHTML =  "<p>Please wait....</p>";

fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data =>  {
    let apiwrk = document.getElementById("display");
    apiwrk.innerHTML = " ";

    data.slice(60,65).forEach(post => {
        apiwrk.innerHTML += `
        <div class = "comments">
        <h2>${post.title}</h2>
        <p>${post.url}</p>
        </div>
        `
        
    });
})