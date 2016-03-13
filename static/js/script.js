function requestFoursquareData() {
  $.getJSON('/foursquare_data', function( data ) {
    $( "#foursquare" ).html( data );
    console.log(data)
  });

  $.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
}