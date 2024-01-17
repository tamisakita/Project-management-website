function initMap() {
  // Map option
  var options = {
    center: { lat: 49.260660112107736, lng: -123.12194817369209 },
    zoom: 13,
    styles: map_styles,
  };

  var options_map2 = {
    center: { lat: 49.229996901581096, lng: -123.00480310252945 },
    zoom: 13,
    styles: map_styles,
  };

  var options_map3 = {
    center: { lat: 49.263799068796445, lng: -123.1540808332144 },
    zoom: 13,
    styles: map_styles,
  };

  // New map
  map = new google.maps.Map(document.getElementById("map"), options);

  map_2 = new google.maps.Map(document.getElementById("map_2"), options_map2);

  map_3 = new google.maps.Map(document.getElementById("map_3"), options);

  // Marker
  const marker = new google.maps.Marker({
    position: { lat: 49.260660112107736, lng: -123.12194817369209 },
    map: map,
  });

  const marker_2 = new google.maps.Marker({
    position: { lat: 49.229996901581096, lng: -123.00480310252945 },
    map: map_2,
  });

  const marker_3 = new google.maps.Marker({
    position: { lat: 49.263799068796445, lng: -123.1540808332144 },
    map: map_3,
  });

  // Info Window
  const detailWindow = new google.maps.InfoWindow({
    content: `<p>Van Core Fitness</p>`,
  });

  // Markers
  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  });

  marker_2.addListener("mouseover", () => {
    detailWindow.open(map_2, marker_2);
  });

  marker_3.addListener("mouseover", () => {
    detailWindow.open(map_3, marker_2);
  });
}

const map_styles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#333333",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];
window.initMap = initMap;
