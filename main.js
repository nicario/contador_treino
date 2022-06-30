const botoes = document.querySelectorAll(".botao");
const botoes1 = document.querySelectorAll(".botao1");
const botoes2 = document.querySelectorAll(".botao2");
const botoes3 = document.querySelectorAll(".botao3");
const botoes4 = document.querySelectorAll(".botao4");
const numeros = document.querySelector(".caixa0")
const numeros1 = document.querySelector(".caixa1")
const numeros2 = document.querySelector(".caixa2")
const numeros3 = document.querySelector(".caixa3")
const numeros4 = document.querySelector(".caixa4")

let contador = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

botoes.forEach(function(btn){
btn.addEventListener('click', function(e){
  const numero = e.currentTarget.classList;
  if(numero.contains("css")){
  contador = contador + 5;
  numeros.textContent = contador;
  }else if(numero.contains("janta")){
    contador = contador + 5;
    numeros.textContent = contador;
  }else if(numero.contains("hpe")){
    contador = contador + 5;
    numeros.textContent = contador;
  }else if(numero.contains("praticar")){
    contador = contador + 5;
    numeros.textContent = contador;
  }else{
    contador = 0;
    numeros.textContent = contador;
  }
  })
})

botoes1.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const numero1 = e.currentTarget.classList;
    if(numero1.contains("cafet")){
    contador1 = contador1 + 5;
    numeros1.textContent = contador1;
    }else if(numero1.contains("js")){
      contador1 = contador1 + 5;
      numeros1.textContent = contador1;
    }else if(numero1.contains("cfh")){
      contador1 = contador1 + 10;
      numeros1.textContent = contador1;
    }else if(numero1.contains("ncfh")){
      contador1 = contador1 + 5;
      numeros1.textContent = contador1;
    }else if(numero1.contains("estudar")){ contador1 = contador1 + 5;
      numeros1.textContent = contador1;
    }else{
      contador1 = 0;
      numeros1.textContent = contador1;
    }
    })
  })

  botoes2.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const numero2 = e.currentTarget.classList;
      if(numero2.contains("cafem")){
      contador2 = contador2 + 5;
      numeros2.textContent = contador2;
      }else if(numero2.contains("agual")){
        contador2 = contador2 + 5;
        numeros2.textContent = contador2;
      }else if(numero2.contains("sagua")){
        contador2 = contador2 + 10;
        numeros2.textContent = contador2;
      }else if(numero2.contains("html")){
        contador2 = contador2 + 5;
        numeros2.textContent = contador2;
      }else if(numero2.contains("haula")){
        contador2 = contador2 + 5;
        numeros2.textContent = contador2;
      }else{
        contador2 = 0;
        numeros2.textContent = contador2;
      }
      })
    })

    botoes3.forEach(function(btn){
      btn.addEventListener('click', function(e){
        const numero3 = e.currentTarget.classList;
        if(numero3.contains("almoco")){
        contador3 = contador3 + 5;
        numeros3.textContent = contador3;
        }else if(numero3.contains("pagina")){
          contador3 = contador3 + 10;
          numeros3.textContent = contador3;
        }else if(numero3.contains("dormir")){
          contador3 = contador3 + 10;
          numeros3.textContent = contador3;
        }else if(numero3.contains("ndormir")){
          contador3 = contador3 + 5;
          numeros3.textContent = contador3;
        }else{
          contador3 = 0;
          numeros3.textContent = contador3;
        }
        })
      })

      botoes4.forEach(function(btn){
        btn.addEventListener('click', function(e){
          const numero4 = e.currentTarget.classList;
          if(numero4.contains("banho")){
          contador4 = contador4 + 5;
          numeros4.textContent = contador4;
          }else if(numero4.contains("sbanho")){
            contador4 = contador4 + 10;
            numeros4.textContent = contador4;
          }else if(numero4.contains("ced")){
            contador4 = contador4 + 10;
            numeros4.textContent = contador4;
          }else if(numero4.contains("nced")){
            contador4 = contador4 + 20;
            numeros4.textContent = contador4;
          }else{
            contador4 = 0;
            numeros4.textContent = contador4;
          }
          })
        })