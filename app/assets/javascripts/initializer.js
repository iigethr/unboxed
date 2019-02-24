// Initializer

// Bind Events
bindEvents = function() {
  $(".altai-center").altaiCenter();

  // easyAutocomplete
  var list = [
    "apples",
    "apricot",
    "avocado",
    "bananas",
    "blueberries",
    "cherries",
    "grapefruit",
    "grapes",
    "kiwi fruit",
    "lemons",
    "mangoes",
    "melons",
    "nectarines",
    "oranges",
    "passion fruit",
    "peaches",
    "pears",
    "pineapples",
    "plums",
    "rhubarb",
    "rock melon",
    "strawberries",
    "watermelon"
  ]
  var submitButton = $("input[type='submit']");
  var searchInput = $("input.search");
  var options = {
    data: list,
    list: {
      maxNumberOfElements: 3,
      match: {
        enabled: true
      }
    }
  };
  submitButton.hide();
  searchInput.easyAutocomplete(options);
  searchInput.keyup(function(event) {
    // Avoid white space
    if (event.which == 32) {
      return false;
    };
    // Hide & show submit button based on case.
    if (searchInput.val() == "") {
      submitButton.hide();
    } else {
      submitButton.show();
    };
  });
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
});
