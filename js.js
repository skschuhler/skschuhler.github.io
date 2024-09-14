var marker = L.marker([41.8781, -87.6298]).addTo(map);
marker.bindPopup("<b>Chicago!</b>").openPopup();

L.geoJSON(geojsonData, {
  style: function (feature) {
      return {color: 'blue'};
  },
  onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name); // Assuming 'name' is a property
  }
}).addTo(map);
