/*
    *****************
    DONE BY:-   Aditya Singh
    
    *****************
*/

// Initialize default speed for sorting visualization
var speed = 1000;

// Event listener for input changes to adjust sorting speed
inp_aspeed.addEventListener("input", adjustSpeed);

// Function to adjust speed based on user input
function adjustSpeed() {
    var array_speed = inp_aspeed.value;

    // Set speed based on the input value
    switch (parseInt(array_speed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 100;
            break;
        case 4:
            speed = 1000;
            break;
        case 5:
            speed = 10000;
            break;
    }

    // Recalculate delay time based on the new speed
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

// Initial delay time calculation
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0; // Cumulative delay to ensure visualization is sequential

// Function to update the visual representation of a sorting element
function div_update(cont, height, color) {
    // Set a timeout to delay the update for visualization effect
    window.setTimeout(function() {
        // Update the style of the div element
        cont.style = `
            margin: 0% ${margin_size}%;
            width: ${100 / array_size - (2 * margin_size)}%;
            height: ${height}%;
            background-color: ${color};
        `;
    }, c_delay += delay_time); // Increment cumulative delay
}

// Function to enable control buttons after sorting is complete
function enable_buttons() {
    window.setTimeout(function() {
        // Enable all buttons and reset their styling
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = []; // Clear existing classes
            butts_algos[i].classList.add("butt_unselected"); // Add unselected class

            butts_algos[i].disabled = false; // Enable button
        }
        // Re-enable other input elements
        inp_as.disabled = false;
        inp_gen.disabled = false;
        inp_aspeed.disabled = false;
    }, c_delay += delay_time); // Increment cumulative delay
}
/*
    *****************
    DONE BY:-   Aditya Singh
    
    *****************
*/