function sendMail(){
    let parms={
        name :document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }

    emailjs.send("service_edduyly","template_msdboif",parms).then(alert("Email has been send sucessfully"))
}