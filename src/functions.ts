function greet(name: string ='User'):void {
    console.log(`Hola ${name}`);
}
greet()
greet('Diego')

function getNumber( ):number{
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());

function printPosition(position:{lat:number,lng?:number | string}):void{
    console.log(`Latitude y longitude are: LAT: ${position.lat} LONG: ${position.lng}`);
}

printPosition({lat:3,lng:22})