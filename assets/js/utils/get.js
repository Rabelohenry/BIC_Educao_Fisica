function get_Group(group) {
    var grupo = group;
    get(grupo)
}
function get(grupo) {
    window.location = "../lib/add_aluno_grupo.html?grupo="+grupo;
}
//     jQuery(document).ready(function () {
//
// });
function get_atividade(group,matri,name) {
    var grupo = group;
    var matric = matri;
    var nome = name;
    get_ativ(grupo,matric,nome);
}
function get_ativ(grupo,matric,nome) {
    window.location = "../lib/atividadeFisica.html?grupo="+grupo+"&matricula="+matric+"&nome="+nome;
}

function get_aptidao(group,matri,name) {
    var grupo = group;
    var matric = matri;
    var nome = name;
    get_apt(grupo,matric,nome);
}
function get_apt(grupo,matric,nome) {
    window.location = "../lib/aptidao.html?grupo="+grupo+"&matricula="+matric+"&nome="+nome;
}

function get_parq(group,matri,name) {
    var grupo = group;
    var matric = matri;
    var nome = name;
    get_parq(grupo,matric,nome);
}
function get_parq(grupo,matric,nome) {
    window.location = "../lib/parqEriscoCoronariano.html?grupo="+grupo+"&matricula="+matric+"&nome="+nome;
}

function view_tests(group,matri,name) {
    var grupo = group;
    var matric = matri;
    var nome = name;
    get_test(grupo,matric,nome);
}
function get_test(grupo,matric,nome) {
    window.location = "../lib/view_tests.html?grupo="+grupo+"&matricula="+matric+"&nome="+nome;
}