const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    const horario = Number(form.horario.value);
    let franca = horario + 5; // Adicionando 5 horas ao horário informado

    if (franca >= 24) { // Se o horário na França for maior ou igual a 24
        franca -= 24; // Subtrai 24 horas para manter o horário dentro do mesmo dia
    }

    resp.innerText = `Hora na França é ${franca.toFixed(2)}`;

    e.preventDefault();
});
