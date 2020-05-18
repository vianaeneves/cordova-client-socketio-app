$(document).ready(function () {    
    placeLoader()
    placeDefaultHeader()
    placeFooter()
    setElementsOpacity();
});

function setElementsOpacity() {
    $("body").css({ "opacity": "1" });
    $("head").css({ "opacity": "1" });
}

function placeLoader() {
    $("#loader-container").load("../components/loader.html");
}

function placeFooter() {
    $("#footer").load("../components/footer.html");
}

function placeDefaultHeader() {
    $("#header").load("../components/header.html");
}

function showLoading(text=null) {    
    $("#loader-container").fadeIn( "fast", function() {        
        showLoaderText(text);
    })    
}

function hideLoading() {    
    $("#loader-container").fadeOut( "slow", function() {        
    })
}

function showLoaderText(text) {
    if(text) {
        console.log(`showLoaderText TO show: ${text}`)        
    }    
}

function reloadPage() {
    location.reload()
} 

function goTo(newLocation) {
   window.location = newLocation;      
}

function isDebug() {
    const urlDev = "http://localhost:8500"
    return $.ajax({
        type: "GET",
        url: urlDev,
        async: false
    }).responseText;
}

function getConfigFileUrl() {
    return isDebug() ? "../config/dev.json" : "../config/prd.json"
}



