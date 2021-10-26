import { Component } from "react";
import './App.css';

export default class Repositorios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      listaRepositorio: []
    };
  };

  buscarRepositorio = (element) => {

    element.preventDefault();

    fetch('https://api.github.com/users/' + this.state.nome + '/repos?per_page=10')

      .then(resposta => resposta.json())

      .then(lista => this.setState({ listaRepositorio: lista }))

      .catch(erro => console.log(erro))
  }

  atualizarNome = async (nome) => {
    await this.setState({ nome: nome.target.value })
    console.log(this.state.nome)
  }

  render() {
    return (
      <div class= "tabela ">
        <main class="ajuste_main">
          <section >
            <h2>Buscar Repositórios</h2>
            <input type="text" value={this.state.nome} onChange={this.atualizarNome} placeholder="Nome do GitHub" />
            <button class="btn_pesquisar" type="submit" onClick={this.buscarRepositorio}>Pesquisar</button>
            <table class= "ajuste_section" >
              <thead >
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Data de Criação</th>
                  <th>Tamanho</th>
                </tr>
              </thead>
              <tbody >
                {this.state.listaRepositorio.map((repositorio) => {
                  return (
                    <tr  key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )
  }
};