var $product_name = $("#product_name");
var $desription = $("#description");
var $file_path = $("#file_path");
var $availableList = $("#available-list");
var $submitBtn = $("#addImage");
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

  var upload = {
    product_name: $product_name.val().trim(),
    description: $desription.val().trim(),
  };

  if (!(upload.product_name && upload.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.save(upload).then(function (res) {
    var $input = $("<input>").attr({type: "file",name:"image", id: "image"});
    var $button = $("<button>").attr({type: "submit",id: "submit"}).text("submit");
    $("#fileForm").append($input).append($button);
    // $("#fileForm").append("<input>"); type='file' name='image' id='image' />
    // <button id="submit" type="submit">submit</button>)
  });


  $product_name.val("");
  $desription.val("");
  window.location.pathname = '/'

};

// $submitBtn.on("click", handleFormSubmit);
// var $product_name = $("#product_name");
// var $desription = $("#description");
// // var $productId = $("#productId");
// // $(document).ready(function() {
// //   // var testing = false;
// // // $(document).ready(function() {
// $("#addImage").on("click", function (e) {
//   // if ( !ajaxSent )
//   // e.preventDefault();
//   // e.preventDefault();
//   // $(document).ready(function() {
//   // $('form').on('submit', function(e) {
//   // e.preventDefault();
  
//   var upload = {
//     product_name: $product_name.val().trim(),
//     description: $desription.val().trim(),

//   };
//   $.ajax({
//     headers: {
//       "Content-Type": "application/json"
//     },
//     async: true,
//     type: "POST",
//     url: "api/upload",
//     data: JSON.stringify(upload),
//     success: function (data) {

//     //   if (data == 'true') {
   
//     //     //     console.log("good");
//     //     //     $form.off('submit').submit();
//     //     //     // $('form').attr('action', 'http://example.com');
//     //     // $('form').attr('action', 'https://example.com');
//     //     //       // $('form').submit();
//         // $('form').unbind('submit').submit(); // mistake: changed $(this) to $('form') - Problem still persists though it does not resubmit and redirect to http://example.com
//     //   }
//     //     else {
//     //        alert('Your username/password are incorrect');
//     //     }
//     // }
//     // error: function () {
//     //   alert('There has been an error, please alert us immediately');
//     }
//     // }).then(function () {
//       // $('form').unbind('submit').submit(); // mistake: changed $(this) to $('form') - Problem still persists though it does not resubmit and redirect to http://example.com

//     //   // window.location.pathname = '/'
//     //   //   if(err){
//     //   //     console.log(err);
//     //   //   } else {
//     //   //     $("#productId").val(res.id);
//     //   //     console.log(res.id);
//     //   //     $(this).submit();
//     //   console.log("hi");
//     //       $('form').unbind('submit').submit(); // mistake: changed $(this) to $('form') - Problem still persists though it does not resubmit and redirect to http://example.com


//     //   //
//     //   //   }
//     //   })
//   // });
// });
// // });