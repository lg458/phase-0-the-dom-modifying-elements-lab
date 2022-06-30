//removes main 
const main = document.getElementById('main'); 
main.remove(); 

//modifies and appends new header *making sure to append after all changes have been made, despite order of tests*
const newHeader = document.createElement('h1'); 
newHeader.setAttribute('id', 'victory'); 
newHeader.textContent = "Laura is the champion";
document.body.append(newHeader); 