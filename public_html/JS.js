function myFunction(n) {
    if( document.getElementById("button"+n).innerHTML!=="ON" ){
	  document.getElementById("button"+n).innerHTML="ON"; 
    document.getElementById("button"+n).style.color = "#111111";
    document.getElementById("button"+n).style.backgroundColor = "#ffffff";
		document.getElementById("glyph"+n).style.color = "#7f29ee";
		document.getElementById("mi"+n).style.fontWeight = "700";
		
		} else{
		document.getElementById("button"+n).innerHTML="OFF"; 
    document.getElementById("button"+n).style.color ="#ffffff";
    document.getElementById("button"+n).style.backgroundColor ="#111111";
		document.getElementById("glyph"+n).style.color = "#3e3e3e";
		document.getElementById("mi"+n).style.fontWeight = "400";
		
	}
}

$(document).ready(function(){
    $("div.screen2").hide();
    $("div.screen1").show();
    });
		
$(document).ready(function(){
    $("#mi1, #mi2, #mi3, #mi4").click(function(){
        $("div.screen1").hide();
				$("div.screen2").show();
    });
});


$(document).ready(function(){
    $(".glyphicon-arrow-left").click(function(){
        $("div.screen2").hide();
				$("div.screen1").show();
    });
});

/*
	$("#mi1").click (function(){
		$("div.screen2").ready(function (){
			$("#row_1_2").show();
			$("#row_2_2").hide();
			$("#row_3_2").hide();
			$("#row_4_2").hide();
			
		});
		
	});
*/
