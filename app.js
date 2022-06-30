

function openSlideMenu(){
  document.querySelector(".side-menu").style.width = '311px';
  document.querySelector(".before-blur").setAttribute('class', 'blur');
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
};
}


function closeSlideMenu(){
  document.querySelector(".side-menu").style.width = '0';
  document.querySelector(".blur").setAttribute('class', 'before-blur');
  window.onscroll = function() {};
}

window.addEventListener("scroll", ()=> {
  const viewportHeight = document.documentElement.clientHeight;
  const model3Top = document.querySelector(".model-3").getBoundingClientRect().top;
  const model3Bottom = document.querySelector(".model-3").getBoundingClientRect().bottom;
  const modelYTop = document.querySelector(".model-Y").getBoundingClientRect().top;
  const modelYBottom = document.querySelector(".model-Y").getBoundingClientRect().bottom;
  const modelSTop = document.querySelector(".model-S").getBoundingClientRect().top;
  const modelSBottom = document.querySelector(".model-S").getBoundingClientRect().bottom;
  const modelXTop = document.querySelector(".model-X").getBoundingClientRect().top;
  const modelXBottom = document.querySelector(".model-X").getBoundingClientRect().bottom;
  const solarPanelTop = document.querySelector(".solar-panels").getBoundingClientRect().top;
  const solarPanelBottom = document.querySelector(".solar-panels").getBoundingClientRect().bottom;
  const solarRoofTop = document.querySelector(".solar-roof").getBoundingClientRect().top;
  const solarRoofBottom = document.querySelector(".solar-roof").getBoundingClientRect().bottom;
  const accessoriesTop = document.querySelector(".accessories").getBoundingClientRect().top;
  const accessoriesBottom = document.querySelector(".accessories").getBoundingClientRect().bottom;
  console.log("top: " + modelYTop + ", bottom: " + modelYBottom);
  const textChangeBreakpoint = 400;
  
  function setOpacity(bottomRect){
    return 1- (Math.sqrt(Math.pow(bottomRect,2))/1000+0.4);
  }
  const mainText = document.querySelector(".main-text");
  if(model3Bottom < 400 && model3Bottom > 100){
    mainText.style.opacity = setOpacity(model3Bottom);
  }
  else if(modelYBottom < 400 && modelYBottom > 100){
    mainText.style.opacity = setOpacity(modelYBottom);
  }
  else if(modelSBottom < 400 && modelSBottom > 100){
    mainText.style.opacity = setOpacity(modelSBottom);
  }
  else if(modelXBottom < 400 && modelXBottom > 100){
    mainText.style.opacity = setOpacity(modelXBottom);
  }
  else if(solarPanelBottom < 400 && solarPanelBottom > 100){
    mainText.style.opacity = setOpacity(solarPanelBottom);
  }
  else if(solarRoofBottom < 400 && solarRoofBottom > 100){
    mainText.style.opacity = setOpacity(solarRoofBottom);
  }
  else {

    mainText.style.opacity =  1;
  }
  
  
 
  
 
  if((model3Top*-1)+textChangeBreakpoint < viewportHeight && model3Bottom > 0){
    document.querySelector(".product-name").innerHTML = "Model 3";
    document.querySelector(".button-1").innerHTML = "CUSTOM ORDER";
    document.querySelector(".button-2").innerHTML = "EXISTING INVENTORY";
    document.querySelector(".order-link").innerHTML = "Order Online for <a>Touchless Delivery</a>";
    document.querySelector(".footer").style.visibility = "hidden";
  

  }
  else if(modelYTop+textChangeBreakpoint < viewportHeight && modelYBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Model Y";
    document.querySelector(".button-1").innerHTML = "CUSTOM ORDER";
    document.querySelector(".button-2").innerHTML = "EXISTING INVENTORY";
    document.querySelector(".order-link").innerHTML = "Order Online for <a>Touchless Delivery</a>";
    document.querySelector(".footer").style.visibility = "hidden";
  }

  else if(modelSTop+textChangeBreakpoint < viewportHeight && modelSBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Model S";
    document.querySelector(".button-1").innerHTML = "CUSTOM ORDER";
    document.querySelector(".button-2").innerHTML = "EXISTING INVENTORY";
    document.querySelector(".order-link").innerHTML = "Order Online for" + "<a>Touchless Delivery</a>";
  
    document.querySelector(".footer").style.visibility = "hidden";
  }

  else if(modelXTop + textChangeBreakpoint< viewportHeight && modelXBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Model X";
    document.querySelector(".button-1").innerHTML = "CUSTOM ORDER";
    document.querySelector(".button-2").innerHTML = "EXISTING INVENTORY";
    document.querySelector(".order-link").innerHTML = "Order Online for <a>Touchless Delivery</a>";
    
    document.querySelector(".footer").style.visibility = "hidden";
  }
  
  else if(solarPanelTop+textChangeBreakpoint < viewportHeight && solarPanelBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Solar Panels";
    document.querySelector(".button-1").innerHTML = "ORDER NOW";
    document.querySelector(".button-2").innerHTML = "LEARN MORE";
    document.querySelector(".order-link").innerHTML = "Lowest Cost Solar Panels in America";
    document.querySelector(".footer").style.visibility = "hidden";
  }

  else if(solarRoofTop+textChangeBreakpoint < viewportHeight && solarRoofBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Solar Roof";
    document.querySelector(".button-1").innerHTML = "ORDER NOW";
    document.querySelector(".button-2").innerHTML = "LEARN MORE";
    document.querySelector(".order-link").innerHTML = "Produce Clean Energy From Your Roof";
    document.querySelector(".footer").style.visibility = "hidden";
    document.querySelector(".button-2").style.display = "inline-block";
    document.querySelector(".button-1").style.backgroundColor = "rgba(23, 26, 32, 0.8)";
 
   
  }
  
  else if(accessoriesTop+textChangeBreakpoint < viewportHeight && accessoriesBottom > textChangeBreakpoint){
    document.querySelector(".product-name").innerHTML = "Accessories";
    document.querySelector(".button-1").innerHTML = "SHOP NOW";
    document.querySelector(".order-link").innerHTML = "";
    document.querySelector(".footer").style.visibility = "visible";
    document.querySelector(".button-2").style.display = "none";
    document.querySelector(".button-1").style.backgroundColor = "rgba(23, 26, 32, 1)";
  }





})