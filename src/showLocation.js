// eslint-disable-next-line import/no-extraneous-dependencies
import L from "leaflet";

export function showMap(lat, lon) {
  const map = L.map("map").setView([lat, lon], 15);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoicC1tYXJ0eW5vdiIsImEiOiJja3J2eDhzMnowYjVqMndzNzkxeDh2ZW5rIn0.cNlcrdx4cSXWq90AL6yuXg",
    }
  ).addTo(map);

  // добавляем маркер с сообщением
  L.marker([lat, lon]).addTo(map).bindPopup("Your location").openPopup();
}
