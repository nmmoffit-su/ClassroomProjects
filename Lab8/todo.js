$(document).ready(function(){
    $('#todo').keypress(function(event){
        //When someone finishes pressing a key inside the input, run this code.
        //console.log(event);
        if (event.keyCode == 13) {
            event.preventDefault();
            var todoText = $(this).val();
            //console.log(todoText);
            addTodo(todoText);
        }
    });

    function addTodo(todoText) {
        if(todoText) {
            $('#todo-list').append('<li class="d-flex align-items-center list-group-item"><span class="flex-item-1">' + todoText + '</span><button class= "btn btn-small btn-success"><i class="fa fa-check"></i></button></li>');

            $('#todo').val('');
        };
    };

    $('.list-group').on('mouseenter', '.list-group-item', function(){
        $(this).find('button').animate({'opacity': '1'}, 250);
    });

    $('.list-group').on('mouseleave', '.list-group-item', function(){
        $(this).find('button').animate({'opacity': '0'}, 250);
    });

    $('#todo-list').on('click', 'button', function(){
        $(this).removeClass('btn-success').addClass('btn-danger').html('<i class="fa fa-times"></i>');
    
        $(this).parent().appendTo('#completed-list');
    });

    $('#completed-list').on('click', 'button', function(){
        $(this).parent().remove();
    });
});