let dialogText = document.querySelector(".dialog-text");
let closeDialogBtn = document.querySelector(".dialog button");
let checkbox = document.querySelector(".dialog input");
let dialog = document.querySelector(".dialog-overlay");
closeDialogBtn.onclick = function closeDialog() {
  if (checkbox.checked) {
    dialog.remove();
    // dialog.style.display = "none";
    // dialog.style.visibility = "hidden";

    // display:none // visibility: hidden // 但不可以用opacity:0 物件還是在
  } else {
    dialogText.style.color = "red";
  }
};
