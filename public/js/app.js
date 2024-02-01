document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("backgroundButton").addEventListener("click", () =>{
  const posts= document.getElementsByClassName("postContainer");
    for(let i=0; i<posts.length; i++){
      posts[i].style.background=`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  })
    document.getElementById("menuButton").addEventListener("click", () =>{
    const mobileMenu = document.getElementById("mobileMenu");
    const flexContainer = document.getElementById("flexContainer");
    mobileMenu.classList.toggle("mobileMenuDisplay");
    flexContainer.classList.toggle("opacity");
  })
    document.getElementById("flexContainer").addEventListener("click", () =>{
    const mobileMenu = document.getElementById("mobileMenu");
    const flexContainer = document.getElementById("flexContainer");
    mobileMenu.classList.remove("mobileMenuDisplay");
    flexContainer.classList.remove("opacity");
  })
});
