

function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_k8x2mok";
    const templateID = "template_zxf5x8d";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log("Response Result :", res);
            alert("Your message send successfully")
        })
        .catch((error) => console.log(error));

}
