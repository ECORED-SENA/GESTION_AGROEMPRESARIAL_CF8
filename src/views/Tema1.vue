<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Información

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Solo basta prestar un poco de atención a todo aquello que envuelve las situaciones regulares del ser humano para evidenciar la manera en que, como especie, es receptor de datos de manera permanente. #[span.color-text Existen muchos sistemas de recolección de datos, que van desde la simple observación de los eventos, hasta el análisis de contenido de fuentes primarias y secundarias.]

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Solo basta prestar un poco de atención a todo aquello que envuelve las situaciones regulares del ser humano para evidenciar la manera en que, como especie, es receptor de datos de manera permanente. #[span.color-text Existen muchos sistemas de recolección de datos, que van desde la simple observación de los eventos, hasta el análisis de contenido de fuentes primarias y secundarias.]
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    p.mb-3 Resulta exigente distinguir entre los datos y la información. A primera vista pueden parecer dos términos sinónimos o, al menos, similares. Sin embargo, la utilidad y naturaleza de estos difiere de forma marcada.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-lg-8 
        .row.justify-content-center.align-items-center
            .col-4-md-4.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/images/tema1/ico_1.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
                .tarjeta.color-custom-3
                  .p-4
                    h4.text-center Los datos 
                    p.mb-5 Se conciben como un conjunto de registros asociados a un hecho o sujeto en específico; en principio, carecen de toda utilidad sin un contexto y, por lo tanto, no aportan en sí mismos material de estudio o análisis.

            .col-4-md-4.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/images/tema1/ico_2.svg',  alt='', style="width:130px; display:block; margin:auto 0 ;")
                .tarjeta.color-custom-3
                  .p-4
                    h4.text-center La información 
                    p.mb-4 Consiste en la disposición de estos datos dentro de una situación y marco de tiempo concreto. Así, los datos se convierten en información una vez se les da un sentido lógico que les aporte la utilidad necesaria para ser estudiados.

    .row.justify-content-center.align-items-center.p-2
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-right")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Datos desconectados' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Podría tenerse un listado de números como: 2, 7, 1, 4 y 3. Sin ningún tipo de contexto o desconectados de más datos.

          .row(titulo='Aporte de los datos desconectados' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Estos números (datos), así sin más, no aportan nada para comprender situación alguna.
          
          .row(titulo='Contexto' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Sin embargo, si este listado de números (2, 7, 1, 4 y 3) están precedidos o con un encabezado que indique que se consultó a cinco parejas sobre el número de hijos que esperan tener, se podría entender que son datos que corresponden a expectativas de natalidad para un grupo de personas en específico.
 

          .row(titulo='Disponibilidad de los datos' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Así mismo, y en otra situación ejemplo, si una persona que transita una avenida de la ciudad por primera vez será “bombardeado” con muchos datos a través de su observación.


          .row(titulo='Atención al dato' numero='5')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Sin embargo, si no presta atención suficiente, la utilidad de estos datos disponibles, no trascenderá.
 

          .row(titulo='Intención puesta en los datos' numero='6')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  En cambio, si identifica zonas comerciales que le pueden ser útiles, como las calles específicas donde se encuentran los talleres mecánicos o las tiendas de ropa, estos datos evolucionarán a información relevante.  

      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_2.png').mb-3


    Separador 

    #t_1_1.titulo-segundo
      .h2 1.1  Tipos de información

    
    p.mb-3 La información puede clasificarse en función de diferentes criterios y según las necesidades de quien la espera recolectar. Dentro del ambiente organizacional, podrían tener especial utilidad las clasificaciones asociadas a su naturaleza, su destinatario o sus restricciones. 

    p.mb-5 En la siguiente gráfica se identifican las categorías de información que se desprenden de los criterios planteados:

    .row.align-items-center.justify-content-center.fondo-1.mb-5
      .col-lg-8(data-aos="fade-left") 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema1/info.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="21%" y="53%" numero="+")
            .h5.mb-2 Cualitativa
            p Los datos suelen ser más descriptivos, aportando información relevante respecto a características de lo que se esté observando. Esta información está más abierta a interpretaciones (subjetividad). Ejemplos: la opinión de un cliente sobre un producto, la posición política, una postura frente a una afirmación, cualquier información que no demande cifras numéricas para ser registrada.

          .tarjeta.color-custom-4.p-3(x="21%" y="74%" numero="+")
            .h5.mb-2 Cuantitativa
            p.mb-3  Puede medirse o contarse. Los datos recolectados pueden expresarse de forma numérica sin necesidad de codificaciones o reinterpretaciones. Ejemplo: edades, cantidades o número de cosas, etc. 
            p.mb-0 Usar la información cuantitativa favorece la tabulación u análisis estadístico de muchos datos, suele tener una sola interpretación, por lo que ofrece resultados más objetivos.

          .tarjeta.color-custom-4.p-3(x="60%" y="52%" numero="+")
            .h5.mb-2 Interna
            p Es información recolectada y analizada para un grupo de usuarios en específico. Puede usar datos restringidos siempre y cuando los resultados obtenidos se mantengan dentro de un círculo cerrado de personas que cuentan con el aval para conocer los detalles. Ejemplo: informes para las directivas de una sociedad, en ella pueden presentarse indicadores de rendimiento que no le sean útiles a usuarios externos.

          .tarjeta.color-custom-4.p-3(x="60%" y="73%" numero="+")
            .h5.mb-2 Externa
            p Información que se genera al interior de una organización con el objetivo de dirigirse a terceros, interesados del ecosistema. Ejemplo: los resultados trimestrales obtenidos por una empresa que cotiza en bolsa y, por lo tanto, los potenciales inversores requieren de ciertos datos para evaluar si quieren hacerse partícipes del negocio.

          .tarjeta.color-custom-4.p-3(x="98%" y="52%" numero="+")
            .h5.mb-2 Privilegiada
            p.mb-3  Se trata de datos altamente confidenciales, cuya publicación indebida puede afectar, de forma negativa, los intereses de las personas propietarias de la información. Tal es el caso de fórmulas o recetas secretas, códigos fuente de software licenciado o contraseñas de acceso a módulos de un sistema o a áreas restringidas de una edificación.

          .tarjeta.color-custom-4.p-3(x="98%" y="72%" numero="+")
            .h5.mb-2 Privada
            p.mb-3  Similar a la privilegiada, la información privada se encuentra restringida a un número de usuarios determinado. 
            p.mb-0 Su confidencialidad resulta ligeramente menor que en el caso anterior, pues el impacto de fuga de datos es más bajo. Ejemplo: el número telefónico de una persona expuesta, un historial crediticio o los indicadores de rendimiento de un área organizacional específica.

          .tarjeta.color-custom-4.p-3(x="98%" y="92%" numero="+")
            .h5.mb-2 Pública
            p Usualmente, se trata de información sin ningún tipo de restricción. Así, puede ser compartida cientos de veces sin que esto represente amenazas para el emisor. En algunos casos resulta, incluso, beneficioso magnificar el alcance. Ejemplo: campañas publicitarias por  lanzamientos de producto, el estreno de una serie televisiva, el posicionamiento de una marca en primer lugar en ventas

    Separador 

    #t_1_2.titulo-segundo
      .h2 1.2  Fuentes de información

    p.mb-3 La información se encuentra disponible en diversas fuentes según cada situación. Se puede denominar fuente de información a cualquier instancia, persona, equipo, documento, maquinaria o situación de la cual se puedan extraer datos o información, útil o no.


    .row.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Existe información que no ha sido recopilada previamente y, por lo tanto, se debe extraer de manera directa del hecho, por ejemplo, la obtenida al asistir al estadio a ver un partido de fútbol, donde se recolectan los datos a partir de la propia visión.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Existe información que no ha sido recopilada previamente y, por lo tanto, se debe extraer de manera directa del hecho, por ejemplo, la obtenida al asistir al estadio a ver un partido de fútbol, donde se recolectan los datos a partir de la propia visión.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_3.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .jumbotron.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema1/ico_3.svg' alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
            .col-lg-11
              h3 Para tener presente
              p.mb-3 Existe información que ha sufrido procesos de transformación gracias a la intervención de terceros, lo que significa que no recibimos los datos de las fuentes originales, sino secundarias. A esta segunda categoría pertenecería la información recolectada a través de las noticias, donde resumen y opinan respecto del mismo partido de fútbol del ejemplo anterior. 
              p.mb-0 Aunque el fenómeno observable, es decir, el partido de fútbol es el mismo para ambas situaciones, las fuentes de información varían, unas son primarias o directas, mientras que las otras son secundarias o indirectas.

    p.mb-3 A continuación, se invita a observar un video donde se exponen las generalidades y distinciones entre los tipos de fuente de información (primaria y secundaria):

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vE77y1o8DWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    


    Separador 

    #t_1_3.titulo-segundo
      .h2 1.3  Ciclos de vida


    p.mb-3 Para una adecuada gestión en el ambiente organizacional, el hacer uso de la información resulta un paso elemental para garantizar la efectividad de cualquier acción. Actualmente, la obtención de la información resulta mucho más sencilla que en épocas pasadas, debido a que la conectividad permite indagar, a través de diversos dispositivos, los medios en los que reposan los datos más útiles.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
          h5 Figura 1
          br
          span  Ciclo de vida de la información
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/fig_1.svg')
      .col-lg-4 
        img(src='@/assets/curso/images/tema1/img_4.png').mb-3
        p.mb-0 En este proceso de utilización de los datos, comprender su ciclo de vida permite contar con una serie de parámetros que mejoran la productividad a partir de una correcta planificación, transmitiendo la información a los usuarios apropiados y dotando de seguridad el proceso, para conservarla por el tiempo que resulte más conveniente.

    p.mb-3 Se invita a conocer con mayor profundidad, las fases del ciclo de vida de la información que a continuación se enuncian; es útil llevar registro de lo más destacado en su libreta personal de apuntes.


    .row.justify-content-center.align-items-star.p-2
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_5.png').mb-3
      .col-12.col-lg-8.mb-4.p-0.p-md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Creación y captura' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Como primer paso, en el ciclo de vida de la información, se tiene su obtención o creación, bien sea por un trabajo de descubrimiento a través de la experimentación o producto del apoyo en fuentes elaboradas por terceros.

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    p #[span.color-text Información ya disponible]
                p Es la segunda posibilidad de obtención de la información y es la más usual, por lo que las fuentes de información de mayor uso son las siguientes: <b>medios de acceso público, información generada por terceros, creación propia.</b>

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    p  #[span.color-text Obtención de la información ya disponible]
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p Datos disponibles en medios de acceso público como la web, periódicos, revistas o libros.
                  li 
                    i.fas.fa-check
                    p Información generada por otras empresas pertenecientes al mismo sector, quienes llevan la delantera en cuanto a tiempo en el mercado.
                  li 
                    i.fas.fa-check
                    p Creación propia a partir de la colaboración entre diversos agentes de la empresa como sus propietarios, empleados o clientes.
                

          .row(titulo='Transmisión, almacenamiento y seguridad' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Después de contar con la información, el paso a seguir se centra en la <b>forma en que esta se almacena y se transmite entre los interesados, a través de un medio que garantice su seguridad.</b>

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    p  #[span.color-text Transmisión]

                p.mb-3 Comunicar los datos a quienes se espera que lleguen resulta un paso elemental en la gestión de la información. De poco sirve indagar y obtener datos útiles si no se puede compartir a los individuos que requieren de ellos para tomar decisiones o ejecutar acciones. La transmisión de los datos <b>se debe posibilitar a través de sistemas que garanticen la recepción y entrega de la información entre las áreas internas o externas </b> de la empresa.

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    p  #[span.color-text Almacenamiento]

                p.mb-3 Para conservar la información hace falta un espacio físico o digital dedicado a ello; la mecánica más utilizada, en la actualidad, es el uso de bases de datos, que son <b>sistemas encargados de almacenar y controlar el acceso a la información,</b> haciendo uso de una serie de parámetros que dispone el administrador.

                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    p  #[span.color-text Seguridad]

                p.mb-3 Deben existir <b> medidas que garanticen que la información almacenada solo llegue a los destinatarios deseados;</b> de lo contrario, los datos están expuestos a ser obtenidos por terceros que pueden ser malintencionados. Existe información muy sensible como datos personales de terceros, listados de clientes y proveedores clave o, incluso, fórmulas o métodos de producción efectivos que brindan ventajas competitivas en relación con otras empresas.

          .row(titulo='Análisis y explotación de datos' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema1/img_7.png').mb-3
              .col-12.col-lg-8.mb-4.mb-lg-0
                p.mb-3  Última fase del ciclo de vida de la información; consiste en el análisis de los datos obtenidos o elaborados para lograr conclusiones de fondo que aporten a la renovación de las estrategias. Los informes se elaboran a partir del trabajo realizado y aportan el contenido más útil, en relación con su extensión. De ellos surge la materia procesada con la que se pueden tomar decisiones a cualquier nivel. 
 
    Separador 

    #t_1_4.titulo-segundo
      .h2 1.4  Confidencialidad

    p.mb-3 Existe información que demanda especial cuidado respecto a la publicación de los datos y la forma en la que llega a terceros. Lo anterior es tan importante para el bienestar de la población que, incluso, la Constitución Política de 1991 vinculó como derecho fundamental la intimidad personal, familiar y su buen nombre.

    .row.justify-content-center.align-items-center.p-2
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_8.png').mb-3
      .col-12.col-lg-8.mb-4.p-0.p-md-5(data-aos="fade-left")
        .cajon.color-custom-5
          .row.justify-content-center.align-items-center.p-2
            .col-5.col-lg-2
              img(src='@/assets/curso/images/tema1/ico_8.svg').mb-3
            .col-lg-10
              h4 ARTICULO 15. 
              p.mb-3 Constitución Política: “Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar”.
              p.mb-0 De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.

    p.mb-3 En relación con la confidencialidad de la información, se deben tener en cuenta los siguientes aspectos:

    .row.justify-content-center.align-items-center.p-2
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/images/tema1/img_9.svg').mb-3
      .col-12.col-lg-8.mb-4.p-0.p-md-5(data-aos="fade-left")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución.
          li 
            i.fas.fa-check
            | La correspondencia y demás formas de comunicación privada son inviolables.            
          li
            i.fas.fa-check
            | Las formas de comunicación solo pueden ser interceptadas o registradas mediante orden judicial, en los casos y con las formalidades que establezca la ley.          
          li 
            i.fas.fa-check
            | Para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado, podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley.
          li 
            i.fas.fa-check
            p No solo basta con garantizar la intimidad de las personas, salvaguardando la información transmitida por cualquier sistema de comunicación privada, sino, también, el acceso a lo contenido en los bancos de datos. 
          li 
            i.fas.fa-check
            | En el año 2008 fue emitida la Ley Estatutaria 1266, que regula el tratamiento de la información contenida en bases de datos. 
          li 
            i.fas.fa-check
            | El artículo 6° de la ley mencionada presenta una serie de derechos que poseen los titulares de la información, sus fuentes y los usuarios.
          li 
            i.fas.fa-check
            | De esta misma forma, el artículo 7° lista los deberes de los operadores que acceden o hacen uso de ellas.

    p.mb-5 Profundice en las normas más relevantes en materia de información y confidencialidad, explorando los enlaces que aquí se indican:

    .row.justify-content-evenly.align-items-center.mb-3
      .col-12.col-lg-3.mb-4.mb-lg-0
        .jumbotron-2.p-4(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-center
            .col-5.col-lg-4.mb-4.mb-lg-0.p-0
              img(src='@/assets/curso/images/tema1/ico_6.svg').mb-3
              h4.mb-5.text-center.text-white  Ley 1266 de 2008
              a.boton.me-3.indicador__container.mt-4(
                :href="obtenerLink('downloads/Ley1266de2008NivelNacional.pdf')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Descargar
                i.fas.fa-file-download
                .indicador--click(v-if="mostrarIndicador")
      .col-12.col-lg-3.mb-4.mb-lg-0
        .jumbotron-3.p-4(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-center
            .col-5.col-lg-4.mb-4.mb-lg-0.p-0
              img.mt-3(src='@/assets/curso/images/tema1/ico_6.svg').mb-3
              h4.mb-0.text-center Ley 1581 de 2012
              a.boton.me-3.indicador__containe.mt-5(
                :href="obtenerLink('downloads/LEY_1581_2012.pdf')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Descargar
                i.fas.fa-file-download
                .indicador--click(v-if="mostrarIndicador") 
      .col-12.col-lg-3.mb-4.mb-lg-0
        .jumbotron-4.p-4(data-aos="zoom-in-up")
          .row.justify-content-center.align-items-center
            .col-5.col-lg-4.mb-4.mb-lg-0.p-0  
              img(src='@/assets/curso/images/tema1/ico_6.svg').mb-3
              h4.mb-5.text-center  Decreto 1377 de 2013 
              a.boton.me-3.indicador__container.color-boton(
                :href="obtenerLink('downloads/DECRETO1377DE2013.pdf')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span.color-text-1 Descargar
                i.fas.fa-file-download
                .indicador--click(v-if="mostrarIndicador")  

        
























  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
