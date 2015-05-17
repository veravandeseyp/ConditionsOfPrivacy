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
  var txt = $('#message').text().toLowerCase();

  var divCan = $("#whatwecan");
  var divCollect = $("#whatwecollect");
  var divMay = $("#whatwemay");
  var divUse = $("#whatweuse");
  var divWill = $("#whatwewill");

  var whatWeCan = txt.match(/(we can )(\w+)/g);
  var whatWeCollect = txt.match(/(we collect )(\w+)/g);
  var whatWeMay = txt.match(/(we may )(\w+)/g);
  var whatWeUse = txt.match(/(we use )(\w+)/g);
  var whatWeWill = txt.match(/(we will )(\w+)/g);
  
 
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
      if( cans[i] == "we can each" ) {
        var newcans = txt.match(/(we can each )(\w+)/g);
        newcans = String(newcans.join());
        newcans = newcans.split(',');
        cans[i] = newcans[Ceach];
        Ceach+=1;
      } else if( cans[i] == "we can of" ) {
        var newcans = txt.match(/(we can of )(\w+) (\w+)/g);
        newcans = String(newcans.join());
        newcans = newcans.split(',');
        cans[i] = newcans[Cof];
        Cof+=1;
      } else {
        cans[i] = cans[i];
      }
      cans[i] = cans[i].replace("we can ", "");  
    }
    cans = String(cans);
    cans = cans.replace(/,/g, '<br>')
    divCan.append( cans );
  }

  if( whatWeCollect == null ) {
  } else {
    var collects = String(whatWeCollect.join());
      collects = collects.split(',');
    for( var i = 0; i < collects.length; i++ ) {
      if( collects[i] == "we collect and" ) {
        var newcollects = txt.match(/(we collect and )(\w+)/g);
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
      } else if( collects[i] == "we collect it" ) {
        var newcollects = collects.splice( i, 1);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        // collects[i] = newcollects[CLLit];
        // CLLit+=1;
      } else if( collects[i] == "we collect device" ) {
        var newcollects = txt.match(/(we collect device).(\w+)/g);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        collects[i] = newcollects[CLLdev];
        CLLdev+=1;
      } else if( collects[i] == "we collect from" ) {
        var newcollects = txt.match(/(we collect from).(\w+).(\w+).(\w+).(\w+)/g);
        newcollects = String(newcollects.join());
        newcollects = newcollects.split(',');
        collects[i] = newcollects[CLLfrom];
        CLLfrom+=1;
      } else {
        collects[i] = collects[i];
      }
     collects[i] = collects[i].replace("we collect ", "");  
    }
    collects = String(collects);
    collects = collects.replace(/,/g, '<br>')
    divCollect.append( collects );
  }

  if( whatWeMay == null ) {
  } else {
    var mays = String(whatWeMay.join());
      mays = mays.split(',');
    for( var i = 0; i < mays.length; i++ ) {
      if( mays[i] == "we may also" ) {
        var newmays = txt.match(/(we may also )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Malso];
        Malso+=1;
      } else if (mays[i] == "we may later" ){
        var newmays = txt.match(/(we may later )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mlater];
        Mlater+=1;
      } else if (mays[i] == "we may be" ){
        var newmays = txt.match(/(we may be )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mbe];
        Mbe+=1;
      } else if (mays[i] == "we may not" ){
        var newmays = txt.match(/(we may not )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mnot];
        Mnot+=1;
      } else if (mays[i] == "we may have" ){
        var newmays = txt.match(/(we may have )(\w+)/g);
        newmays = String(newmays.join());
        newmays = newmays.split(',');
        mays[i] = newmays[Mhave];
        Mhave+=1;
      } else {
        mays[i] = mays[i];
      }
     mays[i] = mays[i].replace("we may ", "");  
    }
    mays = String(mays);
    mays = mays.replace(/,/g, '<br>')
    divMay.append( mays );
  }

  if( whatWeUse == null ) {
  } else {
    var uses = String(whatWeUse.join());
      uses = uses.split(',');
    for( var i = 0; i < uses.length; i++ ) {
      if( uses[i] == "we use that" ) {
        var newuses = txt.match(/(we use that )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthat];
        Uthat+=1;
      } else if( uses[i] == "we use the" ) {
        var newuses = txt.match(/(we use the )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthe];
        Uthe+=1;
      } else if( uses[i] == "we use to" ) {
        var newuses = txt.match(/(we use to )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uto];
        Uto+=1;
      } else if( uses[i] == "we use for" ) {
        var newuses = txt.match(/(we use for )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Ufor];
        Ufor+=1;
      } else if( uses[i] == "we use various" ) {
        var newuses = txt.match(/(we use various )(\w+)/g);
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
      } else if( uses[i] == "we use this" ) {
        var newuses = txt.match(/(we use this )(\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Uthis];
        Uthis+=1;
      } else if( uses[i] == "we use certain" ) {
        var newuses = txt.match(/(we use certain )(\w+) (\w+)/g);
        newuses = String(newuses.join());
        newuses = newuses.split(',');
        uses[i] = newuses[Ucert];
        Ucert+=1;
      } else {
        uses[i] = uses[i];
      }
      uses[i] = uses[i].replace("we use ", "");  
    }
    uses = String(uses);
    uses = uses.replace(/,/g, '<br>')
    divUse.append( uses );
  }

  if( whatWeWill == null ) {
  } else {
    var wills = String(whatWeWill.join());
      wills = wills.split(',');
    for( var i = 0; i < wills.length; i++ ) {
      if( wills[i] == "we will not" ) {
        var newwills = txt.match(/(we will not )(\w+)/g);
        newwills = String(newwills.join());
        newwills = newwills.split(',');
        wills[i] = newwills[Wnot];
        Wnot+=1;
      } else if( wills[i] == "we will also" ) {
        var newwills = txt.match(/(we will also )(\w+)/g);
        newwills = String(newwills.join());
        newwills = newwills.split(',');
        wills[i] = newwills[Walso];
        Walso+=1;
      } else {
        wills[i] = wills[i];
      }
     wills[i] = wills[i].replace("we will ", "");  
    }
    wills = String(wills);
    wills = wills.replace(/,/g, '<br>')
    divWill.append( wills );
  }

  // No linguistic exceptions: append all 
  if( cans == null ) {
    if( whatWeCan == null ) {
    } else {
      for( var i = 0; i < whatWeCan.length; i++ ) {
        whatWeCan[i] = whatWeCan[i].replace("we can ", "");  
      }
      whatWeCan = String(whatWeCan.join());
      whatWeCan = whatWeCan.replace(/,/g, '<br>');
      divCan.append(whatWeCan);
    }
  }

  if( collects == null ) {
    if( whatWeCollect == null ) {
    } else {
      for( var i = 0; i < whatWeCollect.length; i++ ) {
        whatWeCollect[i] = whatWeCollect[i].replace("we collect ", "");  
      }
      whatWeCollect = String(whatWeCollect.join());
      whatWeCollect = whatWeCollect.replace(/,/g, '<br>');
      divCollect.append(whatWeCollect);
    }
  }

  if( mays == null ) {
    if( whatWeMay == null ) {
    } else {
      for( var i = 0; i < whatWeMay.length; i++ ) {
        whatWeMay[i] = whatWeMay[i].replace("we may ", "");  
      }
      whatWeMay = String(whatWeMay.join());
      whatWeMay = whatWeMay.replace(/,/g, '<br>');
      divMay.append(whatWeMay);
    }
  }

  if( uses == null ){
    if( whatWeUse == null ) {
    } else {
      for( var i = 0; i < whatWeUse.length; i++ ) {
        whatWeUse[i] = whatWeUse[i].replace("we use ", "");  
      }
      whatWeUse = String(whatWeUse.join());
      whatWeUse = whatWeUse.replace(/,/g, '<br>');
      divUse.append(whatWeUse);
    }
  }

  if( wills == null ){
    if( whatWeWill == null ) {
    } else {
      for( var i = 0; i < whatWeWill.length; i++ ) {
        whatWeWill[i] = whatWeWill[i].replace("we will ", "");  
      }
      whatWeWill = String(whatWeWill.join());
      whatWeWill = whatWeWill.replace(/,/g, '<br>');
      divWill.append(whatWeWill);
    }
  }
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

$(document).ready( function() {
   delayFunction();
});
