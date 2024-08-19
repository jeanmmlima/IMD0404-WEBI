import React, { Component } from 'react';

class ControlledComponentEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    /**
     * A função event.preventDefault() é um método que pertence à interface 
     * Event em JavaScript. Ela é usada para cancelar o comportamento padrão de um evento.
     *  Isso significa que, quando invocada, a função impede que o evento realize a ação 
     * que ele normalmente executaria.
      O método event.preventDefault() é frequentemente usado em formulários, 
      links e outras interações do usuário onde o comportamento padrão não é desejado ou precisa ser alterado.
     */
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário e recarregar a página
    alert(`Submitted value: ${this.state.inputValue}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ControlledComponentEx;
