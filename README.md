# Entendo props e componentes do React

Percorrendo o array de objetos e obtendo cada um dos ítens da lista de uma forma básica sem
a criação de componentes

```react
return (
<div className="app">
<h1> Lista de Tarefas </h1>
 <div className="todo-list">
 	{todos.map((todo) => (
     
     <div className="todo">
         <div className="content">

``` 
acessando a propriedade text que está no array de objetos, é preciso colocar
#### {todo.text}

  ```react
         <p>{todo.text}</p>
         //texto colocado entre parênteses
         <p className="category"> {(todo.category)}</p>
        
         </div>
         <div>
		 <button>Completar</button>
		 <button> X </button>
         </div>
         </div>
      ))}
```
Os componentes permitem dividir a IU em partes independentes e reutilizáveis e pensar em cada parte isoladamente. Esta página fornece uma introdução à ideia de componentes.
Conceitualmente, os componentes são as funções JavaScript. Eles aceitam entradas arbitrárias (chamadas de "props") e retornam elementos React descrevendo o que deve aparecer na tela

   ```react

	function Welcome(props) {
	  return <h1>Hello, {props.name}</h1>;
       }

```

#### Esta função é um componente React válido porque aceita um único argumento de objeto "props"(que significa propriedades) com dados e retorna um elemento React. Chamamos esse componente de função porque são literalmente funções em JavaScript.

#### Pode ser utilizada a classe ES6 para definir um componente

   ```react
       class Welcome extends React.Component {
         render() {
         return <h1>Hello, {this.props.name}</h1>;
        }
    }
```

### Compondo os componentes
Os componentes podem se referir a outros componentes em sua saida. Isso nos permite usar a  mesma abstração de componentes para qualquer nível de detalhe. Um botão, um formulário, uma caixa de diálogo, uma tela: em aplicativos React, tudo isso comumente expresso como componentes

### Exemplo retirado da página oficial do React


   ```ŕeact
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

Parte do código adicionado nesse projeto que utiliza componentes, de forma desestruturada
Adicionando os componentes, criar uma pasta chamada componentes dentro do src
Injetando um props, de forma desestrutura para ter acesso aos dados do outro componente   
Todo.jsx que após a criação deve ser importado na App.jsx <Todo todo={todo} /> com a props todo={todo}

   ```react
	const Todo = ({todo}) => {
	 <div className="todo">
	     <div className="content">
	       
	         //acessando a propriedade text que está no array de objetos, é preciso colocar {todo.text}
	         <p>{todo.text}</p>
	         //texto colocado entre parênteses
	         <p className="category"> {(todo.category)}</p>
	        
	     </div>
	         <div>
			 <button>Completar</button>
			 <button> X </button>
	         </div>
	</div>
	}

```

##### Entendo props e componentes do React

Percorrendo o array de objetos e obtendo cada um dos ítens da lista de uma forma básica sem
a criação de componentes

   ```react
	return (
	<div className="app">
	<h1> Lista de Tarefas </h1>
	 <div className="todo-list">
	 	{todos.map((todo) => (
	     
	     <div className="todo">
	         <div className="content">

```
       
acessando a propriedade text que está no array de objetos, é preciso colocar
#### {todo.text}

  ```react   
     
	         <p>{todo.text}</p>
	         ####texto colocado entre parênteses
	         <p className="category"> {(todo.category)}</p>
	        
	         </div>
	         <div>
			 <button>Completar</button>
			 <button> X </button>
	         </div>
	         </div>
	     ))}
```
 
Os componentes permitem dividir a IU em partes independentes e reutilizáveis e pensar em cada parte isoladamente. Esta página fornece uma introdução à ideia de componentes.
Conceitualmente, os componentes são as funções JavaScript. Eles aceitam entradas arbitrárias ( chamadas de "props") e retornam elementos React descrevendo o que deve aparecer na tela

```react 
		function Welcome(props) {
		  return <h1>Hello, {props.name}</h1>;
		}
```

Esta função é um componente React válido porque aceita um único argumento de objeto "props"(que significa propriedades) com dados e retorna um elemento React. Chamamos esse componente de função porque são literalmente funções em JavaScript.

Pode ser utilizada a classe ES6 para definir um componente
 
```react

	class Welcome extends React.Component {
	  render() {
	    return <h1>Hello, {this.props.name}</h1>;
	  }
	}
```

### Compondo os componentes
Os componentes podem se referir a outros componentes em sua saida. Isso nos permite usar a mesma abstração de componentes para qualquer nível de detalhe. Um botão, um formulário, uma caixa de diálogo, uma tela: em aplicativos React, tudo isso comumente expresso como componentes

### Exemplo retirado da página oficial do React

```react
	      
		function Welcome(props) {
		  return <h1>Hello, {props.name}</h1>;
		}
		
		function App() {
		  return (
		    <div>
		      <Welcome name="Sara" />
		      <Welcome name="Cahal" />
		      <Welcome name="Edite" />
		    </div>
		  );
```

 -  Parte do código adicionado nesse projeto que utiliza componentes, de forma desestruturada
 -  Adicionando os componentes, criar uma pasta chamada componentes dentro do src
 -  Injetando um props, de forma desestrutura para ter acesso aos dados do outro componente   
 
 Todo.jsx que após a criação deve ser importado na App.jsx <Todo todo={todo} /> com a props todo={todo}

  ```reat
		const Todo = ({todo}) => {
		 <div className="todo">
		     <div className="content">
		       
		         //acessando a propriedade text que está no array de objetos, é preciso colocar {todo.text}
		         <p>{todo.text}</p>
		         //texto colocado entre parênteses
		         <p className="category"> {(todo.category)}</p>
		        
		     </div>
		         <div>
				 <button>Completar</button>
				 <button> X </button>
		         </div>
		</div>
	}
```
