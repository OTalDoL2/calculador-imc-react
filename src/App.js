import React, {useState} from "react";
import './app.css';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
    const alt = altura / 100 ;
    const imc = peso / (alt * alt);

    if(imc < 18.5)
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.") }

    else if(imc < 25)
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você está no peso ideal, boa!") }
    
    else if(imc < 30)
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você está um pouco acima do peso!") }
    
    else if(imc < 35)
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você tem obesidade grau I.") }
    
    else if(imc < 40)
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você tem obesidade grau II") }
    
    else
    { setMensagem("Seu IMC é " + imc.toFixed(2) + ". Você obesidade grau III") }
  }

  return(
    <div className="app">
      <div className="box">  
        <h1>Calculadora IMC</h1>
      
        <div className="area-input">
          <input 
            type="text" 
            placeholder="Peso em (kg) Ex: 90" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Altura em (cm) Ex: 180" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)}
          />
        
          <button className="aa" onClick={calcularIMC} > calcular</button>
        </div>
      
        <h2>{mensagem}</h2>

      </div>
    </div>
  )
}