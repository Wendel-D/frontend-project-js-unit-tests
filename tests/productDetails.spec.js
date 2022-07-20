const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const expectedOutput = [{"details": {"productId": "agua123"}, "name": "agua"}, {"details": {"productId": "roda123"}, "name": "roda"}];
    expect(productDetails('agua', 'roda')).toMatchObject(expectedOutput);
  });
  it('Teste se productDetails é uma função.', () => {
    expect(typeof (productDetails)).toBe('function')
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBe(true)
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails([]).length).toBe(2)
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails()).toBe('object')
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const expectedOutput1 = [
      { name: 'agua', details: { productId: 'agua123' } },
      { name: '', details: { productId: '123' } }
    ]
    const expectedOutput2 = [
      { name: '', details: { productId: '123' } },
      { name: 'rocha', details: { productId: 'rocha123' } }
    ]
    expect(productDetails('agua', '')).toEqual(expectedOutput1);
    expect(productDetails('', 'rocha')).toEqual(expectedOutput2);
  })
  // it('Teste se os dois productIds terminam com 123.', () => {
  //   const expectedOutput = expect.stringMatching('123');
  //   expect(productDetails('agua', 'rocha')).toEqual(
  //     expect.arrayContaining(expectedOutput),
  //   )
  // })
  // ESCREVA SEUS TESTES ABAIXO:
    // 
});
