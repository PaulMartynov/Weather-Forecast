/* global ymaps */
let map;

export function showMap(lon, lat) {
  function init() {
    // Создание карты.
    map = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [lon, lat],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 12,
    });
  }
  ymaps.ready(init);
}

export function updateMap(lon, lat) {
  if (map !== undefined) {
    map.setCenter([lon, lat], 12);
  }
}
