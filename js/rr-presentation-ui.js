(function() {
  $('#claim').on('click', function (e) {
    var name = prompt("What is your name?");
    result = bl.claimReservation(name);
    switch (result) {
      case "true" :
        alert("Thank you. A server will show you to your table momentarily");
        break;
      case "claimed" :
        alert("I'm sorry. The reservation under that name has already been claimed");
        break;
      case "notPresent" :
        alert("I'm sorry. There is no reservation under the name " + name + ". Try a different spelling.");
        break;
      default :
        break;
      }
  });

  $('#reserve').on('click', function (e) {
    var name = prompt("What name should we reserve under?");
    result = bl.checkAvailable(name);
    switch (result) {
      case "added" :
        alert("Thank you. A reservation has been made for " + name + ".");
        break;
      case "notAvail":
        alert("That name has already been taken. Please try a different name.");
        break;
      default :
        break;
    }
  });
})();
