<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
        .titulo-principal__numero
          span 7
        h1 Reportes de reservas
    
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/cont7/img01.svg", alt="información personal")

    p.mb-4 Los sistemas PMS tienen una gran variedad de reportes; en la mayoría de ellos, incluso, se pueden personalizar reportes según la necesidad del establecimiento. 

    p.mb-5 A continuación, se verá de forma gráfica una muestra de los reportes más utilizados en el área de reservas, tanto para reservas individuales como grupales.

    .row.justify-content-center.mb-5
      .col-lg-11
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Lista de llegadas")
            .col-12
              p.mb-4 Lista todas las llegadas registradas, junto con los datos de ingreso y estado actual.

              figure
                img(src='@/assets/curso/cont7/02.png', alt='Lista de llegadas')

          .row(numero="2" titulo="Gráfico de disponibilidad")
            .col-12
              p.mb-4 Lista todas las llegadas registradas, junto con los datos de ingreso y estado actual.

              figure
                img(src='@/assets/curso/cont7/03.png', alt='Gráfico de disponibilidad')
          
          .row(numero="3" titulo="Reporte de cancelaciones")
            .col-12
              p.mb-4 Lista todas las llegadas registradas, junto con los datos de ingreso y estado actual.

              figure
                img(src='@/assets/curso/cont7/04.png', alt='Reporte de cancelaciones')
          
          .row(numero="4" titulo="Reporte mensual de inventario")
            .col-12
              p.mb-4 Lista todas las llegadas registradas, junto con los datos de ingreso y estado actual.

              figure
                img(src='@/assets/curso/cont7/05.png', alt='Reporte mensual de inventario')
          
          .row(numero="5" titulo="Reporte de reservaciones")
            .col-12
              p.mb-4 Lista todas las llegadas registradas, junto con los datos de ingreso y estado actual.

              figure
                img(src='@/assets/curso/cont7/06.png', alt='Reporte de reservaciones')




</template>

<script>
export default {
  name: 'Tema7',
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
