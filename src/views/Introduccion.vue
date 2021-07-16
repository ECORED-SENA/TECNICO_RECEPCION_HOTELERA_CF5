<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg01.p-4.rounded
      .col-lg-6.mb-4.mb-lg-0
        p Este componente formativo se enfocará en los aspectos operativos y en especial en el funcionamiento y uso de los sistemas de software hotelero o (PMS).
        figure.mb-4
          img(src="@/assets/curso/intro/img02.svg", alt="PMS")
        .bg-light.p-4
          p.mb-0 Hay que anotar que en la hotelería actual los sistemas de gestión de propiedad o PMS son la columna vertebral de la operación diaria, ya que en ellos se realizan los procedimientos de rutina como toma de reservas, check-in, cargos durante la estadía, check out y un proceso muy importante que es la auditoría nocturna. También en estos sistemas por medio de interfaces se controlan las operaciones de alimentos y bebidas, banquetes, spa, parqueadero, seguridad, contabilidad, conserjería y ama de llaves. Estos sistemas no están adscritos solo a la recepción, sino que tocan todos los puntos del hotel, lo que garantiza un manejo fluido de la información y el servicio al cliente.
      .col-lg-6.position-relative
        figure.mb-4
          img(src="@/assets/curso/intro/img01.png", alt="img PMS")
        .bg02.p-4.position-absolute.bottom-0
          p.mb-0 Cada día estos sistemas son más asequibles y son adoptados no solo por hoteles, sino por otros establecimientos de alojamiento.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
