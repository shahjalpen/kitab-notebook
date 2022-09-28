//Disable Ctrl Default Save
document.addEventListener( "keydown", function (e) {
    if ((e.code == "KeyS" || e.code == "KeyD") && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    // Process event...
    console.log("Disabled defualt save feature!");
    }
}, false );