$(function(){
	/*$('#div1').animate({
		opacity:0.25,
		marginLeft:"+=200",
		height:"toggle"
	},2000, "linear",function(){
		alert("Animación completa");

	});*/
	function animarDiv2(){
		$('#div2').animate({
			marginLeft:"+=200"		
		},2000, function(){
			$(this).animate({
			marginLeft:"-=200"
		},2000, function(){
			animarDiv2();
		});
		});
	}
	animarDiv2();

	animarDiv3();

	function animarDiv3(){
		$('#div3').animate({
			marginLeft:"+=50",
			width:0
		},{
			duration:1000,
			complete: function() {
				$(this).css({'background-color':'red'})
				$(this).animate({
					marginLeft:"-=50",
					width:"100"

				},{
					duration:1000
				})
			}
			});
		}
			
	

});