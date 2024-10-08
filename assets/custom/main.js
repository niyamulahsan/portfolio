let sidebar = document.querySelector(".sidebar");
let mainbody = document.querySelector(".mainbody");
let pull = document.querySelector("#pull");
pull.onclick = () => {
  sidebar.classList.toggle("on");
  // mainbody.classList.toggle("on");
}

window.addEventListener("click", (e)=>{
  if(!e.target.matches("#pull") && !e.target.closest(".sidebar")){
    sidebar.classList.remove("on");
    // mainbody.classList.remove("on");
  }
});


/*
* img-compare script
*/
let sld = document.querySelectorAll(".img-compare > .handler input");
sld.forEach(slider => {
    slider.oninput = () => {
        let dragline = slider.previousElementSibling;
        let pic = slider.parentElement.previousElementSibling.lastElementChild;
        let sliderVal = slider.value;
        dragline.style.left = sliderVal + "%";
        pic.style.width = sliderVal + "%";
    }
});

/*
* active class remove and add
*/
let menus = document.querySelectorAll(".primary-menu > ul li a");
menus.forEach((mnu)=>{
    mnu.addEventListener("click", (e)=>{
        const actv = document.querySelector(".active");
        if(actv){
            actv.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    });
});