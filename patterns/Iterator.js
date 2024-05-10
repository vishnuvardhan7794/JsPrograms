const items = [1, false, 'vishnu', 1.25]

function IteratorTest(items) {
  this.items = items
  this.index = 0;
}

IteratorTest.prototype = {
  hasNext(){
    return this.items.length > this.index;
  },
  next(){
    return this.items[this.index++]
  }
}

const iterator = new IteratorTest(items);

while(iterator.hasNext()){
  console.log(`console.log('Test', iterator.next())`, iterator.next())
}
