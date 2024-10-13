document.getElementById("botaoCalculo").addEventListener('click', function(){
    let peso = document.getElementById('pesoValue').value
    let altura = document.getElementById('alturaValue').value

    function verificaValoresValidos(peso, altura){
        if(isNaN(peso) || isNaN(altura)){
            window.alert("Você inseriu valores errados em algum dos campos")
            return false
        }
        else if(altura % 1 != 0){
            window.alert('Você inseriu um ponto ou virgula na altura, digite-a em CM')
            return false
        }
        else{
            return true
        }
    }

    function calculaIMC(peso, altura){
        if(verificaValoresValidos(peso, altura)){
        alturaCalculo = altura/100
        alturaCalculo = alturaCalculo**2
        pesoCalculo = peso
        const resultadoFinal = pesoCalculo/alturaCalculo
        document.querySelector('.ResultadoCalculo').innerText = `Seu IMC é: ${resultadoFinal.toFixed(2)}`;
        }
        
    }
calculaIMC(peso, altura)

    
})
