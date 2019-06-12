// var $product_name = $("#product_name");
// var $desription = $("#description");
// var $file_path = $("#file_path");
// var $availableList = $("#available-list");
// var $submitBtn = $("#submitForm");
// var API = {
//   save: function (db) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/upload",
//       data: JSON.stringify(db)
//     });
//   }

// }

// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var upload = {
//     product_name: $product_name.val().trim(),
//     description: $desription.val().trim(),
//   };

//   if (!(upload.product_name && upload.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.save(upload).then(function (res) {

//   });


//   $product_name.val("");
//   $desription.val("");
//   window.location.pathname = '/'

// };

// $submitBtn.on("click", handleFormSubmit);
var $product_name = $("#product_name");
var $desription = $("#description");
$("#submit").on("click", function (e) {
  e.preventDefault();
  var upload = {
    product_name: $product_name.val().trim(),
    description: $desription.val().trim(),
  };
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/upload",
    data: JSON.stringify(upload),
    success: function(data) {
      if (data == 'true')
      {
   // $('form').attr('action', 'http://example.com');
          $('form').unbind('submit').submit(); // mistake: changed $(this) to $('form') - Problem still persists though it does not resubmit and redirect to http://example.com
      }
      // else
      // {
      //     alert('Your username/password are incorrect');
      // }
  },
  error: function() {
      alert('There has been an error, please alert us immediately');
  }
  }).then(function(){

  //   if(err){
  //     console.log(err);
  //   } else {
  //     $("#productId").val(res.id);
  //     console.log(res.id);
  //     $(this).submit();
  

       window.location.pathname = '/'

  //   }
  })
});