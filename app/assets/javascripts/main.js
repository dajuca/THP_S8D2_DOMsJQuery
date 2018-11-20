$(document).ready(function() {
  

  //TAB POUR LES CATEGORY

  //fait disparaître les div sous chaque li (sauf première)
  $(".category-div").hide();


  $(".category-item").click(function(){
    //pour surligner le tab actif (et pas les autres)
    $(".category-item").removeClass('active')
    $(this).addClass('active')

    //afficher le  contenu correspondant au tab
    $(".category-div").fadeOut(500);
    $(this).next().fadeIn(500);
  });

  $(".navbar-nav")


  //DROP-DOWN MENU
  //En cas de clic n'importe où sur le document, j'efface mon dropdown menu et mes modales
  $(document).click(function(){
    $(".dropdown-contenu").fadeOut(300);
    $(".modale").fadeOut(300);
    $("body").removeClass('modalIsOn');
  });

  //En cas de clic, je rajoute/enlève la classe show à mon dropdown
  $(".avatar").click(function(e){
    e.stopPropagation(); //pour ne pas être affecté par la fonction "clic n'importe où sur le document"
    $(".dropdown-contenu").fadeToggle(300);    
  });

  //MODALES

  //fait apparaitre la modale de login
  $(".modale-link-login").click(function(e){
    $("body").addClass('modalIsOn');
    e.stopPropagation(); //pour ne pas être affecté par la fonction "clic n'importe où sur le document"
    $(".modale").fadeOut(300);
    $(".modale-login").fadeIn(300);
  })

  //fait apparaitre la modale de signup
  $(".modale-link-signup").click(function(e){
    $("body").addClass('modalIsOn');
    e.stopPropagation(); //pour ne pas être affecté par la fonction "clic n'importe où sur le document"
    $(".modale").fadeOut(300);
    $(".modale-signup").fadeIn(300);
  })

  //empêche les modales de disparaitre si on clique dessus
  $(".modale").click(function(e){
    e.stopPropagation(); //pour ne pas être affecté par la fonction "clic n'importe où sur le document"
  })

  

});