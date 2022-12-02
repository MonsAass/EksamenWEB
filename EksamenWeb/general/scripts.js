
    /*variabel som sjekker høyden til vinduet*/
    var høyde = window.matchMedia("(max-height: 600px)");

    /*åpner menyen, blurer bakgrunnen 
    og gjør at man ikke kan scrolle på siden*/
    function openSlideMenu(){

        /*if-statement som gir menyen høyde basert på høyden til vinduet*/
        if (høyde.matches){
            document.getElementById("nav_meny").style.height = "100vh" ;
        }
        else{
            document.getElementById("nav_meny").style.height = "55vh" ;
        }

        document.getElementById("main").style.filter="blur(2px)";
        
        document.body.style.overflow="hidden";


        /*gir alle linksa i nav_meny en tab index
        så man kan trykke på de hvis man ikke kan bruke musepekeren
        (univeral design)*/
        var valg = document.querySelectorAll("div#nav_meny div");
        var valget = document.querySelectorAll("div#nav_meny div a");

        for(var i = 0, len = valg.length; i < len; i ++){
            valget[i].tabIndex = 0; 
        }

        document.getElementById("footer").style.filter="blur(2px)";
    }

    /*lukker menyen, fjerner blur fra bakgrunnen 
    og gjør at man kan scrolle igjen*/
    function closeMenu(){

        document.getElementById("nav_meny").style.height= "0";

        document.getElementById("main").style.filter="blur(0)";
        
        document.body.style.overflow="visible";



        /*fjerner tab index fra alle linksa i nav_meny
        så de ikke er tilgjengelig når menyen er lukket*/
        var valg = document.querySelectorAll("div#nav_meny div");
        var valget = document.querySelectorAll("div#nav_meny div a");

        for(var i = 0, len = valg.length; i < len; i ++){
            valget[i].tabIndex = -1; 
        }

        document.getElementById("footer").style.filter="blur(0px)";
    }

    /*tar brukeren opp til toppen av siden*/
    function tilTopp(){
        document.body.scrollTop= 0;
        document.documentElement.scrollTop = 0;
    }