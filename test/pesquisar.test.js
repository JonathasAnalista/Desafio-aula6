const { pesquisarPessoaPorCPF } = require('../src/pesquisar')
const { strictEqual } = require('node:assert')

describe('Pesquisar', () => {
    it('Ao informar o CPF da Isabelle teremos o seu nome, CPF e frutas favoritas', () => {
        // Arrange   
        const cpfPesquisado = '987654321'
        const nomeEsperado = 'isabelle' 
        const cpfEsperado = '987654321'
        const primeiraFrutaEsperado = 'abacaxi'
        const segundaFrutaEsperado = 'maçã'
        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)
        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperado)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperado)
    })

    it('Ao informar um CPF que não existe, deve retornar CPF não encontrado', () => {
        // Arrange
        const cpfPesquisado = '0000000000'
        const mensagemEsperada = 'CPF não encontrado'
        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)
        // Assert
        strictEqual(pessoa, mensagemEsperada)
    })
})