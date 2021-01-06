/* NOTE: This file is currently commented out and WILL NOT WORK. This is an example template.

// Run the initialization function
$(document).ready(initJs);

/**
 * intellisense test
 */
function initJs() {
    // Add any custom javascript function calls here
    adjustAnchorScrollLocation();
}

// Add custom function calls here
/**
 * Add a scroll height buffer (in pixels) whenever users click on an anchor tag
 * @param int heightBuffer - Number of pixels to subtract as a buffer
 */
function adjustAnchorScrollLocation(heightBuffer = 200) {
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - heightBuffer);
    });
}