
var cod =4;
var ele;

function removeElement(elemento) {
	var objTr = $(elemento).parent('td').parent('tr');
	objTr.remove()
}

function pegarElementos(elemento){

	var objTr = $(elemento).parent('td').parent('tr');
	var codE = objTr.find('td:eq(0)').text();




	var descE = objTr.find('td:eq(1)').text();
	var unidaE = objTr.find('td:eq(2)').text();
	var precE = objTr.find('td:eq(3)').text();

	document.getElementById('inputDescEdit').value = descE;
	document.getElementById('uniEdit').value = unidaE;
	document.getElementById('inputPrecoEdit').value = precE;		
}

var $salvar = document.getElementById('salvar');
$salvar.addEventListener('click',function(){
	inserirLinhaTabela();
	$('#myModal').modal('hide');
})		


$(function(){
	$(document).on('click', '.btn-danger', function(e) {
		e.preventDefault;
		removeElement(this);
	});
});

$(function(){
	$(document).on('click', '.btn-success', function(e) {
		e.preventDefault;
		document.getElementById('inputDesc').value = '';
		document.getElementById('uni').value = '';
		document.getElementById('inputPreco').value = '';
	});
});

$(function(){
	$(document).on('click', '.btn-edit', function(e) {
		e.preventDefault;
			ele =this;
			pegarElementos(ele);			
	});
});

var $salvarEdit = document.getElementById('salvarEdit');
$salvarEdit.addEventListener('click',function(){
	salvarAterecoes();
	$('#modalEdit').modal('hide');
})

function salvarAterecoes(){
	var objTr = $(ele).parent('td').parent('tr');
	objTr.find('td:eq(1)').text(document.getElementById('inputDescEdit').value);
	objTr.find('td:eq(2)').text(document.getElementById('uniEdit').value);
	objTr.find('td:eq(3)').text(document.getElementById('inputPrecoEdit').value);
}

// Função responsável por inserir linhas na tabela
function inserirLinhaTabela() {
	cod++;
	var desc = document.getElementById('inputDesc');
	var unidade =document.getElementById('uni');
	var preco = document.getElementById('inputPreco');



	// Captura a referência da tabela com id “minhaTabela”
	var table = document.getElementById("myTable");
	// Captura a quantidade de linhas já existentes na tabela
	var numOfRows = table.rows.length;

	var numOfCols = table.rows[numOfRows-1].cells.length;

	// Insere uma linha no fim da tabela.
	var newRow = table.insertRow(numOfRows);

	// Faz um loop para criar as colunas
	for (var j = 0; j < numOfCols; j++) {
		newCell = newRow.insertCell(j);
		switch (j) {
			case 0:
				newCell.innerHTML = cod;
			break;
			case 1:					
				newCell.innerHTML = desc.value;
			break;
			case 2:
				newCell.innerHTML = unidade.value;
			break;
			case 3:						
				newCell.innerHTML = preco.value;
			break;	
			case 4:
				newCell.innerHTML =[
						'<button class="btn btn-primary btn-edit" data-toggle="modal" data-target="#modalEdit">',
							'<span class=" glyphicon glyphicon-pencil"></span>',		
						'</button>',
						'<button  class="btn btn-danger" id="teste">',
						'<i class="glyphicon glyphicon-trash"></i>',		
						'</button>'	 
				].join("\n");
			break;
		}
	}
} 