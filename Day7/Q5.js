/*
    Write a JavaScript program to get the volume of a 
    Cylinder with four decimal places using object classes. 
    Volume of a cylinder : V = πr2h where r is the radius and 
    h is the height of the cylinder.
    Try To Attempt : Difficult Level Increased 
*/
//By function
function volume(radius,height) {
    const vol=2*Math.PI*radius*radius*height;
    console.log("Volume of the Cylinder=",vol.toFixed(4));
}
volume(2.0,4.0);
//By object
function findVol(cylinder) {
	var vol = Math.PI * cylinder.radius * cylinder.radius * cylinder.height;
	return vol.toFixed(4);
}

var cylinder = {
	radius: 2,
	height: 6,
};

console.log(findVol(cylinder));