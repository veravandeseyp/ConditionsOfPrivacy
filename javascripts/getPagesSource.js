function DOMtoString(document_all) {
  var html = '',
  node = document_all.firstChild;
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
  var errorString = ' ';

  if( siteName == 'dropbox' ) {
      return "of Dropbox";
  } else if ( siteName == 'facebook') {
      return "of Facebook";
  } else if ( siteName == 'google') {
      return "of Google";
  } else if ( siteName == 'last') {
      return "of Last.fm";
  } else if ( siteName == 'linkedin') {
      return "of LinkedIn";
  } else if ( siteName == 'pinterest') {
      return "of Pinterest";
  } else if ( siteName == 'twitter') {
      return "of Twitter";
  } else if ( siteName == 'yahoo') {
      return "of Yahoo";
  } else if ( siteName == 'youtube') {
      return "of YouTube";
  } else if ( siteName == 'tumblr') {
      return "of Tumblr";
  } else if ( siteName == 'vimeo' ) {
      return "of Vimeo";
  } else if ( siteName == 'spotify' ) {
      return "of Spotify";
  } else if ( siteName == 'amazon' ) {
      return "of Amazon";
  } else if ( siteName == 'taobao' ) { 
      return "of Taobao";
  } else if ( siteName == 'baidu' ) { 
      return "of Baidu";
  } else if ( siteName == 'ebay' ) { 
      return "of eBay";
  } else if ( siteName == 'wikipedia' ) { 
      return "of Wikipedia";
  } else if ( siteName == 'reddit' ) { 
      return "of Reddit";
  } else {
      var firstLetter = siteName[0].toUpperCase();
      var restLetters = siteName.substr(1);

      return "of " + firstLetter + restLetters;
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
  } else if ( siteName == 'wikipedia' ) { 
      return "https://wikimediafoundation.org/wiki/Privacy_policy";
  } else if ( siteName == 'reddit' ) { 
      return "https://www.reddit.com/help/privacypolicy/";
  } else {
      return errorString;
  } 
}

function getCurrentURL() {
  var url = window.location.href;
  return url;
}



function colorWords() {
  var node = document.firstChild;
  var docText = node.value;
  //console.log( document.childNodes[ 1 ].innerHTML );
  // No linguistic exceptions: append all 
  /*var whatWeCan = docText.match(/(we can )(\w+)/g);

 
    }*/

  while (node) {
    if ( node.innerHTML != undefined ) {
      var match = node.innerHTML.match(/(we can )(\w+)/g);
      console.log( match.length );
      for( var i = 0; i < match.length; i++ ) {
      var textparts = node.innerHTML.split( match[i] );
      // node.innerHTML = node.innerHTML.split( /(we can )(\w+)/g );
        // node.innerHTML = node.innerHTML.join( '<span style="color:red">' + match[i+1] + '</span>' );
      }
       console.log( textparts.length );

      /*var whatWeCan = node.innerHTML.match(/(we can )(\w+)/g);
      console.log( whatWeCan );
      if( whatWeCan == null ) {
       } else {
         for( var i = 0; i < whatWeCan.length; i++ ) {
           console.log( whatWeCan[i]);
           whatWeCan[i] = whatWeCan[i].replace("we can ", '<span style="color:red"> we can </span>');  
           
         }
       }*/
    }
    switch (node.nodeType) {
    case Node.ELEMENT_NODE:
     
      break;
    }
    node = node.nextSibling;
  }
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
   var currentId = 0;

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "colorWord") {
    var whatWeDo = request.source;
    // Also make shit cap insensitive
    whatWeDoCap = whatWeDo.toString();
    whatWeDoCap = whatWeDoCap.replace( whatWeDoCap[0], 'W');
  }
   var text = document.body.innerHTML;
   var currentCondition;
   var currentElement;
   var scrollDuration = 1000;

      if( whatWeDo == null ) {
       } else {

           document.body.innerHTML = document.body.innerHTML.split( whatWeDo )
                                                            .join( '<condition class="'+currentId+'" style="background-color:#FF6511;color:white">' + whatWeDo +'</condition>' );
           document.body.innerHTML = document.body.innerHTML.split( whatWeDoCap )
                                                            .join( '<condition class="'+currentId+'" style="background-color:#FF6511;color:white">' + whatWeDoCap + '</condition>' );                                                 

          // var condition = document.body.innerHTML.match('<condition style="background-color:#FF6511;color:white">' + whatWeDo + '</condition>');
          currentElement = document.getElementsByClassName(currentId);
          if( currentElement[0] == undefined ) {} else {
            currentId ++;
            var currentScroll = window.scrollY;
            var scroll = currentElement[0].offsetTop - 100 ;
            // var scrollStep = scroll/ (scrollDuration),
            //        scrollInterval = setInterval(function(){
            //        if ( window.scrollY+window.innerHeight < scroll || window.scrollY-window.innerHeight > scroll ) {
                       window.scrollTo( 0, scroll);
                   // }
                   // else clearInterval(scrollInterval); 
               // });
            currentElement = " ";
          }      
      }
    });

// window.onload = colorWords();
