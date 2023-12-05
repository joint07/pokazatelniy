function handleSubscribe() {
  var subscribeEmail = document.getElementById("subscribeEmail").value;

  if (subscribeEmail != "") {
    $(".alert-danger").hide();
    $("#subscribeId").hide();
    $(".followers-title").hide();
    $(".subscribeSuccess").show().fadeOut(3000);
  } else {
    $(".alert-danger").show().fadeOut(3000);
  }
}

function sendOrder() {
  var orderName = document.getElementById("orderName").value;
  var orderEmail = document.getElementById("orderEmail").value;
  var orderTel = document.getElementById("orderTel").value;
  var orderMessage = document.getElementById("orderMessage").value;
  var orderCheck = document.getElementById("orderCheck").value;

  if (
    orderName != "" &&
    orderEmail != "" &&
    orderTel != "" &&
    orderMessage != "" &&
    orderCheck != ""
  ) {
    $(".alert-dangerOrder").hide();
  } else {
    $(".alert-dangerOrder").show().fadeOut(3000);
  }
}
