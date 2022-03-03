var sunny = document.getElementById("moon");
 sunny.addEventListener("click", function(){
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    sunny.src = "images/sunny.png";

    document.getElementById("navi").classList.remove("navbar-dark");
    document.getElementById("navi").classList.add("navbar-light");


  }
  else{
    sunny.src = "images/moon.png";
        document.getElementById("navi").classList.toggle("navbar-dark");
  }
});
