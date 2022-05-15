// testimonial slider

function testimonialSlider(){
    const CarouselOne = document.getElementById('carouselOne');
    if(CarouselOne){/*if the element exist*/
        CarouselOne.addEventListener('slid.bs.carousel', function () {
        const activeItem = this.querySelector(".active");
        document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    
      })

    }
}
testimonialSlider();

// course preview video 


function coursePreviewVideo(){
    const coursePreviewMOdal = document.querySelector(".js-course-preview-modal");
    if(coursePreviewMOdal){
      coursePreviewMOdal.addEventListener("shown.bs.modal",function(){
        this.querySelector(".js-course-preview-video").play();
        this.querySelector(".js-course-preview-video").currentTime = 0;
      })
      coursePreviewMOdal.addEventListener("hidden.bs.modal",function(){
        this.querySelector(".js-course-preview-video").pause();
      });

    }
}
coursePreviewVideo();

// header=menu
function headerMenu(){
  const menu = document.querySelector(".js-header-menu"),
  backdrop = document.querySelector(".js-header-backdrop"),
  menuCollapseBreakpoint = 991;

  function toggleMenu(){
   menu.classList.toggle("open");
   backdrop.classList.toggle("active");
   document.body.classList.toggle("overflow-hidden");
  }
  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
   item.addEventListener("click", toggleMenu);
  });

  // close the menu by clicking outside anywhere
  backdrop.addEventListener("click", toggleMenu);

  function collapse(){
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
  }

  menu.addEventListener("click", (event) =>{
    const { target } = event;
    if(target.classList.contains("js-toggle-sub-menu") && 
    window.innerWidth <= menuCollapseBreakpoint){
      // prevant defailt anchor click behaivior
      event.preventDefault();

      // if menu-item already expanded collapse it and exit

      if(target.parentElement.classList.contains("active")){
        collapse();
        return;
      }
        //  collapse the other expanded menu-item if exists
      if(menu.querySelector(".active")){
        collapse();
      }

      // expand new menu item 
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight = 
      target.nextElementSibling.scrollHeight + "px";
    }
  })
  // when resizing window
  window.addEventListener("resize", function(){
    if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
      toggleMenu();
    }
    if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")){
      collapse();
    }
  })
}
  headerMenu();
// style-switcher

function StyleSwitcherToggle(){
   const StyleSwitcher = document.querySelector(".js-style-switcher");
   StyleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

   StyleSwitcherToggler.addEventListener("click",function(){
       StyleSwitcher.classList.toggle("open");
       this.querySelector("i").classList.toggle("fa-times");
       this.querySelector("i").classList.toggle("fa-cog");

   })
}
StyleSwitcherToggle();


// theme-color-change

function ThemeColors(){
 const ColorStyle = document.querySelector(".js-color-style"),

 themecolorContainer = document.querySelector(".js-theme-colors");
 themecolorContainer.addEventListener("click",({target}) => {
   if(target.classList.contains("js-theme-color-item")){
     localStorage.setItem("color",target.getAttribute("data-js-theme-color"));
     setColor();
   }

 });
 function setColor(){
   let path = ColorStyle.getAttribute("href").split("/");
   path = path.slice(0, path.length-1);
   ColorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

   if(document.querySelector(".js-theme-color-item.active")){
     document.querySelector(".js-theme-color-item.active").classList.remove("active");
   }
   document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
  
 }
 if(localStorage.getItem("color") !== null){
  setColor();
 }
 else{
   const defaultColor = ColorStyle.getAttribute("href").split("/").pop().split(".").shift();
   document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
  
 }
}
ThemeColors();


// dark-theme-and-light-theme

function themeLightDark(){
  const darkModeCheckbox = document.querySelector(".js-dark-mode");
  darkModeCheckbox.addEventListener("click", function(){
   if(this.checked){
       localStorage.setItem("theme-dark", "true");   
   }
   else{
       localStorage.setItem("theme-dark", "false"); 
   }
   themeMode();

  });
  function themeMode(){
    if(localStorage.getItem("theme-dark") === "false"){
       document.body.classList.remove("t-dark");
    }
    else{
       document.body.classList.add("t-dark");
    }
  }
  if(localStorage.getItem("theme-dark") !==null){
    themeMode();
  }
 if(document.body.classList.contains("t-dark")){
   darkModeCheckbox.checked = true;
 }
}
themeLightDark();

// theme glass 

function themeGlassEffect(){
  const glassEffectcheckbox = document.querySelector(".js-glass-effect"),
  glassStyle = document.querySelector(".js-glass-style");

  glassEffectcheckbox.addEventListener("click", function(){
     if(this.checked){
       localStorage.setItem("glass-effect", "true");
     }
     else{
      localStorage.setItem("glass-effect", "false");
     }
     glass();
  });
  function glass(){
    if(localStorage.getItem("glass-effect") === "true"){
      glassStyle.removeAttribute("disabled");
    }
    else{
      glassStyle.disabled = true;
    }
  }
  if(localStorage.getItem("glass-effect") !== null){
   glass();
  }
  if(!glassStyle.hasAttribute("disabled")){
    glassEffectcheckbox.checked = true;
  }
}
  
themeGlassEffect();

// validation of login page

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()