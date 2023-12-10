class HashTable {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
    }
    hash(key) {
      let total = 0;
      for (let index = 0; index < key.length; index++) {
        total += key.charCodeAt(index)
  
      }
      return total % this.size
    }
    Set(key, value) {
      const index = this.hash(key)
      this.table[index] = value
    }
    get(key) {
      const index = this.hash(key)
      return this.table[index]
    }
    remove(key) {
      const index = this.hash(key)
      this.table[index] = undefined
    }
    display() {
      for (let index = 0; index < this.table.length; index++) {
        if (this.table[index]) {
          console.log(index, this.table[index]);
        }
  
      }
    }
  }
  
  const table = new HashTable(20)
  
  console.log(table.table);