var marker1, marker2, marker3, currentMarker;
var markers;
var timesClicked = 0;

// Initiate map API:
function initMap() {
  var oslo = {lat: 59.915, lng: 10.761078};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 13, center: oslo}
  );

  // Creates a marker object:
  var greenIcon = {
    url: 'https://i.imgur.com/P1wR1rc.png',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  };


  // Array of markers:
  markers = [
    {
      coordinates:{lat:59.912654, lng: 10.761085},
      name: 'Beirut Kebab',
      price: 75,
      Micon: greenIcon,
      activated: false,
      antall: 0
    },
    {
      coordinates:{lat:59.912427, lng: 10.747993},
      name: 'Dronningens Kebab',
      price: 89,
      Micon: greenIcon,
      activated: false,
      antall: 0
    },
    {
      coordinates:{lat: 59.910045, lng: 10.739639},
      name: "Handsken Kebab",
      price: 80,
      Micon: greenIcon,
      activated: false,
      antall: 0
    }
  ];



  // Event listener for button "Finn kebab":
  button2.addEventListener("click", function(){

    timesClicked++;

    // chronologically deploys the markers and the information about each restaurant:
    if(timesClicked == 1){
      marker1 = addMarker(markers[0]);
      if(marker3 != null){
        marker3.setMap(null);
      }
      // Displays information about current marker
      kebabinfo.style.display = "block";
      kebabinfo2.style.display = "none";
      kebabinfo3.style.display = "none";
      currentMarker = marker1;

    }

    if(timesClicked == 2){
      marker2 = addMarker(markers[1]);
      marker1.setMap(null);

      kebabinfo.style.display = "none";
      kebabinfo2.style.display = "block";
      kebabinfo3.style.display = "none";
      currentMarker = marker2;
    }

    if(timesClicked == 3){
      marker3 = addMarker(markers[2]);
      marker2.setMap(null);

      kebabinfo.style.display = "none";
      kebabinfo2.style.display = "none";
      kebabinfo3.style.display = "block";
      liste.style.display = "block";
      currentMarker = marker3;
      timesClicked = 0;

    }
  });


  // Function to create a marker through Google's API
  function addMarker(info){
    var marker = new google.maps.Marker({
      position: info.coordinates,
      map:map,
      icon: info.Micon,
      animation: google.maps.Animation.BOUNCE,
    });
    marker.addListener('click', toggleBounce);
    return marker;
  }

  // Function to toggle on/off the bouncing animation, activated when marker is clicked
  function toggleBounce() {
    console.log("Togglebounce activated");
    if (currentMarker.getAnimation() !== null) {
      currentMarker.setAnimation(null);
    } else {
      currentMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
