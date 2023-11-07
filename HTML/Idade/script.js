function verificar() {
  const age = document.getElementById("ageid").value;
  const mas = document.getElementById("masculino");
  const fem = document.getElementById("feminino");
  const txt = document.getElementById("txt");

  if (age <= 17 && mas.checked) {
    txt.innerHTML = "Você é um garoto e têm " + age + " anos.";
    imagem.src = "img/garoto.jpg";
  }
  if (age >= 17 && mas.checked) {
    txt.innerHTML = "Você é um homem e têm " + age + " anos.";
    imagem.src = "imgs/homem.jpeg";
  }
  if (age >= 59 && mas.checked) {
    txt.innerHTML = "Você é um idoso e têm " + age + " anos.";
    imagem.src = "imgs/idoso.jpg";
  }
  if (age <= 17 && fem.checked) {
    txt.innerHTML = "Você é uma garota e têm " + age + " anos.";
    imagem.src = "imgs/garota.png";
  }
  if (age >= 17 && fem.checked) {
    txt.innerHTML = "Você é uma mulher, e têm " + age + " anos.";
    imagem.src = "imgs/mulher.jpg";
  }
  if (age = 18 && fem.checked) {
    txt.innerHTML = "Você é uma mulher, não tem dinheiro pra comprar milho e têm " + age + " anos.";
    imagem.src = "imgs/mulher.jpg";
  }
  if (age >= 59 && fem.checked) {
    txt.innerHTML = "Você é uma idosa e têm " + age + " anos.";
    imagem.src = "imgs/idosa.jpg";
  }
}
