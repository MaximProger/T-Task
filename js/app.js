$(document).ready(function () {
  // Burger menu
  $("#nav__toggle").click(function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  // Button Up
  let button = $("#button-up");
  let intViewportHeight = window.innerHeight;
  $(window).scroll(function () {
    if ($(this).scrollTop() > intViewportHeight) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // Validation Email
  let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  let mail = $("#email");

  mail.blur(function () {
    if (mail.val() != "") {
      if (mail.val().search(pattern) == 0) {
        $("#submit").attr("disabled", false);
        mail.removeClass("error").addClass("ok");
      } else {
        $("#submit").attr("disabled", true);
        mail.addClass("ok");
      }
    } else {
      mail.addClass("error");
      $("#submit").attr("disabled", true);
    }
  });

  // Favorites
  $(".product__like").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active") == true) {
      $("#added").slideDown();

      setTimeout(() => $("#added").slideUp(), 1000);
    }
  });

  // Sort
  // Price
  $("#price").click(function () {
    $(".sort__item").removeClass("active");
    $(this).toggleClass("active");

    items = $(".product__item");
    arItems = $.makeArray(items);
    arItemsOld = $.makeArray(items);

    if ($(this).hasClass("active") == true) {
      arItems.sort(function (a, b) {
        return $(a).data("price") - $(b).data("price");
      });
      $(arItems).appendTo(".products__inner");
    }
  });

  // Months
  $("#months").click(function () {
    $(".sort__item").removeClass("active");
    $(this).toggleClass("active");

    items = $(".product__item");
    itemsOld = $(".product__item");
    arItems = $.makeArray(items);
    arItemsOld = $.makeArray(itemsOld);

    if ($(this).hasClass("active") == true) {
      arItems.sort(function (a, b) {
        return $(a).data("months") - $(b).data("months");
      });
      $(arItems).appendTo(".products__inner");
    }
  });
});
