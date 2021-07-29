<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Política de tratamiento de la información personal

    p.mb-4 La política de tratamiento de datos personales es la que informa a los clientes de un establecimiento, por qué y el para qué se recolectan datos personales. Esta política debe estar expuesta en sitio público y ser divulgada por medios electrónicos como la página web y los correos electrónicos.

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.bg02.justify-content-center.align-items-end.rounded
          .col-lg-7.p-4
            p.mb-4 En Colombia, la protección de datos personales está reglamentada por la Ley 1581 de 2012. Puede descargar el texto aquí:
            a.anexo.mb-4(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Web. Función pública - Ley 1581 de 2012.
            p.mb-4 La entidad rectora de la protección de datos personales es la Superintendencia de Industria y Comercio. En la página web de la entidad puede encontrar información importante respecto de los datos personales.
            a.anexo(href="https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales#:~:text=La%20Ley%20de%20Protecci%C3%B3n%20de,de%20naturaleza%20p%C3%BAblica%20o%20privada" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__text
                p Web. Industria y Comercio - Protección de Datos Personales.
          .col-8.col-lg-5
            figure
              img(src="@/assets/curso/cont6/img01.svg", alt="información personal") 

    p.mb-0 Como recomendación, siempre se deben implementar las normas más estrictas en este sentido. Ya que el servicio de un hotel se presta no solo a nacionales, conviene que las normas de seguridad de información personal estén acordes con normas internacionales como las de la Comunidad Económica Europea.

</template>

<script>
export default {
  name: 'Tema6',
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
