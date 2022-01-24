//Type string
let myTypeString:string="Diego"
let myTypeNumber:number=24
let myTypeBoolean:boolean=true


//Array
let arrayNumber:number[]=[1, 2, 3, 4, 5]
// let arrayNumber2:Array<number>=[1,2,3,4,5]
let arrString:string[]=['uno','dos','tres']
let arrAny:any[]=['Hola',33,false]

//Tuple
let tuplePlayers:[string,number,boolean]=['Diego',2,true]

//Tuple ArrayNumber
let players:[number,string][]

players=[
    [1,'Anselmo'],
    [2,'Victor'],
    [4,'Juliana'],
]


//Type inference
let myVariable;
let myVariable1:string;
let myVariable2='Hola a todos!'

// Unions
let myVariable3: string | number |null


