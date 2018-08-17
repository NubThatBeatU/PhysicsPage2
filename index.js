/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var listView = function(id, The_scenarios) {
  return `<a href="index.html?id=${id}">${The_scenarios}</a>`;
}

var airtable_list_url = 'https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV'

//var getDataForList = function() {
// 1. Gets the data from the Airtable API
  $.getJSON("https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV", function( data ) {
    // console.log(data.records);
    var html = [];
    // 2. Iterates over every record and uses the list template
    $.each( data.records, function( index, val ) {
      // console.log(val.fields)
      var id = val.id
      var fields = val.fields;
      var The_scenarios = fields["The_scenarios"];
      var itemHTML = listView(id, The_scenarios);
      html.push(itemHTML);
    });
    // 3. Adds HTML for every item to our page
    $(".listView").append(html.join(""));
  });

//   var DetailView = function() {
//     return `<h2> The Physics Behind <div class="dropdown">
//     <button onclick="myFunction()" class="dropbtn">___________</button>
//     <div id="myDropdown" class="dropdown-content">
        
//         <div class="listView"></div>

//     </div>
// </div>
// </h2>

// <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
// <a class="navbar-brand" href="#">Filters</a>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
// <div class="navbar-nav">
//   <button class="nav-item nav-link active" onclick="BasicFilter()" >None <span class="sr-only">(current)</span></button>
//   <button class="nav-item nav-link" onclick="MEFilter()">Mechancical Energy</button>
//   <button class="nav-item nav-link" onclick="ForcesFilter()">Forces</button>
// </div>
// </div>
// </nav>

// <!-- <div class="IframeFilters"></div> -->

// <iframe width="853" height="480" style="float:middle" src="https://www.youtube.com/embed/ukGlOZNw328" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
// </iframe>`;
//   }
//   var id = getParameterByName("id");

// // If we have an ID, we should only get the data for one item
// // Otherwise, we should display the data for all items
// if (id) {
//   Detailview();
// } else {
//   getDataForList();
// }

  