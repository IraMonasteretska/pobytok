for(let i = 1; i <= 7; i++){
function handleFileSelect(evt) {
  var file = evt.target.files;
  var f = file[0];
  if (!f.type.match("image.*")) {
    alert("Image only please....");
  }
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      document.getElementById("filesBtn" + [i]).disabled;
      var span = document.createElement("span");
      span.innerHTML = [
        '<img class="thumb" title="',
        escape(theFile.name),
        '" src="',
        e.target.result,
        '" />',
      ].join("");
      document.getElementById("output" + [i]).insertBefore(span, null);
      document.getElementById("output" + [i]).style.display = "flex";
      document.getElementById("outputSvg" + [i]).style.display = "none";
      document.getElementById("files" + [i]).disabled = true;

    };
  })(f);
  reader.readAsDataURL(f);
}
let files = document.getElementById("files" + [i]);
files.addEventListener("change", handleFileSelect, false);
let outputs = document.getElementById("output"  + [i]);
outputs.style.display = "none";

document.getElementById("delatePhotoPersonal" + [i]).addEventListener("click", delateDataImg);
function delateDataImg() {
  files.disabled = true
  files.value = "";
  document.getElementById("outputSvg" + [i]).style.display = "block";
  outputs.children[2].remove();
  outputs.style.display = "none";
  setTimeout(() => (files.disabled = false), 100);
  
}
document.getElementById("editPhotoPersonal"  + [i]).addEventListener("click", editDataImg);
function editDataImg() {
  files.disabled = false
}
 
  }