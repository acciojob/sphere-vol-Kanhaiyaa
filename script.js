function volume_sphere() {
    //Write your code here

	if (isNaN(radius) || radius <=0) {
		console.log("invalid radius")
	}

	let volume=(4/3)*Math.PI*Math.pow(radius,3)
	return volume.toFixed(2)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
