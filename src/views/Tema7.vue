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

    .row.justify-content-center
      .col-lg-11
        LineaTiempoD.color-primario.mb-5
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
        
        h4.text-center.bg06.text-light.roundedTop.p-3.mb-4 Reportes por grupo

        LineaTiempoD.color-primario
          .row(numero="1" titulo="Reporte asignación habitaciones grupo")
            .col-12
              p.mb-4 Muestra un registro de las habitaciones asignadas a un grupo con los detalles de asignación y estado. También se puede determinar el tiempo de consulta.

              figure
                img(src='@/assets/curso/cont7/07.png', alt='Reporte asignación habitaciones grupo')

          .row(numero="2" titulo="Lista de llegada de grupo")
            .col-12
              p.mb-4 Muestra los registros de llegada categorizando por grupos.

              figure
                img(src='@/assets/curso/cont7/08.png', alt='Lista de llegada de grupo')
          
          .row(numero="3" titulo="Grupos en casa")
            .col-12
              p.mb-4 Muestra las reservas categorizados por grupos Inhouse o registradas.  

              figure
                img(src='@/assets/curso/cont7/09.png', alt='Grupos en casa')
          
          .row(numero="4" titulo="Reservas destacadas de grupo")
            .col-12
              p.mb-4 Muestra los detalles de reserva de un grupo específico.

              figure
                img(src='@/assets/curso/cont7/10.png', alt='Reservas destacadas de grupo')
          
          .row(numero="5" titulo="Ingresos mensuales por grupo ")
            .col-12
              p.mb-4 Permite llevar un control de las reservaciones de acuerdo con tiempo determinado.

              figure
                img(src='@/assets/curso/cont7/11.png', alt='Ingresos mensuales por grupo ')



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
