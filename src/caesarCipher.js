const caesarCipher = (string, shift) => {
  const actualShift = shift > 0 ? shift : 26 + (shift % 26);
  return [...string]
    .map((currentSymbol, index) => {
      const charCode = string.charCodeAt(index);
      if (charCode >= 65 && charCode <= 90)
        return String.fromCharCode(((charCode - 65 + actualShift) % 26) + 65);
      if (charCode >= 97 && charCode <= 122)
        return String.fromCharCode(((charCode - 97 + actualShift) % 26) + 97);
      return currentSymbol;
    })
    .join('');
};

module.exports = caesarCipher;
