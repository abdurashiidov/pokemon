let ota = document.querySelector(".father")

for (let i = 0; i < 20; i++) {
    let div = document.createElement("div")
    div.innerHTML = `
    <img src="${pokemons[i].img}" width="310" height="180" class="card-img-top" alt="pokemon"> 
    <div class="card-body">
    <h5 class="card-title">${pokemons[i].name}</h5>
    <p class="card-text">   ${pokemons[i].type}</p>
    
    </div>
    <div class="father-button">
    <button type="button" class="btn buttons"><i data-uuid="close" class="icon far fa-thumbs-up fa-2x" ></i></button>
    </div>
    </div>
    `
    div.style.width = "18rem"
    div.classList.add("card")
    ota.appendChild(div)
}

let buttonlike = document.querySelectorAll(".buttons")
let cound = 0
let counds = document.querySelector(".cound")
setInterval(function add() {
    counds.textContent = cound
}, 500)

for(let i = 0; i < buttonlike.length; i++){
    buttonlike[i].style.marginTop = "-350px"
    buttonlike[i].addEventListener("click", (e) => {
        if(e.target.dataset.uuid == "close"){
            cound += 1
            buttonlike[i].style.transition = "0.5s"
            buttonlike[i].style.transform = "rotate(1980deg)"
            e.target.dataset.uuid = "open"
        }
        else if(e.target.dataset.uuid == "open"){
            cound -= 1
            buttonlike[i].style.transform = " rotate(0deg)"
            console.log("ok")
            e.target.dataset.uuid = "close"
        }

    })
}
