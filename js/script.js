$(document).ready(function () {
  $(".open_menu").click(function () {
    $(".sub_nav").slideToggle();
  });
  $(".about_button").click(() => {
    $(".about_p_hide").slideToggle();
    $(".about_p_hide").toggleClass("open");
    if (!$(".about_p_hide").hasClass("open")) {
        $(".about_button").text("... Læs mere");
    } else {
        $(".about_button").text("... Læs mindre");
    }
});

// Background video index
$("[data-youtube]").youtube_background();

if ($(window).width() > 950) {
    $(".product_article").each(function () {
        $(this).mouseenter(function () {
            $(".link_button", this).animate({
                backgroundColor: "#af0404",
                fontSize: "20px",
            });
            $(".index_product_img", this).animate({
                height: "+=50px",
                width: "+=50px",
            });
        });
        $(this).mouseleave(function () {
            $(".link_button", this).animate({
                backgroundColor: "transparent",
                fontSize: "0px",
            });
            $(".index_product_img", this).animate({
                height: "-=50px",
                width: "-=50px",
            });
        });
    });
    $(".index_guidance_article").each(function () {
        $(this).mouseenter(function () {
            $(".index_guidance_button", this).animate({
                backgroundColor: "#af0404",
                fontSize: "20px",
            });
            $(".index_guidance_img", this).addClass("grayscale");
        });
        $(this).mouseleave(function () {
            $(".index_guidance_button", this).animate({
                backgroundColor: "transparent",
                fontSize: "0px",
            });
            $(".index_guidance_img", this).removeClass("grayscale");
        });
    });
}
});

// hamburger menu
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");

  document.querySelector(".nav_list").classList.toggle("change");
}

//filter products
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
