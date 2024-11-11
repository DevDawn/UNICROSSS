let links = document.getElementsByClassName("link");  

let currentValue = 1;  

function activeLink(event) {  
    for (let link of links) {
        link.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value || 1; 
}
