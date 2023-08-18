let b_nao = document.getElementById("btn_nao");
let b_sim = document.getElementById("btn_sim");
let recado = document.getElementById("recado");
let pergunta= document.getElementById("pergunta");

b_nao.addEventListener("mouseover", Bugar);
b_sim.addEventListener("click",Aceito)

function Bugar() {
  let aleY = Math.random() * (window.innerHeight - 40);
  let aleX = Math.random() * (window.innerWidth - 100);

  if (aleY > 720 && aleX >= 900) {
    aleY = Math.random() * (window.innerHeight - 40);
    aleX = Math.random() * (window.innerWidth - 100);
  }

  b_nao.style.position = "absolute";
  b_nao.style.left = `${aleX}px`;
  b_nao.style.top = `${aleY}px`;

}



function Recado (){



    recado.innerHTML = "Tem certeza que ainda quer continar tentando negar o seu amor por mim?";




}



setTimeout(Recado,30000);


function Aceito(){
    pergunta.innerHTML = "Obrigado pelo sim,<br>Você vai ser a pessoa mais feliz do mundo 💖";

    pergunta.style.marginTop ='15%'


    b_nao.style.visibility ="hidden";
    
    b_sim.style.visibility ="hidden";

}


