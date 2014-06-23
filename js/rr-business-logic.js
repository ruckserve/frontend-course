(function () {
  function BusinessLogic() {
    var reservations = {
      'Billy': { claimed: false }
    };

    this.checkAvailable = function(name) {
      if (name in reservations) {
        if (reservations[name]["claimed"]) {
          reservations[name]["claimed"] = false;
          return "added";
          } else {
            return "notAvail";
          }
      }
      else {
        reservations[name] = {"claimed": false};
        return "added";
      }
    };

    this.claimReservation = function(name) {
      if (name in reservations) {
        if (reservations[name]["claimed"]) {
          return "claimed";
        } else {
          reservations[name]["claimed"] = true;
          return "true";
        }
      } else {
        return "notPresent";
      }
    };
  }
  window.bl = new BusinessLogic();
})();
