mapboxgl.accessToken =
    "pk.eyJ1IjoibGlzZS1tYXkiLCJhIjoiY2tuOGwxbGZvMHl3czJubzZiY3hocGRhMSJ9.9LF6VFo4i6iI801z96g7fQ";
var map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL

    center: [10.197145952225775, 56.15970376676803], // starting position [lng, lat]
    zoom: 6, // starting zoom
});

//Markøre popup
var draupnir_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<h5 class="white_text map_h5">Debelmose Rideudstyr</h5>' +
        "<p><br>Debelmosevej 3<br>6900 Skjern</p>" +
        "<p><br>Tlf. +45 5194 9561</p>" +
        '<br><a href="mailto:sales@draupnir.com">Mail: sales@draupnir.com</a><br>'
);

var troldkaer_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<h5 class="white_text map_h5">Stutteri Troldkær</h5>' +
        "<p><br>Troldkærvej 2<br>9982 Ålbæk</p>" +
        "<p><br>Tlf. +45 2989 9753<br> tlf. +47 97533197 </p><br>" +
        '<a href="mailto:stutteri.troldkaer@gmail.com">Mail: stutteri.troldkaer@gmail.com</a>'
);

var hyldahl_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<h5 class="white_text map_h5">Hyldahl Rideudstyr</h5>' +
        "<p><br>Juvrevej 81<br>6792 Rømø</p>" +
        "<p><br>Tlf. +45 7468 7716</p>" +
        '<br><a href="mailto:info@hyldahl.com">Mail: info@hyldahl.com</a><br>' +
        '<br><a href="https://hyldahl.com/" target="_blank">www.hyldahl.com</a>'
);

var draumur_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<h5 class="white_text map_h5">DRAUMUR ApS</h5>' +
        "<p><br>Hesselrødvej 9<br>2980 Kokkedal</p>" +
        "<p><br>Tlf. +45 2924 9914</p>" +
        '<br><a href="mailto:bodil@draumur.dk">Mail: bodil@draumur.dk</a><br>' +
        '<br><a href="https://draumur.dk/" target="_blank">www.draumur.dk</a>'
);

//start draupnir
var draupnir = new mapboxgl.Marker({
    color: "#af0404",
})
    .setLngLat([8.613359338915485, 55.96450041298367])
    .setPopup(draupnir_popup)
    .addTo(map);
//slut draupnir

//start troldkaer
var troldkaer = new mapboxgl.Marker({
    color: "#af0404",
})
    .setLngLat([10.349543887250162, 57.60627075919865])
    .setPopup(troldkaer_popup)
    .addTo(map);
//sluttroldkaer

//start hydahl
var hyldahl = new mapboxgl.Marker({
    color: "#af0404",
})
    .setLngLat([8.556420796994049, 55.174507758655146])
    .setPopup(hyldahl_popup)
    .addTo(map);
//slut hydahl

//start draumur
var draumur = new mapboxgl.Marker({
    color: "#af0404",
})
    .setLngLat([12.417597727694396, 55.92373029802915])
    .setPopup(draumur_popup)
    .addTo(map);
//slut draumur
