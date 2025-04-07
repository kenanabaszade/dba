function typeWriter(text, elementId, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typing, speed);
    } else {
      document.getElementById(elementId).innerHTML = text + '<span class="cursor">|</span>';
    }
  }
  typing();
}

window.onload = function () {
  typeWriter("DATA BASE IS NOT BLACK BOX!", "text-container", 200);
  typeWriter("Mütəxəssislər", "section-title", 550);
  typeWriter("Tərəfdaşlar", "section-title2", 750);
  typeWriter("Kitablar", "section-title3", 850);
};
function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (name && message) {
    const whatsappMessage = `Salam mən ${name}\nMesaj: ${message}`;

    const whatsappLink = `https://wa.me/+994559409565?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  } else {
    alert("Zəhmət olmasa ad, soyad və mesaj daxil edin.");
  }
}

function sendWhatsAppMessage(message) {
  var phoneNumber = "+994559409565";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, '_blank');
}
