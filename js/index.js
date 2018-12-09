//alert('Good luck, Commander!');

var id=0;


var tableau = document.getElementById("tableau");


function create_unit(){
	id+=1;
		

	
	var ligne = tableau.insertRow(-1);//on a ajouté une ligne
	
	var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
	colonne1.innerHTML += document.getElementById("unit_type").value;//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
	colonne2.innerHTML += "#"+id;
	
	var colonne3 = ligne.insertCell(2);//on ajoute la seconde cellule
	colonne3.innerHTML += document.getElementById("unit_name").value;

	var colonne4 = ligne.insertCell(3);//on ajoute la seconde cellule
	colonne3.innerHTML += '<button onclick="delete_unit('+id+')">Delete</button>' ;
	
}

function delete_unit(id){
	tableau.deleteRow(id-1);

}




