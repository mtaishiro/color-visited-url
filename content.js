chrome.storage.local.get(['visitedUrls', 'visitedColor'], (data) => {
    const visitedUrls = data.visitedUrls || [];
    const visitedColor = data.visitedColor || '#ff0000'; // Default to red if not set
    const visitedSet = new Set(visitedUrls.map(urlObj => urlObj.url));
  
    document.querySelectorAll('a').forEach(link => {
      if (visitedSet.has(link.href)) {
        link.style.color = visitedColor;
      }
    });
});  