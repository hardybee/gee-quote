$(document).ready(function() {
  $("#get-quote").on("click", function () {
    console.log("script.js");
    var quoteBin = $("#quote-bin");
    var html = "";
    console.log(quoteBin.selector.length);
    $.getJSON("http://localhost:3000/js/quotes.json", function (jsonResponse) {
      console.log(jsonResponse);
      // var items = jsonResponse.items.map(function (item) {
      //   return item.key + ': ' + item.value;
      var items = jsonResponse.items;
      // need randomizing here
      for (i=0; i<items.length; i++) {
        console.log(items[i].key);
        html = "hey there";
      }
      quoteBin.html(html);
      });
      quoteBin.empty();
      // if (items.length) {
      //   // var content = "<quote>" + items.join("</quote>");
      //   console.log(items);
      //   html = "<p>" + items[0].item.key + " -- " + items[0].item.value + "</p>";
      // }
      
    });
//       $.getJSON("http://localhost:3000/js/quotes.json", function (json) {
//       console.log(json);
//       var html = "";
//       });
  });