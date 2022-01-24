class Person{
    public depto='Antioquia'
    protected city='Medellin'
    private country='Colombia'

    constructor(){        
    }
    greet():void {
        console.log('Hello!');
    }
}

class Employee extends Person{
    //Atributos
    private readonly id:number;  
    //Métodos
    constructor(id:number, private name:string,private dept:string){
        super()
        this.id=id;
    
        this.showInfo()
    }

    private showInfo():void{
        
        console.log(`${this.name} ${this.id}  ${this.depto}`);
    }

}

const emp  = new Employee(1,'Diego','Antioquia')


