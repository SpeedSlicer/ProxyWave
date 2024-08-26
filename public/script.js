function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.getElementById('tab-list');
  const iframeContainer = document.getElementById('iframe-container');
  const addTabButton = document.getElementById('add-tab');
  let tabCounter = 1;

  // Function to create a new tab and iframe
  function createTab(url = '/browser.html', title = `Tab ${tabCounter++}`) {
      // Create new tab
      const tab = document.createElement('li');
      tab.textContent = title;
      tab.setAttribute('data-url', url);

      // Expand button to open the URL in a new window
      const expandButton = document.createElement('span');
      expandButton.classList.add('expand-tab');
      expandButton.innerHTML = '⧉';
      expandButton.title = 'Open in new window';
      expandButton.addEventListener('click', (event) => {
          event.stopPropagation();
          window.open(url, '_blank');
      });

      // Close button to remove the tab
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-tab');
      closeButton.innerHTML = '×';
      closeButton.title = 'Close tab';
      closeButton.addEventListener('click', (event) => {
          event.stopPropagation();
          closeTab(tab, iframe);
      });

      tab.appendChild(expandButton);
      tab.appendChild(closeButton);

      // Create new iframe
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.onload = () => {
          tab.textContent = iframe.contentDocument.title || tab.textContent;
          tab.appendChild(expandButton);
          tab.appendChild(closeButton);
      };

      // Add tab and iframe to DOM
      tabs.appendChild(tab);
      iframeContainer.appendChild(iframe);

      // Set the new tab as active
      setActiveTab(tab, iframe);
  }

  // Function to set the active tab and display the corresponding iframe
  function setActiveTab(tab, iframe) {
      // Deactivate all tabs and hide all iframes
      Array.from(tabs.children).forEach(t => t.classList.remove('active'));
      Array.from(iframeContainer.children).forEach(f => f.style.display = 'none');

      // Activate the selected tab and show the corresponding iframe
      tab.classList.add('active');
      iframe.style.display = 'block';
  }

  // Function to close a tab
  function closeTab(tab, iframe) {
      if (tab.classList.contains('active')) {
          // If the active tab is closed, activate the previous one, or the next one if there's no previous tab
          const nextTab = tab.nextElementSibling || tab.previousElementSibling;
          if (nextTab) {
              const index = Array.from(tabs.children).indexOf(nextTab);
              setActiveTab(nextTab, iframeContainer.children[index]);
          }
      }
      // Remove the tab and iframe
      tab.remove();
      iframe.remove();
  }

  // Add a default tab on page load
  createTab();

  // Add new tab functionality
  addTabButton.addEventListener('click', () => {
      createTab();
  });
});

