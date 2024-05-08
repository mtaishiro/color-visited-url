// Set the color picker to the previously selected color
chrome.storage.local.get(['visitedColor'], (result) => {
    const picker = document.getElementById('color-picker');
    picker.value = result.visitedColor || '#ff0000'; // Default to red if no color is set
  });
  
  // Update the stored color when the color picker changes
  document.getElementById('color-picker').addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    chrome.storage.local.set({ visitedColor: selectedColor });
  });
  
  // Export button click listener
  document.getElementById('export').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'exportUrls' }, (response) => {
      console.log(response.status);
    });
  });