var $product_name = $("#product_name");
var $desription = $("#description");
var $file_path = $("#file_path");
var $availableList = $("#available-list");
var $submitBtn = $("#submitForm");
var API = {
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

var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log("bye");
  var upload = {
    product_name: $product_name.val().trim(),
    description: $desription.val().trim(),
    // file_path: $file_path.val().trim()
  };

  if (!(upload.product_name && upload.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.save(upload).then(function (res) {
    
    // console.log("1")
    // refresh();
  });

  $product_name.val("");
  $desription.val("");
  window.location.pathname = '/'
  // $file_path.val("")
};

$submitBtn.on("click", handleFormSubmit);