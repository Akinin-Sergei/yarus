/*===MAP===*/
$(document).ready(function () {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [52.974232, 36.058780],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18
        });

        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка

            }
        });

        var myPlacemark = new ymaps.Placemark([52.974232, 36.058780], {
            balloonContent: 'Здание "ГРАЖДАНПРОЕКТ", 4 эт., оф. 60',
            hintContent: 'Собственный значок метки'
        }, {
            // iconLayout: 'default#image',
            iconImageHref: '../map_point.svg',
            iconImageSize: [70, 70],
            iconImageOffset: [-30, -50]
        });
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    };
});