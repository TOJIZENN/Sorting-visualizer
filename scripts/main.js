/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

// Variable to store the time taken
var timeTakenElement = document.getElementById('time_taken');

// Array generation and updation
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = `margin:0% ${margin_size}%; background-color:blue; width:${100 / array_size - (2 * margin_size)}%; height:${div_sizes[i]}%;`;
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

// Running the appropriate algorithm
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true; // Keep speed slider enabled for dynamic adjustment
    }
}

function enable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].disabled = false;
    }
    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
}

function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");

    // Record the start time
    var startTime = new Date().getTime();

    switch (this.innerHTML) {
        case "Bubble 🫧":
            Bubble();
            break;
        case "Selection ✅":
            Selection_sort();
            break;
        case "Insertion 🖋":
            Insertion();
            break;
        case "Merge 🔗":
            Merge();
            break;
        case "Quick 🫰":
            Quick();
            break;
        case "Heap ⛰":
            Heap();
            break;
    }

    // Use setTimeout to wait until sorting is done, then calculate the time
    window.setTimeout(function() {
        // Record the end time
        var endTime = new Date().getTime();

        // Calculate time taken in seconds
        var timeTaken = (endTime - startTime) / 1000;

        // Display time taken
        timeTakenElement.innerHTML = timeTaken.toFixed(2); // Format to 2 decimal places

        enable_buttons(); // Re-enable buttons after sorting is done
    }, c_delay);
}

// Reset button functionality
var resetButton = document.getElementById('reset-Button');
resetButton.addEventListener('click', function() {
    location.reload();
});
