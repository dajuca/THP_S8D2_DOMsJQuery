$(document).ready(function() {
  //fait disparaître les div sous chaque li (sauf première)
  $(".category-div").hide();


  //afficher les categories en tab
  $(".category-item").addClass('list-group-item')


  $(".category-item").click(function(){
    //pour surligner le tab actif
    $(".category-item").removeClass('active')
    $(this).addClass('active')

    $(".category-div").hide();
    $(this).next().show();
  });
});