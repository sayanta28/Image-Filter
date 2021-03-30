$('#image_input').change( function (){
        $(this).val(null);
});

$('#btn_xpro2').click( function () {
    let p = $("#btn_xpro2").attr("data-effect");
    console.log(p);
    renderEffect(p);

});

$('#btn_normal').click( function () {
    let p = $("#btn_normal").attr("data-effect");
    console.log(p);
    renderEffect(p);
});

$('#btn_willow').click( function () {
    let p = $("#btn_willow").attr("data-effect");
    console.log(p);
    renderEffect(p);

});

$('#btn_walden').click( function () {
    let p = $("#btn_walden").attr("data-effect");
    console.log(p);
    renderEffect(p);

});

$('#btn_dogpatch').click( function () {
    let p = $(this).attr("data-effect");
    console.log(p);
    renderEffect(p);

});

$('#btn_skyline').click( function () {
    let p = $("#btn_skyline").attr("data-effect");
    console.log(p);
    renderEffect(p);

});

function renderEffect(effect) {
    var imageDOM = document.getElementById('new_img2');
    var imgObj = new Image();
    // imgObj.src = 'Thinking-of-getting-a-cat.jpg';  
    imgObj.src = $('#new_img').attr("src");

    var willScale = false;
    var scaleFactor = 1;
    var options = (willScale) ? {scale: scaleFactor} : null;

    var f = filterous.importImage(imgObj)
            .applyInstaFilter(effect)
            .renderHtml(imageDOM);
    delete imgObj;
    console.log('DONE! ');
}

// willow, moon, dogpatch

