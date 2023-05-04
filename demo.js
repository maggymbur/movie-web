var form = document.getElementById('add-movie');
var itemList = document.getElementById('list');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addMovie);

function addMovie(e){
        e.preventDefault();

       //get input value
       var newItem = document.getElementById('item').value;

       // create new li element
       var li = document.createElement('li');
       //add class
       li.className = 'new-list';
       //add textNode
       li.appendChild(document.createTextNode(newItem));

       // create a delete button
      var deleteBtn = document.createElement('button');
       deleteBtn.className = 'delete';
   
      
      //append textNode
      deleteBtn.appendChild(document.createTextNode('delete'));
      //append button in the li
      li.appendChild(deleteBtn);
       // append your new created li to your itemList
       itemList.appendChild(li);
}
// delete event
itemList.addEventListener('click', removeList)
function removeList(e){
    if(e.target.className = 'delete'){
        var li = e.target.parentElement;
       
        itemList.removeChild(li);
    }
}
//keyUp event
filter.addEventListener('keyup', filterItem);
function filterItem(e){
    //convert to lowerCase
    var text = e.target.value.toLowerCase();
    // get lists
    var items = itemList.getElementsByTagName('li');
}

