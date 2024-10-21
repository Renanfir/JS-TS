const meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const dias_semana = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];

function atualizarDataHora() {
    const data = new Date();
    let mes = meses[data.getMonth()];
    let dia_semana = dias_semana[data.getDay()];
    let dia = data.getDate();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    // Adiciona um zero à esquerda se os minutos ou segundos forem menores que 10
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    let frase_completa = `${dia_semana}, ${dia} de ${mes} de ${ano}\n${hora}:${minuto}:${segundo}`;
    
    const div = document.getElementById("datahora");
    div.innerText = frase_completa;
}

// Atualiza a hora a cada segundo
setInterval(atualizarDataHora, 1);

// Chamada inicial para exibir a hora imediatamente ao carregar a página
atualizarDataHora();
