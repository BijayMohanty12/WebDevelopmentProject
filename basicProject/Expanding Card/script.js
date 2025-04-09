const panels = document.querySelectorAll(".card");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removePanel()

    panel.classList.add("activePanel");


  })
  const removePanel = () => {
    panels.forEach(panel => {
      panel.classList.remove("activePanel");
    })
  }




})