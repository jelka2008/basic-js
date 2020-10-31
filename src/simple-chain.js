const CustomError = require("../extensions/custom-error");

class ChainMaker {
  constructor() {
    this.chain = [];
  }

  getLength() {
    return this.chain.length;
  }

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  }

  removeLink(position) {
    if (!Number.isInteger(position) || position >= this.chain.length) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  }

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  }

  finishChain() {
    const _chain = this.chain.join("~~");
    this.chain = [];
    return _chain;
  }
}

const chainMaker = new ChainMaker();

module.exports = chainMaker;
