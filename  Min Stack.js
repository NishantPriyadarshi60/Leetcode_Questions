// https://leetcode.com/problems/min-stack/description/


var MinStack = function() {
    this.stack = []; 
  this.minStack = []; 
};

/** 
* @param {string} val
* @return {string}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
      if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
      }
      this.stack.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
     if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
  }
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
   if (this.minStack.length > 0) {
      return this.minStack[this.minStack.length - 1];
  }
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/