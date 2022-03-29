function darkenPage() {
  document.querySelectorAll("*").forEach((element) => {
    element.style.backgroundColor = "#333";
    element.style.color = "#eee";
  });
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: darkenPage,
    });
  }
});
