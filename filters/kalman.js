class Kalman {
  constructor(R = 0.00001, Q = 0.0001) {
    this.R = R; this.Q = Q;
    this.A = 1; this.B = 0; this.C = 1;
    this.cov = NaN;
    this.x = NaN;
  }

  filter(z) {
    if (isNaN(this.x)) {
      this.x = z;
      this.cov = 1;
    } else {
      const predX = this.A * this.x;
      const predCov = this.A * this.cov * this.A + this.Q;
      const K = predCov * this.C / (this.C * predCov * this.C + this.R);
      this.x = predX + K * (z - this.C * predX);
      this.cov = predCov - K * this.C * predCov;
    }
    return this.x;
  }
}
module.exports = Kalman;
