import { environments } from "./environment.js"


  window.addEventListener("DOMContentLoaded", madeCards)

  function createCard(card){
    const container = document.createElement("div")
    container.id = "card1"
    container.classList.add("card1")

    const imgCard = document.createElement("img")
    imgCard.src = card.img
    imgCard.alt = card.description

    const title = document.createElement("h2")
    title.textContent = card.title

    const descriptionCard = document.createElement("p")
    descriptionCard.textContent = card.description

    container.appendChild(imgCard)
    container.appendChild(title)
    container.appendChild(descriptionCard)

    document.querySelector("main").appendChild(container)

  }
  function madeCards(){
        environments.forEach(card => {
          createCard(card);
        });
      }
    
  