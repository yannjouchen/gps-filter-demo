class OneEuroFilter {
  constructor(freq = 1.0, minCutoff = 1.0, beta = 0.0, dCutoff = 1.0) {
    this.freq = freq;
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.lastValue = null;
    this.lastDeriv = 0;
    this.lastTime = null;
  }

  alpha(cutoff) {
    const tau = 1.0 / (2 * Math.PI * cutoff);
    const te = 1.0 / this.freq;
    return 1.0 / (1.0 + tau / te);
  }

  filter(value) {
    const now = Date.now();
    if (this.lastTime) {
      const dt = (now - this.lastTime) / 1000;
      this.freq = 1.0 / dt;
    }
    this.lastTime = now;

    if (this.lastValue === null) {
      this.lastValue = value;
      return value;
    }

    const deriv = (value - this.lastValue) * this.freq;
    const alphaD = this.alpha(this.dCutoff);
    this.lastDeriv = alphaD * deriv + (1 - alphaD) * this.lastDeriv;

    const cutoff = this.minCutoff + this.beta * Math.abs(this.lastDeriv);
    const alpha = this.alpha(cutoff);

    this.lastValue = alpha * value + (1 - alpha) * this.lastValue;
    return this.lastValue;
  }
}
module.exports = OneEuroFilter;
