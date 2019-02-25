// Initializer

// Bind Events
bindEvents = function() {
  $(".altai-center").altaiCenter();

  // NOTE: Clean this code. Too messy dude!!!
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
    // data: list,
    url: "/users.json",
    getValue: "name",
    list: {
      maxNumberOfElements: 3,
      match: {
        enabled: true
      }
    }
  };
  submitButton.hide();
  searchInput.easyAutocomplete(options);
  searchInput.on("keyup keypress", function(event) {
    // Avoid white space
    if (event.which == 32) {
      return false;
    };
    // Hide & show submit button based on condition.
    if (searchInput.val() == "") {
      submitButton.hide();
    } else {
      submitButton.show();
    };
  });

  searchInput.on("blur", function() {
    submitButton.hide();
  });

  searchInput.on("focus", function() {
    submitButton.show();
    if (searchInput.val() == "") {
      submitButton.hide();
    };
  });
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
});
