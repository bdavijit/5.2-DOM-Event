//using function
function justFunction() {
    const p = document.getElementById("Clicking_method");
    p.innerText = "set by using function";
  }
  //direct
  document.getElementById("handle-event").addEventListener("click", () => {
    const p = document.getElementById("Clicking_method");
    p.innerText = "set by using direct function";
  });
  //direct with input field
  document.getElementById("update-name").addEventListener("click", () => {
    const inputText = document.getElementById("inpute1");
    const p = document.getElementById("Clicking_method");
    p.innerText = inputText.value;
    inputText.value = '';
  });


//   .....................
document.getElementById("submit-button").addEventListener('click', function() {
    //import
    const CommentBox = document.getElementById("comment");
    const Textfield = document.getElementById('text-field');
    const Para = document.createElement('p');
    
    //value update
    Para.innerText = Textfield.value;
    
    CommentBox.appendChild(Para);
    Textfield.value = '';


    

})