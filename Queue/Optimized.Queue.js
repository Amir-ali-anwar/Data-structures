class Queue{
    constructor(){
       this.items={}
       this.front=0; 
       this.rear=0 ;

    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(element){
        const items= this.items[this.front]=element
        delete this.items[this]
    }
}