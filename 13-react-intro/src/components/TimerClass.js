import React from 'react';

class TimerClass extends React.Component {

  /* function tick() {
  root.render(
    <Toogle />
  );
}

setInterval(tick, 1000); */

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  /**
   * Este método é invocado imediatamente após um componente 
   * ser montado no DOM (Document Object Model). 
   * Isso ocorre depois que o componente é renderizado pela primeira vez. 
   */
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  /**
   * Este método é invocado imediatamente antes de um componente ser desmontado e destruído.
   *  Isso ocorre quando um componente é removido do DOM. 
   * No exemplo fornecido, o método componentWillUnmount está sendo usado 
   * para limpar qualquer recurso ou estado associado ao componente antes de ser desmontado.
   */
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

export default TimerClass;