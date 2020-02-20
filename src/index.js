import "./styles.css";

const fileInput = document.getElementById("file-input");
const showImg = document.getElementById("show-img");

fileInput.addEventListener("change", e => {
  //Add the image to showImg
  var reader = new FileReader();
  reader.onload = function(e) {
    showImg.src = e.target.result;
  };

  reader.readAsDataURL(e.target.files[0]);
});
