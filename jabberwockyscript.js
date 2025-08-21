document.querySelectorAll('input[name="textsize"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
    var item = event.target.value;
    var main = document.getElementById("section-main");
    var intro = document.getElementById("intro-body");
    
      if (item == "small") {
        main.style.fontSize = "14px"; 
        intro.style.fontSize = "14px"; 
        main.style.lineHeight = "16px"; 
      } else if (item == "large") {
        main.style.fontSize = "20px"; 
        intro.style.fontSize = "20px"; 
        main.style.lineHeight = "32px"; 
      } else {
        main.style.fontSize = "16px"; 
        intro.style.fontSize = "16px"; 
      }
    });
});

document.querySelectorAll('input[name="width"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
    var item = event.target.value;
      if (item == "wide") {
        document.getElementById("container").style.gridTemplateColumns = "[first] 10px [line2] 200px [line3] auto [line4] 200px [line5] 10px [end]";
      } else {
        document.getElementById("container").style.gridTemplateColumns = "[first] 200px [line2] 200px [line3] auto [line4] 200px [line5] 200px [end]";
      }
    });
});

document.querySelectorAll('input[name="color"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        var item = event.target.value;
        if (item == "dark") {
            document.body.style.backgroundColor = "#111111"; 
            document.body.style.color = "#ffffff"; 
            document.querySelectorAll('p.tag')[0].style.backgroundColor = "#555555";
            document.querySelectorAll('p.tag')[1].style.backgroundColor = "#555555";
            document.querySelectorAll('p.active')[0].style.color = "#ffffff";
            document.querySelectorAll('p.active')[1].style.color = "#ffffff";
            document.querySelectorAll('legend')[0].style.color = "#ffffff";
            document.querySelectorAll('legend')[1].style.color = "#ffffff";
            document.querySelectorAll('legend')[2].style.color = "#ffffff";
            document.querySelectorAll('div.gutter-left')[0].style.backgroundColor = "#222222";
            document.querySelectorAll('div.gutter-right')[0].style.backgroundColor = "#222222";
            document.getElementById("site-search").style.backgroundColor = "#111111";
            document.getElementById("search-button").style.backgroundColor = "#333333";
            document.getElementById("search-button").style.color = "#efefef";
        } else {
            document.body.style.backgroundColor = "#ffffff"; 
            document.body.style.color = "#000000"; 
            document.querySelectorAll('p.tag')[0].style.backgroundColor = "#efefef";
            document.querySelectorAll('p.tag')[1].style.backgroundColor = "#efefef";
            document.querySelectorAll('p.active')[0].style.color = "#000000";
            document.querySelectorAll('p.active')[1].style.color = "#000000";
            document.querySelectorAll('legend')[0].style.color = "#000000";
            document.querySelectorAll('legend')[1].style.color = "#000000";
            document.querySelectorAll('legend')[2].style.color = "#000000";
            document.querySelectorAll('div.gutter-left')[0].style.backgroundColor = "#f5f5f5";
            document.querySelectorAll('div.gutter-right')[0].style.backgroundColor = "#f5f5f5";
            document.getElementById("site-search").style.backgroundColor = "#ffffff";
            document.getElementById("search-button").style.backgroundColor = "#efefef";
        }
    });
});


if (window.innerWidth < 800) {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
        //need to rotate the caret so it's pointing up when the panel is open.
      }
    });
  } 
};