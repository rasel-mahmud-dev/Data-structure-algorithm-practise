
// stack data structure implements using JavaScript. First In Last Out. 

class Stack{
  lastIndex=0
  items=[]
  get(){
    let el = this.items[this.lastIndex - 1]
    this.items.splice(this.lastIndex-1,1)
    return el
  }
  add(elm){
    this.items.push(elm)
    this.lastIndex++
  }
}

let s = new Stack()
s.add(12)
s.add(13)
console.log(s.get())
console.log(s.items)