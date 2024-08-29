function Merge() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_partition(start, end) {
    if (start >= end) {return;}
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow"); // Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    
}

function merge_sort(start, mid, end) {
    // Calculate the sizes of the two subarrays
    var n1 = mid - start + 1;
    var n2 = end - mid;

    // Create temporary arrays
    var L = [];
    var R = [];

    // Fill L with the left half
    for (var i = 0; i < n1; i++) {
        L[i] = div_sizes[start + i];
        div_update(divs[start + i], div_sizes[start + i], "yellow"); // Color update for left half
    }

    // Fill R with the right half
    for (var j = 0; j < n2; j++) {
        R[j] = div_sizes[mid + 1 + j];
        div_update(divs[mid + 1 + j], div_sizes[mid + 1 + j], "yellow"); // Color update for right half
    }

    // Initial indexes of the two subarrays
    var i = 0, j = 0;
    var k = start;

    // Merge the temp arrays back into the original array
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            div_sizes[k] = L[i];
            div_update(divs[k], div_sizes[k], "red"); // Color update
            i++;
        } else {
            div_sizes[k] = R[j];
            div_update(divs[k], div_sizes[k], "red"); // Color update
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        div_sizes[k] = L[i];
        div_update(divs[k], div_sizes[k], "red"); // Color update
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        div_sizes[k] = R[j];
        div_update(divs[k], div_sizes[k], "red"); // Color update
        j++;
        k++;
    }

    // Final update to mark the merged section as sorted (green)
    for (var t = start; t <= end; t++) {
        div_update(divs[t], div_sizes[t], "green"); // Color update
    }
}
