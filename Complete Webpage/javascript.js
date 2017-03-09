
function flogin() {
    location.href ="Login.html";
}
function fbackhome() {
    location.href ="main.html";
}
function fdocument() {
    location.href ="document.html";
}
function fwebviewer() {
    location.href ="webviewer.html";
}
function fsystems() {
    location.href ="systems.html";
}
function fdownload(){
    location.href ="download.html";
}
function fmenu(){
    var myElement = document.getElementsByClassName("topbutton");
    var menuE = document.getElementById("menu");
    var txtcontainerE = document.getElementsByClassName("txtcontainer");
    if(myElement[0].style.display=="none")
    {
        for(var x= 0; x<6 ; x++){
            myElement[x].style.display="block";
            txtcontainerE[0].style.top = "485px";
        }   
    }
    else{
         for(var x= 0; x<6 ; x++){
            myElement[x].style.display="none";
            txtcontainerE[0].style.top = "105px";
         }   
    }
}
function fresize(){
    var myElement = document.getElementsByClassName("topbutton");
    var menuE = document.getElementById("menu");
    var screenWidth = window.innerWidth;
    var txtcontainerE = document.getElementsByClassName("txtcontainer");
    txtcontainerE[0].style.top="105px";
    if(screenWidth > 1410){
        for(var x= 0; x<6 ; x++){
            myElement[x].style.display="block";
        } 
        menuE.style.display="none";
    }
    else if(screenWidth > 524){
        for(var x= 0; x<6 ; x++){
            myElement[x].style.display="none";
         }
        menuE.style.display="block";
    }
    fgraphics();
}
function fgraphics(){
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    var myElement = document.getElementsByClassName("steps");
    if(screenWidth < 486){
        var x = 0;
        for(x = 0; x<3 ;x++){
            myElement[x].style.width="150px";
            myElement[x].style.height="150px";
        }
    }
    else{
        for(x = 0; x<3 ;x++){
            myElement[x].style.width="330px";
            myElement[x].style.height="330px";
        }
    }
}