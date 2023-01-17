/* ----------------------------------------------- */
/*
/*    [js-file]: jsDate-mp3-clickListener.js
/*    
/*    [info]: defines actually Date and
      register 3 Label Click Listener to play
      mp3 audio from main card 
      ( docs , projects , about )


/*
/* ----------------------------------------------- */



/* ------------------------------------------------------- */
/* Actually Date 
/* ------------------------------------------------------- */

var jsDateToday = document.getElementById("js-date-today");

function setDateToday() {

    var today = new Date();
    var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

    return date;

}

jsDateToday.innerText = setDateToday(); 






/* --------------------------------------------------------------------------------------------- */
/*  MP3 Label Click Listener 
/*  > Audio registered 
/*  > 3 Label Click Lister ( docs , projects , about )
/* --------------------------------------------------------------------------------------------- */

/* [remmeber]: the function .play() , .pause() are 
   default html5 function to play a audio / stop audio */

/* Initialiaze 3 Audio File to use .play() , .pause() */
var audioMp3Docs = document.getElementById("audioMp3Docs"); 
var audioMp3Projects = document.getElementById("audioMp3Projects"); 
var audioMp3About = document.getElementById("audioMp3About"); 



/* ---------------------------------------------------------------- */
/* [1/3] MP3 Docs Label Listener
/* ---------------------------------------------------------------- */ 

/* Initialiaze mp3 checkboxes for status is checked true / false */   
var chkMp3Docs = document.getElementById("chk-mp3-docs");

/* label listener */
var lblMp3Docs = document.getElementById("js-lbl-mp3-docs").addEventListener( "click" , 

    // Callback Funktion to work if this click happend 
    function() {

         /* if by click is first empty , go to else */
         if( chkMp3Docs.checked ) {

            console.log("Audio > Pause")
            audioMp3Docs.pause();        
        }
        else {

            console.log("Audio > Play")
            audioMp3Docs.play();
        }

    }

); 

/* ---------------------------------------------------------------- */
/* [2/3] MP3 Projects Label Listener
/* ---------------------------------------------------------------- */ 

/* checkBox in js */
var chkMp3Projects = document.getElementById("chk-mp3-projects");

/* label listener */
var lblMp3Projects = document.getElementById("js-lbl-mp3-projects").addEventListener( "click" , 

    // Callback Funktion to work if this click happend 
    function() {

         /* if by click is first empty , go to else */
         if( chkMp3Projects.checked ) {

            console.log("Audio > Pause")
            audioMp3Projects.pause();
           
        }
        else {

            console.log("Audio > Play")
            audioMp3Projects.play();

        }

    }

); 




/* ---------------------------------------------------------------- */
/* [3/3] MP3 About Label Listener
/* ---------------------------------------------------------------- */ 


/* checkBox in js */
var chkMp3About = document.getElementById("chk-mp3-about");

/* label listener */
var lblMp3About = document.getElementById("js-lbl-mp3-about").addEventListener( "click" , 

    // Callback Funktion to work if this click happend 
    function() {

         /* if by click is first empty , go to else */
         if( chkMp3About.checked ) {

            console.log("Audio > Pause")
            audioMp3About.pause();
           
        }
        else {

            console.log("Audio > Play")
            audioMp3About.play();

        }

    }

); 