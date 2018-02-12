let count = 0;
let transiTionIn = [
    "comingIn", "bounceInDown", "bounceInUp", "fadeInDown",
    "fadeInUp", "fadeInLeft", "fadeInRight", "flipInX"
];

let transiTionOut = [
    "comingOut", "bounceOutDown", "bounceOutUp", "fadeOutDown",
    "fadeOutUp", "fadeOutLeft", "fadeOutRight", "flipOutX"
];

$(function () {
    $("#modalUnoCentrado").iziModal({
        title: 'Error',
        subtitle: 'No se pudo establecer conexion',
        headerColor: '#fd171a',
        background: '#000000',
        width: 250,
        radius: 100,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });

    $("#modalUnoAbajo").iziModal({
        title: 'Success',
        headerColor: '#52fd33',
        background: '#fefefe',
        width: 250,
        bottom: 1,
        zindex: 999,
        transitionIn: 'flipInX',
        timeout: 5000,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });

    $("#modalUnoSuperior").iziModal({
        background: '#b9b825',
        theme: '',  // light
        icon: null,
        iconText: null,
        iconColor: '',
        rtl: false,
        width: 600,
        top: 1,
        bottom: false,
        borderBottom: false,
        padding: 0,
        radius: 1,
        zindex: 999,
        iframe: false,
        iframeHeight: 400,
        iframeURL: null,
        focusInput: true,
        group: '',
        loop: false,
        arrowKeys: true,
        navigateCaption: true,
        navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
        history: false,
        restoreDefaultContent: false,
        autoOpen: 0, // Boolean, Number
        bodyOverflow: false,
        fullscreen: true,
        openFullscreen: false,
        closeOnEscape: true,
        closeButton: true,
        timeout: 5000,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });

    $("#modalDos").iziModal({
        title: 'Success',
        headerColor: '#3d50fd',
        background: '#fefefe',
        width: 450,
        zindex: 999,
        timeout: 5000,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });

    $("#modalCuatro").iziModal({
        title: 'Success',
        headerColor: '#020308',
        background: '#fefefe',
        timeoutProgressbar: true,
        timeoutProgressbarColor: '#d83034',
        timeout: 7000,
        width: 450,
        zindex: 999,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });

    $("#modalTres").iziModal({

        width: 1050,
        zindex: 999,
        onOpened: function () {
            console.log("me he abierto")
        },
        onClosed: function () {
            console.log("me he cerrado")
        },
    });


    $("#abrirModalUnoCentrado").on('click', function () {
        $("#modalUnoCentrado").iziModal('open')
    })

    $("#abrirModalUnoAbajo").on('click', function () {
        $("#modalUnoAbajo").iziModal('open')
    })

    $("#abrirModalUnoSuperior").on('click', function () {
        $("#modalUnoSuperior").iziModal('open')
    })

    $("#abrirModalTres").on('click', function () {
        $("#modalTres").iziModal('open')
    })

    $("#abrirModalCuatro").on('click', function () {
        $("#modalCuatro").iziModal('open')
    })

});

function animacion() {
    count++;
    if (count !== transiTionIn.length) {

        $("#modalDos").iziModal('setTransitionIn', transiTionIn[count])
        $("#modalDos").iziModal('setTransitionOut', transiTionOut[count])
        $("#modalDos").iziModal('setTitle',"Entrada "+ transiTionIn[count])
        $("#modalDos").iziModal('setSubtitle',"Salida "+ transiTionOut[count])
        $("#modalDos").iziModal('open')
    } else {
        count = 0;
    }
}