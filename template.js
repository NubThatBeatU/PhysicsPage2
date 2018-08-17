var getDataForId = function(id) {
 //detail view template
var DetailView = function(id, The_scenarios, Basic, ME, Force,) {
    return `    <h2> The Physics Behind <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">___________</button>
    <div id="myDropdown" class="dropdown-content">
        
        <div class="listView"></div>

    </div>
</div>
</h2>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Filters</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
<div class="navbar-nav">
  <button class="nav-item nav-link active" onclick="BasicFilter" >None <span class="sr-only">(current)</span></button>
  <button class="nav-item nav-link" onclick="MEFilter()">Mechancical Energy</button>
  <button class="nav-item nav-link" onclick="ForcesFilter()">Forces</button>
</div>
</div>
</nav>

<div class="IframeFilters"></div>

<!-- <iframe width="853" height="480" style="float:middle" src="https://www.youtube.com/embed/Vc7f_aDi1jM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe> -->`
}
    // 1. Gets the data from the Airtable API
    $.getJSON("https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV", function( data ) {
        // console.log(data.records);
        var html = [];
        // 2. Iterates over every record and uses the list template
        $.each( data.records, function( index, val ) {
          // console.log(val.fields)
          var id = record.id
          var fields = val.fields;
          var Basic = fields["Basic"];
          var ME = fields["ME"];
          var Force = fields["Force"];
      var itemHTML = detailView(id, Basic, ME, Force,);
    
  var id = getParameterByName("id");
  // If we have an ID, we should only get the data for one item
  // Otherwise, we should display the data for all items
  var Basic = true;
  var ME = false;
  var Forces = false;

var BasicFilter = function() { 
    ME = false; 
    Forces = false;
    Basic = true;
}
var MEFilter = function() { 
    ME = true; 
    Forces = false;
    Basic = false;
}
var ForcesFilter = function() { 
    ME = false; 
    Forces = true;
    Basic = false;
    }
var IframeTemplateBasic
var BasicIframe = function(id) {
    $.getJSON("https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV", function( record ) {
    var html = [];
    var id = record.id;
    var fields = record.fields;
    var Basic = fields["Basic"];

    $(".IframeFilters").append(html.join(""));
    
}
if (id) {
    DetailView(id);
    if (Basic) {
        BasicIframe();
    } else if (ME){
        MEIframe();
    } else if (Forces){
        ForcesIframe();
    }
} else {
    getDataForList();
  }