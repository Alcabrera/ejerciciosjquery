$(function(){ //CON ESTA LINEA SE LE DICE AL CÓDIGO QUE HASTA QUE NO SE HAYA CARGADO TODA LA PÁGINA NO SE EJECUTE LO QUE HAY ENTRE LLAVES
//jquery nos permite eliminar cosas como el document, o incluso el ready
	$('#miParrafo').css({'font-weight': 'bold'});
	$('.parrafo').css({'color':'#f00'});
	$('p').css({'font-size':'18px'});

	$('#boton').click(function(){
		alert("Botón pulsado");
	});

	$('#rojo').click(function(){
		$('.luzRoja').css({'background-color': 'red'});;
	});
	$('#ambar').click(function(){
		$('.luzAmbar').css({'background-color': 'orange'});;
	});
	$('#verde').click(function(){
		$('div').css({'background-color': 'green'});;
	});

	//$('#rojo').addClass('verde');//CON addClass se añaden clases a elementos

	$('#rojo').removeClass('verde');//CON removeClass se eliminan clases de elementos

	if($('#rojo').hasClass('verde')){// hasClass es un selector para el caso en el que algun elemento tenga una clase especifica
		alert('Tiene la clase verde');
	}else{
		alert('No tiene la clase verde');
	}

	/*$('.btn').click(function(){
		var boton= $(this);
		if(boton.hasClass('pulsado')){
		 boton.removeClass('pulsado');
	}else{
		boton.addClass('pulsado');
	}
	});
*/$('.btn').click(function(){
		
		
		$(this).toggleClass('pulsado');// toggleClass hace que si un elemento no tiene una clase, se le añade, en caso contrario, se le quita
	
	});


	//$('#nombre').val('Hola caracola'); //SI USAMOS VAL, PONIENDOLE VALOR, LO QUE HACER ES PONERLE AL ELEMENTO SELECCIONADO, EL VALOR QUE LE DIGAMOS ENTRE PARÉNTESIS

	alert($('#nombre').val());//AL PONERLO SIN PARAMETRO, VAL DEVUELVE EL VALOR DEL SELECTOR
	$('#nombre').val('aeiou');

	$('#btnNombre').click(function(){
		
		$('.respuesta').val('Hola '+$('#emision').val());		
		
		
	
	});
	$(function(){
		/*alert($('.parrafada').html());//EL PARAMETRO html() NOS DEVUELVE EL CONTENIDO DE AQUELLO QUE HEMOS SELECCIONADO, SIMILAR A INNERHTML
		alert($('.parrafada').text());//EL PARAMETRO text() NOS DEVUELVE ÚNICAMENTE TEXTO PLANO.*/
		$('.parrafada').html('Hola <strong>caracola</strong>');
	});

		$('#selector').click(function(){
			var $opcion=$('#opcion').val();
			var $seleccion=$('#seleccion').val()|| [];//EN CASO DE QUE ESTÉ VACIO, QUE DEVUELVA UN ARRAY VACIO

		});
		$('#selector').attr('disabled', true);//attr MODIFICA LOS ATRIBUTOS DE AQUELLO QUE LE INDIQUEMOS ENTRE LOS
		//PARÉNTESIS
		alert($('select').attr('id'));//attr EN ESTE CASO SE UTILIZA PARA SACAR EL VALOR DEL ATRIBUTO ID DE LA ETIQUETA SELECT
		//alert($('#checkbox').attr('checked'));
		alert($('#checkbox').prop('checked'));//prop FUNCIONA IGUAL QUE attr PERO CON PROPIEDADES EN VEZ DE ATRIBUTOS
		$('#selector').removeAttr('disabled');//removeAttr ELIMINA EL ATRIBUTO QUE LE INDIQUEMOS
		$('#checkbox').removeProp('checked');//CON removeProp ELIMINAMOS LA PROPIEDAD INDICADA

		$('#seleccion').change(function(){
			
					$('#checkbox').prop('checked', ($(this).val().length>=3));
				

		});

		$('#miLista li:odd').css({'color': 'red'})//PSEUDO-SELECTORES, COMO POR EJEMPLO FIRST, QUE NOS DEVUELVE
		//EL PRIMER ELEMENTO DE UNA SERIE, POR EJEMPLO UNA LISTA. DEL MISMO MODO QUE ESTÁ FIRST, ESTÁ LAST. ODD
		//NOS DEVUELVE LOS PARES. EVEN LOS IMPARES. nth-child(x) nos devuelve el hijo que le pasemos entre paréntesis.
		//lt(3)=less than. Nos devuelve del 0 hasta el que le digamos. gt(3)=greater than, es decir aquellos que sean
		//mayores del numero que le digamos.
		alert($('div:hidden').attr('id'));

		$('#radioBtn').click(function(){
			alert($('#radio:checked'),val());

		});

});

	

/*$(document).ready(function(){ //CON ESTA LINEA SE LE DICE AL CÓDIGO QUE HASTA QUE NO SE HAYA CARGADO TODA LA PÁGINA NO SE EJECUTE LO QUE HAY ENTRE LLAVES
alert('Hola');
}); 

La clave de jQuery son los selectores, como por ejemplo $(). Lo que introducimos entre los paréntesis es el selector

los selectores múltiples son iguales que en css. Por ejemplo ('#seleccion > option') seleccionaría los elementos 
option que fueran 'hijos' de un elemento con id seleccion. Con ('#seleccion > option') sería seleccionar los
elementos option que fueran hijos directos de la id selección. Por otra parte es posible seleccionar varios
elementos distintos separándolos con comas (#seleccion, #opcion)
*/ 
