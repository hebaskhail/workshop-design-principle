function divide(a, b) {
    // Preconditions
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    if (b === 0) {
      throw new Error('Division by zero');
    }
    // Postconditions
    const result = a / b;
    if (typeof result !== 'number' || isNaN(result)) {
      throw new Error('Result must be a number');
    }
    return result;
  }
  