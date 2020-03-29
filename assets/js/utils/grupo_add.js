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

    var variavel = queryString("grupo");
    var str = variavel;
    str = decodeURI(str);
    //---IMPORTANTE---
    //DEFINIR nomeColecao e idDoDocumento
    var $data = {};

    var doc;
    var grupos;

    jQuery("#matricula").focusout(function(){
        doc = jQuery("#matricula").val();
    });
    jQuery("#grupo").focusout(function(){
        grupos = jQuery("#grupo").val();
    });

    jQuery('#contactForm').submit(function () {
        var now = new Date(Date.now());
        var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        jQuery("#tempo").val(now);
        var $formArray = jQuery('#contactForm').serializeArray();
        jQuery.each($formArray, function (index, field) {
            $data[field.name] = field.value;
        });
        db.collection('grupos').doc(str).collection('alunos').doc(doc).set($data).then(function () {
            alert("DEU CERTO");
        }).catch(function (err) {
            alert("erro");
        });
        alert('AKJSDH');
        console.log($data);
        $("input#matricula").val("");
        $("input#datepicker").val("");
        $("input#name").val("");
        $("input#sexo").val("");
            return false;
    });

    db.collection('grupos').doc(str).collection('alunos').orderBy("tempo","desc").limit(7).onSnapshot(function (querySnapshot) {
        jQuery('#bloco').html('');
        querySnapshot.forEach(function (doc) {
            var name = doc.data().nome;
            var grupo = doc.data().grupo;
            jQuery('#bloco').append(
                `
                    <li class="list-group-item">`+ name +`||`+ grupo +` </li>
                `
            );
        });
    }, function (err) {
        alert('ERRADO');
    });

    db.collection('grupos').doc(str).collection('alunos').orderBy('nome','asc').onSnapshot(function (querySnapshot) {
        jQuery('#main').html('');
        querySnapshot.forEach(function (doc) {
            var name = doc.data().nome;
            var matri = doc.data().matricula;
            var grupo = doc.data().grupo;
            jQuery('#main').append(
                `
                   <li class="list-group-item">
                    <div class="row container">
                    <div class="col col-md-4">` + name + `</div> 
                    <div class="col col-md-3">` + matri + `</div>
                    <div class="col col-md-2">` + grupo + `</div>
                    <div class="col col-md-2">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ações
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#" onclick="get_atividade('`+grupo+`','`+matri+`','`+name+`')">Teste de nível de atividade física</a>
                            <a class="dropdown-item" href="#" onclick="get_aptidao('`+grupo+`','`+matri+`','`+name+`');">Aptidão Física e variáveis fisiológicas </a>
                            <a class="dropdown-item" href="#" onclick="get_parq('`+grupo+`','`+matri+`','`+name+`');">Par-Q e Risco Coronariano </a>
                            <a class="dropdown-item" href="#" onclick="view_tests('`+grupo+`','`+matri+`','`+name+`');">Visualizar testes</a>
                          </div>
                        </div>
                    </div>   
                    <div class="col col-md-1"><i class="fa fa-trash-o float-right delete" id="` + matri + `" onclick="deleteUser('` + matri + `');"></i>
                        </div> 
                    </div>
                    </li>       
                    `
            );
        });
    }, function (err) {
        alert('ERRADO');
    });


});
function deleteUser(nome) {
    db.collection("grupos").doc(nome).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}