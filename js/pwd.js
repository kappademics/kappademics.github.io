	$('#submit').on('click', function() {
    var input = document.getElementById("pwd").value;
    var bitwise = input << 2;
    if (bitwise == 18868) {
    	window.location.replace("cubes.html");
    }
	});