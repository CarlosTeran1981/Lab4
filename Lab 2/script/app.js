
var catalog = [];

function getCatalog(){
  $.ajax({
      url: "http://restclass.azurewebsites.net/API/points",
      type: "GET",
      success: function(res){
        console.log("Success Fool.....", res);
        console.log("There are " + res.length + "Item on the response");
        console.log("First item from ");

        for (let i=0; i < res.length; i++){
          var item = res [i];
          if (item.user == "Carlos"){
            catalog.push(item); //append to catalog
            displayItem(item); //send it to the screen
          }
        }
      },

      error: function(error){
        console.error("No internet, Fool.....", error);
      }

  })
}

function displayCatalog(){

// for every item on the catalog array
for(let i=0; i< catalog.length; i++){
  var item = catalog[i];

displayItem(item);

}
}

function displayItem(item){
  // get the reference to UL
var ul = $("#catalog");

// create an LI
var li = `
<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
    <h6>Price: ${item.price}</h6>
  </div>
</div>`;

// add the li to ul
ul.append(li);


}

function search(){
  var text = $("#txtSearch").val().toLowerCase();
  console.log("User wants to search for:" + text);

  // Steps tp implement search functionality
  // -clear previously search elements
  // -travel the array of catalog
  // -get each element on the array
  // -if element title is equal to searchText, then show the item
  // -repeat step 3

  //clear
  $("#catalog").html('');

  for(let i=0; i<catalog.length; i++){
      var item = catalog [i];

      if (item.title.toLowerCase().indexOf(text) >= 0
       || item.description.toLowerCase().indexOf(text) >=0){
        displayItem(item);
       }   
      
  }

}
 




function init(){
  console.log("Init Catalog page");

  getCatalog();
  displayCatalog();

  $("#btnSearch").click(search);
  $("#txtSearch").keypress(function (args){
    if(args.keyCode == 13){
      search();
      args.preventDefault();

    }
  });

  $(".cat-filter").click(function(){
    var category = $ (this).attr('catname');
    console.log("filter by category",category);
  });
}



window.onload = init;

// investigate/read homework

/* http methods
  http status codes
  */