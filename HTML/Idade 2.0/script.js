function verificar() {
  const age = document.getElementById("iage").value;
  const mas = document.getElementById("sexmas");
  const fem = document.getElementById("sexfem");
  const txt = document.getElementById("txt"); 
  
  if (age <= 17 && mas.checked) {
      txt.innerHTML = "Você é um menino e têm " + age + " anos.";
      imagem.src = 'img/garoto.jpg';
  }
  if(age >=17 && mas.checked){
      txt.innerHTML = "Você é um homem e têm " + age + " anos.";
      imagem.src = 'img/homem.jpeg';
  }
  if(age>=59 && mas.checked){
      txt.innerHTML = "Você é um senhor e têm " + age + " anos.";
      imagem.src = 'img/idoso.jpg';
  }

  if (age <= 17 && fem.checked) {
      txt.innerHTML = "Você é uma menina e têm " + age + " anos.";
      imagem.src = 'img/garota.png';

  } 
  if(age >=17 && fem.checked){
      txt.innerHTML = "Você é uma mulher e têm " + age + " anos.";
      imagem.src = 'img/mulher.jpg';
  }
  if(age>=59 && fem.checked){
      txt.innerHTML = "Você é uma senhora e têm " + age + " anos.";
      imagem.src = 'img/idosa.jpg';
  }
}