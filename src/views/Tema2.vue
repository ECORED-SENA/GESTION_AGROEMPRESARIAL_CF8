<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Estadística

    .row.justify-content-center.align-items-center.p-2
      .col-12.col-lg-7.mb-4.p-0.p-md-5(data-aos="fade-left")
        p.fondo-2.mb-3.p-2 Si la información es un elemento de vital importancia para la gestión y toma de decisiones, la estadística es la ciencia encargada de diseñar sistemas o metodologías que faciliten el proceso de recopilación y análisis de los datos, con el objetivo de obtener conclusiones, a partir de ellos o predecir situaciones a futuro en función de las tendencias que se identifiquen.
        .jumbotron-5.p-4
          p.mb-3 La estadística tiene la particularidad de ser útil en una multitud de disciplinas y profesiones, puesto que el análisis de la información recolectada se constituye como una actividad ligada a cualquier razonamiento lógico del ser humano. 
      
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_1.svg').mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .jumbotron.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema1/ico_3.svg' alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-11
              h4 Para tener presente
              p.mb-0 Todas las áreas sociales y económicas se benefician, en mayor o menor medida, de la estadística, pues otorga ventajas en cuanto a productividad o eficiencia, así como en el sistema de registro histórico de datos para prever situaciones relevantes y problemáticas futuras.
        
    Separador 

    #t_2_1.titulo-segundo
      .h4 2.1 Objetivos de la estadística

    p.mb-3 Si bien la principal función de la estadística es aportar los medios necesarios para comprender los hechos sobre los cuales se recolecta información. La aproximación objetiva a la realidad y el entendimiento de la misma, son beneficios que la estadística trae consigo y que, para las organizaciones, representa poder describir procesos, sugerir hipótesis de estrategias, entre otras.

    p.mb-3 En definitiva, de las funcionalidades de la estadística se desprenden algunos objetivos que son de vital importancia en la operación de las empresas u organizaciones, a saber:

    .row.justify-content-center.align-items-center.mb-3
      SlyderB.color-custom-6.mb-5.p-5(:datos="datosSlyder")(data-aos="zoom-in-down")

    Separador

    #t_2_2.titulo-segundo
      .h4 2.2 Clasificación de la estadística

    p.mb-3 Las formas de ejecución de los procesos estadísticos traen consigo resultados particulares o distintos que, en función de las acciones operativas de una organización, tendrán más validez en unos casos que en otros. Esto es lo que podría denominarse como la clasificación de la estadística. Aplicar la estadística reconociendo su utilidad diferenciada para cada caso, traerá más y mejores aportes para el alcance de objetivos, toma de decisiones y aplicación de acciones en un proyecto empresarial.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
          h5 Figura 2
          br
          span  Ciclo de vida de la información
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/fig_1.svg')
      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_16.png').mb-3
      

    p.mb-5 La estadística puede dividirse en dos tipos, de acuerdo con los resultados que se espere obtener a través de sus metodologías, así:

    .row.align-items-star.justify-content-center
      .col-lg-5.mb-3
        .jumbotron-6.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-6.mb-4.mb-lg-0
              img(src='@/assets/curso/images/tema2/ico_7.svg').mb-3
              h4.mb-3.text-center Estadística descriptiva
            p.mb-3 Se concentra en la descripción y evaluación de los fenómenos objeto de estudio. Detalla diversos sistemas de recolección, medición e interpretación de datos. Como herramientas de apoyo usa tabulaciones y gráficos que complementan los análisis descriptivos en donde se compilan las características fundamentales del fenómeno.
      .col-lg-5
        .jumbotron-6.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-6.mb-4.mb-lg-0
              img.mt-3(src='@/assets/curso/images/tema2/ico_8.svg').mb-3
              h4.text-center Estadística inferencial
            p.mb-0 Pone su objetivo en la percepción y anticipación de eventos que aún no han sucedido. Su principal objetivo es deducir comportamientos a partir de la información recolectada. Identifica  tendencias sostenibles en el tiempo, a partir de datos obtenidos de una muestra y que, posteriormente, se escalarán a una población mayor.

    Separador

    #t_2_3.titulo-segundo
      .h4 2.3 Variables

    p.mb-3 La estadística estudia las características de los sujetos objeto de investigación, a través de la recolección de información. Estas características reciben el nombre de variables, cuando por su naturaleza, son propensas a tomar diferentes valores, bien sea en términos cuantitativos o cualitativos. La cantidad de variables de un proceso estadístico estarán determinadas según la cantidad de factores o características que se pretendan observar, analizar o investigar y que, desde luego, aporten a los objetivos del proyecto empresarial.

    p.mb-5 Las variables pueden adoptar una de estas dos vertientes y, a partir de ello, subclasificarse de la siguiente forma:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema2/info.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="42%" y="50%" numero="+")
            .h5.mb-2 Nominal
            p.mb-0 Aquellas que no obedecen a ningún tipo de orden, como las preferencias políticas o religiosas, el color del cabello o el género.

          .tarjeta.color-custom-4.p-3(x="42%" y="63%" numero="+")
            .h5.mb-2 Ordinal
            p.mb-0  Tienen un orden o jerarquía, por ejemplo, niveles de satisfacción (muy satisfecho, satisfecho, insatisfecho).


          .tarjeta.color-custom-4.p-3(x="42%" y="78%" numero="+")
            .h5.mb-2 Binaria
            p.mb-0 La variable solo puede tomar una de dos posibilidades, las más comunes son las preguntas que llevan a sí o no.

          .tarjeta.color-custom-4.p-3(x="67%" y="50%" numero="+")
            .h5.mb-2 Discreta
            p.mb-0 Las variables discretas solo pueden tomar números enteros como valor, es decir, 1, 2, 3… Ejemplo: la cantidad de personas que asisten a un evento o el número de empleados de una empresa.

          .tarjeta.color-custom-4.p-3(x="67%" y="63%" numero="+")
            .h5.mb-2 Continua
            p.mb-3  Los valores que puede tomar este tipo de variables pueden involucrar infinidad de intervalos, que van más allá de los números enteros. Por ejemplo, los porcentajes de participación de los accionistas de una empresa (3,5%, 22,6%).

          
    Separador

    #t_2_4.titulo-segundo
      .h4 2.4  Muestreo

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_7.png')
      .col-lg-6(data-aos="fade-left") 
        .jumbotron-7.p-5
          p.mb-0 Llevar a cabo estudios estadísticos requiere de un proceso cuidadoso de elección de los individuos o fenómenos por evaluar. Por limitaciones de recursos, tiempo y personal, suele ser inviable que se trabaje con la totalidad de una población para identificar comportamientos o preferencias. Por eso, los trabajos sociales o económicos que evalúan un amplio número de individuos hacen uso del muestreo.     

    p.mb-3 El muestreo funciona reduciendo la cantidad de personas a las cuales indagar, para luego proyectar los resultados a una población mayor. Funciona como metodología que hace más eficiente el trabajo obteniendo resultados aceptables y con un bajo margen de error.

    p.mb-5 En el siguiente video, se profundiza en los aspectos más importantes sobre el muestro en el ejercicio estadístico.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 
        h3 Tamaño de la muestra
    
    p.mb-3 Elegir el tamaño necesario de la muestra para alcanzar los objetivos del estudio puede ser tan complejo y preciso como se desee. A continuación, se presentan los elementos clave a tener en cuenta:

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right") 
        .jumbotron-8.p-5
          .row.align-items-center.justify-content-evenly.mb-3
            .col-5.col-lg-1
              img(src='@/assets/curso/images/tema2/ico_2.svg').mb-3
            .col-5.col-lg-10.fondo-4.p-5
              h4 Población o universo (N)
              p.mb-0 Se refiere al total de individuos sobre los que se espera proyectar las conclusiones. Por ejemplo, toda la población de un municipio, los estudiantes de un colegio o los trabajadores de una empresa agropecuaria.
          .row.align-items-center.justify-content-evenly
            .col-5.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/images/tema2/ico_3.svg').mb-2
            .col-5.col-lg-10.d-none.d-lg-block
              .row.align-items-center.justify-content-center.fondo-4
                .col-5.col-lg-6           
                  h4 Nivel de confianza
                  p.mb-3 Es un parámetro definido por el investigador, con el que se determina qué tan preciso se quiere que sea el estudio. Los valores utilizados con mayor frecuencia obedecen a un factor estimado, presentado en la tabla.
                .col-5.col-lg-5
                  .tabla-a.color-acento-contenido.mb-5.mt-4
                    table
                      thead
                        tr.color-boton
                          th.text-white.text-center Nivel de confianza
                          th.text-white.text-center  Puntuación estándar (Z)
                      tbody
                        tr
                          td.text-center 90%
                          td.text-center 1.645
                        tr 
                          td.text-center 95%
                          td.text-center 1.96
                        tr
                          td.text-center 99%
                          td.text-center 2.576
          .row.align-items-center.justify-content-evenly.d-block.d-lg-none
            .col-5.col-lg-1
              img.mx-5(src='@/assets/curso/images/tema2/ico_3.svg').mb-3
            .col-5.col-lg-10.fondo-4.p-5
              h4 Nivel de confianza
              p.mb-3 Es un parámetro definido por el investigador, con el que se determina qué tan preciso se quiere que sea el estudio. Los valores utilizados con mayor frecuencia obedecen a un factor estimado, presentado en la tabla.
              img(src='@/assets/curso/images/tema2/img_tab.svg').mb-3

          .row.align-items-center.justify-content-evenly.mb-3
            .col-5.col-lg-1
              img(src='@/assets/curso/images/tema2/ico_4.svg').mb-3
            .col-5.col-lg-10.fondo-4.p-5
              h4 Margen de error (e)
              p.mb-0 Mide el rango de tolerancia que diferencia al resultado obtenido de la muestra en comparación con el de la población. Por ejemplo, un margen de error del 5% implica que si el resultado de un estudio es una estatura promedio de las personas de la muestra en 1,80 cm, este indicador en la población oscila entre 1,71 cm y 1,89 cm, es decir 5% menor o 5% mayor del valor obtenido.

          .row.align-items-center.justify-content-evenly.mb-3
            .col-5.col-lg-1
              img(src='@/assets/curso/images/tema2/ico_5.svg').mb-3
            .col-5.col-lg-10.fondo-4.p-5
              h4 Probabilidad de éxito (p)
              p.mb-0 Este indicador puede tomarse de otros estudios previos relacionados, si no existe ninguna noción al respecto, se deduce que la probabilidad de éxito y de fracaso son equivalentes, es decir 50%.

          .row.align-items-center.justify-content-evenly
            .col-5.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/images/tema2/ico_6.svg').mb-2
            .col-5.col-lg-10.d-none.d-lg-block
              .row.align-items-center.justify-content-center.fondo-4.py-5
                .col-5.col-lg-6           
                  h4 Probabilidad de fracaso (q)
                  p.mb-3 Al igual que el indicador anterior, obedece a evidencia de estudios previos, la suma de la probabilidad de éxito más la de fracaso debe ser igual al 100% de los eventos. Así pues, la probabilidad de fracaso será igual al 100% menos la probabilidad de éxito, en otras palabras q = 1 - p. 
                .col-5.col-lg-5
                  img(src='@/assets/curso/images/tema2/img_8.svg').mb-3
          .row.align-items-center.justify-content-evenly.d-block.d-lg-none
            .col-5.col-lg-1
              img.mx-5(src='@/assets/curso/images/tema2/ico_6.svg').mb-3
            .col-5.col-lg-11.fondo-4.p-5
              h4 Probabilidad de fracaso (q)
              p.mb-3 Al igual que el indicador anterior, obedece a evidencia de estudios previos, la suma de la probabilidad de éxito más la de fracaso debe ser igual al 100% de los eventos. Así pues, la probabilidad de fracaso será igual al 100% menos la probabilidad de éxito, en otras palabras q = 1 - p. 
              img(src='@/assets/curso/images/tema2/img_8.svg').mb-3

    p.mb-5 Con cada uno de los elementos descritos previamente, sigue la determinación del tamaño de la muestra y para hacerlo solo hace falta hacer uso de la misma. Por ejemplo:
      
    .row.align-items-star.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_9.png')
      .col-lg-7(data-aos="fade-left") 
          h4 Caso ejemplo
          p.mb-3 Si se espera determinar el peso promedio del ganado poseído por una unidad productiva pecuaria, que cuenta con 2.000 especímenes, con un nivel de confianza del 95% y un margen de error del 5%, el cálculo para estimar el tamaño de la muestra será:
          img(src='@/assets/curso/images/tema2/img_10.svg') 

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_12.png')
      .col-lg-7(data-aos="fade-left") 
          h4 Caso ejemplo
          p.mb-3 Con el desarrollo de la ecuación, se puede determinar que el tamaño de la muestra que cumple con los criterios del investigador debe ser de 323 reses. El valor se debe aproximar al número entero siguiente, pues no es posible pesar una fracción del animal.
          img(src='@/assets/curso/images/tema2/img_11.svg')

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_13.png')
      .col-lg-7(data-aos="fade-left") 
          h4 Formalidad estadística
          p.mb-3 Estimar la muestra, determinar las variables y aplicar las metodologías apropiadas, permite dotar de formalidad el ejercicio estadístico, de tal manera que los resultados obtenidos puedan ser interpretados de la forma adecuada y con las expectativas de consecución esperadas.
          img(src='@/assets/curso/images/tema2/img_14.svg')

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema2/img_15.png')
      .col-lg-7(data-aos="fade-left") 
          h4 Tolerancia al margen de error
          .jumbotron-9.p-5
            p.mb-0 Con el desarrollo de la ecuación, se puede determinar que el tamaño de la muestra que cumple con los criterios del investigador debe ser de 323 reses. El valor se debe aproximar al número entero siguiente, pues no es posible pesar una fracción del animal.





    

    
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Conocer características de una población objetivo',
        texto:
          'Y a partir de ello diseñar proyecciones. Por ejemplo, efectuar un estudio demográfico en un municipio determinado para determinar la cantidad de leche que consumen sus habitantes y con ello evaluar si es viable constituir una unidad productiva pecuaria, que venda en esa zona en específico.',
        imagen: require('@/assets/curso/images/tema2/img_2.png'),
      },
      {
        titulo: 'Estudiar todo tipo de eventos',
        texto:
          'A través de la evaluación de relaciones entre dos o más variables. Por ejemplo, determinar si existe una relación entre la disminución en ventas de un producto y la llegada de uno que cumple su misma función por parte de la competencia.',
        imagen: require('@/assets/curso/images/tema2/img_3.png'),
      },
      {
        titulo: 'Aportar contenido suficiente para que se tomen decisiones',
        texto:
          'A partir de la información recolectada. Un ejemplo de esto son las encuestas de satisfacción que diligencian los clientes por un producto determinado, si todos coinciden en que su precio es elevado, puede servir como elemento clave en un análisis que lleve a la disminución de sus precios de venta.',
        imagen: require('@/assets/curso/images/tema2/img_4.png'),
      },
      {
        titulo:
          'Efectuar interpretaciones según datos recolectados de una muestra',
        texto:
          'Y a partir de ello, extrapolarlas a una población mayor. Este tipo de mecánicas suelen ser muy recurrentes en estudios políticos, por ejemplo cuando se busca medir la popularidad de candidatos presidenciales, se evalúan unos cuantos miles de personas, y el resultado se utiliza para estimar tendencias aplicables a todo el país. ',
        imagen: require('@/assets/curso/images/tema2/img_5.png'),
      },
      {
        titulo:
          'Aportar a la aplicación de metodologías de análisis de otros oficios o profesiones',
        texto:
          'El análisis de datos es aplicable a casi cualquier campo en el que se desenvuelva la humanidad; de esta forma, la estadística facilita el anticiparse a situaciones propias de otras disciplinas, como el potencial impacto a nivel mundial de un virus descubierto en la actualidad.',
        imagen: require('@/assets/curso/images/tema2/img_6.png'),
      },
    ],
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
