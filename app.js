const btn=document.querySelector("form button");
const container =document.querySelector(".container");

btn.addEventListener("click",()=>{
    container.classList.add("hide");
    generateQRCode();
})
function generateQRCode() {
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const userClass = document.getElementById('class').value;

    const userData = `Name: ${name}\nRoll Number: ${rollNumber}\nClass: ${userClass}`;

    // Generate QR code using qrcode.js
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    const qrcode = new QRCode(qrCodeContainer, {
        text: userData,
        width: 128,
        height: 128,
    });

}