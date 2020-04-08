var MyHashMap = function() {
	this.table = new Object();
};
MyHashMap.prototype.put = function(key, value) {
    this.table[key] = value;
};

MyHashMap.prototype.get = function(key) {
    return this.table[key] != undefined ? this.table[key] : -1;
};
MyHashMap.prototype.remove = function(key) {
	delete this.table[key];
};

let hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 
