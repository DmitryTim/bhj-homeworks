var sec=60;

function refresh()
{
	sec--;
if(sec==-01){sec=60}
else{sec=sec;}
	time = sec;
	if(document.getElementById){timer.innerHTML=time;}
	inter=setTimeout("refresh()", 1000);
if(sec=='00'){
		sec="00";
		clearInterval(inter);
	alert('Вы победили!');
}
}
