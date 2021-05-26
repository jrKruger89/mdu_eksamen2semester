$(document).ready(function () {
    $(".open_menu").click(function () {
        $(".sub_nav").slideToggle();
    });
    $(".about_button").click(() => {
        $(".about_p_hide").slideToggle();
        $(".about_p_hide").toggleClass("open");
        if (!$(".about_p_hide").hasClass("open")) {
            $(".about_button").text("... LÆS MERE");
        } else {
            $(".about_button").text("... LÆS MINDRE");
        }
    });

    // Background video
    // Mobile version
    $("#ytbg").attr(
        "data-youtube",
        "https://www.youtube.com/watch?v=HAf7pap_KI4"
    );
    // Tablet + desktop version
    if ($(window).width() > 671) {
        $("#ytbg").attr(
            "data-youtube",
            "https://www.youtube.com/watch?v=ouzhYd0yY0Q"
        );
    }
    $("[data-youtube]").youtube_background();

    if ($(window).width() > 950) {
        $(".product_article").each(function () {
            $(this).mouseenter(function () {
                $(".link_button_anchor", this).animate({
                    backgroundColor: "#af0404",
                    fontSize: "20px",
                });
            });
            $(this).mouseleave(function () {
                $(".link_button_anchor", this).animate({
                    backgroundColor: "transparent",
                    fontSize: "0px",
                });
            });
        });
        $(".index_guidance_article").each(function () {
            $(this).mouseenter(function () {
                $(".link_button_anchor", this).animate({
                    backgroundColor: "#af0404",
                    fontSize: "20px",
                });
                $(".index_guidance_img", this).addClass("grayscale");
            });
            $(this).mouseleave(function () {
                $(".link_button_anchor", this).animate({
                    backgroundColor: "transparent",
                    fontSize: "0px",
                });
                $(".index_guidance_img", this).removeClass("grayscale");
            });
        });
    }
});

// Hamburger menu
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");

    document.querySelector(".nav_list").classList.toggle("change");
}

// Filter products
filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
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
