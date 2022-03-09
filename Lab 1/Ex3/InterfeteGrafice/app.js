var counter = 0;
var textValue = $("#inputTextId").val();

$('#inputTextId').val('123');

function printValue(divId, value){ 
  $("#"+ divId ).html(value)
}
printValue("counter", 0)

$("#inc").on('click ', increment );
$("#dec").on('click ', decrement );

function increment(){
  if(counter < 10)
  counter ++; printValue("counter", counter);
}

function decrement(){
  if(counter > 0)
  counter --; printValue("counter", counter);
}