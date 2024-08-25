function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const tabs = [
      { id: 'Search', title: 'Search', src: '/search.html' },
  ];

  const tabContainer = document.getElementById('tabs');
  const contentContainer = document.getElementById('tabContents');

  // Create tabs and content
  tabs.forEach((tab, index) => {
      // Create tab button
      const tabButton = document.createElement('button');
      tabButton.className = 'tablink';
      tabButton.innerText = tab.title;
      tabButton.onclick = function() { openTab(tab.id); };
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement('div');
      tabContent.id = tab.id;
      tabContent.className = 'tabcontent';
      const iframe = document.createElement('iframe');
      iframe.src = tab.src;
      tabContent.appendChild(iframe);
      contentContainer.appendChild(tabContent);

      if (index === 0) {
          tabButton.click();
      }
  });

  function openTab(tabId) {
      const allTabs = document.getElementsByClassName('tabcontent');
      for (let i = 0; i < allTabs.length; i++) {
          allTabs[i].style.display = 'none';
      }

      const allButtons = document.getElementsByClassName('tablink');
      for (let i = 0; i < allButtons.length; i++) {
          allButtons[i].style.backgroundColor = '';
      }

      document.getElementById(tabId).style.display = 'block';
      document.querySelector(`.tablink[onclick="openTab('${tabId}')"]`).style.backgroundColor = '#555';
  }
});
