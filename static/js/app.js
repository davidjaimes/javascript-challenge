// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
// grab reference to the input element
var button = d3.select("#filter-btn");

// when date is entered start function call
button.on("click", function() {
  // grab the value of the input field
  var inputElement = d3.select("#datetime");
  var inputText = inputElement.property("value");

  // filter out only wanted dates
  var filteredData = tableData.filter(obj => obj.datetime === inputText);

  // Conditional check for zero entries
  if (filteredData.length === 0) {
    console.log("Dang! No UFO sigthing for this date:", inputText)
  }
  // call filterSightings function
  filteredData.forEach(function(obj) {
    console.log(obj)
  })
})
