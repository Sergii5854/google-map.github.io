document.addEventListener("DOMContentLoaded", function (event) {


    function initMap() {

        var map;
        var markers = [];
        var marker;
        var infos = [];
        var cluster = null;
        var locations = [
            {
                "id": 1,
                "title": "Place de la Bastille",
                "description": "French Revolution Landmark",
                "lat": 48.853354,
                "lng": 2.369491,
                "image": "https://www.gpsmycity.com/img/gd_attr/5664.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 2,
                "title": "Place du Châtelet",
                "description": "French Revolution Landmark",
                "lat": 48.857573,
                "lng": 2.347030,
                "image": "https://www.gpsmycity.com/img/gd_attr/6323.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 3,
                "title": "Pavillng de Flore",
                "description": "French Revolution Landmark",
                "lat": 48.861111,
                "lng": 2.330556,
                "image": "https://www.gpsmycity.com/img/gd_attr/6345.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 4,
                "title": "Tuileries Gardens",
                "description": "French Revolution Landmark",
                "lat": 48.863721,
                "lng": 2.332081,
                "image": "https://www.gpsmycity.com/img/gd_attr/6351.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 5,
                "title": "Place de la Concorde",
                "description": "French Revolution Landmark",
                "lat": 48.865633,
                "lng": 2.321236,
                "image": "https://www.gpsmycity.com/img/gd_attr/6360.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 6,
                "title": "Assemblée Nationale",
                "description": "French Revolution Landmark",
                "lat": 48.862017,
                "lng": 2.318682,
                "image": "https://www.gpsmycity.com/img/gd_attr/6430.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 7,
                "title": "Les Invalides",
                "description": "French Revolution Landmark",
                "lat": 48.858419,
                "lng": 2.312933,
                "image": "https://www.gpsmycity.com/img/gd_attr/6433.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 8,
                "title": "Musée de Cluny",
                "description": "Atlas Obscura",
                "lat": 48.8472,
                "lng": 2.3444,
                "image": "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2FhZjZhZjk3Yzg1MjViZDkzYV9JTUdfOTIxMC5KUEciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCIzNzJ4MjQ4IyJdXQ",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 9,
                "title": "Père Lachaise Cemetery",
                "description": "Atlas Obscura",
                "lat": 48.8594,
                "lng": 2.3910,
                "image": "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2Z3cTlyY25teHZlZWIxNzNlZTQ4ZGYzNzQwZTMwX0RTQzAwMDQ2LkpQRyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjM3MngyNDgjIl1d/DSC00046.JPG",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 10,
                "title": "Musée des Arts et Métiers",
                "description": "Atlas Obscura",
                "lat": 48.8666,
                "lng": 2.3555,
                "image": "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzIzMDQyNjM0MDBfNGI2Y2QzMzYxZV9vLmpwZyJdLFsicCIsInRodW1iIiwiMTAwMHg2NjcrMjMrMTMiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCIzNzJ4MjQ4IyJdXQ/2304263400_4b6cd3361e_o.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 11,
                "title": "Gustave Eiffel's Secret Apartment",
                "description": "Atlas Obscura",
                "lat": 48.8584,
                "lng": 2.2945,
                "image": "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2Y1ZDkxOGMwNDk0NGQyMTI3MV8zMzg0MzkwNDYyX2ZiYTM1ZDFhYmNfYi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCIzNzJ4MjQ4IyJdXQ"
            },
            {
                "id": 12,
                "title": "Musée des Arts Forains",
                "description": "Atlas Obscura",
                "lat": 48.8331,
                "lng": 2.3889,
                "image": "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzY3ODZiYTFjNjI4MGM0OTIyYl9tdXNlZWRlc2FydHNmb3JhaW5zMTMuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiMzcyeDI0OCMiXV0",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 13,
                "title": "Du Pain et des Idées",
                "description": "Food & Drink",
                "lat": 48.871245,
                "lng": 2.362890,
                "image": "http://www.travelproper.com/wp-content/uploads/2014/03/Inside-Du-Pain-et-Des-Idees.jpg",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            },
            {
                "id": 14,
                "title": "Harry's New York Bar",
                "description": "Food & Drink",
                "lat": 48.8692,
                "lng": 2.3321,
                "image": "http://d2aw2z0fz689pv.cloudfront.net/cache/img/f76f02e67fb5c76467ca0f244e3af38d64603c43--920-520-crop.jpeg?q=1501790542",
                "place": "Paris",
                "price": 1000,
                "stats": "1 BD 1 BA  955 SF"
            }
        ];
        var options = {
            center: {lat: 48.5, lng: 2.2},
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d3d3d3"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#b3b3b3"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        }

        map = new google.maps.Map(document.getElementById('map'), options);

        let bounds = new google.maps.LatLngBounds();

        for (let i = 0; i < locations.length; i++) {
            let position = new google.maps.LatLng(locations[i].lat, locations[i].lng);
            bounds.extend(position);



            let latlng = new google.maps.LatLng(locations[i].lat, locations[i].lng);

            let icon = {
                url: 'images/marker.svg', // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0, -4), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };


            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: locations[i].title,
                label: `${locations[i].id}`,
                icon: icon,
                labelAnchor: new google.maps.Point(20, 65),
                labelClass: "labels", // the CSS class for the label
                labelInBackground: false,

            });


            let content = `<div class="card-content">
						    <img 
						    class="card-save" src="images/icon__save.png" alt="like">
                       
			            
						<img class="card-image" width="100%" height="auto" src='${locations[i].image}'>
						    <div class="card-info">
                                <p class="card-title">${locations[i].title}</p>
                                <p class="card-sub-title">${locations[i].place}</p>
                                <p  class="card-title">$${locations[i].price}</p>
                                <p  class="card-sub-title">${locations[i].stats}</p>
                                <img 
						    class="card-share" src="images/icon__share-link.png" alt="share">
							</div>
						
					</div>`;


            let info = new google.maps.InfoWindow({
                content: content,
                maxWidth: 180
            });

            infos.push(info);
            markers.push(marker);

            // // Events for marker
            marker.addListener('click', () => {
                infos.forEach((i) => {
                    i.close();
                });
                info.open(map, marker);
            });
        }

        ClusterIcon.prototype.createCss = function (pos) {

            var size = 15;

            style = ['border-radius : 50%',
                'cursor        : pointer',
                'position      : absolute',
                'top           : ' + pos.y + 'px',
                'left          : ' + pos.x + 'px',
                'width         : ' + size * 2 + 'px',
                'height        : ' + size * 2 + 'px',
                'line-height   : ' + (size * 2 + 1) + 'px',
                'text-align    : center',
                'background-color: rgba(0, 147, 176, 0.8)', // cluster background
                'color: #ffffff',
                'font-size:14px'
            ];
            return style.join(";") + ';';
        };


        cluster = new MarkerClusterer(map, markers, {
            averageCenter: true,
            maxZoom: 16,
            zoomOnClick: false,
            minimumClusterSize: 1,
            styles: [{
                url: "http://pluspng.com/img-png/circle-png-orange-round-circle-paint-brush-design-element-709.png",
                width: 27,
                height: 27,
                fontFamily: "comic sans ms",
                textSize: 15,
                textColor: "#2e2e2e",

            }]

        });

        map.fitBounds(bounds);
    }


    initMap()


});