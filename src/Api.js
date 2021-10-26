import { Component } from "react";

export default class Repositories extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tamanho : '',
          dataCriado : '',
          descrição : '',
          nome : '',
          Id : 0
      };
  };

  buscarRepositorio = () => {

    fetch('https://api.github.com/' + this.state.nome + '/repos?per_page=10')

    .then(resposta => resposta.json())

    .then(lista => this.setState({ listaRepositorio: lista }))

    .catch(erro => console.log(erro))
  }

  atualizarNome = async (nome) => {
    this.setState({ nomeRepo: nome.target.value })
    console.log(this.state.nomeRepo)
  }

  render() {
    return(
        <div >
            <main>
                <section>
                    <h2>Buscar Repositorios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Data de Criação</th>
                                <th>Tamanho</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaRepositorio.map((repositorio) => {
                                  return (
                                      <tr key={repositorio.idTipoEvento}>
                                          <td>{repositorio.idTipoEvento}</td>
                                          <td>{repositorio.tituloTipoEvento}</td>
                                          <td>{repositorio.tituloTipoEvento}</td>
                                          <td>{repositorio.tituloTipoEvento}</td>
                                          <td>{repositorio.tituloTipoEvento}</td>
                                      </tr>
                                  )
                              })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}
};