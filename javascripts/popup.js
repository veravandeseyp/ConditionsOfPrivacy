var currentURL; 

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getName") {
  	var title = document.querySelector('#pagetitle');
    title.innerText = request.source;    
  }
});

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getURL") {
    var link = document.querySelector('#link');
    var linkTitle = document.querySelector('#value-link');
   
    if( request.source == "This site is not documented yet"){
        // linkTitle.style.display = "none";
        // link.style.display = "none";
    } else {
      link.innerText = request.source;
      link.href = request.source;
    }
  }
});

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getCurrentURL") {
    
    currentURL = request.source;
  }
});


function onWindowLoad() {
  var message = document.querySelector('#message');
  var title = document.querySelector('#pagetitle');
  var link = document.querySelector('#link');

  chrome.tabs.executeScript(null, {
    file: "javascripts/getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
    var linkLink = link.innerText;
    var pageAnalysis = document.querySelector('#value-page');
    var totalWords = document.querySelector('#value-words');
    var totalSent = document.querySelector('#value-sentences');
    var pageLink = document.querySelector('#value-link');

    if( currentURL !==  linkLink ) {
      // pageAnalysis.style.display = 'none';
      // totalWords.style.display = 'none';
      // totalSent.style.display = 'none';
    } else {
      pageLink.style.display = 'none';
    }
  });

}


window.onload = onWindowLoad;