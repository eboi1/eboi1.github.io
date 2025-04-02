/**
 * Menu
 */
$("a.menu-icon").on("click", function(event) {
  var menu = $(".menu");
  var menuIcon = $(this);

  // Toggle the menu visibility
  menu.css({
    display: (menu.css("display") === "none") ? "block" : "none"
  });

  // Toggle the menu icon visibility
  if (menu.css("display") === "block") {
    menuIcon.css("display", "none"); // Hide the menu icon when the menu is open
  } else {
    menuIcon.css("display", "block"); // Show the menu icon when the menu is closed
  }
});

/**
 * Footer year
 */
$(document).ready(function() {
  $("#year").text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function() {
  $(".email-link-cloaked").on("click", function(event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}
