
// stack data structure implements using JavaScript. First In Last Out. 

class Stack {
  lastIndex = 0
  size = 0
  items = []

  get() {
    // get array last element.
    let el = this.items[this.lastIndex - 1]

    // decrease index to get access stack down element.
    this.lastIndex-- 
    return el
  }

  add(elm) {
    this.items.push(elm)
    // store lastIndex for get last element.
    this.lastIndex++

    // also increase stack size. 
    this.size++
  }
}


let s = new Stack()
s.add(12)
s.add(13)
s.add(1000)

console.log(s.get())
console.log(s.get())
console.log(s.get())



console.log(s.items)