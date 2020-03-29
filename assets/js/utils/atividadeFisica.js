jQuery(document).ready(function () {

    function queryString(parameter) {
        var loc = location.search.substring(1, location.search.length);
        var param_value = false;
        var params = loc.split("&");
        for (i=0; i<params.length;i++) {
            param_name = params[i].substring(0,params[i].indexOf('='));
            if (param_name == parameter) {
                param_value = params[i].substring(params[i].indexOf('=')+1)
            }
        }
        if (param_value) {
            return param_value;
        }
        else {
            return undefined;
        }
    }

    var grupo = queryString("grupo");
    var matricula = queryString("matricula");
    var nome = queryString("nome");

    str = grupo;
    str = decodeURI(str);
    str2 = matricula;
    str2 = decodeURI(str2);
    str3 = nome;
    str3 = decodeURI(str3);

    //---IMPORTANTE---
    //DEFINIR nomeColecao e idDoDocumento
    var $data = {};

    var doc;

    jQuery('#form').submit(function () {
        var now = new Date(Date.now());
        var mes =  now.getMonth() + 1;
        var formatted = now.getDate() + "/" + mes + "/" +now.getFullYear()+ "-" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        jQuery("#temp").val(formatted);
        var $formArray = jQuery('#form').serializeArray();
        jQuery.each($formArray, function (index, field) {
            $data[field.name] = field.value;
        });
        db.collection('grupos').doc(str).collection('alunos').doc(str2).collection('testes').doc('1').collection('Atividade Física').doc().set($data).then(function () {
            alert("Teste salvo com sucesso");
            window.location = "../lib/add_aluno_grupo.html?grupo="+grupo;
        }).catch(function (err) {
            alert("erro");
        });
        return false;
    });

});
