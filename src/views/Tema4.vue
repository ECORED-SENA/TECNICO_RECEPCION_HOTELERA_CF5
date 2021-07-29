<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Seguridad de la información
    
    figure.mb-4
      img(src="@/assets/curso/cont4/img01.png", alt="Seguridad de la información")    

    p.mb-4 La ciberseguridad es la práctica de defender la información que se almacena en las computadoras, los servidores, los dispositivos móviles, los sistemas electrónicos, las redes y los datos de ataques maliciosos; también se conoce como seguridad de tecnología de la información o seguridad de la información electrónica. El término se aplica en diferentes contextos, desde los negocios hasta la informática móvil y puede dividirse en algunas categorías comunes (Kaspersky Labs, 2021).

    separador

    #t4_1.titulo-segundo
      h2 4.1 La seguridad de red

    .row.justify-content-around.align-items-center.BGrey.pb-4
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img02.svg", alt="La seguridad de red") 
      .col-11.col-lg-7
        .cajon.color-primario.gradient2.bg02.p-4
          p.mb-0 Es la práctica de proteger una red informática de los intrusos, ya sean atacantes dirigidos o malware oportunista. Muchas empresas funcionan bajo el modelo de cliente / servidor, es decir con una computadora principal (servidor) donde se procesa y almacena toda la información de la empresa. En ese formato cada componente de la red (usuario) puede estar expuesto a un ataque cibernético, por eso es vital para las empresas contar con sistemas de encriptación de la información, sistemas antivirus, y sistemas de protección conocidos como firewalls.
    
    separador

    #t4_2.titulo-segundo
      h2 4.2 La seguridad de las aplicaciones

    .row.justify-content-around.align-items-center.BGrey.pb-0
      .col-7.col-lg-4.mb-4.mb-lg-0.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img03.svg", alt="La seguridad de las aplicaciones") 
      .col-11.col-lg-7
        .cajon.color-secundario.p-4
          p.mb-0 Se enfoca en mantener el software y los dispositivos libres de amenazas. Una aplicación afectada podría brindar acceso a los datos que está destinada a proteger. La seguridad eficaz comienza en la etapa de diseño, mucho antes de la implementación de un programa o dispositivo (Kaspersky Labs, 2021).
    
    separador

    #t4_3.titulo-segundo
      h2 4.3 La seguridad de la información

    .row.justify-content-around.align-items-center.BGrey.pb-4
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img04.svg", alt="La seguridad de la información") 
      .col-11.col-lg-7
        .cajon.color-acento-botones.bg04.p-4
          p.mb-4 Protege la integridad y la privacidad de los datos, tanto en el almacenamiento como en el tránsito (Kaspersky Labs, 2021). Esta es la clase de seguridad que más se debe implementar en una industria hotelera. Proteger los equipos (hardware) y los aplicativos (software) es vital, puesto que eso garantiza una operación fluida y ágil.

          p.mb-4 Pero la información, la privacidad, las transacciones es aún más importante, por un momento se podría suponer que la información queda expuesta al hospedarse en un hotel, eso sería algo totalmente inaceptable y marcaría una huella en la confianza de los clientes hacia el hotel. 

          p.mb-4 Como complemento lea el artículo "Marriott" en el siguiente link.

          a.anexo.mb-0(href="https://www.bbc.com/mundo/noticias-46404767" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Marriott. Un ataque informático deja expuestos los datos de 500 millones de clientes del grupo hotelero. 
    
    separador

    #t4_4.titulo-segundo
      h2 4.4 La seguridad operativa

    .row.justify-content-around.align-items-center.BGrey.pb-4
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img05.svg", alt="La seguridad de red") 
      .col-11.col-lg-7
        .cajon.color-primario.bg02.p-4
          p.mb-0 Incluye los procesos y decisiones para manejar y proteger los recursos de datos. Los permisos que tienen los usuarios para acceder a una red y los procedimientos que determinan cómo y dónde pueden almacenarse o compartirse los datos se incluyen en esta categoría (Kaspersky Labs, 2021). En este módulo se habla de los roles que debe tener un PMS, pues esto y otras técnicas están relacionadas con la forma cómo se protege la información.
    
    separador
    
    #t4_5.titulo-segundo
      h2 4.5 La recuperación ante desastres y la continuidad del negocio

    .row.justify-content-around.align-items-center.BGrey.pb-4
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img06.svg", alt="La seguridad de red") 
      .col-11.col-lg-7
        .cajon.color-primario.bg03.p-4
          p.mb-0 Esto define la forma en que una organización responde a un incidente de ciberseguridad o a cualquier otro evento que cause que se detengan sus operaciones o se pierdan datos. Las políticas de recuperación ante desastres dictan la forma en que la organización restaura sus operaciones e información para volver a la misma capacidad operativa que antes del evento. La continuidad del negocio es el plan al que recurre la organización cuando intenta operar sin determinados recursos (Kaspersky Labs, 2021).
    
    separador
    
    #t4_6.titulo-segundo
      h2 4.6  La capacitación del usuario final 

    .row.justify-content-around.align-items-center.BGrey.pb-4
      .col-7.col-lg-4.mb-4.mb-lg-0
        figure.position-relative
          img(src="@/assets/curso/cont4/img07.svg", alt="La seguridad de red") 
      .col-11.col-lg-7
        .cajon.color-primario.gradient2.p-4
          p.mb-0 Aborda el factor de ciberseguridad más impredecible: las personas. Si se incumplen las buenas prácticas de seguridad, cualquier persona puede introducir accidentalmente un virus en un sistema que de otro modo sería seguro. Enseñarles a los usuarios a eliminar los archivos adjuntos de correos electrónicos sospechosos, a no conectar unidades USB no identificadas y otras lecciones importantes es fundamental para la seguridad de cualquier organización (Kaspersky Labs, 2021). 



</template>

<script>
export default {
  name: 'Tema4',
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
