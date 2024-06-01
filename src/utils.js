export function displayDialogue(text, onDisplayEnd) {
    if (!text) {
      console.error("No dialogue text provided");
      return;
    }
  
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
  
    dialogueUI.style.display = "block";
    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        dialogue.innerHTML = currentText;
        index++;
        return;
      }
  
      clearInterval(intervalRef);
    }, 50);  // Ajuster le délai pour une meilleure lecture
  
    const closeBtn = document.getElementById("close");
  
    function onCloseBtnClick() {
      onDisplayEnd();
      dialogueUI.style.display = "none";
      dialogue.innerHTML = "";
      clearInterval(intervalRef);
      closeBtn.removeEventListener("click", onCloseBtnClick);
    }
  
    closeBtn.addEventListener("click", onCloseBtnClick);
  
    addEventListener("keypress", (key) => {
      if (key.code === "Enter") {
        closeBtn.click();
      }
    });
  }
  
  export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
      k.camScale(k.vec2(1));
    } else {
      k.camScale(k.vec2(1.5));
    }
  }
  