(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function c(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(i){if(i.ep)return;i.ep=!0;const l=c(i);fetch(i.href,l)}})();(function(){const t=(e,o=!1)=>(e=e.trim(),o?[...document.querySelectorAll(e)]:document.querySelector(e)),r=(e,o,s,n=!1)=>{let d=t(o,n);d&&(n?d.forEach(g=>g.addEventListener(e,s)):d.addEventListener(e,s))},c=(e,o)=>{e.addEventListener("scroll",o)};let f=t("#navbar .scrollto",!0);const i=()=>{let e=window.scrollY+200;f.forEach(o=>{if(!o.hash)return;let s=t(o.hash);s&&(e>=s.offsetTop&&e<=s.offsetTop+s.offsetHeight?o.classList.add("active"):o.classList.remove("active"))})};window.addEventListener("load",i),c(document,i);const l=e=>{let o=t("#header"),s=o.offsetHeight;o.classList.contains("header-scrolled")||(s-=16);let n=t(e).offsetTop;window.scrollTo({top:n-s,behavior:"smooth"})};let a=t("#header");if(a){let e=a.offsetTop,o=a.nextElementSibling;const s=()=>{e-window.scrollY<=0?(a.classList.add("fixed-top"),o.classList.add("scrolled-offset")):(a.classList.remove("fixed-top"),o.classList.remove("scrolled-offset"))};window.addEventListener("load",s),c(document,s)}let u=t(".back-to-top");if(u){const e=()=>{window.scrollY>100?u.classList.add("active"):u.classList.remove("active")};window.addEventListener("load",e),c(document,e)}r("click",".mobile-nav-toggle",function(e){t("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),r("click",".navbar .dropdown > a",function(e){t("#navbar").classList.contains("navbar-mobile")&&(e.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),r("click",".scrollto",function(e){if(t(this.hash)){e.preventDefault();let o=t("#navbar");if(o.classList.contains("navbar-mobile")){o.classList.remove("navbar-mobile");let s=t(".mobile-nav-toggle");s.classList.toggle("bi-list"),s.classList.toggle("bi-x")}l(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&t(window.location.hash)&&l(window.location.hash)});let m=t("#preloader");m&&window.addEventListener("load",()=>{m.remove()}),GLightbox({selector:".glightbox"}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{let e=t(".portfolio-container");if(e){let o=new Isotope(e,{itemSelector:".portfolio-item"}),s=t("#portfolio-flters li",!0);r("click","#portfolio-flters li",function(n){n.preventDefault(),s.forEach(function(d){d.classList.remove("filter-active")}),this.classList.add("filter-active"),o.arrange({filter:this.getAttribute("data-filter")}),o.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),GLightbox({selector:".portfolio-lightbox"}),new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})})();var v=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(v).forEach(function(t){t.addEventListener("submit",function(r){t.checkValidity()?(r.preventDefault(),document.querySelector(".error-message").style.display="none",document.querySelector(".sent-message").style.display="block",t.reset(),t.classList.remove("was-validated")):(r.preventDefault(),r.stopPropagation(),document.querySelector(".error-message").style.display="block",document.querySelector(".sent-message").style.display="none"),t.classList.add("was-validated")},!1)});const h=document.querySelector('.theme-switch input[type="checkbox"]'),p=localStorage.getItem("theme");p&&(document.documentElement.setAttribute("data-theme",p),p==="dark"&&(h.checked=!0));function b(t){t.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}h.addEventListener("change",b,!1);
