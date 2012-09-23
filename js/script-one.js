var x="Hello, ";
var y="world!";
var H2_start = "<H2>";
var H2_end = "</H2>";

//alert(navigator.appName);

function browsers() {
	if (navigator.appName=="Netscape"){
		alert("You have Netscape navigator");
	}
	else {
		if (navigator.appName=="Microsoft Internet Explorer"){
			alert("You have fucking Internet Explorer");
		}
		else {
			if (navigator.appName=="Opera"){
				alert("You have Opera");
			}
			else {
				alert("I don't know your browser!");
			}
		}

	}
}



function displ(nnn) {
	if (document.getElementById(nnn).style.display == 'none') {
		document.getElementById(nnn).style.display = 'block';
		document.getElementById('link').style.color = 'red';
	}
}

function close(xx) {
	if (document.getElementById(xx).style.display == 'block') {
		document.getElementById(xx).style.display = 'none';
	}

}

function result(){
	var sideA = document.area.aside.value;
	var sideB = document.area.bside.value;
	var area = sideA*sideB;
	document.area.res.value = "Result is: " + area;
}





var MyBrowserName = navigator.appName;
var YourBrowserName;

switch (MyBrowserName) {
	case "Netscape":
		YourBrowserName = "You have Netscape Navigator";
		break
	case "Opera":
		YourBrowserName = "You have Opera";
		break
	case "Microsoft Internet Explorer":
		YourBrowserName = "FUUUUCK!!! You have IE!!! :(";
		break
}
