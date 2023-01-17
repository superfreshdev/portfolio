/* ----------------------------------------------- */
/*
/*    [js-file]: header-nav-scroll-set.js
/*    
/*    [info]: sets nav links be reaching there 
      right content 
/*
/* ----------------------------------------------- */



/* -------------------------------------------------------------- */
/* Variable 
/* -------------------------------------------------------------- */

/* Array Header Nav Links */
var headerNavLinks = document.querySelectorAll('#header-nav-link-area > a');
/* Default Header Nav Docs Link Set  */
var headerNavDocsLink = document.querySelector('#header-nav-link-area > a:nth-of-type(1)')



/* scrolling content pos for setting anker link active */
var current = "";

/* calc scrolling area belongs to anker link */
var mainDivTop = "";
var mainDivHeight = "";
var mainDivNewScrollHeight = 0;

// dynamically array with push
var heightMainContentCards = [];

var heightMainContentCardDocs = 0;
var heightMainContentCardProjects = 0;
var heightMainContentCardAbout = 0;

/* --------------------------------------------------------- */
/* Functions 
/* --------------------------------------------------------- */


/* Set Default First Header Nav Link on active */
function setFirstHeaderNavLinkOnActive() {

    console.log("[Setze 'farblich' Anfangs Header Nav Link 'Docs']" )

    if( headerNavLinks.length > 0 ) {

        // console.log("set ID to first Header Nav Link ");
        /* set first header nav a link with id */
        headerNavDocsLink.id = "header-nav-active";

    } 
    else {
        console.log("[Error] - No a-Tag found to 'set' id");
    }
}

/* Remove Active Header Nav Link */
function removeActiveIdOnHeaderNavLink() {

    // console.log("[Delete] - Old Active ID ");

    if( headerNavLinks.length > 0 ) {

        headerNavLinks.forEach( activeLink => {

            if( activeLink.hasAttribute("id") ) {

                // console.log("gesetztes nav link gefunden & löschen ");
                activeLink.removeAttribute("id");
            } 

        })
    }
    else {
        console.log("[Error] - No a-Tag found to 'delete' id")
    }
}

/* get ScrollY Position */
function getScrollYPosition() {
    return scrollY;
}



/* --------------------------------------------------------- */
/* Run
/* --------------------------------------------------------- */

/* Anfangs setzen & loeschen um neu zu setzen */
// setFirstHeaderNavLinkOnActive();
// removeActiveIdOnHeaderNavLink();


var flagSet = 0;

function setMainContentCardsHeights() {

      /* only works if continously will be generated */
      var mainDivs = document.querySelectorAll('main > .trigger-main-card');

      for( let i= 0; i < mainDivs.length; i++ ) {

        mainDivTop = mainDivs[i].offsetTop;
        mainDivHeight = mainDivs[i].clientHeight;
// 1.8v mainDivTop + ( mainDivHeight )
        mainDivNewScrollHeight =  (mainDivTop + ( mainDivHeight - 200 ) ); 

        // set card height of docs 
        if( i === 0 && mainDivNewScrollHeight != heightMainContentCardDocs ) {

            heightMainContentCardDocs =  mainDivNewScrollHeight;
        }

        // set card height of projects
        if( i === 1 && mainDivNewScrollHeight != heightMainContentCardProjects ) {

            heightMainContentCardProjects =  mainDivNewScrollHeight;
        } 

        // set card height of about
        if( i === 2 && mainDivNewScrollHeight != heightMainContentCardAbout ) {

            heightMainContentCardAbout =  mainDivNewScrollHeight;

            // console.log("---------------------------------------")
            // console.log(heightMainContentCardDocs);
            // console.log(heightMainContentCardProjects);
            // console.log(heightMainContentCardAbout);
            // console.log("---------------------------------------")

        }

      }


        // You Are in Docs 
        if( scrollY <= heightMainContentCardDocs && flagSet === 0) {

            // console.log(">>> Docs <<<<")
            removeActiveIdOnHeaderNavLink();
            document.querySelector('#header-nav-link-area > a:nth-of-type(1)').id = "header-nav-active";

            flagSet = 1;

        }
   
        // You Are in Projects -> hier mit delay testen damit beim docs nach about kein blinken erscheint       
        if( scrollY > heightMainContentCardDocs && scrollY <= heightMainContentCardProjects && flagSet === 1) {

            // console.log(">>> Projects <<<<")
            removeActiveIdOnHeaderNavLink();
            document.querySelector('#header-nav-link-area > a:nth-of-type(2)').id = "header-nav-active";

            flagSet = 0;

        }

        // You Are in About
        if( scrollY > heightMainContentCardProjects && flagSet === 0) {

            // console.log(">>> About <<<<")
            removeActiveIdOnHeaderNavLink();
            document.querySelector('#header-nav-link-area > a:nth-of-type(3)').id = "header-nav-active";

            flagSet = 1;
            
        }
        
     
}

function scroll2() { 

    // Generate every time actually main content card height 
    // because it can be changed by flipping content and 
    // our get an bigger height 

    setMainContentCardsHeights();

    // console.log("[ScrollY] >>> " + scrollY + " px")
     
}

setFirstHeaderNavLinkOnActive();

setMainContentCardsHeights();

window.addEventListener('scroll', ()=> scroll2() );






