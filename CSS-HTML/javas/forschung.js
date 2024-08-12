function clickliste(event) {
    let alleUl= document.querySelectorAll("li>ul")
    alleUl.forEach(ul=>ul.classList.add("hide"))
     let ul=event.target.querySelector("ul")
   
     ul.classList.toggle("hide")
}