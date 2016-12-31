$('document').ready(function(){
    $('#hide-about').hide();
    $('#more-celebrities-hide-button').hide();
    $('#know-more').click(function(){
        $('#more-about').show();
        $('#hide-about').show();
        $(this).hide();
    });

    $('#hide-about').click(function(){
        $('#more-about').hide();
        $('#know-more').show();
        $(this).hide();
    });

    $('#more-celebrities-button').click(function(){
        $('#more-celebrities').show();
        $('#more-celebrities-hide-button').show();
        $(this).hide(); 
    });

    $('#more-celebrities-hide-button').click(function(){
        $('#more-celebrities').hide();
        $('#more-celebrities-button').show();
        $(this).hide(); 
    });
});
