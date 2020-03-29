jQuery(document).ready(function () {

    //---IMPORTANTE---
    //DEFINIR nomeColecao e idDoDocumento
    var $data = {};

    var doc;

    jQuery("#nome_grupo").focusout(function(){
        doc = jQuery("#nome_grupo").val();
    });

    jQuery('#novo_grupo').submit(function () {
        var now = new Date(Date.now());
        var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        jQuery("#tempo").val(now);
        var $formArray = jQuery('#novo_grupo').serializeArray();
        jQuery.each($formArray, function (index, field) {
            $data[field.name] = field.value;
        });
        db.collection('grupos').doc(doc).set($data).then(function () {
            alert("Grupo criado com sucesso");
        }).catch(function (err) {
            alert("erro");
        });
        console.log($data);
        return false;
    });

    db.collection('grupos').orderBy("tempo","desc").onSnapshot(function (querySnapshot) {
        jQuery('bloco').html('');
        querySnapshot.forEach(function (doc) {
            var name = doc.data().nome;
            jQuery('main').append(
                `
                   <li class="list-group-item">
                    <div class="row container">
                    <div class="col col-md-7" onclick="get_Group('`+name+`')">` + name + `</div> 
                    <div class="col col-md-5"><i class="fa fa-pencil-square-o  text-center delete" id="` + name + `" onclick="get_user('`+name+`')"></i><i class="fa fa-trash-o float-right delete" id="` + name + `" onclick="deleteUser('` + name + `')"></i>
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
