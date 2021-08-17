/* global ymaps */
// Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
const zoomSize = 12;
let map;

export function showMap(lat = 0, lon = 0) {
  function init() {
    map = new ymaps.Map("map", {
      center: [lat, lon],
      zoom: zoomSize,
    });
  }
  ymaps.ready(init);
}

export function updateMap(lat = 0, lon = 0) {
  if (map === undefined) {
    showMap(lat, lon);
  } else {
    map.setCenter([lat, lon], zoomSize);
  }
}
