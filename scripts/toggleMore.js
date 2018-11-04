
// We create a function called toggleVisibility(). This function accepts one parameter - the name of the element to be hidden or shown. If that parameter is provided when the function is called, the function will store it in a variable called elementName.

function toggleVisibility(elementName) {
    
    // We declare a variable called element to store the element we want to edit. We fet this element using document.getElementById, and pass the elementName as parameter to the getElementById function. Remember that this name was provided to us by the calling code through our function's own parameter.
    
    var element = document.getElementById(elementName);
    
    // We check if the element's style attribute's display setting is set to "none" - is the element currently hidden?
    if (element.style.display === "none") {
        
        // If the display is currently "none", we toggle it to "block" - changing it from hidden to shown.
        element.style.display = "block";
        
    } else {
        
        // If the display is NOT currently "none", we change it to "none" - changing it from shown to hidden.
        element.style.display = "none";
        
    }
    
    
}