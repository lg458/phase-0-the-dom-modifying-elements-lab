//removing DOM node main#main
const element = document.getElementById("main") 
element.remove(); 

//creating new header
const newHeader = document.createElement("h1"); 
newHeader.setAttribute('id', 'victory'); 

//adds text to newHeader node 
newHeader.textContent = "Laura is the champion";