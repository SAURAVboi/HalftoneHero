"use strict";

// Get references to DOM elements
const preview = document.getElementById("preview");
const upload = document.getElementById("upload");
const color = document.getElementById("color");
const filterSelect = document.getElementById("filter-select");

// When a file is uploaded, display it in the <img> preview element
upload.addEventListener("input", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Set image preview source to the uploaded file
    preview.src = URL.createObjectURL(file);
});

// When color input changes, update the SVG flood colors
color.addEventListener("input", (e) => {
    const val = color.value;

    // Update flood color for both filters
    flood.setAttribute("flood-color", val);
    floodHd.setAttribute("flood-color", val);
});

// When filter is changed from dropdown, apply it
filterSelect.addEventListener("change", setFilter);

// Apply selected filter to the image
function setFilter() {
    const val = filterSelect.value;

    // If a filter is selected, apply it using CSS filter referencing the SVG filter
    preview.style.filter = val ? `url(#${val})` : "none";
}

// Apply the default filter on load
setFilter();
