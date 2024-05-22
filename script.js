let post = document.getElementById("firstPost"); 
let post1 = document.getElementById("secondPost"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "https://myfoodbook.com.au/sites/default/files/styles/1x1/public/recipe_photo/Basic_cheesecake.jpg", 
    "https://www.health.com/thmb/IMOpGBczjy5oeh9Oy76LB28gN1o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1246996912-448fdbe60187474d8eb8435bf60f3524.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("img")[0] 
    console.log(imgpost) 
    imgpost.setAttribute("src", imgurls[i%2]) 
 
    postsBox.appendChild(newpost); 
}

const heartIcon = document.querySelector(".like-button .heart-icon");
const likesAmountLabel = document.querySelector(".like-button .likes-amount");

let likesAmount = 7;

heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
  if (heartIcon.classList.contains("liked")) {
    likesAmount++;
  } else {
    likesAmount--;
  }

  likesAmountLabel.innerHTML = likesAmount;
});