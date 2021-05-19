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

    // Video background
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

/* ---------- hamburger menu --------- */
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");

    document.querySelector(".nav_list").classList.toggle("change");
}
