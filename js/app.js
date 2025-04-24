const barsImg = document.querySelector("#barsImg")
const LinksBox = document.querySelector("#linksBox")

barsImg.addEventListener('click', () =>{
    LinksBox.classList.toggle("links2")
    if(LinksBox.style.display === "block"){
        LinksBox.style.display = "none"
    }else{
        LinksBox.style.display = "block"
    }
})
