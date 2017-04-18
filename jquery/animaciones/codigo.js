$(function(){
	//$('$verduras> li:last').insertAfter($('#verduras> li:first'));
	//$('$verduras> li:first').after($('#verduras> li:last'));
	//$('$verduras> li:last').insertBefore($('#verduras> li:first'));
	//$('$verduras> li:first').before($('#verduras> li:last'));
	//$('$verduras> li:first').appendTo($('#verduras));//INTRODUCE ALGO AL FINAL DE UNA LISTA
	//$('#verduras>li:last').prependTo($('#verduras'));//PREPENDTO 
	//$('#verduras>li:first').prepend($('#verduras'));//PREPENDTO 
	/*$('#btnAnadeCiudades').click(function(){
		$('#ciudades option:selected').clone().appendTo($('#listaNueva'));
	
	
		});
		*/
	/*$('#btnRestaCiudades').click(function(){
		$('#listaNueva option:selected').appendTo($('#ciudades'));
	
	
		});
	*/
	$('#btnAnadeCiudades').click(function(){
		var $parrafo=$('<p>Esto es un parrafo</p>');
		var $enlace=$('<a/>',{
			'html':"Esto es un <strong>enlace</strong>",
			'class':'enlace',
			'href':'http://www.google.com'
		})
		$('body').append($parrafo);
		$('body').append($enlace);
	
		});



	/*remove() permite eliminar elementos. detach() también elimina cosas, 
	pero nos permite introducirlo en variables y reutilizarlos*/
});