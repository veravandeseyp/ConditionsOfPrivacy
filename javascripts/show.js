// ----------------------------------------------

//    Conditions_ 
//    Written by Vera van de Seyp, 2015

// ---------------------------------------------- 

var timeoutID;
// Execute appending only once
var resultsDisplayed = false;

// Displays the default word findings on click
function displayResults() {
  
  $('.block-bottom').click( function() {
    var results = $(".text-results");
    var nextResults = $(this).siblings('.text-results');
    var time = 0;

    nextResults.toggle(time).toggleClass('opened');
    var resultsOpened = nextResults.is('.opened');

    if( resultsOpened ) {
      $(this).css({
        "color" : "red",
      });
    } else {
      $(this).css({
        "color" : "black",
      });
    }
  }); 
}

// Gets the number of appearances of the search term on the page
function getNumbers() {
  var txt = $('#message').text().toLowerCase();

  var divWeCan = $("#wecan");
  var divWeCollect = $("#wecollect");
  var divWeMay = $("#wemay");
  var divWeUse = $("#weuse");
  var divWeWill = $("#wewill");

  var nrWeCan = txt.match(/(we can )(\w+)/g);
  var nrWeCollect = txt.match(/(we collect )(\w+)/g);
  var nrWeMay = txt.match(/(we may )(\w+)/g);
  var nrWeUse = txt.match(/(we use )(\w+)/g);
  var nrWeWill = txt.match(/(we will )(\w+)/g);

  if (nrWeCan == null ) {
    divWeCan.text("0");
  } else {
    divWeCan.text(nrWeCan.length);
  }

  if (nrWeCollect == null ) {
    divWeCollect.text("0");
  } else {
    for( var i = 0; i < nrWeCollect.length; i++ ){
      if( nrWeCollect[i] == "we collect it" ) {
        nrWeCollect.splice(i, 1);
      } else {
        divWeCollect.text(nrWeCollect.length);
      }
    }
  }

  if (nrWeMay == null ) {
    divWeMay.text("0");
  } else {
   divWeMay.text(nrWeMay.length);
  }

  if (nrWeUse == null ) {
    divWeUse.text("0");
  } else {
    divWeUse.text(nrWeUse.length);
  }

  if (nrWeWill == null ) {
    divWeWill.text("0");
  } else {
    divWeWill.text(nrWeWill.length);
  }
}

