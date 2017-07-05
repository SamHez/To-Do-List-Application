var btn1,btn2,btn3,list;
btn1=document.getElementById('btn-1');
btn2=document.getElementById('btn-2');
list=document.getElementById('list');
// input=document.getElementById('text');
btn2.onclick=function()
{ 
	list.innerHTML='';
}
btn1.onclick=function()
{
	addlist(list);
	document.getElementById('data').value='';
	document.getElementById('data').focus();
}
function addlist(finalUl)
{
  var text=document.getElementById('data').value;
  var li=document.createElement('li');
  var textnode=document.createTextNode(text + ' ');
  var removebutton=document.createElement('button');
  if(text!=='')
  {
  	removebutton.className='btn btn-danger btn-xs';
  	removebutton.innerHTML=' &times;';
  	removebutton.setAttribute('onclick','rem(this)');

  	li.appendChild(textnode);
  	li.appendChild(removebutton);
  	finalUl.appendChild(li);
  }
  else 
  {
  	alert('Enter a task!');
  }
}
function rem(task)
{
   var p=task.parentElement;
   p.parentElement.removeChild(p);
}