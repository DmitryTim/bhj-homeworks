var deadMole = document.getElementById("dead");
var lostGame = document.getElementById("lost");
var dead = Number(deadMole.textContent);
var lost = Number(lostGame.textContent);

for (i = 1; i <=9; i++)
	document.getElementById("hole" + i).onclick = clickOnHole;

function clickOnHole() {
	if (this.classList.contains('hole_has-mole')) {
		dead++;
		deadMole.textContent = dead;
	} else {
		lost++;
		lostGame.textContent = lost;
	}
	
	setTimeout(() => {
		if (dead === 10) endGame ("You WIN! :)");
		if (lost === 5)  endGame ("You LOSE :(");
	}, 50);
  }
	
	const endGame = (str) => {
		alert(str);
		dead = 0;
		lost = 0;
		deadMole.textContent = dead;
		lostGame.textContent = lost;
	}