// Fetches the next word(s) after the search term
function getNextWord() {

  var txt = $('#message').text()
  // .toLowerCase()
  ;

  var divCan = $("#whatwecan");
  var divCollect = $("#whatwecollect");
  var divMay = $("#whatwemay");
  var divUse = $("#whatweuse");
  var divWill = $("#whatwewill");

  var whatWeCan = txt.match(/([wW]e can )(\w+)/g);
  var whatWeCollect = txt.match(/([wW]e collect )(\w+)/g);
  var whatWeMay = txt.match(/([wW]e may )(\w+)/g);
  var whatWeUse = txt.match(/([wW]e use )(\w+)/g);
  var whatWeWill = txt.match(/([wW]e will )(\w+)/g);
  
  //  Linguistic exceptions: edit and append 
  var Ceach = 0;
  var Cof = 0;

  var CLLand = 0;
  var CLLit = 0;
  var CLLdev = 0;
  var CLLfrom = 0;

  var Malso = 0;
  var Mlater = 0;
  var Mbe = 0;
  var Mnot = 0;
  var Mhave = 0;

  var Uthat = 0;
  var Uthe = 0;
  var Uto = 0;
  var Ufor = 0;
  var Uvar = 0;
  var Uit = 0;
  var Uthis = 0;
  var Ucert = 0;

  var Wnot = 0;
  var Walso = 0;

  if( whatWeCan == null ) {
  } else {
    var cans = String(whatWeCan.join());
      cans = cans.split(',');
    for( var i = 0; i < cans.length; i++ ) {
      if( cans[i] == /[wW]e can each/g ) {
        var newcans = txt.match(/([wW]e can each )(\w+)/g);
        newcans = String(newcans.join());
        newcans = newcans.split(',');
        cans[i] = newcans[Ceach];
        Ceach+=1;
      } else if( cans[i] == /[wW]e can of/g ) {
        var newcans = txt.match(/([wW]e can of )(\w+) (\w+)/g);
        newcans = String(newcans.join());
        newcans = newcans.split(',');
        cans[i] = newcans[Cof];
        Cof+=1;
      } else {
        cans[i] = cans[i];
      }
      cans[i] = cans[i].replace(/[wW]e can /g, "");  
    }
    cans = String(cans);
    cans = '<a href="#">' + cans.replace(/,/g, '</a><br><a href="#">') + '</a>';
    divCan.append( cans );
  }

  if( whatWeCollect == null ) {
  } else {
    var collects = String(whatWeCollect.join());
      collects = collects.split(',');
    for( var i = 0; i < collects.length; i++ ) {
      if( collects[i] == /[wW]e collect and/g ) {
        var newcollects = txt.match(/([wW]e collect and )(\w+)/g);
        // for( var j = 0; j < newcollects.length; j++ ) {
        //   if( newcollects[j] == "we collect and why") {
        //     newcollects.splice(j, 1);
        //     console.log( newcollects.splice(j, 1) );
        //   }
        // }
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        collects[i] = newcollects[CLLand];
        CLLand+=1;
      } else if( collects[i] == /[wW]e collect it/g ) {
        var newcollects = collects.splice( i, 1);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        // collects[i] = newcollects[CLLit];
        // CLLit+=1;
      } else if( collects[i] == /[wW]e collect device/g ) {
        var newcollects = txt.match(/([wW]e collect device).(\w+)/g);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        collects[i] = newcollects[CLLdev];
        CLLdev+=1;
      } else if( collects[i] == /[wW]e collect from/g ) {
        var newcollects = txt.match(/([wW]e collect from).(\w+)/g);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        collects[i] = newcollects[CLLfrom];
        CLLfrom+=1;
      } else {
        collects[i] = collects[i];
      }
     collects[i] = collects[i].replace(/[wW]e collect /g, "");  
    }
    collects = String(collects);
    collects = '<a href="#">' + collects.replace(/,/g, '</a><br><a href="#">') + '</a>';
    divCollect.append( collects );
  }

  if( whatWeMay == null ) {
  } else {
    var mays = String(whatWeMay.join());
      mays = mays.split(',');
    for( var i = 0; i < mays.length; i++ ) {
      if( mays[i] == /[wW]e may also/g ) {
        var newmays = txt.match(/([wW]e may also )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Malso];
        Malso+=1;
      } else if (mays[i] == /[wW]e may later/ ){
        var newmays = txt.match(/([wW]e may later )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mlater];
        Mlater+=1;
      } else if (mays[i] == /[wW]e may be/g ){
        var newmays = txt.match(/([wW]e may be )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mbe];
        Mbe+=1;
      } else if (mays[i] == /[wW]e may not/g ){
        var newmays = txt.match(/([wW]e may not )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mnot];
        Mnot+=1;
      } else if (mays[i] == /[wW]e may have/g ){
        var newmays = txt.match(/([wW]e may have )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mhave];
        Mhave+=1;
      } else {
        mays[i] = mays[i];
      }
     mays[i] = mays[i].replace(/[wW]e may /g, "");  
    }
    mays = String(mays);
    mays = '<a href="#">' + mays.replace(/,/g, '</a><br><a href="#">') + '</a>';
    divMay.append( mays );
  }

  if( whatWeUse == null ) {
  } else {
    var uses = String(whatWeUse.join());
      uses = uses.split(',');
    for( var i = 0; i < uses.length; i++ ) {
      if( uses[i] == /[wW]e use that/g ) {
        var newuses = txt.match(/([wW]e use that )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthat];
        Uthat+=1;
      } else if( uses[i] == /[wW]e use the/g ) {
        var newuses = txt.match(/([wW]e use the )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthe];
        Uthe+=1;
      } else if( uses[i] == /[wW]e use to/g ) {
        var newuses = txt.match(/([wW]e use to )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uto];
        Uto+=1;
      } else if( uses[i] == /[wW]e use for/g ) {
        var newuses = txt.match(/(w[wW] use for )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Ufor];
        Ufor+=1;
      } else if( uses[i] == /[wW]e use various/g ) {
        var newuses = txt.match(/([wW]e use various )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uvar];
        Uvar+=1;
      // } else if( uses[i] == "we use it" ) {
      //   var newuses = txt.match(/(we use it )(\w+)/g);
      //   newuses = String(newuses.join());
      //   newuses = newuses.split(',');
      //   uses[i] = newuses[Uit];
      //   Uit+=1;
      } else if( uses[i] == /[wW]e use this/g ) {
        var newuses = txt.match(/([wW]e use this )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthis];
        Uthis+=1;
      } else if( uses[i] == /[wW]e use certain/g ) {
        var newuses = txt.match(/([wW]e use certain )(\w+) (\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Ucert];
        Ucert+=1;
      } else {
        uses[i] = uses[i];
      }
      uses[i] = uses[i].replace(/[wW]e use /g, "");  
    }
    uses = String(uses);
    uses = '<a href="#">' + uses.replace(/,/g, '</a><br><a href="#">') + '</a>';
    divUse.append( uses );
  }

  if( whatWeWill == null ) {
  } else {
    var wills = String(whatWeWill.join());
      wills = wills.split(',');
    for( var i = 0; i < wills.length; i++ ) {
      if( wills[i] == /[wW]e will not/g ) {
        var newwills = txt.match(/([wW]e will not )(\w+)/g);
        newwills = String(newwills.join());
        newwills = newwills.split(',');
        wills[i] = newwills[Wnot];
        Wnot+=1;
      } else if( wills[i] == /[wW]e will also/g ) {
        var newwills = txt.match(/([wW]e will also )(\w+)/g);
        newwills = String(newwills.join());
        newwills = newwills.split(',');
        wills[i] = newwills[Walso];
        Walso+=1;
      } else {
        wills[i] = wills[i];
      }
     wills[i] = wills[i].replace(/[wW]e will /g, "");  
    }
    wills = String(wills);
    wills = '<a href="#">' + wills.replace(/,/g, '</a><br><a href="#">') + '</a>';
    divWill.append( wills );
  }

  // No linguistic exceptions: append all 
  if( cans == null ) {
    if( whatWeCan == null ) {
    } else {
      for( var i = 0; i < whatWeCan.length; i++ ) {
        whatWeCan[i] = whatWeCan[i].replace(/[wW]e can /g, "");  
      }
      whatWeCan = String(whatWeCan.join());
      whatWeCan = '<a href="#">' + whatWeCan.replace(/,/g, '</a><br><a href="#">') + '</a>';
      divCan.append(whatWeCan);
    }
  }

  if( collects == null ) {
    if( whatWeCollect == null ) {
    } else {
      for( var i = 0; i < whatWeCollect.length; i++ ) {
        whatWeCollect[i] = whatWeCollect[i].replace(/[wW]e collect /g, "");  
      }
      whatWeCollect = String(whatWeCollect.join());
      whatWeCollect = '<a href="#">' + whatWeCollect.replace(/,/g, '</a><br><a href="#">') + '</a>';
      divCollect.append(whatWeCollect);
    }
  }

  if( mays == null ) {
    if( whatWeMay == null ) {
    } else {
      for( var i = 0; i < whatWeMay.length; i++ ) {
        whatWeMay[i] = whatWeMay[i].replace(/[wW]e may /g, "");  
      }
      whatWeMay = String(whatWeMay.join());
      whatWeMay = '<a href="#">' + whatWeMay.replace(/,/g, '</a><br><a href="#">') + '</a>';
      divMay.append(whatWeMay);
    }
  }

  if( uses == null ){
    if( whatWeUse == null ) {
    } else {
      for( var i = 0; i < whatWeUse.length; i++ ) {
        whatWeUse[i] = whatWeUse[i].replace(/[wW]e use /g, "");  
      }
      whatWeUse = String(whatWeUse.join());
      whatWeUse = '<a href="#">' + whatWeUse.replace(/,/g, '</a><br><a href="#">') + '</a>';
      divUse.append(whatWeUse);
    }
  }

  if( wills == null ){
    if( whatWeWill == null ) {
    } else {
      for( var i = 0; i < whatWeWill.length; i++ ) {
        whatWeWill[i] = whatWeWill[i].replace(/[wW]e will /g, "");  
      }
      whatWeWill = String(whatWeWill.join());
      whatWeWill = '<a href="#">' + whatWeWill.replace(/,/g, '</a><br><a href="#">') + '</a>';
      divWill.append(whatWeWill);
    }
  }

  $( 'a' ).click( markWord );
}

// Get the total number of words + sentences on the page
function getTotalNumberOfWords() {
  var divWords = $('#total-words');
  var divSentences = $('#total-sentences');
  var txt = $('#message').text();
  var txtWords = txt.split(" ");
  var txtPoints = txt.match(/[.]/g);

  if (txtWords == null ) {
    divWords.text("0");
  } else {
    divWords.text(txtWords.length);
  }

  if (txtPoints == null ) {
    divSentences.text("0");
  } else {
    divSentences.text(txtPoints.length);
  }
}

function delayFunction() {
  timeoutID = window.setTimeout(getNumbers, 100);
  timeoutID = window.setTimeout(getTotalNumberOfWords, 100);
  if( resultsDisplayed == false ) {
  timeoutID = window.setTimeout(getNextWord, 100);
   resultsDisplayed = true;
  };
}

function directFunction() {
    getNumbers();
    getTotalNumberOfWords;
    if( resultsDisplayed == false ) {
        getNextWord();
        resultsDisplayed = true;
    };
}

function markWord( ) {
  var grouptext = $( this ).parent( ).prev( ).prev( ).text( );
  var itemtext = $( this ).text( );

  var searchtext = grouptext + ' ' + itemtext;

  colorWord( searchtext );
}


$(document).ready( function() {
    delayFunction();
});
