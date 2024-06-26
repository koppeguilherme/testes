class ServicoExercicio {

  Somar(num1, num2) {
    if (!num1 || !num2) {
      throw new Error('Todos os valores devem ser informados');
    }

    if(isNaN(num1) || isNaN(num2)) {
      throw new Error('Todos os valores devem ser numéricos');
    }

    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (!num1 || !num2) {
      throw new Error('Todos os valores devem ser informados');
    }

    if(isNaN(num1) || isNaN(num2)) {
      throw new Error('Todos os valores devem ser numéricos');
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (!num1 || !num2) {
      throw new Error('Todos os valores devem ser informados');
    }

    if(isNaN(num1) || isNaN(num2)) {
      throw new Error('Todos os valores devem ser numéricos');
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if(!num1|| !num2) {
      throw new Error('Todos os valores devem ser informados');
    }

    if(isNaN(num1) || isNaN(num2)) {
      throw new Error('Todos os valores devem ser numéricos');
    }

    return num1 / num2;
  }

}

module.exports = ServicoExercicio;