var s;
function track(key, properties){
	var r = 0;
	for(r = 0; r < properties.length; r++){
		s += properties[r];
	}
	alert (s);
	return true;
}