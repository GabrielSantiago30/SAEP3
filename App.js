import Componente from './Componente.js';
import ExemploDeProps from './ExemploDeProps.js';
import imagem_urso from './urso.jpg';
// import './App.css';
import './index.css';

function App() {

  var nome = 'Gabriel' //variável
  var n1 = 2
  var n2 = 3

  function mundo() {
    return 'Olá mundo'
  }

  function numeros() {
    return (n1 + n2)
  }

  return (
    <div className="App">

      <h1>Olá, {nome}</h1>
      <h2>{mundo()}</h2>
      <h3>{numeros(n1 + n2)}</h3>

      <img src={imagem_urso} alt="Urso" />

      <br /><br /><br />

      <div className="comp">

        <Componente></Componente>

      </div>


      <br /><br />

      <div className="props">

        <ExemploDeProps nomePessoa="Gabriel" idade={30} cidade="Nova Lima"></ExemploDeProps>

      </div>

      <div className="props">

        <ExemploDeProps nomePessoa="Maria" idade={24} cidade="Raposos"></ExemploDeProps>

      </div>

      <div className="props">

        <ExemploDeProps nomePessoa="João" idade={46} cidade="Belo Horizonte"></ExemploDeProps>

      </div>



    </div>
  );
}

export default App;
