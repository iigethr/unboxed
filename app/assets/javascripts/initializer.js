// Initializer

// Bind Events
bindEvents = function() {
  $(".altai-center").altaiCenter();
  // easyAutocomplete
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
  // submitButton.hide();
  searchInput.easyAutocomplete(options);
  searchInput.on("keyup keypress", function(event) {
    // Avoid white space
    if (event.which == 32) {
      return false;
    };
  });
  // Weird things happen when set.
  $(".easy-autocomplete").removeAttr("style");
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
});
