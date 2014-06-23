var bakery = {
  supplies: {
    flour: 4,
    eggs: 12,
    sugar: 17,
    spice: 5
  },
  goodRequirements: {
    cupcake: {
      flour: 2,
      eggs: 1,
      sugar: 1
    },
    cookie: {
      flour: 1,
      eggs: 1,
      sugar: 2,
      spice: 1
    }
  },
  make: function (goodType) {
    console.log('Attempting to make a:', goodType);
    var req = this.goodRequirements[goodType];

    // TODO: Only make if we have enough ingredients
    if (true) {
      for (var ingredient in this.goodRequirements[goodType]) {
        if (this.supplies[ingredient] < this.goodRequirements[goodType][ingredient]) {
          alert("Not enough supplies!!!");
          return;
        }
        this.supplies[ingredient] = this.supplies[ingredient] - this.goodRequirements[goodType][ingredient];
      }

      this.updateIngredientsList();
      console.log('The bakery made a ' + goodType + '!');

      var goodDiv = $('<div>');
      $('#bakery .display').append(goodDiv);
      goodDiv.addClass(goodType);
    }
  },
  updateIngredientsList: function () {
    $('.ingredients .flour span').text(this.supplies.flour);
    $('.ingredients .eggs span').text(this.supplies.eggs);
    $('.ingredients .sugar span').text(this.supplies.sugar);
    $('.ingredients .spice span').text(this.supplies.spice);
  }
};

$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
  bakery.make(goodType);
});

bakery.updateIngredientsList();
