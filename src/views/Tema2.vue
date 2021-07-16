<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Instructivos y protocolos

    figure.mb-4
      img(src="@/assets/curso/cont2/img01.png", alt="Instructivos y protocolos") 

    p.mb-5 En este apartado, usted podrá conocer los procesos más importantes del departamento de reservaciones, verificando el paso a paso de cada uno (instructivo) y los protocolos que se deberían tener en cuenta para que el proceso se efectúe correctamente.

    #t2_1.titulo-segundo
      h2 2.1.	Cómo tomar una reserva en PMS 

    .row.justify-content-center
      .col-md-10.col-lg-6
        figure.mb-4
          img(src="@/assets/curso/cont2/img02.svg", alt="Toma de reservas en PMS")
    
    h5.text-center.bg06.text-light.roundedTop.p-3 En ese sentido, algunas recomendaciones a tener en cuenta son:

    .row.g-3.mb-4
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico01.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que tenga conexión a internet.
      
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico02.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que tenga conexión a internet.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico03.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que tenga conexión a internet.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico04.svg", alt="Icono")
            .col-9
              p.mb-0 Digite la información de estancia: tipo habitación, tarifa y fechas de entrada y salida, adultos y niños.
      
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico05.svg", alt="Icono")
            .col-9
              p.mb-0 Chequee que la información de facturación sea correcta.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico06.svg", alt="Icono")
            .col-9
              p.mb-0 Una vez que haya digitado la información correctamente, al dar clic al botón reservar. Verifique que el sistema le dé un código de confirmación.
      
    .row.justify-content-center
      .col-lg-10.gradient1.roundedButtom.borderHTop.p-3
        .row.align-items-center
          .col-1
            img.mx-auto(src="@/assets/curso/cont2/ico_video.svg", alt="Icono Video")
          .col-5
            p.text-light.mb-0 En el siguiente video encontrarás una forma de cómo se hace una reserva en el programa Ezee, uno de los más utilizados a nivel mundial.
          .col-6
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=F5Dt-WqJsqw" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p How to make a single reservation. Ezee Technosys
    
    Separador

    #t2_2.titulo-segundo
      h2 2.2 Reservas de grupos

    p Las reservas de grupo tienen un proceso similar al de la individual, solo hay que tener cuidado en tomar el número de habitaciones requerido y cuidar los detalles de cada reserva dentro del grupo. 

    p.mb-4 Es decir, como se parte de una reserva base hay que ser cuidadoso con la actualización de información de cada una de las reservas del grupo, por lo general, estas solicitudes están acompañadas de un documento conocido como Rooming List donde se consignan los detalles de cada reserva individual dentro del grupo.

    .row.justify-content-center
      .col-md-10.col-lg-6
        figure.mb-4
          img(src="@/assets/curso/cont2/img03.svg", alt="Reservas de grupos")
    
    h5.text-center.bg06.text-light.roundedTop.p-3 Al igual que en las reservas individuales, las grupales también deben cumplir con ciertos protocolos al momento de realizarla, para ello hay que tener en cuenta: 

    .row.g-3.mb-4
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico07.svg", alt="Icono")
            .col-9
              p.mb-0 Chequee que la información de facturación sea correcta.
      
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico08.svg", alt="Icono")
            .col-9
              p.mb-0 Digite la información de estancia: tipo habitación, tarifa y fechas de entrada y salida, adultos y niños.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico03.svg", alt="Icono")
            .col-9
              p.mb-0 Digite correctamente el nombre. Use el Rooming List.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico02.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que este LOG IN en el sistema.
      
      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico01.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique, que tenga conexión a internet.

      .col-md-6.col-lg-4
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico09.svg", alt="Icono")
            .col-9
              p.mb-0 Una vez que haya digitado la información correctamente, al dar clic al botón reservar. Verifique que el sistema le dé un código de confirmación.
      
    .row.justify-content-center
      .col-lg-10.gradient1.roundedButtom.borderHTop.p-3
        .row.align-items-center
          .col-1
            img.mx-auto(src="@/assets/curso/cont2/ico_video.svg", alt="Icono Video")
          .col-5
            p.text-light.mb-0 En el siguiente video encontrarás un ejemplo de cómo se hace una reserva en grupo en el programa Ezee, uno de los más utilizados a nivel mundial.
          .col-6
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=uU5HwMF7TMQ" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p “How to Take Group Bookings in eZee Absolute Hotel Management System”. Ezee Technosys
    
    Separador

    #t2_3.titulo-segundo
      h2 2.3 Cómo cancelar una reserva en PMS

    p.mb-4 El proceso de cancelación de una reserva es un proceso sencillo operativamente hablando, pero de gran atención, puesto que un error puede afectar negativamente a un huésped. Siempre asegúrese de cuál es la reserva que se va a cancelar.

    figure.mb-4
      img(src="@/assets/curso/cont2/img04.svg", alt="Cancelar una reserva")

    .row.g-3.mb-4
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico01.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique, que tenga conexión a internet.
      
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico02.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que este LOG IN en el sistema.

      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico11.svg", alt="Icono")
            .col-9
              p.mb-0 Localice la reserva que va a cancelar.
      
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico10.svg", alt="Icono")
            .col-9
              p.mb-0 Introduzca la razón a cancelar. 
      
    .row.justify-content-center
      .col-lg-10.gradient1.roundedButtom.borderHTop.p-3
        .row.align-items-center
          .col-1
            img.mx-auto(src="@/assets/curso/cont2/ico_video.svg", alt="Icono Video")
          .col-5
            p.text-light.mb-0 En el siguiente video encontrarás una simulación de cómo cancelar reserva en grupo en el programa Ezee, uno de los más utilizados a nivel mundial.
          .col-6
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=5NBllgCC288" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p “How to cancel reservations in eZee Absolute Hotel Management System”. Ezee Technosys
    
    Separador

    #t2_4.titulo-segundo
      h2 2.4 Cómo modificar una reserva en PMS

    p.mb-4 La modificación de una reserva es un proceso de cuidado. El sistema lo permitirá modificar acorde con los permisos (roles) asignados. Operativamente es un proceso simple, pero se debe recordar que cualquier cambio quedará almacenado con el ID de Login, esto genera responsabilidad por: 

    .row.justify-content-center
      .col-md-10.col-lg-6
        figure.mb-4
          img(src="@/assets/curso/cont2/img05.svg", alt="Cómo modificar una reserva")
    
    .row.g-3.mb-4
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico01.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique, que tenga conexión a internet.
      
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico02.svg", alt="Icono")
            .col-9
              p.mb-0 Verifique que este LOG IN en el sistema.

      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico11.svg", alt="Icono")
            .col-9
              p.mb-0 Localice la reserva que va a modificar.
      
      .col-md-6.col-lg-3
        .bg02.p-3.rounded.h-100
          .row.align-items-center.h-100
            .col-3
              img(src="@/assets/curso/cont2/ico10.svg", alt="Icono")
            .col-9
              p.mb-0 Introduzca la razón de la modificación.
      
    .row.justify-content-center
      .col-lg-10.gradient1.roundedButtom.borderHTop.p-3
        .row.align-items-center
          .col-1
            img.mx-auto(src="@/assets/curso/cont2/ico_video.svg", alt="Icono Video")
          .col-5
            p.text-light.mb-0 En el siguiente video encontrarás un ejemplo de cómo modificar una reserva en el programa Ezee, uno de los más utilizados a nivel mundial.
          .col-6
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=cypTHODJLd4" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p “How to Edit Transaction Details in eZee Absolute Hotel Management System”. Ezee Technosys 




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
