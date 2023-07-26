console.log("page loading...");


        //   0   1   2
var likes = [9, 12, 9];
var spans = [
  document.querySelector("#like-1"),
  document.querySelector("#like-2"),
  document.querySelector("#like-3")
];


function like(id) {
  likes[id]++;
  spans[id].innerHTML = likes[id] + "like(s)";
}


