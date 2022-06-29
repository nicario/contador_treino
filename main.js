const botao = document.querySelectorAll('.botao');
const botao1 = document.querySelectorAll('.botao1');
const botao2 = document.querySelectorAll('.botao2');
const botao3 = document.querySelectorAll('.botao3');
const botao4 = document.querySelectorAll('.botao4');
const numeros = document.querySelectorAll('.caixa')
let contador = 0; 
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

botao.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const numero = e.currentTarget.classList;
    if(numero.contains("aumenta")) {
      contador++;
    } else if(numero.contains("diminui")) {
      contador--;
    } else {
      contador = 0;
    }
    numeros[0].textContent = contador;
    })
  });

  botao1.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const numero = e.currentTarget.classList;
      if(numero.contains("aumenta")) {
        contador1++;
      } else if(numero.contains("diminui")) {
        contador1--;
      } else {
        contador1 = 0;
      }
      numeros[1].textContent = contador1;
      })
    });

    botao2.forEach(function(btn){
      btn.addEventListener("click", function(e){
        const numero = e.currentTarget.classList;
        if(numero.contains("aumenta")) {
          contador2++;
        } else if(numero.contains("diminui")) {
          contador2--;
        } else {
          contador2 = 0;
        }
        numeros[2].textContent = contador2;
        })
      });

      botao3.forEach(function(btn){
        btn.addEventListener("click", function(e){
          const numero = e.currentTarget.classList;
          if(numero.contains("aumenta")) {
            contador3++;
          } else if(numero.contains("diminui")) {
            contador3--;
          } else {
            contador3 = 0;
          }
          numeros[3].textContent = contador3;
          })
        });

        botao4.forEach(function(btn){
          btn.addEventListener("click", function(e){
            const numero = e.currentTarget.classList;
            if(numero.contains("aumenta")) {
              contador4++;
            } else if(numero.contains("diminui")) {
              contador4--;
            } else {
              contador4 = 0;
            }
            numeros[4].textContent = contador4;
            })
          });
