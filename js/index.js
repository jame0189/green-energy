/*
(function(){
    
    let testVar = "foo";
    console.log(testVar);
    
    
    
}());
*/

const topics = {
    SOLAR: {
        title: "SOLAR ENERGY",
        image: '<img src="./img/solar.jpg" alt="solar energy">',
        para: "Sun oriented vitality is made by cells that change over daylight to power with no moving parts. The change of daylight into power is made conceivable with the unique properties of semi-directing materials. What's more, sunlight based vitality frameworks don't create air contaminations or carbon-dioxide.Sun oriented vitality is made by cells that change over daylight to power with no moving parts. The change of daylight into power is made conceivable with the unique properties of semi-directing materials. What's more, sunlight based vitality frameworks don't create air contaminations or carbon-dioxide."
       
    },
    GAS: {
        title: "LANDFILL GAS",
        image:'<img src="./img/natural_gas.jpg" alt="car">',
        para:"Depending on the water cycle, a hydroelectric power station uses water stream to control a turbine. The turbines are associated with generators that create vitality using water streams. The measure of vitality produced is dictated by the speed the water streams. In this way, a quickly streaming waterway will create more power than a slower moving ebb and flow."
    },
    HYDRO: {
        title: "HYDROELECTRIC",
        image: '<img src="./img/hydro.jpg" alt="car">',
        para:"The waste we create winds up in landfills where it disintegrates and delivers landfill gas made of around 50 percent methane. This gas can be caught and used to fuel electric generators. Since extensive landfills must consume off this gas in any case so as to diminish the perils emerging from gas development, this technique for sustainable power source is a standout amongst the best."
    }
};

//const imagesList = [
//           '<img src="./img/ant.jpg" alt="ant">'
//        ];

// try to access a property of topics-object first with dot, and then with bracket syntax

const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");
const p = document.querySelector("article p");
const img = document.querySelector("img");



function loadContent(ev){
    let clickedBtn = ev.target;
    let key = clickedBtn.getAttribute("data-content");
    
//    article.innerHTML = "";
    
    
   article.innerHTML = `<h2>${topics[key].title}</h2>`+ 
   `<img>${topics[key].image}</img>`+`<p>${topics[key].para}</p>`;
  
    
//    let h2 = document.createElement("h2");
//    h2.textContent = topics[key].title;
//    article.appendChild(h2);
//       article.innerHTML = `<img src="./img/ant.jpg" alt= "ant" ${topics[key].image}`;   

}

 
    
    
//  img.innerHTML = '<img src="./img/ant.jpg" alt= "ant" ${topics[key].title}>';
//   





for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", loadContent);
    
}

