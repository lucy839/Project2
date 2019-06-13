// get inputs from handlebars
var $product_name = $("#product_name");
var $desription = $("#description");
var $file_path = $("#file_path");
var $availableList = $("#available-list");
var $submitBtn = $("#addImage");

// api object 
var API = {
  // when called, make ajax call to post
  save: function (db) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/upload",
      data: JSON.stringify(db)
    });
  }
}

// function to submit the first form 
var handleFormSubmit = function (event) {
  event.preventDefault();

  var upload = {
    product_name: $product_name.val().trim(),
    description: $desription.val().trim(),
  };

  if (!(upload.product_name && upload.description)) {
    alert("You must enter an example text and description!");
    return;
  }
  // call api save function
  API.save(upload).then(function () {
  });

  // $product_name.val("");
  // $desription.val("");
   // ***needs to be adjusted***
  alert("You can upload image now!");
};

$submitBtn.on("click", handleFormSubmit);
