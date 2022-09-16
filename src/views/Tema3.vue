<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Métodos de recolección de datos 

    p.mb-3 Cuando se pretende realizar un estudio de cualquier naturaleza, es de suma importancia aclarar incógnitas como: qué tipo de información será solicitada, qué herramienta será utilizada y en qué tipo de población será aplicada. Por ende, es aconsejable partir de reconocer los requisitos que se espera cubrir y la naturaleza de la información para, así, finalmente, plantear metodologías que se adapten de forma efectiva al perfil del estudio en cuestión.     

    .row.justify-content-center.align-items-center.mb-3.p-2
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-right")
        p.fondo-5.mb-3.p-2 En el curso o desarrollo de una investigación, la metodología de recolección de información toma un importante papel, puesto que la elección apropiada de esta, evita la obtención de resultados inútiles, esfuerzos desproporcionados, desaprovechamiento de recursos y el inadecuado manejo del tiempo, minimizando de forma influyente el margen de error.
      
      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_1.png').mb-3
    
    p.mb-3 A continuación, se precisan una serie de elementos clave para la selección de un método de recolección de información:

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-6.mb-0.mg-top-1.cs
    .row.align-items-center.justify-content-evenly.mb-5
      .col-lg-6(data-aos="fade-right")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema3/info.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="84%" y="11%" numero="+")
            .h5.mb-2 Naturaleza del estudio
            p.mb-3 Cualitativa, cuantitativa o con una mixtura de las dos, por ende, algunas herramientas resultan ser más efectivas y prácticas para la obtención de esta.
            p.mb-0 #[span.color-text Ejemplo:] un cuestionario es apropiado para la recolección de datos cuantitativos, mientras que una entrevista suele ser más efectiva para recolectar datos cualitativos.


          .tarjeta.color-custom-4.p-3(x="99%" y="38%" numero="+")
            .h5.mb-2 Objeto o hipótesis de investigación
            p.mb-3 Determinar la problemática o la formulación de la hipótesis, permite hacer un acercamiento a la clasificación de los instrumentos de recolección de información más útiles.
            p.mb-0 Se supone que los datos recolectados influyen en la validación o cuestionamiento de la problemática presentada, puesto que toda información ejerce un objetivo.

          .tarjeta.color-custom-4.p-3(x="99%" y="62%" numero="+")
            .h5.mb-2 Recursos disponibles
            p.mb-0 Una labor investigativa, involucra recursos como  tiempo, capital y recurso humano. Según la metodología aplicada, estos recursos varían. Sin embargo, para obtener resultados efectivos es preciso respetar la idoneidad del método. No obstante, cuando los recursos son limitados es necesario optar por la relación costo - beneficio.

          .tarjeta.color-custom-4.p-3(x="84%" y="88%" numero="+")
            .h5.mb-2 Trabajo en equipo
            p.mb-3  En el proceso de recolección de información, es de suma importancia la organización, la delegación y la estructura de las funciones a realizar dentro del equipo de trabajo, puesto que dichos elementos permiten disminuir costos, fijar objetivos y contribuir al perfeccionamiento de los resultados, es por ello por lo que la planeación siempre tendrá relevancia en la fase de elección de metodología. 
      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_2.svg').mb-3

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    Separador

    #t_3_1.titulo-segundo
      .h2 3.1 Observación

    .row.justify-content-center.align-items-star  
      .col-12.col-lg-6.mb-4.p-0.p-md-2(data-aos="fade-right")
        p.mb-3  Los seres humanos a través de los sentidos tienen la capacidad de adquirir diferentes tipos de información o estímulos que les permiten adaptarse en un entorno y reconocer diferentes factores de este. La observación es uno de ellos, por medio de ella se pueden percibir datos y detalles específicos en lugares y momentos determinados, por lo tanto, se podría decir que funciona como un método de recolección de información.
        .jumbotron-10.p-4
          p.mb-3 La aplicación de la observación como metodología en el campo investigativo es muy utilizada. Uno de sus beneficios es que puede ser desarrollada de manera individual, no se requiere de un grupo extenso de expertos. Esta individualidad también permite que los resultados obtenidos, dentro de la investigación, sean homogéneos, puesto que simplifica distorsiones generadas por la pluralidad de opiniones; es flexible, se puede aplicar en cualquier campo o entorno y, por su facilidad de aplicación, permite economizar recursos.  
      
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema3/img_3.png').mb-3

    p.mb-3 En relación con la observación, como método de recolección de información, se deben tener en cuenta los siguientes aspectos clave:

    .row.justify-content-center.align-items-center.p-2
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_4.svg').mb-3
      .col-12.col-lg-6.mb-4.p-0.p-md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Implementación de la observación' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  La observación se puede implementar en diferentes fases de una investigación, ya sea en el planteamiento de la problemática a analizar, como en la verificación de las hipótesis determinadas.

          .row(titulo='Ejemplo de su uso' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Si un funcionario detecta comportamientos inusuales en algunos de los equinos de una manada, puede esto inducirlo a cuestionarse si esto es generado por alguna irregularidad o dificultad de salud.
          
          .row(titulo='Aproximación a las problemáticas' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  En un contexto posterior, la observación se aplicaría como un elemento para la aproximación a una problemática, generando así un posible diagnóstico. 
 

          .row(titulo='La observación como base de decisiones' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Continuando con el ejemplo, en este punto se consultará con un experto en el tema donde, a partir de un estudio minucioso a un número de animales involucrados, determine si existen patologías comunes o solo casos aislados que no constituyan un problema serio.


          .row(titulo='Información evaluada' numero='5')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Finalmente, por medio de la recolección de datos se pueden extraer criterios a partir de la información evaluada, soportados en la validez y fiabilidad de esta, permitiendo generar conclusiones de la evaluación en la muestra.
 

          .row(titulo='De la observación al diagnóstico' numero='6')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-3  Continuando con el ejemplo, en esta fase se presentaría un diagnóstico del grupo de animales estudiados y, a partir de lo verificado, identificar el procedimiento a seguir. 
      

    p.mb-3 Para que el observador aplique y desarrolle de manera correcta la metodología de la observación, se plantean las siguientes recomendaciones: 

    .row.justify-content-center.align-items-center.p-2
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-right")
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p.mb-0 <b>Identificar el objeto de estudio:</b> permite optimizar recursos y realizar una recolección de información idónea que aporte de manera objetiva a la investigación en concreto. 
          li 
            i.fas.fa-angle-right
            p.mb-0  <b>Establecer estrategias </b> que permitan registrar de forma oportuna y precisa los datos de recolección.
          li 
            i.fas.fa-angle-right
            p.mb-0 <b>Utilizar herramientas adecuadas</b> para que la observación siga un esquema concreto.
          li 
            i.fas.fa-angle-right
            p.mb-0  <b>Determinar un cronograma </b> de trabajo por medio del cual se definan las funciones a realizar, esto permite tener una actitud proactiva frente a cualquier contratiempo o circunstancia no esperada.
          li 
            i.fas.fa-angle-right
            p.mb-0 <b>Delegar funciones y establecer responsabilidades,</b> esto si la recolección de información se realiza en un equipo de trabajo, ya que permite visualizar el objetivo planteado y verificar rutas para alcanzar las metas a corto y mediano plazo. 

      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema3/img_5.png').mb-3

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 
        h3 Modalidades de observación

    p.mb-5 La observación se puede catalogar con base en diferentes criterios. A continuación, se muestran algunos métodos que gozan de mayor aceptación:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left") 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema3/info_3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="20%" y="67%" numero="+")
            .row.align-items-center.justify-content-center
              .col-5.col-lg-2
                 img(src='@/assets/curso/images/tema3/ico_1.svg').mb-3
              .col-5.col-lg-10
                .h5.mb-2 Estructurada
                p.mb-3 Esta modalidad también se reconoce como, sistémica, concentrada o localizada; su objetivo es identificar los aspectos relevantes a observar y el observador utiliza métodos muy estructurados para la recolección de datos.

          .tarjeta.color-custom-4.p-3(x="20%" y="90%" numero="+")
            .h5.mb-2 No estructurada
            p.mb-0 Esta modalidad también se reconoce como, global o flotante. Se aplica en campos amplios a observar (pluralidad de situaciones o acontecimientos), permite hacer un contacto rápido con el elemento a observar, el observador utiliza métodos poco estructurados.

          .tarjeta.color-custom-4.p-3(x="46%" y="67%" numero="+")
            .h5.mb-2 Participante 
            p.mb-0 Una de las características de esta modalidad, es que el observador se involucra con los individuos observados (interacción), en ocasiones participa en la ejecución de alguna tarea conjunta, inicialmente entendiendo el medio para luego recurrir a sus recuerdos y generar la información.

          .tarjeta.color-custom-4.p-3(x="46%" y="90%" numero="+")
            .h5.mb-2 No participante 
            p.mb-0  Los sucesos ocurren de manera individual y ajenos al observador, en este caso solo tiene el papel de espectador y su prioridad es captar y registrar la información. 

          .tarjeta.color-custom-4.p-3(x="72%" y="67%" numero="+")
            .h5.mb-2 Directa
            p.mb-0 El observador tiene un contacto directo con el acontecimiento, adquiere la información de primera mano. En este modelo se ven involucradas las capacidades del investigador, puesto que él verifica los acontecimientos y, partiendo de ello, genera hipótesis o conclusiones.

          .tarjeta.color-custom-4.p-3(x="72%" y="90%" numero="+")
            .h5.mb-2 Indirecta
            p.mb-0 En este modelo, la información del suceso es generada de las observaciones efectuadas por otros espectadores, el investigador no presencia el acontecimiento de forma directa, por ende, se centra en la parte evaluativa y el análisis de dicha información.

          .tarjeta.color-custom-4.p-3(x="96%" y="67%" numero="+")
            .h5.mb-2 En la vida real
            p.mb-0  Los fenómenos se desarrollan en un entorno completamente real, no existe ningún tipo de preparación o planeación del acontecimiento, el observador es totalmente ajeno a los hechos.

          .tarjeta.color-custom-4.p-3(x="96%" y="91%" numero="+")
            .h5.mb-2 Experimental
            p.mb-0  La observación se realiza en acontecimientos que, generalmente, son manipulados o planificados por el investigador, lo que se busca es crear situaciones que permitan la aproximación a hechos que se requiera estudiar sin modificar su estructura natural.

    Separador

    #t_3_2.titulo-segundo
      .h2 3.2  Entrevista

    p.mb-3 Esta es considerada como una herramienta en la recolección de información, generalmente óptima cuando lo que se espera recolectar son datos mayoritariamente cualitativos, puesto que la fuente de información se centra en la opinión de la población encuestada, su eficacia no depende en la cantidad de opiniones recolectadas, sino en la justificación de esta. 

    .row.justify-content-center.align-items-center.p-2
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_7.png').mb-3
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")
        .jumbotron-11.p-4
          p.mb-0 Una de sus principales diferencias en comparación con la observación es que, en esta última, la información se proporciona de modo impersonal, basada en la limitación del momento, describiendo el escenario o las situaciones que están en el presente. Por el contrario, la entrevista permite obtener información de situaciones o sucesos del pasado como del presente, extendiéndose en detalles más específicos que podrían ser limitados en el método de la observación. 
      
    p.mb-3 Estas son algunas generalidades importantes relacionadas con la entrevista; es importante tener en cuenta cada una de ellas y llevar registro de lo más destacado en la libreta personal de apuntes:

    .row.justify-content-center.align-items-center.p-2
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-right")
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p.mb-0 La entrevista suele aplicarse a grupos de personas específicos y reducidos, dependiendo el tipo de información que se estime indagar.
          li 
            i.fas.fa-angle-right
            p.mb-0 La entrevista, generalmente, se aplica con preguntas abiertas, estas permiten profundizar y obtener más detalle de la información cualitativa.

          li 
            i.fas.fa-angle-right
            p.mb-0 Se diferencia también de la encuesta, puesto que esta se aplica para la recolección de información cuantitativa, está conformada mayormente por preguntas cerradas y es aplicada por medio de listados estandarizados dirigidos a grandes grupos de personas. 

          li 
            i.fas.fa-angle-right
            p.mb-0 La entrevista está compuesta, en su mayoría de veces, por un factor social. Es así como siempre en su metodología se genera algún tipo de interacción donde existen dos o más tipos de implicados.

          li 
            i.fas.fa-angle-right
            p.mb-0 Los implicados en una entrevista suelen ser: receptor (la persona que recibe la información) y emisor (persona que emite la información). 

          li 
            i.fas.fa-angle-right
            p.mb-0 La clasificación de la metodología surge de la forma en la que se desarrolle la interacción. 

      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema3/img_8.svg').mb-3

    p.mb-5 Según la interacción gestada en el ejercicio de la entrevista, se puede establecer la siguiente clasificación de la metodología:


    .row.align-items-center.justify-content-evenly.mb-5
      .col-lg-6(data-aos="fade-right")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema3/info_1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="30%" y="39%" numero="+")
            .h5.mb-2 Estructurada
            p.mb-0 Compuestas por un diseño, <b>generalmente un listado de preguntas establecidas e inmodificables,</b> estas ofrecen gran utilidad cuando la recolección de información se ubica en amplios grupos de personas, <b>permiten facilidad para comparar las respuestas y disminuyen las posibilidades de que los encuestados pierdan el hilo conductor,</b> permitiendo que la información que se obtenga sea la que se necesita.


          .tarjeta.color-custom-4.p-3(x="61%" y="38%" numero="+")
            .h5.mb-2 Semiestructurada
            p.mb-3 Ofrece flexibilidad y amplio margen de maniobra para el investigador. <b>Las preguntas son abiertas, la temática a investigar es clara, pero este podrá dirigir la entrevista con creatividad y modificar el libreto según lo considere conveniente,</b> dando relevancia a los aspectos importantes que permitan obtener información más detallada.

          .tarjeta.color-custom-4.p-3(x="92%" y="38%" numero="+")
            .h5.mb-2 No estructuradas
            p.mb-0 Este tipo de entrevista <b>no cuenta con ninguna clase de libreto o guía inicial,</b> por ende, el investigador es el encargado de dirigirla y el responsable de indagar correctamente al entrevistado para obtener la información que se requiere.

          .tarjeta.color-custom-4.p-3(x="94%" y="58%" numero="+")
            .h5.mb-2 Focalizadas
            p.mb-0  No cuentan con un guion, pero sí con <b> una temática en específico, se pretenden obtener respuestas abiertas y espontáneas,</b> pero de igual forma el entrevistador deberá usar estrategias que le permitan encaminar la conversación a los detalles que le aporten objetivamente a la temática establecida.

          .tarjeta.color-custom-4.p-3(x="94%" y="78%" numero="+")
            .h5.mb-2 No dirigida o en profundidad
            p.mb-0  <b>Permiten tocar distintos temas de interés sin ahondar en ninguna sección en concreto,</b> usualmente son utilizadas en medios de comunicación como la televisión en específico la farándula, periódicos y revistas, el entrevistado responde preguntas de cualquier ámbito de su vida (profesionales - personales), su aplicación se desarrolla en un ambiente armonioso o familiar, esto con el fin de que el entrevistado pueda contestar de forma espontánea y honesta.

      .col-lg-5(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_9.png').mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .jumbotron-11.p-4
          .row.justify-content-center.align-items-center
            .col-5.col-lg-1
              img(src='@/assets/curso/images/tema3/ico_2.svg' alt='', style="width:100px; display:block; margin:auto 0 ;").mb-3
            .col-lg-10
              p.mb-0 Para realizar de forma correcta la aplicación de la entrevista, como herramienta de recolección de información, no solo es suficiente tener claridad de la información que se pretende obtener o fijar el tipo de población con la que se pretende trabajar; la entrevista, como cualquier otra herramienta de recolección de información, demanda de un proceso para su aplicación, que es de suma importancia reconocer y desarrollar.
    
    p.mb-3 En el siguiente listado, se exponen los pasos más comunes y recomendados para la aplicación de la entrevista.

    
    .row.align-items-center.justify-content-center.mb-5.d-block.d-lg-none.p-5
      .col.col-lg-10(data-aos="fade-right") 
        .jumbotron-12.p-3
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
                img(src='@/assets/curso/images/tema3/ico_3.svg').mb-3
            .col-10.col-lg-9     
                ol.lista-ol
                  li 
                    span.text-bold 1. 
                    p.mb-0 Determinar la problemática a estudiar. 
                  li 
                    span.text-bold 2. 
                    p.mb-0 Identificar la  población. 
                  li 
                    span.text-bold 3. 
                    p.mb-0 Planificar la entrevista: comienzo - desarrollo - cierre.
                  li 
                    span.text-bold 4. 
                    p.mb-0 Obtención de  información. 

    .row.align-items-center.justify-content-center.d-none.d-lg-block
      .row.align-items-center.justify-content-evenly.mb-5
        .col.col-lg-8(data-aos="fade-right") 
          .jumbotron-12.p-5
            .row.justify-content-center.align-items-center
              .col-4.col-lg-2
                img(src='@/assets/curso/images/tema3/ico_3.svg').mb-3
              .col-5.col-lg-9     
                  ol.lista-ol
                    li 
                      span.text-bold 1. 
                      p.mb-0 Determinar la problemática a estudiar. 
                    li 
                      span.text-bold 2. 
                      p.mb-0 Identificar la  población. 
                    li 
                      span.text-bold 3. 
                      p.mb-0 Planificar la entrevista: comienzo - desarrollo - cierre.
                    li 
                      span.text-bold 4. 
                      p.mb-0 Obtención de  información. 


    .row.justify-content-center.align-items-center.my-3
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom-2.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-5.col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema3/ico_4.svg",  alt='', style="width:60px; display:block; margin:auto 0 ;")
                .col.mb-3.mb-sm-0
                  h3.text-white Afiance su saber en relación con la entrevista, explorando el documento: 
                  p.mb-1.text-white Anexo_1_LaEntrevista.
                .col-md-auto
                  a.boton.color-custom-7(:href="obtenerLink('downloads/Anexo1LaEntrevista.pdf')" target="_blank")
                    span Ver
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/Ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador

    #t_3_3.titulo-segundo
      .h2 3.3 Encuesta

    p.mb-3 La encuesta se define como una técnica de recolección de información, utilizada, principalmente, para la investigación cuantitativa de uso frecuente, se considera un instrumento útil en los procesos de investigación, porque permite adquirir distintos tipos de información de forma fácil, objetiva y directa.

    p.mb-3 Cuando se habla de investigación y recolección de información, resulta engorroso, o casi imposible, hacer partícipe a toda una población y tener en cuenta cada opinión, es allí donde se reconoce la importancia de uno de los instrumentos de la encuesta, este modelo es dirigido de forma aleatoria o controlada sobre los individuos a estudiar. 

    p.mb-5 Le presentamos una clasificación basada en criterios muy generales, comunes a la mayoría de proyectos:

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.mb-3
        .jumbotron-7.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-6.mb-4.mb-lg-0
              img(src='@/assets/curso/images/tema3/ico_5.svg').mb-3
              h4.mb-5.text-center Muestra
            p.my-4 El grupo seleccionado se reconoce como muestra, los resultados adquiridos como las conclusiones encontradas son extrapolados a la población que se insinúa investigar.
      .col-lg-4
        .jumbotron-7.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-5.col-lg-6.mb-4.mb-lg-0
              img(src='@/assets/curso/images/tema3/ico_6.svg').mb-3
              h4.mb-4.text-center Beneficios
            p.mb-0 Su facilidad de aplicación permite su aceptación en diferentes proyectos y gracias a el avance tecnológico que existe actualmente, se logran alcanzar tipos de poblaciones que anteriormente no se tenían en cuenta, ya no es necesario aplicar el método de forma personal.

      .col-lg-4
        .jumbotron-7.p-5
          .row.justify-content-center.align-items-center
            .col-5.col-lg-6.mb-4.mb-lg-0
              img.mt-3(src='@/assets/curso/images/tema3/ico_7.svg').mb-3
              h4.mb-4.text-center Actualidad
            p.mb-2 Hoy en día se puede aplicar por medio de herramientas como llamadas telefónicas, correos electrónicos, postal y se encuentran también en diferentes páginas web, lo que permite poder encuestar a grandes poblaciones de forma efectiva e inmediata.


    p.mb-3 La encuesta resulta ser una herramienta útil, económica y de fácil aplicación cuando se trata de recolectar información, pero como toda herramienta, tiene sus posibilidades y limitaciones, las cuales hay que identificar para aprender a hacer un uso óptimo de la misma.

    p.mb-5 Estas son las principales posibilidades y limitaciones que presenta la encuesta, como recurso de recolección de información:


    .row.justify-content-center.align-items-center.fondo-7.p-5
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-right")
        h4.mb-3 #[span.color-text Posibilidad]
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 Es de fácil aplicación y resulta ser mucho más económica que otros métodos.
          li 
            i.fas.fa-check
            p.mb-0 Como método, facilita el abordaje de diferentes temáticas a investigar.

          li 
            i.fas.fa-check
            p.mb-0 Permite abordar muestras considerables, lo que la hace un instrumento útil en las investigaciones que pretenden abordar grandes poblaciones, como regiones o países.

          li 
            i.fas.fa-check
            p.mb-0 Se diligencia de manera anónima, lo que permite que las personas encuestadas puedan responder de forma honesta, permitiendo la obtención de información real y contundente.

          li 
            i.fas.fa-check
            p.mb-0 Su diseño permite generar análisis comparativos, facilita la evaluación de resultados y la captación ordenada de información.


      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")
        h4.mb-3 #[span.color-text Limitados]
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 Depende del factor social, puede ser influida por el entorno, la cultura o las ideologías.
          li 
            i.fas.fa-check
            p.mb-0 La información puede ser subjetiva, puesto que la realidad se percibe a través del juicio de terceros.

          li 
            i.fas.fa-check
            p.mb-0 Las ayudas tecnológicas pueden generar influencia en la veracidad de la información y retrasos o contratiempos en la recolección de información, puesto que se depende de la estabilidad de la red o de los servicios tecnológicos. 

          li 
            i.fas.fa-check
            p.mb-0 La aplicación de la herramienta de manera impersonal puede generar inconsistencias en la recolección de datos, puesto que los encuestados pueden obtener inquietudes que, al no ser resueltas correctamente, infieran con la calidad de la respuesta.


    Separador

    #t_3_4.titulo-segundo
      .h2 3.4 Análisis de contenido 

    p.mb-3 La aplicación de esta metodología <b>consiste en extraer y procesar datos esenciales, para así generar nuevos conocimientos.</b> Requiere el uso, principalmente, de fuentes de información independientes, documentos creados anteriormente por otros expertos en un contexto social específico. 

    .row.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_10.png').mb-3
      .col-12.col-lg-5.mb-4.p-0.p-md-5(data-aos="fade-left")
        .jumbotron-7.p-5
          p.mb-0 <b>Genera una acción conjunta con algunas metodologías entre ellas la observación, derivado que en ocasiones no es posible identificar todos los acontecimientos de una circunstancia en específico,</b> por ende, los datos adquiridos por medio de las fuentes independientes permiten construir una base por medio de la cual se logra generar un análisis paralelo y generar nueva información. 


    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 
        h3 Tipos de análisis de contenido

    p.mb-3 La categorización de los análisis de contenido puede regirse por criterios variados. Se invita a visualizar con atención el esquema que a continuación se muestra y profundizar en cada una de las definiciones.


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left") 
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema3/info_2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-custom-4.p-3(x="17%" y="42%" numero="+")
            .row.align-items-center.justify-content-center 
              .h5.mb-2 Exploratorio
              p.mb-0 Se utiliza cuando se pretende tratar un contenido de estudio por vez primera, son de gran utilidad en los proyectos de formación, ya que proveen información pertinente partiendo de los indicadores de la muestra.

          .tarjeta.color-custom-4.p-3(x="17%" y="59%" numero="+")
            .h5.mb-2 Descriptivo
            p.mb-0 Parte de los marcos teóricos, se utiliza cuando se pretenden reformular cambios en algún producto comunicacional, definen, tipifican y clasifican los rasgos de la realidad empírica de los documentos.

          .tarjeta.color-custom-4.p-3(x="17%" y="76%" numero="+")
            .h5.mb-2 Verificativo
            p.mb-0 Su objetivo es comprobar si los supuestos investigativos de otros autores son contradictorios o verdaderos, basados en el estudio del contenido, las afirmaciones relevantes y los resultados más significativos. 

          .tarjeta.color-custom-4.p-3(x="37%" y="42%" numero="+")
            .h5.mb-2 Primarios
            p.mb-0  Su análisis se genera a partir de textos o contenidos originales, construido directamente del autor sin mediación de más involucrados, por ello se les denominan fuentes primarias.

          .tarjeta.color-custom-4.p-3(x="37%" y="59%" numero="+")
            .h5.mb-2 Secundarios
            p.mb-0 Los textos o contenidos que se emplean en este análisis de contenido son generados de fuentes secundarias, creadas a partir de un contenido primario, es decir implica la mediación de otros autores. 

          .tarjeta.color-custom-4.p-3(x="67%" y="42%" numero="+")
            .h5.mb-2 Horizontales
            p.mb-0 Este análisis utiliza recopilaciones de información amplias, surgen de diferentes autores y se utiliza específicamente para cuestionar investigaciones que inciden considerablemente en una comunidad, como, por ejemplo, las creencias, la filosofía o las inclinaciones políticas.

          .tarjeta.color-custom-4.p-3(x="67%" y="59%" numero="+")
            .h5.mb-2 Verticales
            p.mb-0  Su recopilación de información es reducida o de un elemento en específico, se puede identificar como un análisis no cuantitativo, donde algunos elementos como el contexto, la interacción y la contraposición toman relevancia.

          .tarjeta.color-custom-4.p-3(x="67%" y="76%" numero="+")
            .h5.mb-2 Transversales
            p.mb-0  En este tipo de análisis se utilizan la recopilación de muestras textuales, su aplicación parte en la confrontación de diferentes planteamientos relacionados con un mismo asunto, el objetivo es poder precisar los motivos de las diferencias, si obedecen a las posiciones de los mismos autores o a causas ajenas.

          .tarjeta.color-custom-4.p-3(x="67%" y="93%" numero="+")
            .h5.mb-2 Longitudinales
            p.mb-0  En esta categoría procura identificar la evolución o desarrollo de un aspecto en específico, por ende, sus bases de información se derivan de diferentes momentos en el tiempo, un ejemplo concreto sería el diario de un medio.
          
          .tarjeta.color-custom-4.p-3(x="92%" y="59%" numero="+")
            .h5.mb-2 Cuantitativos
            p.mb-0  La información que se utiliza en este tipo de análisis puede ser medida o cuantificada, se utilizan medidas estadísticas, su objetivo es soportar los resultados de la información recolectada.

          .tarjeta.color-custom-4.p-3(x="92%" y="42%" numero="+")
            .h5.mb-2 Cualitativos
            p.mb-0  Prevalece el elemento descriptivo en todo proceso, desde los datos recolectados hasta la información proporcionada por medio de las conclusiones de la investigación, el análisis, generalmente, se enfoca en características no medibles.
















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

<style lang="sass"></style>
