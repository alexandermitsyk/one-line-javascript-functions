const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");

toggleElementDisplay(document.body)
// Result: Page body should be invisible, if it was present before and on executing command again it should be toggled
