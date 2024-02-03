const Utils = {
  calculateNumber: (type, a, b) => {
    let A = Math.round(a);
    let B = Math.round(b);

    switch (type) {
      case 'SUM':
	return A + B;
      case 'SUBTRACT':
	return A - B;
      case 'DIVIDE':
        if (A === 0) {
           return 'Error';
	}
        if (B === 0) {
	   return 'Error'
        }
      return A/B;
    default:
      throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
