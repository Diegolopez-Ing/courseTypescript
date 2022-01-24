interface Person{
    id: number
    name: string
}

interface Product{
    id: number
    name: string
    price: number
}


interface Employee extends Person{
    role: string
}

// type dataType = Person | Product

class DataCollection<T>{
    private items: T[] =[]
    addItem(newItem:T):void{
        this.items.push(newItem)
    }

    getItems():void{
        console.log(`List of items`,JSON.stringify(this.items));
    }

    // getNames():string[]{
    //     return this.items.map((item) =>item.name)
    // }

    // getItemsById(id:number):T | undefined{
    //     return this.items.find((item:T) =>item.id === id)
    // }

}


const personCollection=new DataCollection<Employee>()
const newData={
    id: 1,
    name: "Diego",
    role:'Admin'
}
personCollection.addItem(newData)
personCollection.getItems()




const productCollection=new DataCollection<Product>()
const newData2={
    id: 2,
    name: "Beer",
    price:2000
}

productCollection.addItem(newData2)
productCollection.getItems()