// Examine the document objectS
//console.dir(document);
// getElementByid()
//var myTitle = document.getElementById("add-movie")
//console.log(myTitle)

//document.getElementById("btn").onclick = function(){
//     document.getElementById("add-movie").innerHTML = 'movie added';}
//    getElementsByClassName
//    var myClass = document.getElementsByClassName('title')
//    console.log(myClass)
//    myClass[1].textContent = 'Time for movies'
   
//    getElementbyTagName
//    Works same as getElementByClassName in that GetElemenyByClassName uses tags

// querySelectors
//we use query selectors by any name eg classmame(.), idname(#) or the tags
// works only with one item
// var queryName = document.querySelector('.title');
// queryName.style.backgroundColor = 'green';

// var input = document.querySelector('input');
// input.value = 'Type something';

//  var lastMovie = querySelector('.name:last-child');
//  lastMovie.textContent = 'paradise';

//QuerySelectorAll
/*we use query selectors by any name eg classmame(.), idname(#) or the tags in that it 
  works with a group of item*/

  //traversing the DOM
// let itemList = document.querySelector("#movie-list");


//firstElementChild
// console.log(itemList.firstElementChild)

//lastEementChild
// console.log(itemList.lastElementChild)

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)

//Method - create element
//create a div
//  var newDiv = document.createElement('div');
 
//  // add anew class

//  newDiv.className = 'hello';

//  //add an id
//  newDiv.id = 'hi';

//  //set attribute
//  newDiv.setAttribute('title', 'hello div');

//  //create text node
//  var newDivText= document.createTextNode('Hello world');
//  // add text to div
//  newDiv.appendChild(newDivText);

//  //adding new element to html
//  var container = document.querySelector('header #page-banner');
//  var h1 = document.querySelector('header h1');
//  // changing the style
//  newDiv.style.fontSize = '30px'

//  container.insertBefore(newDiv , h1);
//  console.log(newDiv);
//one way  of adding event listener
 //var button = document.getElementById('btn').addEventListener('click', 
 //  function(){
  // alert('button clicked')
    //  });
// // adding onclick event (in button- onClick="clickBtn(1)")
// function clickBtn(){
//     alert('hello')
// }
//another way- best way
//  var button = document.getElementById('btn').addEventListener('click', clickBtn());
//      function clickBtn(){
//      alert('button clicked')
//      document.getElementsByClassName('title').textContent = "changed"
//  };

//Events on a mouse
// var button = document.getElementById('btn').addEventListener('click', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type)
// };
/*other events (dblClick, mouseDown, mouseUp, mouseEnter, mouseLeave, mouseOut, mouseOver, mouseMove
   )*/
   // KeyBoard Events(keyUp , keyDown, keyPress)
//    var itemType = document.querySelector("type[input= 'text']");
//    var form = document.getElementById('add-movie');
//    itemType.addEventListener('keyDown', function(){
//        alert('key Pressed')
//    });
  
//    function runEvent(){
//     alert('key Pressed');
//    }

// events in input(focus, infocus, outblur, cut , paste)

//change event- mostly used in select tag 
var select = document.querySelector('select');
document.addEventListener('change', runEvent);
function runEvent(){
  console.log('change occured');
}





   
