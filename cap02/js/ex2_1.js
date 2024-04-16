let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // Assuming input element id is "nome"
  resp.innerText = `Olá ${nome}`;
  e.preventDefault();
});


