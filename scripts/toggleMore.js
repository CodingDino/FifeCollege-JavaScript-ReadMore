
// We create a function called toggleMore(). This function accepts three parameters - the name of the element to be hidden or shown, the name of the element containing the elipsis that will be hidden or shown opposite the main element, and the name of the button used to hide or show these items.

function toggleMore(moreName, dotsName, buttonName) {
    
    // We declare variables to store the three elements we plan to edit - the more section of our text, the dots (elipsis), and the button. We then store the elements in these variables using document.getElementById and passing along the names for these elements as provided to our own function from the calling code.
    
    var more = document.getElementById(moreName);
    var dots = document.getElementById(dotsName);
    var button = document.getElementById(buttonName);
    
    // We check if the more element's style attribute's display setting is set to "none" - is the more text currently hidden?
    if (more.style.display === "none") {
        
        // The text is currently HIDDEN, so...
        // We should show it since we pressed the button!
        // Show the text, hide the dots, and change the button to say "Read less"
        
        more.style.display = "inline";
        dots.style.display = "none";
        button.innerHTML = "Read less";
        
    } else {
        
        // The text is currently is NOT hidden, therefore it is SHOWN, so...
        // We should hide it since we pressed the button!
        // Hide the text, show the dots, and change the button to say "Read more"
        
        more.style.display = "none";
        dots.style.display = "inline";
        button.innerHTML = "Read more"; 
    
    }
    
}