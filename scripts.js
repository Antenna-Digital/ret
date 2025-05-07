<script>


document.addEventListener("DOMContentLoaded", function () {
  console.log("ready!");

  if (document.querySelector("#google-map-container")) {
    // grab lat and long from div
    var googleMapContainer = $("#google-map-container");
    var dataAddress1 = $(googleMapContainer).attr("data-address-street");
    var dataAddress2 = $(googleMapContainer).attr("data-address-csz");
    var dataLink = $(googleMapContainer).attr("data-address-link");
    var dataLong = $(googleMapContainer).attr("data-long");
    var dataLat = $(googleMapContainer).attr("data-lat");

    dataLong = parseFloat(dataLong);
    dataLat = parseFloat(dataLat);

    // Initialize and add the map
    function initMap() {
      // The location of the office
      var officeLoc = { lat: dataLat, lng: dataLong };
      // The map, centered at Uluru
      var map = new google.maps.Map(
        document.getElementById("google-map-container"),
        {
          zoom: 9,
          center: officeLoc,
          disableDefaultUI: true,
          styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5",
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
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f5f5",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dadada",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c9c9c9",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
          ],
        }
      );

      // create content for pop up window
      var infoWindowContent = "";

      if (dataLink) {
        infoWindowContent +=
          "<a href='https://" + dataLink + "' target='_blank' class='cta'>";
      }
      if (dataAddress1) {
        infoWindowContent += dataAddress1 + "<br>";
      }
      if (dataAddress2) {
        infoWindowContent += dataAddress2;
      }
      if (dataLink) {
        infoWindowContent += "</a>";
      }

      var infowindow = new google.maps.InfoWindow({
        content: "<div class='map-info-window'>" + infoWindowContent + "</div>",
      });
      // The marker, positioned at office location
      var marker = new google.maps.Marker({
        position: officeLoc,
        map: map,
        icon: "https://cdn.prod.website-files.com/67ffda58fdab244706545196/680a2ec5e6965d5980f97d49_map-marker.png",
      });

      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
    }

    window.setTimeout(function () {
      initMap();
    }, 200);
  } // end if query selector

  // Typewriter Effect for elements with data-typewriter attribute
  function initTypewriter() {
    // Find all elements with the data-typewriter attribute
    const typewriterElements = document.querySelectorAll("[data-typewriter]");

    if (typewriterElements.length === 0) return;

    // TypeWriter class to handle the typing animation
    class TypeWriter {
      constructor(targetElement, words, period) {
        this.targetElement = targetElement;
        this.words = words;
        this.period = parseInt(period, 10) || 2000;
        this.loopNum = 0;
        this.txt = "";
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.words.length;
        const fullTxt = this.words[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.targetElement.innerHTML = this.txt;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        const that = this;
        setTimeout(function () {
          that.tick();
        }, delta);
      }
    }

    // Initialize typewriter for each element with data-typewriter attribute
    typewriterElements.forEach((element) => {
      // Get the list of words from the data-typewriter attribute
      const dataTypewriter = element.getAttribute("data-typewriter");
      if (!dataTypewriter) return;

      const words = dataTypewriter.split(",").map((word) => word.trim());

      // Only run the typewriter effect if there are 2 or more words
      if (words.length < 2) return;

      // Find the strong tag within the element's h1 tag
      const h1Element = element.querySelector("h1");
      if (!h1Element) return;

      const strongElement = h1Element.querySelector("strong");
      if (!strongElement) return;

      // Create a span for the typewriter animation
      const wrapSpan = document.createElement("span");
      wrapSpan.classList.add("wrap");
      wrapSpan.innerHTML = words[0]; // Start with the first word

      // Replace the content of the strong tag with the wrap span
      strongElement.innerHTML = "";
      strongElement.appendChild(wrapSpan);

      // Add CSS for the typewriter effect
      const css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = `
                .wrap {
                    border-right: 0.08em solid #dedede;
                    padding-right: 2px;
                    display: inline-block;
                }
            `;
      document.head.appendChild(css);

      // Initialize the TypeWriter
      new TypeWriter(wrapSpan, words, 3000);
    });
  }

  // Run the typewriter initialization
  initTypewriter();
});


</script>
