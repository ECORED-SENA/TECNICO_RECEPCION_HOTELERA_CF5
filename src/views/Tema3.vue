<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Manual de usuario
  
    .bloque-texto-a.color-acento-contenido.bg01.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 El manual de usuario del PMS, es un compendio de procedimientos detallados que, por lo general, se entrega impreso o en formato digital. 

          p.mb-4 Ahora la gran mayoría de los softwares tienen manuales en línea que se pueden consultar desde la página web del proveedor.

          .bloque-texto-a__texto.roundedAll.p-4
            p.mb-4 En estos links podrá ver una muestra de manuales de PMS en línea.

            a.anexo.mb-4(href="https://www.ezeefrontdesk.com/hotel-pms.php/manuals/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Ezeefrontdesk. 
            
            a.anexo.mb-4(href="https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/welcome_to_pms.htm" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Oracle.
            
            a.anexo.mb-4(:href="obtenerLink('/downloads/anexo04.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Manual Usuario eZee Frontdesk

        .col-lg-6
          figure
            img(src="@/assets/curso/cont3/img01.svg", alt="Manual de usuario") 
          


</template>

<script>
export default {
  name: 'Tema3',
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
