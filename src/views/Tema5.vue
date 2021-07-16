<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Políticas de uso de herramientas informáticas
    
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg01
          .col-8
            .bg07.p-4.m-4
              p.mb-0 De la misma forma en que el hotel tiene políticas comerciales y operativas, debe tener una política de uso de sus herramientas informáticas (equipos, software, etc.) donde se presenten de manera clara a los empleados los parámetros que la administración define para tal fin. Conocer esta política forma parte del entrenamiento que cada miembro de una organización debe tener.
          .col-4.bg08.p-4
            figure
              img.w-75.mx-auto(src="@/assets/curso/cont5/img01.svg", alt="herramientas informáticas")

</template>

<script>
export default {
  name: 'Tema5',
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
