"use strict";
function greet(name = 'User') {
    console.log(`Hola ${name}`);
}
greet();
greet('Diego');
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitude y longitude are: LAT: ${position.lat} LONG: ${position.lng}`);
}
printPosition({ lat: 3, lng: 22 });
