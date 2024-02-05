let elem = document.querySelectorAll(".elem");
// let img = document.querySelectorAll(".img");

elem.forEach(function(val) {

    // console.log(val.childNodes[3]);
   val.addEventListener("mousemove", function(dets) {
    val.childNodes[3].style.left = dets.x+ "px";
    val.childNodes[3].style.top = dets.y+ "px";
   })
   val.addEventListener("mouseenter", function() {
    val.childNodes[3].style.opacity = 1;
   })
   val.addEventListener("mouseleave", function() {
    val.childNodes[3].style.opacity = 0;
   })

})
