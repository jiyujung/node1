const M = {
  v: 'v',
  f: function() {
    console.log(this.v)
  }
};

module.exports = M;
// exports = M; 하지말것