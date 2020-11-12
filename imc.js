
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function imc()
{
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '' )
    {
        const ValorImc = (peso / (altura * altura)).toFixed(2);

        let classificação = '';

        if(ValorImc < 18.5)
        {
            classificação = 'abaixo do peso!';
        }
        else if(ValorImc < 25)
        {
        classificação = 'com o peso ideal. Parabens!!';
        }
        else if(ValorImc < 30)
        {
        classificação = 'levemente acima do peso.';
        }
        else if(ValorImc < 35)
        {
        classificação = 'com obesidade de 1° grau.';
        }
        else if(ValorImc < 40)
        {
        classificação = 'com obesidade de 2° grau.'
        }
        else
        {
        classificação = 'com obesidade de 3° grau. Cuidado!!'
        }
        
        resultado.textContent = `${nome} seu IMC é ${ValorImc} e você está ${classificação}`;
    }
    else
    {
        resultado.textContent = 'Preencha todos os campos!';
    }  
}

calcular.addEventListener('click', imc);