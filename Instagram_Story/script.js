let arr = [
  {
    dp: "images/p1.avif",  
      story: "images/p2.avif",
},
  {
    dp: "images/p3.avif",  
      story: "images/p4.avif",
},
  {
    dp: "images/p5.avif",  
      story: "images/p6.avif",
},
  {
    dp: "images/p7.avif",  
      story: "images/p8.avif",
},
  {
    dp: "images/p9.avif",  
      story: "images/p10.avif",
},
];


let clutter = "";
arr.forEach(function (elem, idx) {
    //   clutter += "hello";
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">  
    </div>`;
});
// console.log(clutter);
let screen = document.querySelector("#full-screen");

document.querySelector("#stories").innerHTML = clutter;

document.querySelector("#stories").addEventListener("click", function(e) {
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[e.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
})
