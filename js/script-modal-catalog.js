let modal=document.querySelector(".modal"),button=document.querySelectorAll(".catalog__button-basket");window.onclick=function(o){o.target==modal&&(modal.classList.add("modal_open"),document.body.style.overflow="")},button.forEach((o=>{o.addEventListener("click",(function(){modal.classList.remove("modal_open"),document.body.style.overflow="hidden"}))}));