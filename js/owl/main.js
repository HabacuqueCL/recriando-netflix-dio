$('.owl-carousel').owlCarousel({
    loop:true, //ativa/desativa o efeito de loop
    margin:10, //margin entre os itens do carrosel
    nav:true, //ativa/desativa botoes de navegacao
    responsive:{
        0:{
            items:1
        },
        600:{ // tamanho da tela
            items:3 //quantidade de itens mostrados
        },
        1000:{
            items:5
        }
    }
})