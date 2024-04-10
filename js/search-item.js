const listItems = [
    { name: "Tai Nghe Chụp Tai Dây Gaming VH530", link: "../html/headphone1.html" },
    { name: "Tai nghe Corsair Virtuoso RGB Wireless", link: "../html/headphone2.html" },
    { name: "Tai nghe E-Dra EH412 Pro RGB USB 7.1", link: "../html/headphone3.html" },
    { name: "Tai nghe HiFiMan Arya Organic", link: "../html/headphone4.html" },
    { name: "Tai nghe Rhapsodio Supreme V3", link: "../html/headphone5.html" },
    { name: "Màn Hình EDRA EGM24F75 (23.8 inch - FHD - IPS - 75Hz - 1ms)", link: "../html/monitor1.html" },
    { name: "Màn hình cong Samsung LS27CG552 27", link: "./html/monitor2.html" },
    { name: "Màn hình Samsung LS27CG510 27", link: "../html/monitor3.html" },
    { name: "Màn hình ROG Strix XG309CM", link: "../html/monitor4.html" },
    { name: "Màn hình Acer PREDATOR X27", link: "../html/monitor5.html" },
    { name: "PC Intel i5-12400F/ VGA RX 6600", link: "../html/pc1.html" },
    { name: "PC Thermaltake PROJECT VERTICAL (Intel i7-14700K/ VGA RTX 4070 Ti Super)", link: "../html/pc2.html" },
    { name: "PC Homework R3 4300G", link: "../html/pc3.html" },
    { name: "PC ASUS ROG HYPERION BLACK (INTEL I9-14900K/ VGA RTX 4090)", link: "../html/pc4.html" },
    { name: "PC Intel i3-12100F/ VGA GTX 1650", link: "../html/pc5.html" },
    { name: "Laptop Dell Inspiron 15 N3530 I3U085W11BLU", link: "../html/lap1.html" },
    { name: "Laptop Lenovo Yoga 9 2in1 14IMH9 83AC000SVN", link: "../html/lap2.html" },
    { name: "Laptop ASUS Vivobook 14 OLED A1405VA KM095W", link: "../html/lap3.html" },
    { name: "Laptop gaming ASUS ROG Strix G16 G614JU N3777W", link: "../html/lap4.html" },
    { name: "Laptop gaming ASUS ROG Zephyrus G16 GU605MV QR196WS", link: "../html/lap5.html" }
];
function autocomplete(inp) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        listItems.forEach(item => {
          /*check if the item starts with the same letters as the text field value:*/
          if (item.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("div");
            var link = document.createElement("a");
            link.setAttribute("href", item.link);
            /*make the matching letters bold:*/
            link.innerHTML = "<strong>" + item.name + "</strong>";
            // b.innerHTML += item.substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            link.innerHTML += "<input type='hidden' value='" + item.name + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            link.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            b.appendChild(link);
            a.appendChild(b);
          }
        })
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }






