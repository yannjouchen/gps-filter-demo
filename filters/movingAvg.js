class MovingAverage {
  constructor(windowSize = 5) {
    this.windowSize = windowSize;
    this.values = [];
  }

  filter(value) {
    this.values.push(value);
    if (this.values.length > this.windowSize) {
      this.values.shift();
    }
    const sum = this.values.reduce((a, b) => a + b, 0);
    return sum / this.values.length;
  }
}
module.exports = MovingAverage;
