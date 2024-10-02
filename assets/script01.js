// exibir nome do mês de acordo com o número informado

const nomeMes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

const mes = (prompt("Informe o número do mês:"));
const numeroMes = Number(mes);

let mensagem = "Mês Inválido"

if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
    mensagem = `${nomeMes[numeroMes - 1]} é o mês de número ${numeroMes}`
} else {
    for (let index = 0; index < nomeMes.length; index++) {
        if (mes.toLowerCase() === nomeMes[index].toLowerCase()) {
            mensagem = `${mes} é o mês de número ${index + 1}`
            break
        }
    }
}

console.log(mensagem)