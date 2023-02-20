function dataAtual() {
    const data = new Date();

    const diaSemana = getDiaSemana(data);
    const dia = data.getDate();
    const mes = getMes(data);
    const ano = data.getFullYear();
    const hora = getHora(data);
    const mensagem = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}`;

    postagem(mensagem);
    console.log(mensagem);
}

function postagem(msg) {
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = msg;
}

function getDiaSemana(data) {
    const day = data.getDay();
    
    switch(day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
    }
}

function getMes(data) {
    const month = data.getMonth();

    switch(month) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
    }
}

function getHora(data) {
    const hora = data.getHours();
    const minutos = data.getMinutes();
    
    return `${hora}:${minutos}`;

}

dataAtual()