//Updates remaining attribute points
function getPointTotal() {
	const totalPoints = 60;
	var willValue = Number($("#willInput").val());
	var endValue = Number($("#endInput").val());
	var vitValue = Number($("#vitInput").val());
	var pointsUsed = willValue + endValue + vitValue;
	var remainingPoints = totalPoints - pointsUsed;
	//Checks if remaining points is less than zero
	if(remainingPoints < 0) {
		remainingPoints = 0;
	}
	// Chnage remaining points visually
	$("#remainingPoints").text(remainingPoints);
}
//Checks recommended value and changes N/A placeholder to that value
function updateRecommend() {
	var style = $("#mySelect").val();
	if (style === "Forsaken") {
	   	$("#recommendVit").text(forsaken[16].points);
	   	$("#recommendEnd").text(forsaken[13].points);
	   	$("#recommendWill").text(forsaken[14].points);
	} else if (style === "Forsaken -> Kahlt") {
		$("#recommendVit").text(forsakenKahlt[12].points);
	   	$("#recommendEnd").text(forsakenKahlt[17].points);
	   	$("#recommendWill").text(forsakenKahlt[18].points);
	} else if (style === "Forsaken -> Windfall") {
		$("#recommendVit").text(forsakenWindfall[12].points);
	   	$("#recommendEnd").text(forsakenWindfall[17].points);
	   	$("#recommendWill").text(forsakenWindfall[15].points);
	} else if (style === "Forsaken -> Stagger") {
		$("#recommendVit").text(forsakenStagger[22].points);
	   	$("#recommendEnd").text(forsakenStagger[12].points);
	   	$("#recommendWill").text(forsakenStagger[12].points);
	} else if (style === "Kahlt"){
		$("#recommendVit").text(kahlt[10].points);
	   	$("#recommendEnd").text(kahlt[15].points);
	   	$("#recommendWill").text(kahlt[9].points);
	} else if (style === "Kahlt -> Forsaken") {
		$("#recommendVit").text(kahltForsaken[14].points);
	   	$("#recommendEnd").text(kahltForsaken[15].points);
	   	$("#recommendWill").text(kahltForsaken[15].points);
	} else if (style === "Kahlt -> Windfall") {
		$("#recommendVit").text(kahltWindfall[15].points);
	   	$("#recommendEnd").text(kahltWindfall[16].points);
	   	$("#recommendWill").text(kahltWindfall[12].points);
	} else if (style === "Kahlt -> Stagger") {
		$("#recommendVit").text(kahltStagger[19].points);
	   	$("#recommendEnd").text(kahltStagger[11].points);
	   	$("#recommendWill").text(kahltStagger[13].points);
	} else if (style === "Windfall"){
		$("#recommendVit").text(windfall[17].points);
	   	$("#recommendEnd").text(windfall[18].points);
	   	$("#recommendWill").text(windfall[12].points);
	} else if (style === "Windfall -> Forsaken") {
		$("#recommendVit").text(windfallForsaken[14].points);
	   	$("#recommendEnd").text(windfallForsaken[14].points);
	   	$("#recommendWill").text(windfallForsaken[13].points);
	} else if (style === "Windfall -> Kahlt") {
		$("#recommendVit").text(windfallKahlt[13].points);
	   	$("#recommendEnd").text(windfallKahlt[14].points);
	   	$("#recommendWill").text(windfallKahlt[17].points);
	} else if (style === "Windfall -> Stagger") {
		$("#recommendVit").text(windfallStagger[22].points);
	   	$("#recommendEnd").text(windfallStagger[13].points);
	   	$("#recommendWill").text(windfallStagger[10].points);
	}
}
function updateVitality(){
	// Get value from input box
	var value = $("#vitInput").val();
	var style = $("#mySelect").val();
	//Set span to display value of stats associated with points chosen
	if(value === ""){
   	$("#vit").text("0");
	} else {
		if (style === "Forsaken") {
	   	$("#vit").text(forsaken[value].health);
		} else if (style === "Forsaken -> Kahlt") {
	   	$("#vit").text(forsakenKahlt[value].health);
		} else if (style === "Forsaken -> Windfall") {
	   	$("#vit").text(forsakenWindfall[value].health);
		} else if (style === "Forsaken -> Stagger") {
	   	$("#vit").text(forsakenStagger[value].health);
		} else if (style === "Kahlt") {
	   	$("#vit").text(kahlt[value].health);
		} else if (style === "Kahlt -> Forsaken") {
	   	$("#vit").text(kahltForsaken[value].health);
		} else if (style === "Kahlt -> Windfall") {
	   	$("#vit").text(kahltWindfall[value].health);
		} else if (style === "Kahlt -> Stagger") {
	   	$("#vit").text(kahltStagger[value].health);
		} else if (style === "Windfall"){
	   	$("#vit").text(windfall[value].health);
		} else if (style === "Windfall -> Forsaken"){
	   	$("#vit").text(windfallForsaken[value].health);
		} else if (style === "Windfall -> Kahlt"){
	   	$("#vit").text(windfallKahlt[value].health);
		} else if (style === "Windfall -> Stagger"){
	   	$("#vit").text(windfallStagger[value].health);
		}
	}
}
function updateEndurance(){
// Get value from input box
	var value = $("#endInput").val();
	var style = $("#mySelect").val();
	//Set span to display value of stats associated with points chosen
	if(value === ""){
   	$("#end").text("0");
	} else {
		if (style === "Forsaken") {
	   	$("#end").text(forsaken[value].stamina);
		} else if (style === "Forsaken -> Kahlt") {
	   	$("#end").text(forsakenKahlt[value].stamina);
		} else if (style === "Forsaken -> Windfall") {
	   	$("#end").text(forsakenWindfall[value].stamina);
		} else if (style === "Forsaken -> Stagger") {
	   	$("#end").text(forsakenStagger[value].stamina);
		} else if (style === "Kahlt") {
	   	$("#end").text(kahlt[value].stamina);
		} else if (style === "Kahlt -> Forsaken") {
	   	$("#end").text(kahltForsaken[value].stamina);
		} else if (style === "Kahlt -> Windfall") {
	   	$("#end").text(kahltWindfall[value].stamina);
		} else if (style === "Kahlt -> Stagger") {
	   	$("#end").text(kahltStagger[value].stamina);
		} else if (style === "Windfall"){
	   	$("#end").text(windfall[value].stamina);
		} else if (style === "Windfall -> Forsaken"){
	   	$("#end").text(windfallForsaken[value].stamina);
		} else if (style === "Windfall -> Kahlt"){
	   	$("#end").text(windfallKahlt[value].stamina);
		} else if (style === "Windfall -> Stagger"){
	   	$("#end").text(windfallStagger[value].stamina);
		}
	}
}
function updateWill(){
// Get value from input box
	var value = $("#willInput").val();
	var style = $("#mySelect").val();
	//Set span to display value of stats associated with points chosen
	if(value === ""){
   	$("#will").text("0");
	} else {
		if (style === "Forsaken") {
	   	$("#will").text(forsaken[value].shards);
		} else if (style === "Forsaken -> Kahlt") {
	   	$("#will").text(forsakenKahlt[value].shards);
		} else if (style === "Forsaken -> Windfall") {
	   	$("#will").text(forsakenWindfall[value].shards);
		} else if (style === "Forsaken -> Stagger") {
	   	$("#will").text(forsakenStagger[value].shards);
		} else if (style === "Kahlt") {
	   	$("#will").text(kahlt[value].shards);
		} else if (style === "Kahlt -> Forsaken") {
	   	$("#will").text(kahltForsaken[value].shards);
		} else if (style === "Kahlt -> Windfall") {
	   	$("#will").text(kahltWindfall[value].shards);
		} else if (style === "Kahlt -> Stagger") {
	   	$("#will").text(kahltStagger[value].shards);
		} else if (style === "Windfall"){
	   	$("#will").text(windfall[value].shards);
		} else if (style === "Windfall -> Forsaken"){
	   	$("#will").text(windfallForsaken[value].shards);
		} else if (style === "Windfall -> Kahlt"){
	   	$("#will").text(windfallKahlt[value].shards);
		} else if (style === "Windfall -> Stagger"){
	   	$("#will").text(windfallStagger[value].shards);
		}
	}
}
function updateDex(){
// Get value from input box
	var value = $("#dexInput").val();
	var style = $("#mySelect").val();
	//Set span to display value of stats associated with points chosen
	if(value === ""){
   	$("#dex").text("0");
	} else {
		if (style === "Forsaken") {
	   	$("#dex").text(forsaken[value].dexBuildDmg);
		} else if (style === "Kahlt"){
	   	$("#dex").text(kahlt[value].dexBuildDmg);
		} else if (style === "Stagger"){
	   	$("#dex").text(stagger[value].dexBuildDmg);
		} else if (style === "Windfall"){
	   	$("#dex").text(windfall[value].dexBuildDmg);
		}
	}
}
//Update vitality & points remaining on input change
$(document).on('input', '#vitInput', function(){
   updateVitality();
   getPointTotal();
});
//Update endurance & points remaining on input change
$(document).on('input', '#endInput', function(){
   updateEndurance();
   getPointTotal();
});
//Update will & points remaining on input change
$(document).on('input', '#willInput', function(){
   updateWill();
   getPointTotal();
});
//Currently disabled
$(document).on('input', '#dexInput', function(){
   updateDex();
});
//Update values on select change
$(document).on('change', '#mySelect', function(){
   updateVitality();
   updateEndurance();
   updateWill();
   updateDex();
   updateRecommend();
});