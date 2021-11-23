function Incluir() {
    var contador = 1
    var inputTreinamento = document.getElementById('inputTreinamento').value
    var inputCompanhia = document.getElementById('inputCompanhia').value
    var Cidade = document.getElementById('Cidade').value

    $('#tabela').append(
        (`<tr class="child">
            <td>  ${inputTreinamento}  </td>
            <td> ${inputCompanhia} </td>
            <td> ${Cidade} </td>
            `));
    contador = contador + 1
};


function Limpar() {
    document.getElementById('inputTreinamento').value = '';
    document.getElementById('inputCompanhia').value = '';
    document.getElementById('Cidade').value = '';
}