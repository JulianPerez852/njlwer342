import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todo: ["Sacar la ropa","Hacer la cama","Leer un rato"],
      valueInput: '',
    }
    this.handlerNewTask=this.handlerNewTask.bind(this);
    this.handlerText=this.handlerText.bind(this);
  }

  handlerNewTask(e){
      if(e.key==="Enter"){
        e.preventDefault()
        const { todo } = this.state;
        console.log(e.target.value)
        this.state.todo.push(e.target.value)
        this.setState({ 
          todo,
          valueInput: ""
        })
      } 
  }

  handlerText(e){
    this.setState({
      valueInput: e.target.value
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.todo.map((task, index)=> <li key={index}>{task}</li>)}
          </ul>
           <form>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onKeyPress={this.handlerNewTask} value={this.state.valueInput} onChange={this.handlerText}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
