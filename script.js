$('.pinned').append('<p class=user>WhySoSerious45</p>');
$('.pinned').append('<p class=title>Trying to decide a career path? Programming is the move. <br/> Change my mind.');
$('.inputArea').append('<div class=submit>Submit</div>');
$('.submit').css({
    'display': 'inline', 
'color': 'rgb(130, 215, 215)',
'font-family': 'Open Sans, sans-serif',
'font-size': '25px',
 });

 let namePass = false;
 let commentPass = false;
 $('.submit').on('click', function() {
    if ($('.name').val() === ''){
        namePass = false;
    } else {
        namePass = true;
    }
    if ($('.comment').val() === ''){
        commentPass = false;
    } else {
        commentPass = true
    }
    if (namePass === true && commentPass === true) {
        $('.commentSection').prepend('<div class=aComment>' + '<img src=profile.jpg height=100>' + '<div class=in>' + '<p class=user1 >' + $('.name').val() + '</p>' + '<div class=edit>Edit</div>' + '<div class=delete>Delete</div>' + '</div>' + '<p class=title1>' + $('.comment').val() + '</p>' + '<input class=fix type=text>' + '<div class=editSubmit>Submit</div>' + '</div>')

        $('.editSubmit').css({
            'display': 'none', 
            'color': "rgb(130, 215, 215)",
            'font-family': 'Open Sans, sans-serif',
            'font-size': '25px',
    })

        $('.delete').on('click', function() {
            $(this).parent()
            .parent().remove()
            
        })

        $('.edit').on('click', function() {
            $(this).parent().next().next().toggle().css('display', 'inline')
            $(this).parent().next().next().next().toggle().css('display', 'inline')
            $('.fix').val('')


             $('.editSubmit').on('click', function() {
                $(this).prev().prev().text($(this).prev().val()) 
                $('.fix').toggle().css('display', 'none')
                $('.editSubmit').toggle().css('display', 'none')
             })
        })
    }
 $('.name').val('');
 $('.comment').val('');
 $('.editSubmit').hover(function() {
    $(this).css('cursor', 'pointer'),
    $(this).css('background-color', 'grey')
   }, function () {
    $(this).css('background-color', 'rgb(250, 250, 250)')
    });
$('.edit').hover(function() {
    $(this).css('cursor', 'pointer'),
    $(this).css('background-color', 'grey')
     }, function () {
    $(this).css('background-color', 'rgb(250, 250, 250)')
    });
 $('.delete').hover(function() {
    $(this).css('cursor', 'pointer'),
    $(this).css('background-color', 'grey')
   }, function () {
   $(this).css('background-color', 'rgb(250, 250, 250)')
    });
       
    });
$('.submit').hover(function() {
  $(this).css('cursor', 'pointer'),
  $(this).css('background-color', 'grey')
}, function () {
  $(this).css('background-color', 'white')
 });


    
    

 
 