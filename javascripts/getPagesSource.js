function DOMtoString(document_all) {
  var html = '',
  node = document_all.firstChild;
      
  // var frame = document.getElementsByTagName("IFRAME")[0];
  // var conditions = frame.contentWindow.document.body.innerHTML;

  // console.log( conditions );
  //     script = document.createElement('script');
  //     t = document.createTextNode();
  // document.body.appendChild(script);
  // script.href = "https://www.google.com/intl/en/policies/terms/";
  // assing src with callback name
  // script.src = 'https://www.google.com/intl/en/policies/terms/';
  // insert script to document and load content
  // console.log(script);

  // html += document_root.;
   // html += node.innerText;

  while (node) {
    switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      html += node.innerText;
      break;
    }

    node = node.nextSibling;
  }
  return html;
}

function nameString() {
  var url = window.location.href;
  var urlPieces = url.split('.');
  var siteName = urlPieces[1];
  var errorString = 'This site is not documented yet';

  if( siteName == 'dropbox' ) {
      return "Dropbox";
  } else if ( siteName == 'facebook') {
      return  "Facebook";
  } else if ( siteName == 'google') {
      return  "Google";
  } else if ( siteName == 'last') {
      return  "Last.fm";
  } else if ( siteName == 'linkedin') {
      return  "LinkedIn";
  } else if ( siteName == 'pinterest') {
      return  "Pinterest";
  } else if ( siteName == 'twitter') {
      return  "Twitter";
  } else if ( siteName == 'yahoo') {
      return  "Yahoo";
  } else if ( siteName == 'youtube') {
      return  "YouTube";
  } else {
      return errorString;
  } 
}

function urlString() {
  var url = window.location.href;
  var urlPieces = url.split('.');
  var siteName = urlPieces[1];
  var errorString = 'This site is not documented yet';

  if( siteName == 'dropbox' ) {
      return "https://www.dropbox.com/terms2014";
  } else if ( siteName == 'facebook') {
      return  "https://www.facebook.com/legal/terms";
  } else if ( siteName == 'google') {
      return  "https://www.google.com/intl/en/policies/privacy/";
  } else if ( siteName == 'last') {
      return  "https://www.last.fm/legal/privacy";
  } else if ( siteName == 'linkedin') {
      return  "https://www.linkedin.com/legal/user-agreement";
  } else if ( siteName == 'pinterest') {
      return  "https://about.pinterest.com/nl/privacy-policy";
  } else if ( siteName == 'twitter') {
      return  "https://twitter.com/privacy?lang=en";
  } else if ( siteName == 'yahoo') {
      return  "https://policies.yahoo.com/us/en/yahoo/privacy/topics/index.htm";
  } else if ( siteName == 'youtube') {
      return  "https://www.youtube.com/static?template=terms&gl=GB";
  } else if ( siteName == 'tumblr') {
      return "https://www.tumblr.com/policy/en/privacy";
  } else if ( siteName == 'vimeo' ) {
      return "https://vimeo.com/terms";
  } else if ( siteName == 'spotify' ) {
      return "https://www.spotify.com/uk/legal/privacy-policy/";
  } else if ( siteName == 'amazon' ) {
      return "https://www.amazon.com/gp/help/customer/display.html?nodeId=468496";
  } else if ( siteName == 'taobao' ) { 
      return "http://www.taobao.com/helpcenter/content/help_rule_policy_en.html";
  } else if ( siteName == 'baidu' ) { 
      return "http://en.browser.baidu.com/policy.html";
  } else if ( siteName == 'ebay' ) { 
      return "http://pages.ebay.com/help/policies/privacy-policy.html";
  } else {
      return errorString;
  } 
}

function getCurrentURL() {
  var url = window.location.href;
  return url;
}

chrome.extension.sendMessage({
  action: "getSource",
  source: DOMtoString(document)
});

chrome.extension.sendMessage({
  action: "getName",
  source: nameString()
});

chrome.extension.sendMessage({
  action: "getURL",
  source: urlString()
});

chrome.extension.sendMessage({
  action: "getCurrentURL",
  source: getCurrentURL()
});
