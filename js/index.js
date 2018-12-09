//alert('Good luck, Commander!');

var id=0;

var units = [];

function create_unit(){
	var unit=[];
	id+=1;
	//console.log(document.getElementById('unit_type').value);
	//console.log(id);
	//console.log(document.getElementById('unit_name').value);
	unit = [document.getElementById('unit_type').value,id,document.getElementById('unit_name').value];
	units.push(unit);
		var tableau = document.getElementById("tableau");
	
		var ligne = tableau.insertRow(-1);//on a ajouté une ligne
	
		var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
		colonne1.innerHTML += document.getElementById("unit_type").value;//on y met le contenu de titre
	
		var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
		colonne2.innerHTML += document.getElementById("unit_name").value;
	
}


