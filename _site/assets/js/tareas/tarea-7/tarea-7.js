// Validate Email Form
$().ready(function() {
  $("#myform").validate({
    rules: {
      description: "required",
    },
    messages: {
      description: "This field is required",
    }
  });
});
