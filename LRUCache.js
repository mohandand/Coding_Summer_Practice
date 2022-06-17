//https://www.youtube.com/watch?v=kDvNzEgGTuQ
class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1; //if  key is not there it return -1
  
      const v = this.cache.get(key);   //storing value 
      this.cache.delete(key); //deleting key
      this.cache.set(key, v);  //adding key
      return this.cache.get(key);  //return new key
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
    };
  }