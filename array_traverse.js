function traverse(){
	let names = ["Skylark", "Brain Station", "Tiger IT", "WeDevs"];
	document.getElementById('array_traverse_div').innerHTML = '';
	console.clear();
	names.forEach(function(name){
		console.log(name);
		document.getElementById('array_traverse_div').append(name+' - ');
	});
}