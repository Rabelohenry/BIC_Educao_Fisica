function deleteTest(str, str2, collection,id) {
    db.collection('grupos').doc(str).collection('alunos').doc(str2).collection('testes').doc('1').collection(collection).doc(id).delete().then(function () {
        alert('Teste excluido com êxito!');
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}

jQuery(document).ready(function () {

    var doc;

    function queryString(parameter) {
        var loc = location.search.substring(1, location.search.length);
        var param_value = false;
        var params = loc.split("&");
        for (i = 0; i < params.length; i++) {
            param_name = params[i].substring(0, params[i].indexOf('='));
            if (param_name == parameter) {
                param_value = params[i].substring(params[i].indexOf('=') + 1)
            }
        }
        if (param_value) {
            return param_value;
        } else {
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

    //ATIVIDADE
    db.collection('grupos').doc(str).collection('alunos').doc(str2).collection('testes').doc('1').collection('Atividade Física').orderBy('temp', 'desc').onSnapshot(function (querySnapshot) {
        jQuery('#ativi_fisica').html('');
        querySnapshot.forEach(function (doc) {
            var id = doc.id;
            var temp = doc.data().temp;
            var data = doc.data();
            var Abdominal_Fitnessgram = data.Abdominal_Fitnessgram;
            var Barralivre = data.Barralivre;
            var Elevacao_de_tronco_Fitnessgram = data.Elevacao_de_tronco_Fitnessgram;
            var ForcademembrossuperioresFitnessgram = data.ForcademembrossuperioresFitnessgram;
            var Salto_horizontal = data.Salto_horizontal;
            var abdome = data.abdome;
            var abdominala = data.abdominala;
            var adptado_flexibilidade = data.adptado_flexibilidade;
            var altura = data.altura;
            var banco_Wells_flexibilidade = data.banco_Wells_flexibilidade;
            var ccnumbercolesterol_total = data.ccnumbercolesterol_total;
            var cintura = data.cintura;
            var distancia = data.distancia;
            var dobra_abdome = data.dobra_abdome;
            var dobra_panturrilha = data.dobra_panturrilha;
            var dobra_triciptal = data.dobra_triciptal;
            var frequencia_cardia_maxima = data.frequencia_cardia_maxima;
            var frequencia_cardia_repouso = data.frequencia_cardia_repouso;
            var glicose = data.glicose;
            var massa_corporal = data.massa_corporal;
            var ombro_direito_flexibilidade = data.ombro_direito_flexibilidade;
            var ombro_esquerdo_flexibilidade = data.ombro_esquerdo_flexibilidade;
            var pressao_arterial = data.pressao_arterial;
            var tempo = data.tempo;
            var triglecerideos = data.triglecerideos;
            var voltas = data.voltas;
            jQuery('#ativi_fisica').append(
                `
                   <div id="accordion10" onclick="">
                        <div class="card">
                            <div class="card-header" id="headingOne10">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#`+id+`"  aria-controls="`+id+`">
                                          ` + temp +` 
                                    </button>
                                    <div class="col col-md-5 float-right"><i class="fa fa-trash-o float-right delete" id="` + name + `" onclick="deleteTest('` + str + `','` + str2 + `','Atividade Física','` + id + `')" style="color: black; float: right"> Excluir Teste</i></div>
                                </h5>
                            </div>
    
                            <div id="`+id+`" class="collapse show" aria-labelledby="headingOn10" data-parent="#accordion10">
                                <div class="card-body">
                                    <div class="content">
        <!-- Animated -->
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong>Medidas Antropométricas</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="massa_corporal" class="control-label mb-1">Massa Corporal
                                                (Kg):</label>
                                            <input value="` + massa_corporal + `" disabled id="massa_corporal" name="massa_corporal" type="text"
                                                   class="form-control cc-name valid" data-val="true">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="altura" class="control-label mb-1">Estatura (cm):</label>
                                            <input value="` + altura + `" disabled id="altura" name="altura" type="text"
                                                   class="form-control cc-number identified visa" value="` + altura + `">

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="cintura" class="control-label mb-1">Circunferência da
                                                Cintura:</label>
                                            <input value="` + +`" disabled id="cintura" name="cintura" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="abdome" class="control-label mb-1">Circunferência do
                                                Abdome:</label>
                                            <input value="` + abdome + `" disabled id="abdome" name="abdome" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group has-success">
                                            <label for="dobra_triciptal" class="control-label mb-1">Dobra
                                                Triciptal:</label>
                                            <input value="` + dobra_triciptal + `" disabled id="dobra_triciptal" name="dobra_triciptal" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="dobra_abdome" class="control-label mb-1">Dobra Abdome:</label>
                                            <input value="` + dobra_abdome + `" disabled id="dobra_abdome" name="dobra_abdome" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="dobra_panturrilha" class="control-label mb-1">Dobra
                                                Panturrilha:</label>
                                            <input value="` + dobra_panturrilha + `" disabled id="dobra_panturrilha" name="dobra_panturrilha" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div> <!-- .card -->
                </div><!--/.col-->

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><strong>Variáveis Fisiológicas</strong></div>
                        <div class="card-body">
                            <!-- Credit Card -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group has-success">
                                            <label for="pressao_arterial" class="control-label mb-1">Pressão Arterial
                                                (repouso):</label>
                                            <input value="` + pressao_arterial + `" disabled id="pressao_arterial" name="pressao_arterial" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="frequencia_cardia_repouso" class="control-label mb-1">Frequência
                                                Cardia (repouso):</label>
                                            <input value="` + frequencia_cardia_repouso + `" disabled id="frequencia_cardia_repouso" name="frequencia_cardia_repouso"
                                                   type="text" class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="frequencia_cardia_maxima" class="control-label mb-1">Frequência
                                                Cardia (máxima):</label>
                                            <input value="` + frequencia_cardia_maxima + `" disabled id="frequencia_cardia_maxima" name="frequencia_cardia_maxima"
                                                   type="text" class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group has-success">
                                            <label for="glicose" class="control-label mb-1">Glicose:</label>
                                            <input value="` + glicose + `" disabled id="glicose" name="glicose" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="triglecerideos"
                                                   class="control-label mb-1">Triglicerídeos:</label>
                                            <input value="` + triglecerideos + `" disabled id="triglecerideos" name="triglecerideos" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="cc-numbercolesterol_total" class="control-label mb-1">Colesterol
                                                Total:</label>
                                            <input value="` + ccnumbercolesterol_total + `" disabled id="cc-numbercolesterol_total" name="ccnumbercolesterol_total"
                                                   type="text" class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><strong>Flexibilidade</strong></div>
                        <div class="card-body card-block">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="banco_Wells_flexibilidade" class="control-label mb-1">Banco de
                                                Wells (cm):</label>
                                            <input value="` + banco_Wells_flexibilidade + `" disabled id="banco_Wells_flexibilidade" name="banco_Wells_flexibilidade"
                                                   type="text" class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="adptado_flexibilidade" class="control-label mb-1">Adaptado
                                                (cm):</label>
                                            <input value="` + adptado_flexibilidade + `" disabled id="adptado_flexibilidade" name="adptado_flexibilidade" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="ombro_direito_flexibilidade" class="control-label mb-1">Ombro
                                                direito: </label>
                                            <input value="` + ombro_direito_flexibilidade + `" disabled id="ombro_direito_flexibilidade" name="ombro_direito_flexibilidade"
                                                   type="text" class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="ombro_esquerdo_flexibilidade" class="control-label mb-1">Ombro
                                                esquerdo:</label>
                                            <input value="` + ombro_esquerdo_flexibilidade + `" disabled id="ombro_esquerdo_flexibilidade" name="ombro_esquerdo_flexibilidade"
                                                   type="text" class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><strong>Força</strong><br/>
                         </div>
                        <div class="card-body card-block">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group has-success">
                                            <label for="abdominal" class="control-label mb-1">Abdominal (número de repetições)
                                                30 segundos:</label>
                                            <input value="` + abdominala + `" disabled id="abdominal" name="abdominala" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="Abdominal Fitnessgram" class="control-label mb-1">Abdominal Fitnessgram</label>
                                            <input value="` + Abdominal_Fitnessgram + `" disabled id="Abdominal Fitnessgram" name="Abdominal_Fitnessgram" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="Elevação de tronco Fitnessgram (cm)" class="control-label mb-1">Elevação de tronco (cm):</label>
                                            <input value="` + Elevacao_de_tronco_Fitnessgram + `" disabled id="Elevação de tronco Fitnessgram (cm)" name="Elevação_de_tronco_Fitnessgram" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group has-success">
                                            <label for="Barra livre (número de repetições)" class="control-label mb-1">Barra livre (repetições): </label>
                                            <input value="` + Barralivre + `" disabled id="Barra livre (número de repetições)" name="Barralivre" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="Força de membros superiores Fitnessgram (número de repetições)" class="control-label mb-1">Membros superiores (repetições):</label>
                                            <input value="` + ForcademembrossuperioresFitnessgram + `" disabled id="Força de membros superiores Fitnessgram (número de repetições)" name="ForçademembrossuperioresFitnessgram" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="Salto horizontal (cm)" class="control-label mb-1">Salto horizontal (cm)</label>
                                            <input value="` + Salto_horizontal + `" disabled id="Salto horizontal (cm)" name="Salto_horizontal" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><strong>Capacidade Aeróbica</strong>
                         </div>
                        <div class="card-body card-block">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group has-success">
                                            <label for="voltas" class="control-label mb-1">Vai e Vem de 20m - PACER
                                                Fitnessgram (número de voltas):</label>
                                            <input value="` + voltas + `" disabled id="voltas" name="voltas" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group has-success">
                                            <label for="tempo" class="control-label mb-1">Tempo:</label>
                                            <input value="` + tempo + `" disabled id="tempo" name="tempo" type="text"
                                                   class="form-control cc-name valid">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="distancia" class="control-label mb-1">Distância:</label>
                                            <input value="` + distancia + `" disabled id="distancia" name="distancia" type="text"
                                                   class="form-control cc-number identified visa">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /#add-category -->
        </div>
        <!-- .animated -->
    </div>
                                </div>
                            </div>
                        </div>
                   </div>                     
                    `
            );
        });
    }, function (err) {
        alert('ERRADO');
    });

    // APTIDAO
    db.collection('grupos').doc(str).collection('alunos').doc(str2).collection('testes').doc('1').collection('Paq-C e Paq-A').orderBy('tempo','desc').onSnapshot(function (querySnapshot) {
        jQuery('#aptid_fisica').html('');
        querySnapshot.forEach(function (doc) {
            var id = doc.id;
            var temp = doc.data().tempo;
            var data = doc.data();
            var _1 = data._1;
            var _2 = data._2;
            var _3 = data._3;
            var _4 = data._4;
            var _5 = data._5;
            var _6 = data._6;
            var _7 = data._7;
            var _8 = data._8;
            var _9 = data._9;

            jQuery('#aptid_fisica').append(
                `
                    <div id="accordion1">
                        <div class="card">
                            <div class="card-header" id="headingOne1">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#`+id+`"  aria-controls="`+id+`">
                                          ` + temp + ` 
                                    </button>
                                    <div class="col col-md-5 float-right"><i class="fa fa-trash-o float-right delete" id="` + name +`" onclick="deleteTest('` + str + `','` + str2 + `','Paq-C e Paq-A','` + id + `')" style="color: black; float: right"> Excluir Teste</i></div>
                                </h5>
                            </div>
    
                            <div id="`+id+`" class="collapse show" aria-labelledby="headingOne1e" data-parent="#accordion1">
                                <div class="card-body">
                                    <div class="animated fadeIn">
       
                                          <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header"><strong>PAQ-C e PAQ-A</strong></div>
                        <div class="card-body card-block">
                                <input type="text" id="tempo" name="tempo" class="form-control"
                                       style="display: none">
                            <div class="form-group">
                                <label for="Nos últimos 7 dias, durante as aulas de educação física, quantas vezes você permaneceu muito ativo fisicamente: jogando intensamente, correndo, saltando, fazendo lançamentos, etc.?"
                                       class=" form-control-label">Nos últimos 7 dias, durante as aulas de educação
                                    física, quantas vezes você permaneceu muito ativo fisicamente: jogando
                                    intensamente, correndo, saltando, fazendo lançamentos, etc.? </label>
                                <div>
                                    <input disabled name="_1" 
                                            id="1" class="form-control" value="`+_1+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Nos últimos 7 dias, o que você normalmente fez no horário do recreio escolar? Essa questão deverá ser respondida apenas por crianças. Desconsiderar aplicação para adolescentes"
                                       class=" form-control-label">Nos últimos 7 dias, o que você normalmente fez no
                                    horário do recreio escolar? Essa questão deverá ser respondida apenas por
                                    crianças. Desconsiderar aplicação para adolescentes. </label>
                                <div>
                                    <input disabled name="_2" 
                                            id="2" class="form-control" value="`+_2+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Nos últimos 7 dias, fora da escola, no período da manhã, quantas vezes você brincou, praticou esporte, realizou exercício físico ou dançou de tal forma que ficou muito ativo fisicamente?"
                                       class=" form-control-label">Nos últimos 7 dias, fora da escola, no período da
                                    manhã, quantas vezes você brincou, praticou esporte, realizou exercício físico
                                    ou dançou de tal forma que ficou muito ativo fisicamente?</label>
                                <div>
                                    <input disabled name="_3" 
                                            id="3" class="form-control" value="`+_3+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Nos últimos 7 dias, fora da escola, no período da tarde, quantas vezes Você brincou, praticou esporte, realizou exercício físico ou dançou de tal forma que ficou muito ativo fisicamente?"
                                       class=" form-control-label">Nos últimos 7 dias, fora da escola, no período da
                                    tarde, quantas vezes Você brincou, praticou esporte, realizou exercício físico
                                    ou dançou de tal forma que ficou muito ativo fisicamente? </label>
                                <div>
                                    <input disabled name="_4" 
                                            id="4" class="form-control" value="`+_4+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Nos últimos 7 dias, fora da escola, no período da noite, quantas vezes Você brincou, praticou esporte, realizou exercício físico ou dançou de tal forma que ficou muito ativo fisicamente?"
                                       class=" form-control-label">Nos últimos 7 dias, fora da escola, no período da
                                    noite, quantas vezes Você brincou, praticou esporte, realizou exercício físico
                                    ou dançou de tal forma que ficou muito ativo fisicamente? </label>
                                <div>
                                    <input disabled name="_5" 
                                            id="5" class="form-control" value="`+_5+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="No último final de semana, quantas vezes Você brincou, praticou esporte, realizou exercício físico ou dançou de tal forma que ficou muito ativo fisicamente?"
                                       class=" form-control-label">No último final de semana, quantas vezes Você
                                    brincou, praticou esporte, realizou exercício físico ou dançou de tal forma que
                                    ficou muito ativo fisicamente?</label>
                                <div>
                                    <input disabled name="_6" 
                                            id="6" class="form-control" value="`+_6+`">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Qual das seguintes situações melhor descreve seus últimos 7 dias? Leia as 5 opções antes de decidir por uma resposta que melhor descreve sua última semana."
                                       class=" form-control-label">Qual das seguintes situações melhor descreve seus
                                    últimos 7 dias? Leia as 5 opções antes de decidir por uma resposta que melhor
                                    descreve sua última semana.</label>
                                <div>
                                    <input disabled name="_7" 
                                            id="7" class="form-control" value="`+_7+`"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Você esteve doente na última semana, ou apresentou alguma situação que o impediu de realizar normalmente atividade física?"
                                       class=" form-control-label">Você esteve doente na última semana, ou
                                    apresentou alguma situação que o impediu de realizar normalmente atividade
                                    física?</label>
                                <div class="col col-md-9">
                                <input disabled name="_8" 
                                            id="8" class="form-control" value="`+_8+`"/>
                                    <div class="form-check">
                                        <div class="radio">
                                            <label for="radio2" class="form-check-label ">
                                                
                                            </label>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group has-success">
                                                <label for="Se sim, qual foi o impedimento?"
                                                       class="control-label mb-1">Se sim, qual foi o
                                                    impedimento?</label>
                                                <input disabled id="Se sim, qual foi o impedimento?"
                                                       name="_9" type="text"
                                                       class="form-control cc-name valid"  value="`+_9+`">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                                            <!-- /#add-category -->
                                             </div>
                                        <!-- .animated -->
                                </div>
                             </div>
                            </div>
                        </div>
                   </div>      
                    `
            );
        });
    }, function (err) {
        alert('ERRADO');
    });

    // PARQ
    db.collection('grupos').doc(str).collection('alunos').doc(str2).collection('testes').doc('1').collection('ParQeRiscoCoronariano').orderBy('tempo','desc').onSnapshot(function (querySnapshot) {
        jQuery('#parq').html('');
        querySnapshot.forEach(function (doc) {
            var id = doc.id;
            var temp = doc.data().tempo;
            var data = doc.data();
            var _1 = data._1;
            var _2 = data._2;
            var _3 = data._3;
            var _4 = data._4;
            var _5 = data._5;
            var _6 = data._6;
            var _7 = data._7;

            jQuery('#parq').append(
                `
                   <div id="accordion7">
                    <div class="card">
                        <div class="card-header" id="headingOne7">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#`+id+`"  aria-controls="`+id+`">
                                    ` + temp + ` 
                                </button>
                                <div class="col col-md-5 float-right"><i class="fa fa-trash-o float-right delete" id="` + name +`" onclick="deleteTest('` + str + `','` + str2 + `','ParQeRiscoCoronariano','` + id + `')" style="color: black; float: right"> Excluir Teste</i></div>
                            </h5>
                        </div>

                        <div id="`+id+`" class="collapse show" aria-labelledby="headingOne7" data-parent="#accordion7">
                            <div class="card-body">
                                <div class="form-group">
                            <label for="Seu médico disse que você possui um problema cardíaco e recomendou atividades físicas sob supervisão médica?"
                                   class=" form-control-label">Seu médico disse que você possui um problema cardíaco e recomendou atividades físicas sob supervisão médica?</label>
                            <div class="col col-md-9">
                             <input disabled name="_1" 
                                            id="1" class="form-control" value="`+_1+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Você tem dor no peito provocada por atividades físicas?"
                                   class=" form-control-label">Você tem dor no peito provocada por atividades físicas?</label>
                            <div class="col col-md-9">
                             <input disabled name="_2" 
                                            id="2" class="form-control" value="`+_2+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Você sentiu dor no peito no último mês?"
                                   class=" form-control-label">Você sentiu dor no peito no último mês?</label>
                            <div class="col col-md-9">
                             <input disabled name="_3" 
                                            id="3" class="form-control" value="`+_3+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Você já perdeu a consciência em alguma ocasião ou sofreu alguma queda em virtude de tontura?"
                                   class=" form-control-label">Você já perdeu a consciência em alguma ocasião ou sofreu alguma queda em virtude de tontura?</label>
                            <div class="col col-md-9">
                             <input disabled name="_4" 
                                            id="4" class="form-control" value="`+_4+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Você tem algum problema ósseo ou articular que poderia agravar-se com a prática de atividades físicas?">Você tem algum problema ósseo ou articular que poderia agravar-se com a prática de atividades físicas?</label>
                            <div class="col col-md-9">
                             <input disabled name="_5" 
                                            id="5" class="form-control" value="`+_5+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Algum médico já lhe prescreveu medicamento para pressão arterial ou para o coração?">Algum médico já lhe prescreveu medicamento para pressão arterial ou para o coração?</label>
                            <div class="col col-md-9">
                             <input disabled name="_6" 
                                            id="6" class="form-control" value="`+_6+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                            <label for="Você tem conhecimento, por informação médica ou pela própria experiência, de algum motivo que poderia impedí-lo de participar de atividades fisicas sem supervisão médica?">Você tem conhecimento, por informação médica ou pela própria experiência, de algum motivo que poderia impedí-lo de participar de atividades fisicas sem supervisão médica?</label>
                            <div class="col col-md-9">
                             <input disabled name="_7" 
                                            id="7" class="form-control" value="`+_7+`"/>
                                <div class="form-check">
                                </div>
                            </div>
                        </div>
                    </div>
                    `
            );
        });
    }, function (err) {
        alert('ERRADO');
    });
});
