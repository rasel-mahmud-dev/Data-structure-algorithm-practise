

class Queue {
    list = [] 
    currentItemIdx = 0
    size = 0

    set add(item){
        this.list.push(item)
        this.size++
    }

    get getItem(){
        this.currentItemIdx++
        return this.list[this.currentItemIdx - 1]
    }
}

const q = new Queue() 

q.add = 1
q.add = 2
q.add = 3 

console.log(q.getItem);
console.log(q.getItem);
console.log(q.getItem);

console.log("Total Item ", q.size);