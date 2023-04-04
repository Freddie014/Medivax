// // This example requires the Places library. Include the libraries=places
// // // // parameter when you first load the API. For example:
// // // // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiyzuP-TAXl5oVSDmuL6fUhWi-4dhjQc0&libraries=places">
//     let map;
//     let service;
//     let infowindow;

//         function initMap() {
//        const nairobi = new google.maps.LatLng(-1.2833300, 36.8166700);

//        infowindow = new google.maps.InfoWindow();
//        map = new google.maps.Map(document.getElementById("map"), 
//        {
//        center: nairobi,
//          zoom: 10,
//        });

//        const request = 
//        {
//          query: " ",
//          fields: ["name", "geometry"],
//        };

//        service = new google.maps.places.PlacesService(map);
//        service.findPlaceFromQuery(request, (results, status) => {
//          if (status === google.maps.places.PlacesServiceStatus.OK && results)
//           {
//            for (let i = 0; i < results.length; i++) {
//              createMarker(results[i]);
//          }

//          map.setCenter(results[0].geometry.location);
//         }
//      });
//      }

//      function createMarker(place) {
//        if (!place.geometry || !place.geometry.location) return;

//        const marker = new google.maps.Marker({
//          map,
//          position: place.geometry.location,
//        });

//        google.maps.event.addListener(marker, "click", () => 
//          {
//          infowindow.setContent(place.name || "");
//          infowindow.open(map);
//          });
//      }

// // // This example requires the Places library. Include the libraries=places
// // // parameter when you first load the API. For example:
// // // <script
// // // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// // function initMap() {
// //   const map = new google.maps.Map(document.getElementById("map"), {
// //     mapTypeControl: false,
// //     center: { lat: -1.2833300, lng: 36.8166700 },  
// //     zoom: 13,
// //   });

// //   new AutocompleteDirectionsHandler(map);
// // }

// // class AutocompleteDirectionsHandler {
// //   map;
// //   originPlaceId;
// //   destinationPlaceId;
// //   travelMode;
// //   directionsService;
// //   directionsRenderer;
// //   constructor(map) {
// //     this.map = map;
// //     this.originPlaceId = "";
// //     this.destinationPlaceId = "";
// //     this.travelMode = google.maps.TravelMode.WALKING;
// //     this.directionsService = new google.maps.DirectionsService();
// //     this.directionsRenderer = new google.maps.DirectionsRenderer();
// //     this.directionsRenderer.setMap(map);

// //     const originInput = document.getElementById("origin-input");
// //     const destinationInput = document.getElementById("destination-input");
// //     const modeSelector = document.getElementById("mode-selector");
// //     // Specify just the place data fields that you need.
// //     const originAutocomplete = new google.maps.places.Autocomplete(
// //       originInput,
// //       { fields: ["place_id"] }
// //     );
// //     // Specify just the place data fields that you need.
// //     const destinationAutocomplete = new google.maps.places.Autocomplete(
// //       destinationInput,
// //       { fields: ["place_id"] }
// //     );

// //     this.setupClickListener(
// //       "changemode-walking",
// //       google.maps.TravelMode.WALKING
// //     );
// //     this.setupClickListener(
// //       "changemode-transit",
// //       google.maps.TravelMode.TRANSIT
// //     );
// //     this.setupClickListener(
// //       "changemode-driving",
// //       google.maps.TravelMode.DRIVING
// //     );
// //     this.setupPlaceChangedListener(originAutocomplete, "ORIG");
// //     this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
// //     this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
// //     this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
// //       destinationInput
// //     );
// //     this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
// //   }
// //   // Sets a listener on a radio button to change the filter type on Places
// //   // Autocomplete.
// //   setupClickListener(id, mode) {
// //     const radioButton = document.getElementById(id);

// //     radioButton.addEventListener("click", () => {
// //       this.travelMode = mode;
// //       this.route();
// //     });
// //   }
// //   setupPlaceChangedListener(autocomplete, mode) {
// //     autocomplete.bindTo("bounds", this.map);
// //     autocomplete.addListener("place_changed", () => {
// //       const place = autocomplete.getPlace();

// //       if (!place.place_id) {
// //         window.alert("Please select an option from the dropdown list.");
// //         return;
// //       }

// //       if (mode === "ORIG") {
// //         this.originPlaceId = place.place_id;
// //       } else {
// //         this.destinationPlaceId = place.place_id;
// //       }

// //       this.route();
// //     });
// //   }
// //   route() {
// //     if (!this.originPlaceId || !this.destinationPlaceId) {
// //       return;
// //     }

// //     const me = this;

// //     this.directionsService.route(
// //       {
// //         origin: { placeId: this.originPlaceId },
// //         destination: { placeId: this.destinationPlaceId },
// //         travelMode: this.travelMode,
// //       },
// //       (response, status) => {
// //         if (status === "OK") {
// //           me.directionsRenderer.setDirections(response);
// //         } else {
// //           window.alert("Directions request failed due to " + status);
// //         }
// //       }
// //     );
// //   }
// // }



// // // // This example adds a search box to a map, using the Google Place Autocomplete
// // // // feature. People can enter geographical searches. The search box will return a
// // // // pick list containing a mix of places and predicted search terms.
// // // // This example requires the Places library. Include the libraries=places
// // // // parameter when you first load the API. For example:
// // // // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiyzuP-TAXl5oVSDmuL6fUhWi-4dhjQc0&libraries=places">

// // // function initAutocomplete() {
// // //     const map = new google.maps.Map(document.getElementById("map"), {
// // //       center: { lat: -33.8688, lng: 151.2195 },
// // //       zoom: 13,
// // //       mapTypeId: "roadmap",
// // //     });
// // //     // Create the search box and link it to the UI element.
// // //     const input = document.getElementById("pac-input");
// // //     const searchBox = new google.maps.places.SearchBox(input);
  
// // //     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// // //     // Bias the SearchBox results towards current map's viewport.
// // //     map.addListener("bounds_changed", () => {
// // //       searchBox.setBounds(map.getBounds());
// // //     });
  
// // //     let markers = [];
  
// // //     // Listen for the event fired when the user selects a prediction and retrieve
// // //     // more details for that place.
// // //     searchBox.addListener("places_changed", () => {
// // //       const places = searchBox.getPlaces();
  
// // //       if (places.length == 0) {
// // //         return;
// // //       }
  
// // //       // Clear out the old markers.
// // //       markers.forEach((marker) => {
// // //         marker.setMap(null);
// // //       });
// // //       markers = [];
  
// // //       // For each place, get the icon, name and location.
// // //       const bounds = new google.maps.LatLngBounds();
  
// // //       places.forEach((place) => {
// // //         if (!place.geometry || !place.geometry.location) {
// // //           console.log("Returned place contains no geometry");
// // //           return;
// // //         }
  
// // //         const icon = {
// // //           url: place.icon,
// // //           size: new google.maps.Size(71, 71),
// // //           origin: new google.maps.Point(0, 0),
// // //           anchor: new google.maps.Point(17, 34),
// // //           scaledSize: new google.maps.Size(25, 25),
// // //         };
  
// // //         // Create a marker for each place.
// // //         markers.push(
// // //           new google.maps.Marker({
// // //             map,
// // //             icon,
// // //             title: place.name,
// // //             position: place.geometry.location,
// // //           })
// // //         );
// // //         if (place.geometry.viewport) {
// // //           // Only geocodes have viewport.
// // //           bounds.union(place.geometry.viewport);
// // //         } else {
// // //           bounds.extend(place.geometry.location);
// // //         }
// // //       });
// // //       map.fitBounds(bounds);
// // //     });
// // //   }
  



