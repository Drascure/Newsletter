const submit = document.querySelector("#submit");
const dismiss = document.querySelector("#dismiss");
const email = document.querySelector("#sign .email");
const alerte = document.querySelector("#sign #alerte");
const span = document.querySelector("#mailUser");

/*Fonction qui affiche le popup*/
afficherPopup = ()=>{
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/*Fonction qui cache le popup*/
cacherPopup=()=>{
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}

submit.addEventListener("click", (event)=>{
    let mailUser = email.value;
    if(mailUser.includes("@") && mailUser.includes(".fr") || mailUser.includes(".com")){
        span.innerHTML = mailUser;
        afficherPopup();
    } else {
        email.classList.add("alerte");
        alerte.classList.add("show");
        alerte.classList.remove("hide");
        email.value = email.value;
        event.preventDefault();
    }
})

dismiss.addEventListener("click", ()=>{
    cacherPopup();
})