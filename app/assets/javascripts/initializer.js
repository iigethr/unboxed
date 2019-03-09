// Initializer

// easyAutocompleteEvents
easyAutocompleteEvents = function() {
  var submitButton = $("input[type='submit']");
  var searchInput = $("input.search");
  var options = {
    // data: list,
    url: "/users.json",
    getValue: "login",
    list: {
      maxNumberOfElements: 3,
      match: {
        enabled: true
      }
    }
  };
  searchInput.easyAutocomplete(options);
  searchInput.on("keyup keypress", function(event) {
    if (event.which == 32) {
      return false;
    };
  });
  $(".easy-autocomplete").removeAttr("style");
};

// Bind Events
bindEvents = function() {
  $(".altai-center").altaiCenter();
  easyAutocompleteEvents();
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
});
