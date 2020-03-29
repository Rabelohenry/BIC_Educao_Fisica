jQuery(document).ready(function () {

    //---IMPORTANTE---
    //DEFINIR nomeColecao e idDoDocumento
    var $data = {};

    var doc;

    jQuery("#usuario").focusout(function(){
        doc = jQuery("#usuario").val();
    });

    jQuery('#contactForm').submit(function () {
        var $formArray = jQuery('#contactForm').serializeArray();
        jQuery.each($formArray, function (index, field) {
            $data[field.name] = field.value;
        });
        db.collection('usuarios').doc(doc).set($data).then(function () {
            alert("Usuario adicionado com sucesso");
        }).catch(function (err) {
            alert("erro");
        });
        return false;
    });
});
