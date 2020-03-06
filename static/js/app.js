// from data.js
var tableData = data;
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
    var thead = d3.select("thead");
    thead.html("");
    thead.append("h3").text(`Sorry, no UFO sigthing(s) for ${inputText}.`);
  }
  else {
    // call filterSightings function
    filteredData.forEach((sightings) => {
      // Get a reference to the table body
      var tbody = d3.select("tbody");
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
    })
  }
})
