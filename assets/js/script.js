const submit = document.querySelector("#submit");
const email = document.querySelector("#sign .email");
const alerte = document.querySelector("#sign #alerte");
const span = document.querySelector("#mailUser");


submit.addEventListener("click", (event)=>{
    let mailUser = email.value;
    if(email.value.includes("@") && email.value.includes(".fr") || email.value.includes(".com")){
        mailUser = email.value;
        submit.href = "./succes.html";
    } else {
        email.classList.add("alerte");
        alerte.classList.add("show");
        alerte.classList.remove("hide");
        email.value = email.value;
        event.preventDefault();
    }
    console.dir(mailUser);
    span.append(mailUser);
})
