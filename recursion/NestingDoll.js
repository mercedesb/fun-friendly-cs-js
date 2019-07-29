export default class NestingDoll {
  constructor(opens) {
    this.opens = opens;
    this.child = null;
  }

  addChild(childOpens) {
    this.child = new NestingDoll(childOpens);
  }

  open() {
    if (this.opens) return this.child;
    else return undefined;
  }
}
