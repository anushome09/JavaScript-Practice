// Project to remove the image from the website when we click on the image

// First we need to select all the element 
// We will select the ul <unordered list>
document.querySelector('#images').addEventListener('click', function(e) {
    // To check where we are getting an event object
    // console.log(e);   -- perform successfully

    // console.log(e.target); -- It will return the element you click for example the image
    // console.log(e.target.parentNode);  -- It will return the parent of the clicked element

    // Since the image is in the list form we need to remove the list element as well
    // so we need to deal with the parent element
    let removeElement = e.target.parentNode
    // Deleting the selected element
    removeElement.remove()
})


// To avoid any anomalous behaviour we need to put strict checking 
document.querySelector('#images').addEventListener('click', function(e) {
    // To avoid event trigger by clicking other element rather then the images
    if (e.target.tagName === 'IMG') {
        let removeElement = e.target.parentNode
        // Deleting the selected element
        removeElement.remove()
    }
})