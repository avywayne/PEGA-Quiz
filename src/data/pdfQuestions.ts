import type { Question } from '../types/exam';

/**
 * Preguntas reales extraídas del PDF proporcionado por el usuario
 * (PEGAPCSA87V1 Preguntas en ESP). La respuesta correcta se toma del
 * apartado 'Respuesta: X' de cada pregunta, incluyendo correcciones
 * anotadas en notas posteriores (p.ej. "=> Las respuestas correctas son...").
 * Se excluyeron preguntas de tipo arrastrar/soltar y hotspot, que no son
 * compatibles con el formato de opción múltiple de esta aplicación.
 */
export const pdfQuestions: Question[] = [
  {
    "id": "pdf-001",
    "type": "multiple",
    "topic": "Case Management",
    "text": "¿Qué dos escenarios requieren que configure el procesamiento condicional dentro del tipo de caso? (Elegir Dos.)",
    "options": [
      {
        "id": "a",
        "text": "Una solicitud de elegibilidad para una beca requiere que los estudiantes ingresen puntajes de exámenes estandarizados. Los estudiantes con puntajes de exámenes que califican pueden programar y entrevistar. Los estudiantes sin puntajes de prueba calificados reciben un correo electrónico de rechazo."
      },
      {
        "id": "b",
        "text": "Una aplicación de reserva de catering requiere que los clientes ingresen información sobre el tamaño esperado del grupo, la fecha y la hora del evento. Cuando los clientes envían la información, la empresa de catering envía un email de confirmación."
      },
      {
        "id": "c",
        "text": "Una aplicación requiere que el cliente seleccione el tipo de solicitud en una lista desplegable. El sistema enruta la solicitud a la cola de trabajo del departamento apropiado. Un usuario con acceso a la cola de trabajo procesa el caso a través del cumplimiento."
      },
      {
        "id": "d",
        "text": "Una aplicación de compras requiere que un invitado complete la información de pago. Un usuario que ingresa un número de membresía se salta el paso de información de pago."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #1."
  },
  {
    "id": "pdf-002",
    "type": "single",
    "topic": "Case Management",
    "text": "Está desarrollando un tipo de caso de Visa para procesar solicitudes de visa de entrada. Como parte del proceso, los solicitantes programan una entrevista con el consulado. Se crea un caso secundario de entrevista para el proceso de entrevista. Después de la entrevista, el consulado llega a una decisión dentro de las 48 horas o más. Para que el caso de Visa proceda a la notificación de la solicitud, se debe resolver el caso de Entrevista. Después de crear el caso secundario de Entrevista, ¿cómo se configura el tipo de caso para lograr el comportamiento requerido?",
    "options": [
      {
        "id": "a",
        "text": "Después del paso Crear caso, agregue un paso Esperar que detenga el caso principal hasta que la aplicación programa la entrevista."
      },
      {
        "id": "b",
        "text": "Después del paso Crear caso, agregue un paso Esperar que pause el caso principal hasta que la Entrevista alcance el estado Resuelto."
      },
      {
        "id": "c",
        "text": "Siguiendo el paso Crear caso, agregue un acuerdo de nivel de servicios (SLA) que escale el caso principal después de 48 horas."
      },
      {
        "id": "d",
        "text": "Después del paso Crear caso, agregue un paso de Entrevista que se resuelve automáticamente después de 48 horas.."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #2."
  },
  {
    "id": "pdf-003",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "¿Qué escenario es un caso de uso para el paso Esperar?",
    "options": [
      {
        "id": "a",
        "text": "El cliente no puede completar una solicitud para una cuenta corriente hasta que un representante del banco revise su informe crediticio."
      },
      {
        "id": "b",
        "text": "Un agente debe enviar un correo electrónico de confirmación a un cliente asegurado después de completar un formulario."
      },
      {
        "id": "c",
        "text": "Un usuario de nómina no puede procesar un aumento de salario hasta que el gerente del departamento apruebe el aumento."
      },
      {
        "id": "d",
        "text": "El cliente debe iniciar sesión en su cuenta antes de recibir un descuento de membresía en una compra en línea."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #3."
  },
  {
    "id": "pdf-004",
    "type": "single",
    "topic": "Case Management",
    "text": "Un requisito establece que cuando un cliente solicita una tarjeta de crédito, se debe completar una verificación de crédito para que se apruebe la tarjeta de crédito. Seleccione la relación de tipo de caso que satisfaga el requisito.",
    "options": [
      {
        "id": "a",
        "text": "Realice tanto la solicitud de préstamo como los mejores casos de verificación de crédito."
      },
      {
        "id": "b",
        "text": "Convertir la verificación de crédito en un caso derivado de la solicitud de tarjeta de crédito."
      },
      {
        "id": "c",
        "text": "Realice una verificación de crédito en un caso secundario de solicitud de tarjeta de crédito."
      },
      {
        "id": "d",
        "text": "Hacer la solicitud de tarjeta de crédito un caso secundario de la verificación de crédito."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #4."
  },
  {
    "id": "pdf-005",
    "type": "multiple",
    "topic": "Case Management",
    "text": "Loscasos de solicitud de admisión a la universidad avanzan automáticamente en el ciclo de vida del caso si la solicitud los puntajes de las pruebas estandarizadas están por encima de cierto umbral. El umbral se determina cada año en función de la puntuación media nacional proporcionada. ¿Qué dos configuraciones, cuando se aplican juntas, cumplen este requisito? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Configure un proceso con una forma de decisión que continúe si el parámetro de configuración TestThreshold es menor(sinonimos: inferior) que el puntaje de la prueba del solicitante."
      },
      {
        "id": "b",
        "text": "Configure un parámetro de Configuración testThreshold que calcule el promedio nacional para el umbral de puntuación de la prueba."
      },
      {
        "id": "c",
        "text": "Configure un proceso con una forma de decisión que continúe si la configuración de TestThreshold Configuration es superior a la puntuación de la prueba de la aplicación."
      },
      {
        "id": "d",
        "text": "Configure un parámetro de configuración TestThreshold con el promedio nacional para el umbral de puntuación de la prueba."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #5."
  },
  {
    "id": "pdf-006",
    "type": "multiple",
    "topic": "Testing",
    "text": "Un desarrollador descubre que el valor de una propiedad calculada arroja un resultado inesperado. ¿Qué dos características de la herramienta Trace le permiten diagnosticar el problema sin afectar la aplicación realizada? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Puntos de interrupción. Breakpoints"
      },
      {
        "id": "b",
        "text": "El monitor de eventos / The Event monitor (Puede salir como: Supervisor de eventos)"
      },
      {
        "id": "c",
        "text": "La función Observador /The Watch function"
      },
      {
        "id": "d",
        "text": "La herramienta Portapapeles (Clipboard)"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #6."
  },
  {
    "id": "pdf-007",
    "type": "single",
    "topic": "General",
    "text": "¿Para qué caso de uso crea una nueva regla en una aplicación de la plataforma Pega?",
    "options": [
      {
        "id": "a",
        "text": "Un diseñador reutiliza una sección de IU cada vez que se necesita el mismo comportamiento en la aplicación."
      },
      {
        "id": "b",
        "text": "Un desarrollador realiza cambios en un mensaje de correo electrónico que está configurado en el ciclo de vida del caso."
      },
      {
        "id": "c",
        "text": "Un diseñador usa el modo Diseño en tiempo de ejecución para modificar una vista para usar una plantilla de dos columnas."
      },
      {
        "id": "d",
        "text": "Un desarrollador crea un proceso paralelo para auditar los cambios que realiza un agente de servicio."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #7."
  },
  {
    "id": "pdf-008",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo indica el progreso de un caso hacia la resolución?",
    "options": [
      {
        "id": "a",
        "text": "Aplicar niveles de servicio a los pasos de la asignación."
      },
      {
        "id": "b",
        "text": "Diseñe interfaces de usuario basadas en la intención."
      },
      {
        "id": "c",
        "text": "Actualizar el estado del caso en los pasos apropiados."
      },
      {
        "id": "d",
        "text": "Configurar un campo de notas de casos para capturar información de progreso."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #8."
  },
  {
    "id": "pdf-009",
    "type": "single",
    "topic": "General",
    "text": "¿Qué escenario requiere que realice actualizaciones en Dev Studio?",
    "options": [
      {
        "id": "a",
        "text": "Una tarea se reasigna cuando alcanza un objetivo de acuerdo al nivel de servicio (SLA)."
      },
      {
        "id": "b",
        "text": "Se agrega una correspondencia de correo electrónico al tipo de caso."
      },
      {
        "id": "c",
        "text": "Un representante del cliente puede aprobar o rechazar un reclamo."
      },
      {
        "id": "d",
        "text": "Una nueva vista de confirmación muestra una propiedad de texto de solo lectura."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #9."
  },
  {
    "id": "pdf-010",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "¿Qué dos afirmaciones son verdaderas sobre los controles de estilo en App Studio? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Los desarrolladores pueden configurar un control de fecha y hora para que se muestre como un campo de entrada de texto, una lista desplegable o un control de calendario."
      },
      {
        "id": "b",
        "text": "Los desarrolladores pueden configurar un control de entrada de texto para cambiar el fondo cuando los usuarios hacen clic en el control."
      },
      {
        "id": "c",
        "text": "Los desarrolladores pueden configurar un control de botón para que se oculte cuando los usuarios hacen clic en el control."
      },
      {
        "id": "d",
        "text": "Los desarrolladores crean un nuevo formato de estilo para aplicar estilo a un control de botón listo para usar."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #10."
  },
  {
    "id": "pdf-011",
    "type": "multiple",
    "topic": "General",
    "text": "¿Cuáles son las dos afirmaciones verdaderas acerca de las percepciones/insights? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Puede buscar y seleccionar los campos que desea incluir en una perspectiva."
      },
      {
        "id": "b",
        "text": "Puede transformar consultas de datos en visualizaciones compartibles."
      },
      {
        "id": "c",
        "text": "Puede transformar visualizaciones compartibles en consultas de datos."
      },
      {
        "id": "d",
        "text": "Puede editar los datos de la aplicación directamente en una perspectiva."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #11."
  },
  {
    "id": "pdf-012",
    "type": "single",
    "topic": "Case Management",
    "text": "En un tipo de caso de pago con tarjeta de crédito, desea establecer la tarifa anual en USD 75. ¿Cómo se establece el campo Tarifa anual?",
    "options": [
      {
        "id": "a",
        "text": "Configurela validación de campo en el campo Tarifa anual."
      },
      {
        "id": "b",
        "text": "Configurela búsqueda de tarifa anual para hacer referencia al monto mínimo adeudado."
      },
      {
        "id": "c",
        "text": "Enlapágina de Inicialización de datos, establezca el campo Tarifa anual en 75."
      },
      {
        "id": "d",
        "text": "Configureel campo Tarifa anual como un campo calculado."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #12."
  },
  {
    "id": "pdf-013",
    "type": "multiple",
    "topic": "Case Management",
    "text": "Un arquitecto empresarial ha desarrollado un nuevo proceso para un tipo de caso. Para verificar que los elementos de la interfaz de usuario recopilan el resultado esperado, desea probar el proceso y los campos. ¿Qué dos configuraciones, cuando se usan juntas, le permiten registrar un conjunto de interacciones y guardar el resultado de la prueba para verificar la funcionalidad del proceso? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Cree una prueba unitaria para el tipo de caso."
      },
      {
        "id": "b",
        "text": "Crear un escenario de pruebas para el tipo de caso."
      },
      {
        "id": "c",
        "text": "Agregue aserciones explícitas en los elementos de la interfaz de usuario."
      },
      {
        "id": "d",
        "text": "Agregue aserciones explícitas en la página de inicio de prueba de escenario."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #14."
  },
  {
    "id": "pdf-014",
    "type": "multiple",
    "topic": "General",
    "text": "En el diseñador de casos, ¿qué dos componentes pueden etiquetar los usuarios con una versión de Producto mínimo adorable (MLP) para fines de dimensionamiento del proyecto? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Un canal de la aplicación móvil del usuario"
      },
      {
        "id": "b",
        "text": "Un sistema externo de registro (SOR)"
      },
      {
        "id": "c",
        "text": "Una automatización"
      },
      {
        "id": "d",
        "text": "Una decisión de aprobación"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #15."
  },
  {
    "id": "pdf-015",
    "type": "single",
    "topic": "General",
    "text": "ABC BankCorp quiere crear una experiencia de aplicación móvil para usuarios y CSR para su aplicación Transaction Dispute. De los siguientes requisitos, ¿cuál opción requiere que configure distintos canales de aplicaciones móviles?",
    "options": [
      {
        "id": "a",
        "text": "Los CSR pueden crear otras instancias de tipo de caso en la aplicación móvil."
      },
      {
        "id": "b",
        "text": "Las paletas de colores de las aplicaciones móviles son diferentes para los usuarios y los CSR."
      },
      {
        "id": "c",
        "text": "La aplicación móvil personaliza las unidades monetarias y el formato de fecha/hora según la ubicación de los usuarios."
      },
      {
        "id": "d",
        "text": "La aplicación móvil es compatible con todos los sistemas operativos de teléfonos móviles. Similar con la #67"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #19."
  },
  {
    "id": "pdf-016",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos opciones puede configurar para un canal de aplicación móvil? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Definir el comportamiento de seguridad para una aplicación móvil, como identificadores biométricos."
      },
      {
        "id": "b",
        "text": "Gestionar funciones administrativas como el acceso a archivos de registro (Logs)."
      },
      {
        "id": "c",
        "text": "Defina el comportamiento de UI para cada vista en un tipo de caso cuando el caso se muestra en un dispositivo móvil."
      },
      {
        "id": "d",
        "text": "Diseñe cómo se representan los elementos de Ul en diferentes dispositivos móviles."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #20."
  },
  {
    "id": "pdf-017",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "En una aplicación minorista en línea, lavista Recibodepedido muestra una listadel pedido de productos, incluida la imagen del producto, el costo unitario y lacantidad. El costototal del pedido se muestra en la parte inferior de la vista. ¿Qué dos configuraciones en la vista Recibo deben estar juntas para mostrar la información requerida como se describe? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Agregue un diseño dinámico repetitivo con diseños dinámicos incrustados."
      },
      {
        "id": "b",
        "text": "Agregue el costo total dentro del diseño dinámico repetitivo."
      },
      {
        "id": "c",
        "text": "Agregue un diseño dinámico con diseños dinámicos repetitivos incrustados"
      },
      {
        "id": "d",
        "text": "Agregue el total fuera del diseño dinámico repetitivo."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #23."
  },
  {
    "id": "pdf-018",
    "type": "single",
    "topic": "Aplicación / Rulesets",
    "text": "¿Qué opción sigue las mejores prácticas para nombrar un conjunto de reglas en Pega?",
    "options": [
      {
        "id": "a",
        "text": "Pega-prod:01-04-01"
      },
      {
        "id": "b",
        "text": "Departamento de Recursos Humanos de la Gran Corporación:01-01-03"
      },
      {
        "id": "c",
        "text": "Verificación de crédito:03-01-02"
      },
      {
        "id": "d",
        "text": "Gasto: 01-02-05 (Expense) Ref: Rulesets | Pega Academy"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #24."
  },
  {
    "id": "pdf-019",
    "type": "single",
    "topic": "General",
    "text": "¿Qué requisito se cumple configurando un valor de campo (Field Value)?",
    "options": [
      {
        "id": "a",
        "text": "Los agentes de servicio pueden ingresar comentarios en varios idiomas."
      },
      {
        "id": "b",
        "text": "Una aplicación de una cadena hotelera global puede mostrar las comodidades actuales en 23 idiomas."
      },
      {
        "id": "c",
        "text": "Los clientes pueden agregar una cantidad ilimitada de artículos a una tarjeta de compras en línea."
      },
      {
        "id": "d",
        "text": "Un funcionario del gobierno puede ingresar comentarios que requieran ubicación."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #25."
  },
  {
    "id": "pdf-020",
    "type": "single",
    "topic": "General",
    "text": "Para procesar un paquete de jubilación de un empleado, el sistema requiere la aprobación del gerente, supervisor y el... ¿Cómo implementa los requisitos para que cada aprobador pueda trabajar de forma independiente?",
    "options": [
      {
        "id": "a",
        "text": "Cree un paso de aprobación con aprobación en cascada."
      },
      {
        "id": "b",
        "text": "Cree una lógica empresarial para enrutar la asignación a los diferentes aprobadores."
      },
      {
        "id": "c",
        "text": "Crear tres procesos paralelos con pasos de aprobación."
      },
      {
        "id": "d",
        "text": "Dirija la asignación a una cola de trabajo a la que tengan acceso los tres roles."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #26."
  },
  {
    "id": "pdf-021",
    "type": "single",
    "topic": "General",
    "text": "En una solicitud de contratación: * Un empleado entrevista al candidato. * El equipo de Recursos Humanos (HR) crea y envía la carta del oficial. * El equipo de tecnología de la información (TI) asigna la estación de trabajo. * El equipo de instalaciones asigna la mesa de trabajo. Para cumplir con estos requisitos, ¿qué personaje creas?",
    "options": [
      {
        "id": "a",
        "text": "Empleado, TI, Instalaciones"
      },
      {
        "id": "b",
        "text": "RR.HH., TI, Instalaciones"
      },
      {
        "id": "c",
        "text": "Empleado, RR.HH., Instalaciones"
      },
      {
        "id": "d",
        "text": "Empleado, RR.HH., Instalaciones de TI"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #27."
  },
  {
    "id": "pdf-022",
    "type": "single",
    "topic": "General",
    "text": "¿Qué requisito demuestra la necesidad de configurar la correspondencia/email?",
    "options": [
      {
        "id": "a",
        "text": "Llamar por teléfono a un cliente para obtener información adicional sobre el caso"
      },
      {
        "id": "b",
        "text": "El asistente social recibe una notificación push móvil para aprobar un reclamo de seguro"
      },
      {
        "id": "c",
        "text": "Asignar un nuevo reclamo de seguro a un asistente social para que lo procese"
      },
      {
        "id": "d",
        "text": "Enviar un correo electrónico al asistente social cuando el reclamo de seguro se enruta a su lista de trabajo"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #28."
  },
  {
    "id": "pdf-023",
    "type": "single",
    "topic": "General",
    "text": "Durante una sesión de reproducción, una parte interesada nota que falta una de las opciones requeridas en una lista desplegable. ¿Qué elemento de trabajo crea en Agile Workbench para solucionar este problema?",
    "options": [
      {
        "id": "a",
        "text": "Bug"
      },
      {
        "id": "b",
        "text": "Feedback"
      },
      {
        "id": "c",
        "text": "user story"
      },
      {
        "id": "d",
        "text": "status"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #29."
  },
  {
    "id": "pdf-024",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "¿Qué afirmación describe con mayor precisión el uso de la vista previa móvil de pega?",
    "options": [
      {
        "id": "a",
        "text": "La vista previa móvil de pega simula la interfaz de usuario de la aplicación para varios dispositivos móviles"
      },
      {
        "id": "b",
        "text": "La vista previa móvil de pega le permite ejecutar una aplicación pega en un dispositivo móvil"
      },
      {
        "id": "c",
        "text": "La vista previa móvil de pega simula cargas de usuario para probar el rendimiento de la aplicación móvil"
      },
      {
        "id": "d",
        "text": "La vista previa móvil de pega modela la interacción típica del usuario para probar una aplicación móvil"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #30."
  },
  {
    "id": "pdf-025",
    "type": "multiple",
    "topic": "General",
    "text": "Un requisito establece: Los solicitantes de préstamos deben ingresar su salario anual. Si el salario está por encima del umbral de calificación, la solicitud se aprueba automáticamente. Si el salario está por debajo del umbral, el solicitante debe identificar un codeudor. Seleccione las dos opciones de configuración que siguen las mejores prácticas para cumplir con el requisito. (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Diseñe una vista de usuario con un campo de salario anual y una relación de datos para la información del consignatario. Utilice una condición de visibilidad para mostrar la información del consignatario cuando el salario esté por debajo del umbral."
      },
      {
        "id": "b",
        "text": "Utilice un paso de recopilación de información con un campo de salario anual. Utilice una forma de decisión para determinar si avanzar a un paso para ingresar la información del consignatario o completar el proceso."
      },
      {
        "id": "c",
        "text": "Diseñe una vista de usuario con un campo de salario anual. Cree una acción opcional para recopilar información sobre el consignatario y asigne la acción a la etapa adecuada."
      },
      {
        "id": "d",
        "text": "Crear un paso de asignación para que un oficial de préstamos revise el salario anual del solicitante y determine si es necesario un consignatario."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #31."
  },
  {
    "id": "pdf-026",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso de ticket de la mesa de ayuda se define de la siguiente manera: Si el paso del ticket Procesar está configurado para establecer el estado en Pendiente de clasificación, ¿cuándo se establece el estado del caso en Pendiente de clasificación?",
    "options": [
      {
        "id": "a",
        "text": "Cuando comienza la etapa de clasificación"
      },
      {
        "id": "b",
        "text": "Cuando se completa el paso Procesar ticket"
      },
      {
        "id": "c",
        "text": "Cuando se completa el paso Ingresar detalles del ticket"
      },
      {
        "id": "d",
        "text": "Cuando comienza el paso Procesar ticket"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #32."
  },
  {
    "id": "pdf-027",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso para solicitudes de voice-over incluye dos tareas: Editar guión y Grabar guión. Se le ha pedido a su equipo que enrute las tareas de Editar guión a los editores y las tareas de Grabar guión a los actores. ¿Qué enfoque cumple con este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Cree dos nuevas colas de trabajo, una para editores y otra para actores."
      },
      {
        "id": "b",
        "text": "Cree una nueva cola de trabajo y divida las tareas por tipo."
      },
      {
        "id": "c",
        "text": "Cree un grupo de trabajo para ambas personas y diríjase al grupo de trabajo."
      },
      {
        "id": "d",
        "text": "Cree dos nuevos grupos de trabajo en Dev Studio que hagan referencia a una cola de trabajo."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #33."
  },
  {
    "id": "pdf-028",
    "type": "single",
    "topic": "General",
    "text": "Una compañía de seguros de vida tiene oficinas satélite en varios países. Cada oficina satélite tiene una cola de trabajo. La política de la compañía requiere que la suscripción del seguro de vida se asigne a las oficinas en función de la dirección residencial del propietario de la póliza. ¿Qué enfoque de enrutamiento admite este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Dirija la asignación a la cola de trabajo correcta mediante una matriz de autoridad."
      },
      {
        "id": "b",
        "text": "Dirija la asignación a la cola de trabajo correcta en función de la lógica empresarial."
      },
      {
        "id": "c",
        "text": "Dirigir la asignación a un suscriptor específico en función de la lógica empresarial."
      },
      {
        "id": "d",
        "text": "Dirija la asignación a la cola de trabajo correcta mediante una estructura de informes."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #34."
  },
  {
    "id": "pdf-029",
    "type": "single",
    "topic": "General",
    "text": "Se envía una encuesta a un cliente por correo electrónico. ¿Cómo configurar una solución para asegurarse de que el correo electrónico incluya el ID de caso para la encuesta?",
    "options": [
      {
        "id": "a",
        "text": "Cree un campo obligatorio para el ID de caso que debe ingresar un usuario durante el proceso del caso antes de enviar la encuesta."
      },
      {
        "id": "b",
        "text": "Llame a una transformación de datos para copiar el ID de caso de pyWorkPage al correo electrónico."
      },
      {
        "id": "c",
        "text": "Cree un proceso mediante el paso Enviar correo electrónico que permita a los representantes agregar rápidamente la identificación del caso al Email."
      },
      {
        "id": "d",
        "text": "Utilice la función Insertar propiedad de un paso Enviar correo electrónico para agregar el ID del caso al redactar el cuadro de diálogo del mensaje."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #35."
  },
  {
    "id": "pdf-030",
    "type": "multiple",
    "topic": "Reglas de decisión",
    "text": "Una empresa de mudanzas proporciona a los clientes una herramienta que recomienda un vehículo de mudanza según la cantidad de dormitorios en su espacio vital actual y si planean mover muebles pesados como armazones de cama, colchones o sofás. Con base en las entradas de los clientes, una tabla de decisiones presenta las cliente con una recomendación. ¿Qué dos configuraciones usa juntas para construir la tabla de decisiones? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Cree una columna para el vehículo en movimiento recomendado."
      },
      {
        "id": "b",
        "text": "Cree filas para el vehículo en movimiento recomendado."
      },
      {
        "id": "c",
        "text": "Cree dos filas, una para la cantidad de dormitorios y otra para si el cliente está moviendo muebles pesados."
      },
      {
        "id": "d",
        "text": "Cree dos columnas, una para la cantidad de dormitorios y otra para si el cliente está moviendo muebles pesados. `"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #36."
  },
  {
    "id": "pdf-031",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo se guía a los usuarios a través de un formulario de solicitud sin requerir capacitación para el usuario?",
    "options": [
      {
        "id": "a",
        "text": "Agregue el paso correspondiente a una etapa apropiada."
      },
      {
        "id": "b",
        "text": "Enviar una notificación al usuario asignado."
      },
      {
        "id": "c",
        "text": "Agregar una instrucción a la tarea."
      },
      {
        "id": "d",
        "text": "Agregar una acción opcional al caso para explicar la tarea."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #37."
  },
  {
    "id": "pdf-032",
    "type": "single",
    "topic": "General",
    "text": "Un proveedor de Internet tiene un cuestionario que brinda a los clientes una velocidad de Internet recomendada en función de su uso típico de Internet. Las preguntas difieren según las selecciones que haga el cliente, por ejemplo, si está buscando una recomendación para una residencia o un negocio. Una vez que el cliente completa el cuestionario, ¿cómo determina la velocidad de Internet recomendada?",
    "options": [
      {
        "id": "a",
        "text": "Configurar una tabla de decisiones"
      },
      {
        "id": "b",
        "text": "Configurar una vista con las preguntas del cuestionario"
      },
      {
        "id": "c",
        "text": "Configurar un árbol de decisiones."
      },
      {
        "id": "d",
        "text": "Configurar un proceso con múltiples formas de decisión"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #38."
  },
  {
    "id": "pdf-033",
    "type": "single",
    "topic": "Case Management",
    "text": "Está diseñando un tipo de caso de reclamo médico y tiene el siguiente requisito: Los reclamos médicos deben resolverse dentro de los 5 días. Para cumplir con este requisito, debe establecer el___________ en el nivel de servicio en 5 días.",
    "options": [
      {
        "id": "a",
        "text": "passed deadline"
      },
      {
        "id": "b",
        "text": "urgency"
      },
      {
        "id": "c",
        "text": "deadline"
      },
      {
        "id": "d",
        "text": "goal Answer: C 40.Al solicitar un aumento de límite de crédito, los clientes con tarjetas de crédito estándar deben proporcionar información en un proceso de Información Laboral. Las solicitudes de clientes con tarjetas de crédito Platinum saltan automáticamente este proceso. ¿Qué tarea realiza para implementar este requisito?"
      },
      {
        "id": "a",
        "text": "Agregue un paso Aprobar/Rechazar para probar el tipo de tarjeta."
      },
      {
        "id": "b",
        "text": "Agregue un campo de tipo de tarjeta verdadero/falso a una vista de usuario."
      },
      {
        "id": "c",
        "text": "Agregue una condición personalizada para iniciar el proceso probando el tipo de tarjeta."
      },
      {
        "id": "d",
        "text": "Agregar una condición de validación al tipo de tarjeta para continuar con el procesamiento."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #39."
  },
  {
    "id": "pdf-034",
    "type": "single",
    "topic": "Case Management",
    "text": "Está desarrollando un tipo de caso para procesar solicitudes de visa. Como parte del proceso, los solicitantes deben programar una entrevista con el consulado. Se crea un caso de entrevista infantil para el proceso de entrevista y evaluación. Después de la entrevista, el consulado suele tardar 48 horas en tomar una decisión. Para que el caso de la visa proceda a la notificación del solicitante, se debe resolver el caso de la entrevista. ¿Cómo se configura un tipo de caso para lograr el comportamiento requerido?",
    "options": [
      {
        "id": "a",
        "text": "Agregue un paso Crear caso que cree el caso secundario Entrevista. Después de este paso, agregue un paso de Espera que pause el caso principal hasta que el caso de Entrevista alcance el estado de Resuelto y después de que hayan transcurrido 48 horas."
      },
      {
        "id": "b",
        "text": "Agregue un paso Crear caso que crea el caso secundario/hijo Entrevista. Después de este paso, agregue un paso de espera que detenga el caso principal hasta que hayan transcurrido 48 horas."
      },
      {
        "id": "c",
        "text": "Agregue un paso Crear caso que crea el caso secundario Entrevista. Después de este paso, agregue un paso de Espera que pause el caso principal hasta que el caso de Entrevista alcance el estado de Resuelto."
      },
      {
        "id": "d",
        "text": "Agregar un paso Crear caso que crea el caso secundario Entrevista. No es necesario agregar un paso de espera."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #41."
  },
  {
    "id": "pdf-035",
    "type": "multiple",
    "topic": "Reglas de decisión",
    "text": "¿En qué dos situaciones es apropiado usar una tabla de decisiones? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Una empresa de cuidado del cabello sugiere una línea de productos a los clientes según su tipo de cabello, la humedad del cuero cabelludo, la humedad del cabello y si está teñido."
      },
      {
        "id": "b",
        "text": "Si los clientes deciden agregar seguro, equipaje facturado o embarque anticipado a sus boletos de avión, se agregan tarifas adicionales al total de su pedido."
      },
      {
        "id": "c",
        "text": "Un gimnasio recomienda un tipo de membresía según la cantidad y el tipo de clases de acondicionamiento físico al que el cliente desea asistir cada mes."
      },
      {
        "id": "d",
        "text": "El total del pedido se calcula en función de la cantidad y el precio de los artículos en el carrito de compras del cliente."
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #42."
  },
  {
    "id": "pdf-036",
    "type": "multiple",
    "topic": "General",
    "text": "Los inquilinos de apartamentos envían solicitudes de mantenimiento que especifican su nombre, dirección, tipo de solicitud y descripción de la solicitud. Los inquilinos pueden enviar múltiples solicitudes de mantenimiento para diferentes tipos de solicitudes. La empresa quiere identificar solicitudes de mantenimiento duplicadas de la misma dirección. ¿Qué dos configuraciones, cuando se usan juntas en el paso Buscar casos duplicados, logran este objetivo? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Configure el tipo de solicitud como una condición ponderada."
      },
      {
        "id": "b",
        "text": "Configurar el nombre del arrendatario como condición básica."
      },
      {
        "id": "c",
        "text": "Configurar la dirección del apartamento como condición básica."
      },
      {
        "id": "d",
        "text": "Configure la dirección del apartamento como una condiciòn ponderada."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #43."
  },
  {
    "id": "pdf-037",
    "type": "single",
    "topic": "General",
    "text": "Los gerentes de ventas deben poder aprobar propuestas de cotizaciones de ventas por correo electrónico y desde un dispositivo móvil. ¿Cómo se implementa este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Agregue un paso Aprobar/Rechazar y habilite la aprobación por correo electrónico y dispositivo móvil. (No es necesario dividir en pasos)"
      },
      {
        "id": "b",
        "text": "Agregue un paso Aprobar/Rechazar y un paso Enviar correo electrónico."
      },
      {
        "id": "c",
        "text": "Agregue un paso Aprobar/Rechazar con la aprobación móvil habilitada y un paso Enviar correo electrónico."
      },
      {
        "id": "d",
        "text": "Agregue un paso Aprobar/Rechazar y habilite las notificaciones por correo electrónico en el tipo de caso."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #44."
  },
  {
    "id": "pdf-038",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "¿Qué Studio utiliza para configurar un acuerdo de nivel de servicio (SLA) con un plazo vencido(passed deadline)?",
    "options": [
      {
        "id": "a",
        "text": "Admin Studio"
      },
      {
        "id": "b",
        "text": "Prediction Studio"
      },
      {
        "id": "c",
        "text": "Dev Studio"
      },
      {
        "id": "d",
        "text": "App Studio"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #45."
  },
  {
    "id": "pdf-039",
    "type": "single",
    "topic": "General",
    "text": "Una autorización de viaje requiere la aprobación del gerente del solicitante, el vicepresidente de división y posiblemente un contable sobre la base del importe total. ¿Qué configuración satisface este caso de uso?",
    "options": [
      {
        "id": "a",
        "text": "Aprobación en cascada usando reglas de cuándo para identificar al usuario asignado"
      },
      {
        "id": "b",
        "text": "Aprobación en cascada usando el administrador de informes (reporting manager)"
      },
      {
        "id": "c",
        "text": "Aprobación en cascada usando una matriz de autoridad."
      },
      {
        "id": "d",
        "text": "Aprobación en cascada usando el administrador de grupos de trabajo"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #46."
  },
  {
    "id": "pdf-040",
    "type": "multiple",
    "topic": "General",
    "text": "¿Quédosafirmaciones son verdaderas acerca de las intuiciones(insights / Reportes)? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Insightstransforma las consultas de datos en visualizaciones compartibles."
      },
      {
        "id": "b",
        "text": "Lavisibilidad siempre se comparte(Shared) en los gráficos de información."
      },
      {
        "id": "c",
        "text": "Puedeeditar los datos de la aplicación directamente en una perspectiva (insight)."
      },
      {
        "id": "d",
        "text": "Solopuede usar campos preconfigurados en una perspectiva(insight)."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #47."
  },
  {
    "id": "pdf-041",
    "type": "multiple",
    "topic": "General",
    "text": "Una aplicación debe validar los códigos postales de los clientes canadienses para que coincidan con el patrón A1A1A1, donde A representa una letra y 1 representa un número. ¿Qué dos configuraciones distintas aseguran que un usuario proporcione un código postal válido? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Configure un control desplegable para seleccionar el código postal según la ciudad y la provincia especificadas."
      },
      {
        "id": "b",
        "text": "Configure el campo de código postal como una propiedad de texto con un campo de entrada obligatorio."
      },
      {
        "id": "c",
        "text": "Configure una regla de validación para probar que el código postal ingresado se ajusta al patrón requerido."
      },
      {
        "id": "d",
        "text": "Configure una regla de validación de edición para probar que el código postal ingresado se ajusta al patrón requerido."
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #48."
  },
  {
    "id": "pdf-042",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos requisitos de datos garantizan datos válidos? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Los datos se ajustan a la lógica empresarial."
      },
      {
        "id": "b",
        "text": "Los datos están organizados en un tipo de datos."
      },
      {
        "id": "c",
        "text": "Los datos se obtienen localmente."
      },
      {
        "id": "d",
        "text": "Los datos son del tipo correcto."
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #53."
  },
  {
    "id": "pdf-043",
    "type": "single",
    "topic": "Datos",
    "text": "¿Qué problema abordar al simular una fuente de datos? otra traducción de esta pregunta: ¿Qué problema soluciona simulando una fuente de datos?",
    "options": [
      {
        "id": "a",
        "text": "La base de datos del producto se mueve a una nueva fuente de datos accesible por un servicio web que aún no está configurado."
      },
      {
        "id": "b",
        "text": "Debe probar un plan de guardado para una página de datos guardables que actualice el costo de las opciones de cobertura para las pólizas de seguro."
      },
      {
        "id": "c",
        "text": "En producción, la base de datos de clientes debe estar fuera de línea durante la noche para el mantenimiento programado."
      },
      {
        "id": "d",
        "text": "Un campo de datos incrustados necesita datos simulados para probar una vista de creación de clientes."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #54."
  },
  {
    "id": "pdf-044",
    "type": "single",
    "topic": "Case Management",
    "text": "En un tipo de caso Pago con tarjeta de crédito, desea establecer el monto del pago en el monto mínimo adeudado cuando un usuario crea un caso. ¿Cómo se establece el monto del pago?",
    "options": [
      {
        "id": "a",
        "text": "Configure la transformación de datos pySetFieldDefaults para establecer el valor predeterminado."
      },
      {
        "id": "b",
        "text": "Configurar una validación de campo sobre el monto del pago."
      },
      {
        "id": "c",
        "text": "Configure el campo de monto del pago para hacer referencia al monto mínimo adeudado."
      },
      {
        "id": "d",
        "text": "Configure el monto del pago como un campo calculado."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #57."
  },
  {
    "id": "pdf-045",
    "type": "multiple",
    "topic": "Datos",
    "text": "¿Qué dos elementos debe proporcionar el usuario para agregar una fuente de datos externa a un objeto de datos?",
    "options": [
      {
        "id": "a",
        "text": "La información de autenticación, si lo requiere el servicio correspondiente"
      },
      {
        "id": "b",
        "text": "Una transformación de datos para asignar el modelo de datos de la aplicación al conector"
      },
      {
        "id": "c",
        "text": "Una fuente de datos simulada para probar la implementación"
      },
      {
        "id": "d",
        "text": "El identificador uniforme de recursos que identifica el servicio web (EndPoint URL)"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #58."
  },
  {
    "id": "pdf-046",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "Para reducir el desplazamiento(Scroll) en una vista, desea organizar el contenido existente para que los detalles se muestran cuando se selecciona una opción en un menú desplegable. No hay ningún menú desplegable actualmente en la vista. ¿Qué dos configuraciones logran el requisito empresarial? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Configure un grupo de diseño para separar cada opción en paneles individuales y establezca el diseño en un formato de menú."
      },
      {
        "id": "b",
        "text": "Configure una condición de desactivación (cuando la regla) en cada campo para permitir el acceso cuando se selecciona la opción asociada en el control desplegable."
      },
      {
        "id": "c",
        "text": "Configure un diseño dinámico repetitivo con una sección incrustada para cada opción y establezca el formato de diseño en agrupado."
      },
      {
        "id": "d",
        "text": "Configure una relación de datos para seleccionar la opción mediante la selección de registros de la lista desplegable."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #59."
  },
  {
    "id": "pdf-047",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo habilita la auditoría a nivel de campo para las propiedades?",
    "options": [
      {
        "id": "a",
        "text": "Agregue una acción opcional de auditoría al flujo de trabajo del caso."
      },
      {
        "id": "b",
        "text": "Habilite la función de auditoría en los formularios de reglas de propiedad."
      },
      {
        "id": "c",
        "text": "Habilite la auditoría a nivel de campo para el tipo de caso."
      },
      {
        "id": "d",
        "text": "Agregar una validación de campo al flujo de trabajo del caso."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #62."
  },
  {
    "id": "pdf-048",
    "type": "multiple",
    "topic": "General",
    "text": "Según los factores de seguridad, ¿cuáles dos opciones se consideran contraseñas seguras? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "lLik3Chocolate&sawDustIcecre@m"
      },
      {
        "id": "b",
        "text": "d8073&gxn*,.ki;vnhdf($h&m"
      },
      {
        "id": "c",
        "text": "bluedoor"
      },
      {
        "id": "d",
        "text": "Pe6@5yst3m$"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #63."
  },
  {
    "id": "pdf-049",
    "type": "multiple",
    "topic": "Case Management",
    "text": "Un arquitecto empresarial ha desarrollado un nuevo proceso para un tipo de caso. Para verificar que los elementos de la interfaz de usuario recopilan los resultados esperados, desea probar el proceso y los campos. ¿Qué dos configuraciones, cuando se usan juntas, le permiten registrar un conjunto de interacciones y guardar los resultados de la prueba para verificar la funcionalidad del proceso? (Escoge dos) (Pregunta repetida #14)",
    "options": [
      {
        "id": "a",
        "text": "Agregue afirmaciones explícitas en los elementos de la interfaz de usuario"
      },
      {
        "id": "b",
        "text": "Agregar validaciones en los elementos de la interfaz de usuario"
      },
      {
        "id": "c",
        "text": "Crear una prueba unitaria para el tipo de caso"
      },
      {
        "id": "d",
        "text": "Crear una prueba de escenario para el tipo de caso"
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #64."
  },
  {
    "id": "pdf-050",
    "type": "multiple",
    "topic": "Testing",
    "text": "¿Qué dos pasos de configuración se deben realizar juntos para registrar una prueba unitaria para pruebas automatizadas? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Agregueun caso de prueba a la página de destino de Pruebas automatizadas."
      },
      {
        "id": "b",
        "text": "Seleccione un conjunto de reglas que esté configurado para almacenar los resultados de la prueba."
      },
      {
        "id": "c",
        "text": "Seleccione un conjunto de reglas que esté configurado para almacenar casos de prueba automatizados."
      },
      {
        "id": "d",
        "text": "Agregaruna afirmación para definir un resultado esperado."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #65."
  },
  {
    "id": "pdf-051",
    "type": "multiple",
    "topic": "Testing",
    "text": "¿Qué dos condiciones prueba con una prueba unitaria? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Una página de datos se completa sin ningún error."
      },
      {
        "id": "b",
        "text": "Una transformación de datos establece correctamente un valor de propiedad."
      },
      {
        "id": "c",
        "text": "Una aplicación muestra vistas de usuario para 20 usuarios en tres segundos."
      },
      {
        "id": "d",
        "text": "Una aplicación se migró con éxito a un sistema de prueba."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #66."
  },
  {
    "id": "pdf-052",
    "type": "multiple",
    "topic": "General",
    "text": "ABC BankCorp opera dos filiales, GloboBank y LocalBank, con marcas diferentes. ABC BankCorp quiere crear una experiencia de aplicación móvil tanto para los usuarios como para los representantes de servicio al cliente (CSR) para su aplicación Transaction Dispute. De los siguientes requisitos, ¿cuáles dos opciones afectan la cantidad de canales de aplicaciones móviles que necesita configurar? (Escoge dos) (Similar #19)",
    "options": [
      {
        "id": "a",
        "text": "Las aplicaciones móviles deben ser compatibles con teléfonos y tabletas."
      },
      {
        "id": "b",
        "text": "Los clientes solo pueden crear casos de disputa, mientras que los CSR también pueden crear casos de informe de fraude."
      },
      {
        "id": "c",
        "text": "La paleta de colores de la aplicación móvil se personaliza para cada subsidiaria."
      },
      {
        "id": "d",
        "text": "La aplicación personaliza las unidades monetarias y el formato de fecha/hora según la configuración regional del usuario."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #67."
  },
  {
    "id": "pdf-053",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "¿Quédos casos de uso se admiten al configurar un canal móvil en App Studio? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Otorgaracceso a la aplicación a un usuario específico."
      },
      {
        "id": "b",
        "text": "Establezca el ancho del icono de una aplicación en 180x180 píxeles."
      },
      {
        "id": "c",
        "text": "Configure un comportamiento de deslizamiento hacia la izquierda para abrir un mensaje"
      },
      {
        "id": "d",
        "text": "Bloquear la aplicación después de 20 minutos de inactividad."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #68."
  },
  {
    "id": "pdf-054",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Todos los gerentes deben poder ver el informe de solicitudes de vacaciones de los empleados en su portal de Gerente tableros de instrumentos. portal dashboards. ¿Qué configuración cumple este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Cree una nueva página de destino en el portal con el nuevo informe guardado en una categoría pública."
      },
      {
        "id": "b",
        "text": "Agregue un widget de informe al tablero del portal y luego haga clic en Publicar como predeterminado."
      },
      {
        "id": "c",
        "text": "Agregue un widget de informe al tablero del portal y luego haga clic en Publicar."
      },
      {
        "id": "d",
        "text": "Agregue el informe a una categoría pública y, a continuación, agregue la página de inicio de informes listos para usar en el portal."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #69."
  },
  {
    "id": "pdf-055",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Debe probar si una interfaz de usuario es adecuada para usuarios con discapacidades visuales, como Deuteranopia (confusión rojo verde). ¿Cómo llevas a cabo esta tarea?",
    "options": [
      {
        "id": "a",
        "text": "Utilice el Inspector de accesibilidad."
      },
      {
        "id": "b",
        "text": "Use una extensión de lector de pantalla."
      },
      {
        "id": "c",
        "text": "Habilite la herramienta Live UI."
      },
      {
        "id": "d",
        "text": "Reglas de la sección de prueba unitaria."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #70."
  },
  {
    "id": "pdf-056",
    "type": "single",
    "topic": "General",
    "text": "Estás diseñando un formulario para que una librería en línea muestre las novedades. ¿Qué diseño usas para mostrar las imágenes de la portada del libro, como se muestra en la imagen?",
    "options": [
      {
        "id": "a",
        "text": "Diseño de pantalla"
      },
      {
        "id": "b",
        "text": "Diseño de columna"
      },
      {
        "id": "c",
        "text": "Diseño dinámico repetitivo"
      },
      {
        "id": "d",
        "text": "Diseño dinámico"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #71."
  },
  {
    "id": "pdf-057",
    "type": "single",
    "topic": "General",
    "text": "Debe localizar la correspondencia en un idioma que no esté disponible en el paquete de idiomas de Pega. ¿Qué opción satisface el requisito?",
    "options": [
      {
        "id": "a",
        "text": "Aproveche las llamadas SOAP de los servicios de traducción y habilite los registros para la traducción."
      },
      {
        "id": "b",
        "text": "Configure un registro de valor de campo que contenga el texto de correspondencia."
      },
      {
        "id": "c",
        "text": "Cree la regla de traducción manualmente e incluya la regla en el conjunto de reglas de la aplicación."
      },
      {
        "id": "d",
        "text": "Ejecute el asistente de localización y agregue traducciones a Translation.html."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #72."
  },
  {
    "id": "pdf-058",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos tipos de control le permiten mostrar tres ofertas de transferencia de saldo en un formulario con un solo control, para evitar que el cliente seleccione más de una oferta? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Un botón"
      },
      {
        "id": "b",
        "text": "B. Botones de opción - Radio button"
      },
      {
        "id": "c",
        "text": "C. Casilla de verificación (Checkbox)"
      },
      {
        "id": "d",
        "text": "D. Lista (o menú) desplegable - Drop-down list"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #73."
  },
  {
    "id": "pdf-059",
    "type": "single",
    "topic": "General",
    "text": "Los usuarios deben proporcionar valores a ciertos campos antes de enviar un formulario de solicitud de empleo. ¿Qué configuración agrega asteriscos para indicar los campos obligatorios en el formulario?",
    "options": [
      {
        "id": "a",
        "text": "Use una regla de edición y validación para verificar si cada una de las propiedades obligatorias tiene un valor."
      },
      {
        "id": "b",
        "text": "Configure los campos obligatorios como Siempre requeridos en el formulario en tiempo de ejecución."
      },
      {
        "id": "c",
        "text": "Use una regla de validación para verificar que los campos obligatorios tengan un valor."
      },
      {
        "id": "d",
        "text": "Configure una condición de Deshabilitar cuando en los campos obligatorios en tiempo de ejecución."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #74."
  },
  {
    "id": "pdf-060",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "Un formulario de pedido ofrece cuatro opciones de las cuales los clientes seleccionan una opción. De acuerdo con las mejores prácticas, ¿cuál de los siguientes dos tipos de control de IU se puede usar para minimizar el desorden en el formulario de pedido? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Menú desplegable"
      },
      {
        "id": "b",
        "text": "Casilla de verificación"
      },
      {
        "id": "c",
        "text": "Botones de opción-Radio buttons"
      },
      {
        "id": "d",
        "text": "Autocompletar"
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #75."
  },
  {
    "id": "pdf-061",
    "type": "single",
    "topic": "General",
    "text": "Un proceso de reserva permite a los clientes reservar un vuelo, una habitación de hotel y un automóvil de alquiler como parte de un itinerario de viaje. ¿Qué configuración muestra una casilla de verificación(Checkbox), Seleccionar seguro de vuelo, solo cuando el itinerario incluye un vuelo?",
    "options": [
      {
        "id": "a",
        "text": "Una condición de desactivación (when rule) que se aplica a la sección con la información del seguro de vuelo."
      },
      {
        "id": "b",
        "text": "Una condición requerida (when rule) que se aplica a la casilla de verificación Seleccionar seguro de vuelo."
      },
      {
        "id": "c",
        "text": "Una condición de visibilidad(se pueden aplicar a todos los controles) (when rule) que se aplica a la casilla de verificación Seleccionar seguro de vuelo."
      },
      {
        "id": "d",
        "text": "Una condición de desactivación (when rule) que se aplica a la casilla de verificación Seleccionar seguro de vuelo."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #76."
  },
  {
    "id": "pdf-062",
    "type": "single",
    "topic": "General",
    "text": "Durante una sesión de reproducción, una parte interesada nota que falta una de las opciones requeridas en una lista desplegable. ¿Qué elemento de trabajo crea en Agile Workbench para solucionar este problema? (Pregunta repetida #29)",
    "options": [
      {
        "id": "a",
        "text": "Historia de usuario"
      },
      {
        "id": "b",
        "text": "Error C Comentarios"
      },
      {
        "id": "d",
        "text": "Estado"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #77."
  },
  {
    "id": "pdf-063",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos componentes del diseñador de casos pueden asignar los usuarios a una versión mínima de producto adorable (MLP) para determinar el tamaño del proyecto? (Escoge dos) (Pregunta repetida #15)",
    "options": [
      {
        "id": "a",
        "text": "Una automatización"
      },
      {
        "id": "b",
        "text": "Un portal de usuario móvil"
      },
      {
        "id": "c",
        "text": "Una decisión de aprobación"
      },
      {
        "id": "d",
        "text": "Un sistema externo de registro (SOR)"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #78."
  },
  {
    "id": "pdf-064",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué tres opciones puede configurar para un canal de aplicación móvil? (Elige tres) (Pregunta repetida #20, solo tiene la respuesta C)",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el host de una aplicación móvil a un sistema de producción, en lugar de un sistema de desarrollo."
      },
      {
        "id": "b",
        "text": "Identificar cómo los diferentes dispositivos móviles representan los controles de la interfaz de usuario."
      },
      {
        "id": "c",
        "text": "Establecer un comportamiento de seguridad para una aplicación móvil, como el uso de identificadores biométricos."
      },
      {
        "id": "d",
        "text": "Definir el comportamiento de la interfaz de usuario para una vista cuando se muestra en un dispositivo móvil."
      },
      {
        "id": "e",
        "text": "Defina el rol que se aplica a los usuarios cuando ejecutan la aplicación móvil."
      }
    ],
    "correctOptionIds": [
      "a",
      "c",
      "e"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #81."
  },
  {
    "id": "pdf-065",
    "type": "single",
    "topic": "General",
    "text": "Antes del desarrollo, su equipo crea una hoja de cálculo con elementos de trabajo para completar el trabajo pendiente. Todos los elementos de trabajo que describen los requisitos comerciales se priorizan como Debe tener. También crea elementos de trabajo para abordar: ÿ Una solicitud de mejora futura para agrupar un conjunto de pasos existentes en un formulario de varios pasos ÿ Una lista desplegable a la que le falta una de las opciones obligatorias: este elemento de trabajo está en curso porque la opción que falta impide que se realice el trabajo ¿Cómo se rellena? el backlog directamente desde la hoja de cálculo? (Pregunta repetida #80)",
    "options": [
      {
        "id": "a",
        "text": "Crear errores"
      },
      {
        "id": "b",
        "text": "Crear comentarios"
      },
      {
        "id": "c",
        "text": "Importar historias"
      },
      {
        "id": "d",
        "text": "Crear historias"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #82."
  },
  {
    "id": "pdf-066",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos afirmaciones son verdaderas sobre el tamaño mínimo del producto adorable(Minimum Level Product) (MLP) cuando se utiliza la herramienta Estimador? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Las complejidades de MPL configuradas en ''altas'' están reservadas para MLP 2 y versiones posteriores."
      },
      {
        "id": "b",
        "text": "El dimensionamiento de MLP conduce a la precisión en el ciclo de sprint y la planificación de recursos."
      },
      {
        "id": "c",
        "text": "La creación de pasos de casos se tiene en cuenta en el dimensionamiento de MLP."
      },
      {
        "id": "d",
        "text": "Las estimaciones iniciales son de alto nivel y se pueden refinar durante el dimensionamiento."
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #83."
  },
  {
    "id": "pdf-067",
    "type": "single",
    "topic": "General",
    "text": "¿Para qué caso de uso crea una nueva regla en una aplicación de Pega Platform™? (Pregunta repetida #7)",
    "options": [
      {
        "id": "a",
        "text": "Un desarrollador crea un proceso paralelo para auditar los cambios que realiza un agente de servicio."
      },
      {
        "id": "b",
        "text": "Un desarrollador realiza cambios una sección de IU cada vez que se necesita el mismos en un mensaje de correo electrónico configurado en el ciclo de vida del caso."
      },
      {
        "id": "c",
        "text": "Un diseñador reutiliza una sección de IU cada vez que se necesita el mismo comportamiento en la aplicación."
      },
      {
        "id": "d",
        "text": "Un usuario comercial emite una solicitud de cambio para que la aplicación establezca el valor predeterminado de un campo."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #85."
  },
  {
    "id": "pdf-068",
    "type": "single",
    "topic": "General",
    "text": "Para calificar para un préstamo instantáneo, el solicitante debe obtener un ingreso mensual de al menos GBP2000 y no puede exceder GBP20000 en deuda de tarjeta de crédito. ¿Cómo hace cumplir estas restricciones al solicitar un préstamo instantáneo?",
    "options": [
      {
        "id": "a",
        "text": "Utilice los controles de la interfaz de usuario para validar las entradas en los campos de ingresos y deuda de tarjeta de crédito."
      },
      {
        "id": "b",
        "text": "Utilice una regla de validación para llamar a dos reglas de validación de edición: una para los ingresos y otra para la deuda de la tarjeta de crédito."
      },
      {
        "id": "c",
        "text": "Usar una única regla Validate(validacion) con dos condiciones; uno para ingresos y otro para deudas de tarjetas de crédito."
      },
      {
        "id": "d",
        "text": "Usar dos reglas de edición de validación; uno para ingresos y otro para deudas de tarjetas de crédito."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #86."
  },
  {
    "id": "pdf-069",
    "type": "single",
    "topic": "Datos",
    "text": "Cuando un usuario selecciona un elemento de una lista, la aplicación muestra datos sobre ese elemento. Los datos se copian en una propiedad de página mediante las opciones Copiar desde una página de datos Copy from a data page. Después de que los datos se hayan copiado en la propiedad, ¿cuándo se volverán a copiar los datos en la propiedad?",
    "options": [
      {
        "id": "a",
        "text": "Nunca"
      },
      {
        "id": "b",
        "text": "La próxima vez que se abra el case"
      },
      {
        "id": "c",
        "text": "La próxima vez que se acceda a la propiedad"
      },
      {
        "id": "d",
        "text": "Cuando se cambie el artículo When the item is changed"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #87."
  },
  {
    "id": "pdf-070",
    "type": "single",
    "topic": "General",
    "text": "¿Cuál es la relación entre pyWorkPage y los datos del caso?",
    "options": [
      {
        "id": "a",
        "text": "pyWorkPage contiene solo los datos ingresados por los usuarios al crear y procesar un caso."
      },
      {
        "id": "b",
        "text": "pyWorkPage contiene todas las páginas de datos a las que se accede al crear y procesar un caso."
      },
      {
        "id": "c",
        "text": "pyWorkPage contiene solo los datos generados por el sistema al crear y procesar un caso."
      },
      {
        "id": "d",
        "text": "pyWorkPage contiene todos los datos de casos generados al crear y procesar un caso."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #88."
  },
  {
    "id": "pdf-071",
    "type": "single",
    "topic": "General",
    "text": "Una tienda minorista quiere una aplicación para procesar una nueva cuenta de fidelización de clientes. El cliente ingresa su información de contacto; incluyendo nombre, correo electrónico, número de teléfono y dirección. Esta información se muestra en una relación de datos. ¿Qué tipo de relación de datos crea?",
    "options": [
      {
        "id": "a",
        "text": "Un campo de referencia de datos"
      },
      {
        "id": "b",
        "text": "Un campo de datos incrustados Embedded data field"
      },
      {
        "id": "c",
        "text": "Un campo de referencia de caso"
      },
      {
        "id": "d",
        "text": "Un campo de consulta"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #89."
  },
  {
    "id": "pdf-072",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso de disputa de transacción permite a los clientes disputar una transacción de tarjeta bancaria por uno de tres razones: * Tarjeta robada * Cobro duplicado * Error de cumplimiento La mayoría de las disputas por las tarjetas robadas ocurren en dos proveedores. MegaMart y Maxvalu. El analista de fraudes solicita un informe que muestre disputas de tarjetas robadas que cumplan con los siguientes umbrales: FALTAN DATOS Dadas las siguientes condiciones de filtro, ¿qué declaración lógica devuelve la subred correcta de disputas de transacciones?",
    "options": [
      {
        "id": "a",
        "text": "F1 Y F2 Y F3 Y F4 Y F5"
      },
      {
        "id": "b",
        "text": "(F1 Y F3) O (F3 Y F4) O F5"
      },
      {
        "id": "c",
        "text": "((F1 Y F3) O (F2 Y F4)) Y F5"
      },
      {
        "id": "d",
        "text": "(F1 Y F3) O (F2 Y F4) O F5"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #90."
  },
  {
    "id": "pdf-073",
    "type": "single",
    "topic": "Reportes",
    "text": "Un informe de lista de solicitudes de compra incluye columnas para la identificación ID del caso y el centro de costos regional. Un gerente quiere informar para mostrar el total de solicitudes de compra para cada uno de los centros de costos regionales. ¿Cómo se configura la definición del informe?",
    "options": [
      {
        "id": "a",
        "text": "Cree un filtro para cada centro de costos y cuente los ID de casos."
      },
      {
        "id": "b",
        "text": "Resuma la columna de ID de caso por conteo."
      },
      {
        "id": "c",
        "text": "Resuma los centros de costos regionales por cuenta."
      },
      {
        "id": "d",
        "text": "Defina una función para la columna del centro de costos para totalizar los ID de casos."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #91."
  },
  {
    "id": "pdf-074",
    "type": "multiple",
    "topic": "Case Management",
    "text": "Un restaurante tiene un caso tipo que permite a los clientes reservar el comedor para eventos. Los clientes brindan información básica, incluido el tamaño de la fiesta, e indican si desean que el restaurante atienda el evento. -Si no se requiere catering, los clientes reciben una cotización de la tarifa de alquiler. -Si los clientes indican que quieren que el restaurante atienda el evento, deben proporcionar preferencia de menú y programar y citar para hacer pruebas de menú antes de que se les dé una cotización. ¿Qué dos opciones utiliza para configurar el tipo de caso para lograr el comportamiento solicitado? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Cree una casilla de verificación para que los clientes indiquen si desean que el restaurante atienda el evento. Agregue una forma de decisión que evalúe si el cliente marca la casilla."
      },
      {
        "id": "b",
        "text": "Cree una casilla de verificación para que los clientes indiquen si desean que el restaurante atienda el evento. Configure las preferencias del menú y los campos de fecha de cita con una condición de visibilidad."
      },
      {
        "id": "c",
        "text": "Crear un proceso para brindar preferencia de menú y programar la cita de degustación del menú. Cree un proceso paralelo para proporcionar al cliente la cotización de la tarifa de alquiler."
      },
      {
        "id": "d",
        "text": "Crear un proceso para que los clientes indiquen su preferencia de menú y programen la cita para degustar el menú. Agregue el proceso como una acción opcional para todo el caso."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #94."
  },
  {
    "id": "pdf-075",
    "type": "single",
    "topic": "General",
    "text": "funciona\". ''Configure el paso Buscar casos duplicados para identificar tickets de TI duplicados IT tickets for the same issue. ¿Cuál es la condición básica para el paso Buscar casos duplicados?",
    "options": [
      {
        "id": "a",
        "text": "El nombre del remitente es el mismo"
      },
      {
        "id": "b",
        "text": "El tipo de problema es el mismo Issue type is same"
      },
      {
        "id": "c",
        "text": "Departamento es el mismo"
      },
      {
        "id": "d",
        "text": "La ubicación de la oficina es la misma"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #97."
  },
  {
    "id": "pdf-076",
    "type": "single",
    "topic": "Reportes",
    "text": "Un gerente solicita un informe que contiene las siguientes columnas: Fecha de creación, ID de caso,Operador y Estado mundial. Debe ordenar los casos para que el caso con la fecha de creación más reciente aparezca en la parte superior de la lista y desciende en orden ¿Cómo diseña la definición del informe para respaldar este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Seleccione el tipo de clasificación de menor a mayor para la fecha de creación."
      },
      {
        "id": "b",
        "text": "Agregue una condición de filtro donde la fecha de creación sea mayor que la fecha actual."
      },
      {
        "id": "c",
        "text": "Seleccione el tipo de clasificación de mayor a menor para la fecha de creación. Otra traducción(Seleccionar el tipo de ordenación de mayor a menor para la fecha de creación)"
      },
      {
        "id": "d",
        "text": "Haga que la fecha de creación sea la primera columna del informe."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #99."
  },
  {
    "id": "pdf-077",
    "type": "multiple",
    "topic": "Case Management",
    "text": "En una aplicación de Recursos Humanos (HR), un arquitecto empresarial ha desarrollado un nuevo proceso para el tipo de caso Onboarding. Desea probar el proceso y los campos para verificar que los elementos Ul recopilan los resultados esperados.",
    "options": [
      {
        "id": "a",
        "text": "Agregar aserciones explícitas en los elementos de UI"
      },
      {
        "id": "b",
        "text": "Crear una prueba unitaria para el tipo de caso de Onboarding"
      },
      {
        "id": "c",
        "text": "Crear una prueba de escenario para el tipo de caso de Onboarding"
      },
      {
        "id": "d",
        "text": "Agregar validaciones en los elementos de Ul"
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #100."
  },
  {
    "id": "pdf-078",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "Desde el portal de capacitación para empleados, un empleado abre un nuevo caso de inscripción, envía selecciones de cursos y recibe una confirmación por correo electrónico. Hay un error en el correo electrónico de confirmación. Debe identificar la causa del error mediante el registro de un conjunto de interacciones en el portal y la prueba esperada comportamiento en los campos de recogida de datos. ¿Qué tres pasos, cuando se aplican en combinación, logran las pruebas requeridas? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Agregar validaciones de ingreso a etapa en los campos del caso de Inscripción."
      },
      {
        "id": "b",
        "text": "Cree un caso de prueba para el portal del empleado."
      },
      {
        "id": "c",
        "text": "Agregue aserciones en los elementos de Ul para verificar la recopilación correcta de datos. (Aserción de Ul)"
      },
      {
        "id": "d",
        "text": "Ejecute un nuevo caso de inscripción desde el portal de capacitación para empleados."
      },
      {
        "id": "e",
        "text": "Agregar validaciones de campo en el paso de selección de cursos."
      }
    ],
    "correctOptionIds": [
      "b",
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #101."
  },
  {
    "id": "pdf-079",
    "type": "multiple",
    "topic": "General",
    "text": "Quiere probar unitariamente una regla. Para garantizar que la regla se ejecute según lo previsto, debe completar el portapapeles con datos válidos. ¿Qué dos opciones le permiten llenar el portapapeles antes de probar la regla? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Configure una aserción para definir los datos requeridos."
      },
      {
        "id": "b",
        "text": "Configure una regla de validación para completar los datos necesarios."
      },
      {
        "id": "c",
        "text": "Ejecute una transformación de datos para crear la página de prueba."
      },
      {
        "id": "d",
        "text": "Copiar datos de una página de portapapeles existente."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #102."
  },
  {
    "id": "pdf-080",
    "type": "single",
    "topic": "General",
    "text": "Una parte interesada prefiere agrupar un conjunto de acciones existentes en un formulario de varios pasos. ¿Qué elemento de trabajo crea en Agile Workbench para abordar esta solicitud de cambio?",
    "options": [
      {
        "id": "a",
        "text": "Error"
      },
      {
        "id": "b",
        "text": "Comentarios Feedback"
      },
      {
        "id": "c",
        "text": "Estado"
      },
      {
        "id": "d",
        "text": "Historia de usuario"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #103."
  },
  {
    "id": "pdf-081",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo enruta una tarea para que cualquier miembro disponible del departamento pueda realizarla?",
    "options": [
      {
        "id": "a",
        "text": "Dirija la asignación a una lista de trabajo."
      },
      {
        "id": "b",
        "text": "Enrutar la asignación al usuario administrador"
      },
      {
        "id": "c",
        "text": "Enrutar la asignación por separado a todos los miembros."
      },
      {
        "id": "d",
        "text": "Dirija la asignación a una cola de trabajo. (work Queue)"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #104."
  },
  {
    "id": "pdf-082",
    "type": "single",
    "topic": "Seguridad",
    "text": "El usuario A debe tener permisos de aplicación idénticos a los permisos del usuario B. A diferencia del usuario B, el usuario A no tiene acceso a la página Mis casos. ¿Cómo concede acceso a la página Mis casos al usuario A?",
    "options": [
      {
        "id": "a",
        "text": "Actualice el Usuario A al mismo rol que el Usuario B."
      },
      {
        "id": "b",
        "text": "Agregue la página Mis casos al perfil del Usuario A."
      },
      {
        "id": "c",
        "text": "Actualice la cuenta del Usuario A para acceder al mismo portal que el Usuario B"
      },
      {
        "id": "d",
        "text": "Agregue la página Mis casos al rol del Usuario A."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #105."
  },
  {
    "id": "pdf-083",
    "type": "multiple",
    "topic": "General",
    "text": "¿En qué tres situaciones puede usar una transformación de datos? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Para copiar las propiedades de nombre y apellido en un solo valor de propiedad"
      },
      {
        "id": "b",
        "text": "Para ejecutar una acción de flujo (FlowAction)"
      },
      {
        "id": "c",
        "text": "Para crear la propiedad dependiente después de la creación del caso=> Ej: FullName"
      },
      {
        "id": "d",
        "text": "Para establecer valores predeterminados para un caso"
      },
      {
        "id": "e",
        "text": "Para mostrar el valor de destino como valor de ubicación"
      }
    ],
    "correctOptionIds": [
      "a",
      "d",
      "e"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #106."
  },
  {
    "id": "pdf-084",
    "type": "multiple",
    "topic": "General",
    "text": "¿En qué tres situaciones puede usar una transformación de datos? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Para establecer la ubicación de destino como la ubicación de llegada"
      },
      {
        "id": "b",
        "text": "Para crear una nueva propiedad después de la creación del caso"
      },
      {
        "id": "c",
        "text": "Para establecer la fecha de llegada predeterminada en cinco días en el futuro"
      },
      {
        "id": "d",
        "text": "Para copiar las propiedades de nombre y apellido en un único valor de propiedad"
      },
      {
        "id": "e",
        "text": "Para realizar una acción que permita al usuario actualizar una reserva => Ej: FullName"
      }
    ],
    "correctOptionIds": [
      "c",
      "d",
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #107."
  },
  {
    "id": "pdf-085",
    "type": "single",
    "topic": "General",
    "text": "Una empresa internacional de repuestos para automóviles en línea quiere que los clientes encuentren fácilmente repuestos para cualquier vehículo. Se le pide que implemente el siguiente requisito: los clientes deben seleccionar una marca, un modelo y un año para iniciar una búsqueda específica del vehículo. ¿Cómo configura el almacenamiento de datos en la aplicación para implementar el requisito?",
    "options": [
      {
        "id": "a",
        "text": "Configure una página de datos para almacenar los datos del vehículo de marca, modelo y año."
      },
      {
        "id": "b",
        "text": "Configure una conexión a un sistema de registro externo que contenga los datos del vehículo de marca, modelo y año."
      },
      {
        "id": "c",
        "text": "Configure una lista estática de los datos del vehículo de marca, modelo y año."
      },
      {
        "id": "d",
        "text": "Configure un almacenamiento de datos local de los datos del vehículo de marca, modelo y año."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #108."
  },
  {
    "id": "pdf-086",
    "type": "single",
    "topic": "General",
    "text": "Un requisito establece: El número de identificación fiscal debe contener 10 dígitos. ¿Cómo se configura el campo para admitir este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Establezca los valores mínimo y máximo en \"10\" en un campo de texto"
      },
      {
        "id": "b",
        "text": "Utilice una regla de validación de edición que valide el patrón del número de identificación fiscal."
      },
      {
        "id": "c",
        "text": "Use un tipo de propiedad decimal y haga que el campo sea obligatorio."
      },
      {
        "id": "d",
        "text": "Configure una regla de validación para probar el patrón del número de identificación fiscal."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #109."
  },
  {
    "id": "pdf-087",
    "type": "single",
    "topic": "Case Management",
    "text": "Está probando un tipo de caso de reserva de línea aérea que aún no tiene una interfaz de usuario configurada. Debe verificar que al cambiar el campo Seguro de compra en el Portapapeles se actualiza el campo Costo total. ¿En qué categoría de las herramientas del portapapeles esperaría encontrar el campo Seguro de compra?",
    "options": [
      {
        "id": "a",
        "text": "Páginas de propiedades vinculadas"
      },
      {
        "id": "b",
        "text": "Páginas de usuario"
      },
      {
        "id": "c",
        "text": "Páginas de datos"
      },
      {
        "id": "d",
        "text": "Páginas del sistema"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #110."
  },
  {
    "id": "pdf-088",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso de reclamo de seguro se define de la siguiente manera: si el paso Revisar reclamo está configurado para establecer el estado en Pendiente de investigación, ¿cuándo se establece el estado del caso en Pendiente de investigación?",
    "options": [
      {
        "id": "a",
        "text": "Cuando se completa el paso Investigar reclamo"
      },
      {
        "id": "b",
        "text": "Cuando se inicia la etapa Procesar reclamo"
      },
      {
        "id": "c",
        "text": "Cuando se completa el paso Revisar reclamo"
      },
      {
        "id": "d",
        "text": "Cuando se inicia el paso Revisar reclamo."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #111."
  },
  {
    "id": "pdf-089",
    "type": "single",
    "topic": "Datos",
    "text": "La página .Product contiene datos recuperados de un sistema externo de registro utilizando un data. ¿Cómo se asegura de que .Product siempre contenga los datos más actualizados de la página de datos?",
    "options": [
      {
        "id": "a",
        "text": "Seleccione Refer to a data page on .Product."
      },
      {
        "id": "b",
        "text": "Defina una propiedad de referencia que haga referencia a la página de datos."
      },
      {
        "id": "c",
        "text": "Configure .Product para hacer referencia a una página de datos clave."
      },
      {
        "id": "d",
        "text": "Seleccione Copiar datos de una página de datos en .Product."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #112."
  },
  {
    "id": "pdf-090",
    "type": "single",
    "topic": "Case Management",
    "text": "El proceso comercial de un reclamo de seguro de automóvil consta de las siguientes fases: - Presentación: el cliente se comunica con un representante de servicio al cliente (CSR) para presentar el reclamo. - Revisión: un ajustador revisa el reclamo, evalúa los daños a cada vehículo y proporciona una estimación del costo de las reparaciones. - Reparación: Un tercero realiza las reparaciones de cada vehículo, comunicándose con el ajustador y el cliente según sea necesario. - Verificación: Después de cada reparación del vehículo, el ajustador cierra la reclamación. De acuerdo con las mejores prácticas de Pega, ¿qué fase puede implementar como un caso secundario?",
    "options": [
      {
        "id": "a",
        "text": "Unaverificación"
      },
      {
        "id": "b",
        "text": "Sumisión"
      },
      {
        "id": "c",
        "text": "Revisión"
      },
      {
        "id": "d",
        "text": "Reparación"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #113."
  },
  {
    "id": "pdf-091",
    "type": "single",
    "topic": "General",
    "text": "Usted crea una aplicación para que los empleados envíen hojas de tiempo. Los empleados ingresan el trabajo, las vacaciones y el tiempo de enfermedad para una semana en particular. En el formulario de entrada, los empleados ven un resumen del total de horas ingresadas. Después de que el empleado envía la hoja de tiempo, la aplicación muestra las vacaciones restantes y el tiempo de enfermedad del empleado. Para configurar el formulario donde los usuarios ingresan horas, seleccione la mejor opción de configuración para calcular el total de horas de la semana.",
    "options": [
      {
        "id": "a",
        "text": "Utilice una regla Cuándo. Cuando cambia el valor de cualquier trabajo, vacaciones o tiempo de enfermedad, el total de horas cambia."
      },
      {
        "id": "b",
        "text": "Utilizar procesamiento declarativo. Cuando cambia el valor de cualquier trabajo, vacaciones o tiempo de enfermedad, el total de horas cambia."
      },
      {
        "id": "c",
        "text": "Utilizar la tramitación procesal. Cuando el valor de cualquier trabajo, vacaciones o tiempo de enfermedad cambia y el usuario envía el formulario, el total de horas cambia."
      },
      {
        "id": "d",
        "text": "Usar una transformación de datos. Cuando el usuario ingresa al formulario, la transformación de datos determina la suma de las propiedades de trabajo, vacaciones y tiempo de enfermedad."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #114."
  },
  {
    "id": "pdf-092",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Un equipo de desarrollo planea mejorar la funcionalidad de una aplicación existente cambiando varias reglas de la interfaz de usuario. Al equipo le gustaría probar las mejoras en un pequeño grupo de usuarios antes de implementar los cambios en toda la base de usuarios. ¿Qué enfoque maximiza la reutilización y la mantenibilidad?",
    "options": [
      {
        "id": "a",
        "text": "Coloque las reglas actualizadas en una nueva versión secundaria del conjunto de reglas e incluya la nueva versión del conjunto de reglas en una nueva aplicación."
      },
      {
        "id": "b",
        "text": "Coloque las reglas actualizadas en un nuevo conjunto de reglas e incluya el nuevo conjunto de reglas en una nueva aplicación."
      },
      {
        "id": "c",
        "text": "Coloque las reglas actualizadas en un nuevo conjunto de reglas e incluya el nuevo conjunto de reglas en una nueva versión de la aplicación."
      },
      {
        "id": "d",
        "text": "Coloque las reglas actualizadas en una nueva versión secundaria del conjunto de reglas e incluya la nueva versión del conjunto de reglas en una nueva versión de la aplicación."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #116."
  },
  {
    "id": "pdf-093",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "El cliente en una aplicación de reserva de hotel puede agregar servicios adicionales a su reserva. La aplicación muestra una vista con los servicios disponibles y... Para reducir el desplazamiento, desea organizar el contenido para que los detalles del servicio se muestren cuando se seleccione el servicio en un menú desplegable. ¿Cómo configura la interfaz de usuario para mejorar el acceso al contenido y lograr el requisito comercial descrito?",
    "options": [
      {
        "id": "a",
        "text": "Configure un grupo de diseño para separar cada servicio en paneles individuales y establezca el diseño en un menú formal."
      },
      {
        "id": "b",
        "text": "Configure una condición de deshabilitar cuando en cada campo para permitir el acceso cuando se seleccione el servicio asociado en el control desplegable."
      },
      {
        "id": "c",
        "text": "Configure un diseño dinámico repetitivo con una sección incrustada para cada servicio y establezca el formato de diseño en agrupado."
      },
      {
        "id": "d",
        "text": "Configure una condición visible en cada campo cuando se seleccione el servicio asociado."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #117."
  },
  {
    "id": "pdf-094",
    "type": "single",
    "topic": "General",
    "text": "Una solicitud contiene dos tipos de casos, AutoClaim y PropertyClaim. La ruta de herencia para la aplicación contiene tres copias de la transformación de datos pyDefault que establece valores de propiedad para dos propiedades, Urgencia del elemento de trabajo y Prefijo. Si la opción Llamar a transformaciones de datos en superclase está habilitada para cada transformación de datos, ¿cuáles son los valores de Prefijo y Urgencia del elemento de trabajo cuando un usuario crea un caso PropertyClaim?",
    "options": [
      {
        "id": "a",
        "text": "Urgencia del elemento de trabajo = 10, Prefijo = [sin valor]"
      },
      {
        "id": "b",
        "text": "Urgencia del elemento de trabajo = 0, Prefijo = \"C-\""
      },
      {
        "id": "c",
        "text": "Urgencia del elemento de trabajo = 10, Prefijo = \"C-\""
      },
      {
        "id": "d",
        "text": "Urgencia del elemento de trabajo = 20, Prefijo = “A-”"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #118."
  },
  {
    "id": "pdf-095",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Un informe contiene columnas para Cliente, Ciclo de facturación, Tarjeta de crédito y Fecha de vencimiento. Un manager solicita que el informe muestre solo aquellos clientes que cumplen con las siguientes condiciones: - El cliente está en un ciclo de facturación mensual - La tarjeta de crédito es MoreCash o Vista - La tarjeta de crédito vence dentro de los 60 días ¿Qué conjunto de condiciones de filtrado arroja un informe con el datos deseados?",
    "options": [
      {
        "id": "a",
        "text": "La tarjeta de crédito es igual a MoreCash Y la tarjeta de crédito es igual a Vista Y el ciclo de facturación es igual a mensual Y la fecha de vencimiento es 60 días mayor que la actual"
      },
      {
        "id": "b",
        "text": "La tarjeta de crédito es igual a MoreCash O la tarjeta de crédito es igual a Vista Y el ciclo de facturación es igual a mensual Y la fecha de vencimiento es igual a los próximos 60 días."
      },
      {
        "id": "c",
        "text": "La tarjeta de crédito es igual a MoreCash O la tarjeta de crédito es igual a Vista Y el ciclo de facturación no es trimestral Y la fecha de vencimiento es inferior a 60 días"
      },
      {
        "id": "d",
        "text": "La tarjeta de crédito es igual a MoreCash o Vista, el ciclo de facturación es igual a mensual y la fecha de vencimiento es igual a los próximos 60 días"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #119."
  },
  {
    "id": "pdf-096",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "Enunnivel de servicio, el intervalo de fecha límite superado/pasada (passed deadline) se mide desde / Otratraducción: En un nivel de servicio(SLA), el intervalo de fecha límite superado(Passed DeadLine) se mide desde",
    "options": [
      {
        "id": "a",
        "text": "elfinaldel intervalo de fecha límite (deadline) / Al finalizar el DeadLine"
      },
      {
        "id": "b",
        "text": "cuandola tarea está lista para un usuario"
      },
      {
        "id": "c",
        "text": "cuandoun usuario comienza la tarea"
      },
      {
        "id": "d",
        "text": "alfinaldel intervalo objetivo (goal)"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #120."
  },
  {
    "id": "pdf-097",
    "type": "single",
    "topic": "Datos",
    "text": "Una página de datos contiene información del producto. El campo Recargar si es anterior a de la página de datos está configurado en 15 minutos. La página de datos se crea a las 06:12. A las 06:20 el usuario solicita información del producto. A las 06:42 el usuario solicita información del producto. ¿Cuándo se recarga la página de datos?",
    "options": [
      {
        "id": "a",
        "text": "06:35"
      },
      {
        "id": "b",
        "text": "06:20"
      },
      {
        "id": "c",
        "text": "6:27"
      },
      {
        "id": "d",
        "text": "06:42"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #121."
  },
  {
    "id": "pdf-098",
    "type": "multiple",
    "topic": "Datos",
    "text": "¿Quédos piezas de información componen un elemento de datos? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Elnombre de la vista de usuario de referencia"
      },
      {
        "id": "b",
        "text": "Elnombre del elemento de datos"
      },
      {
        "id": "c",
        "text": "Elnombre de la página del portapapeles"
      },
      {
        "id": "d",
        "text": "Elvalordel elemento de datos"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #122."
  },
  {
    "id": "pdf-099",
    "type": "single",
    "topic": "General",
    "text": "Para calificar para un préstamo instantáneo, el solicitante debe obtener un ingreso mensual de al menos GBP2000 y no puede exceder GBP20000 en responsabilidad total. ¿Cómo hace cumplir estas restricciones al solicitar un préstamo instantáneo?",
    "options": [
      {
        "id": "a",
        "text": "Utilice una regla de validación para llamar a dos reglas de validación de edición: una para ingresos y otra para pasivos."
      },
      {
        "id": "b",
        "text": "Utilice dos reglas de edición y validación: una para ingresos y otra para pasivos."
      },
      {
        "id": "c",
        "text": "Usar una únq ondiciones: una para ingresos y otra para pasivos."
      },
      {
        "id": "d",
        "text": "Usar controles Ul para validar las entradas en los campos de ingresos y pasivos."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #123."
  },
  {
    "id": "pdf-100",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso de cumplimiento de pedido permite que un cliente actualice la información del perfil de usuario durante la etapa de realización del pedido. El perfil de usuario consta de las siguientes tres páginas: ID de cuenta y contraseña Información de contacto del cliente Una lista de pedidos abiertos con el estado de cada pedido. ¿Cómo configura el tipo de caso para permitir que los clientes actualicen cualquiera de las páginas de perfil de usuario en cualquier momento durante el procesamiento del caso?",
    "options": [
      {
        "id": "a",
        "text": "Agregue un proceso opcional al flujo de trabajo del caso."
      },
      {
        "id": "b",
        "text": "Agregue un botón para cada página de perfil a cada tarea."
      },
      {
        "id": "c",
        "text": "Agregar una etapa alternativa al ciclo de vida del caso."
      },
      {
        "id": "d",
        "text": "Agregar un conjunto de acciones opcionales al flujo de trabajo del caso"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #124."
  },
  {
    "id": "pdf-101",
    "type": "multiple",
    "topic": "General",
    "text": "¿Cuáles dos de los siguientes casos de uso implementa utilizando uno o más campos calculados(totales +) ? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Un representante de ventas desea cotizar el costo de una póliza de seguro según las opciones de cobertura seleccionadas."
      },
      {
        "id": "b",
        "text": "Un contador quiere enumerar el pedido más grande del último mes, para cada cuenta de cliente."
      },
      {
        "id": "c",
        "text": "Un gerente de proyecto desea estimar el costo de pintar un salón de banquetes en función de la mano de obra y los materiales necesarios."
      },
      {
        "id": "d",
        "text": "Un gerente de certificación quiere determinar la cantidad de exámenes realizados en cada instalación de prueba en el trimestre actual."
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #125."
  },
  {
    "id": "pdf-102",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "Los miembros del personal del hospital ingresan los detalles de la cita, incluida la información relevante del paciente, diagnósticos, órdenes de laboratorio y medicamentos recetados. Esta información se agrega en la vista de resumen de la visita del paciente. El paciente recibe una copia de esta vista por correo electrónico. ¿Qué dos configuraciones, cuando se aplican en combinación, logran este comportamiento? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Agregue una automatización Crear PDF que haga referencia a la vista de resumen de la visita del paciente."
      },
      {
        "id": "b",
        "text": "Agregue un paso Enviar correo electrónico y habilite la opción para incluir archivos adjuntos."
      },
      {
        "id": "c",
        "text": "Agregue un paso Enviar correo electrónico y redacte el mensaje para hacer referencia a las propiedades relevantes."
      },
      {
        "id": "d",
        "text": "Habilite las notificaciones por correo electrónico sobre el tipo de caso."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #126."
  },
  {
    "id": "pdf-103",
    "type": "single",
    "topic": "General",
    "text": "Una aplicación del gobierno proporciona valores de marcador de posición de campo para ayudar a los usuarios a ingresar los datos correctos. El jefe de diseño le ha pedido que aumente el tamaño de fuente en todos los componentes de valor de marcador de posición de campo para ayudar a los usuarios con discapacidades visuales. ¿Qué configuración aplica el requisito de estilo de fuente en los valores de marcador de posición de campo en la aplicación?",
    "options": [
      {
        "id": "a",
        "text": "Actualizar la entrada de texto del tema Predeterminado existente"
      },
      {
        "id": "b",
        "text": "Ejecutar un tipo de caso que use el componente y cambiar la fuente en la vista"
      },
      {
        "id": "c",
        "text": "Agregar una nueva entrada de texto del tema al tema de la aplicación"
      },
      {
        "id": "d",
        "text": "Cargar un nuevo tema de la aplicación"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #127."
  },
  {
    "id": "pdf-104",
    "type": "single",
    "topic": "General",
    "text": ". Al solicitar un aumento de límite de crédito, los clientes con tarjetas de crédito estándar deben proporcionar información en un proceso de Información Laboral. Las solicitudes de clientes con tarjetas de crédito Platinum saltan automáticamente este proceso. ¿Qué tarea realiza para implementar este requisito?",
    "options": [
      {
        "id": "a",
        "text": "En el proceso de información de empleo, agregue un campo de tipo de tarjeta verdadero/falso a una vista de usuario."
      },
      {
        "id": "b",
        "text": "En el proceso de Información de empleo agregue una condición personalizada para iniciar el proceso probando el tipo de tarjeta."
      },
      {
        "id": "c",
        "text": "En el proceso de Información de empleo, agregue un paso Aprobar/Rechazar para probar el tipo de tarjeta."
      },
      {
        "id": "d",
        "text": "En el proceso de Información Laboral validar tipo de tarjeta para continuar con el trámite."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #128."
  },
  {
    "id": "pdf-105",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "En una aplicación que vende artículos de oficina, la vista Pago muestra los artículos del pedido y recopila información de pago. En la regla de la sección Pago, los artículos del pedido se agrupan en un diseño dinámico. Más adelante descubrirá que la vista Resumen del pedido también debe mostrar los artículos del pedido. ¿Cómo se configura la interfaz de usuario para que la visualización de los artículos del pedido se comparta entre la vista de pago y la vista de resumen del pedido?",
    "options": [
      {
        "id": "a",
        "text": "Convierta el diseño de la sección Pago que contiene los artículos del pedido en una sección e incruste esta sección en la sección Resumen del pedido."
      },
      {
        "id": "b",
        "text": "Cree la sección Resumen del pedido con un diseño interior para agrupar los artículos del pedido, similar a la sección Pago."
      },
      {
        "id": "c",
        "text": "Incruste la sección Pago en la sección Resumen del pedido."
      },
      {
        "id": "d",
        "text": "Reutilice la sección Pago en la vista Resumen del pedido y use una condición de deshabilitar cuando para deshabilitar la información de pago en la regla de la sección Pago."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #129."
  },
  {
    "id": "pdf-106",
    "type": "multiple",
    "topic": "General",
    "text": "Un requisito establece: La fecha de nacimiento presentada para los estudiantes de primer grado debe ser al menos cinco años antes del 1 de septiembre del año en curso. ¿Qué tres métodos de validación, cuando se aplican en combinación, satisfacen el requisito? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Cuando regla"
      },
      {
        "id": "b",
        "text": "Control de calendario"
      },
      {
        "id": "c",
        "text": "Tipo de datos de fecha"
      },
      {
        "id": "d",
        "text": "Regla de validación"
      },
      {
        "id": "e",
        "text": "Editar regla de validación (Edit Validate)"
      }
    ],
    "correctOptionIds": [
      "b",
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #130."
  },
  {
    "id": "pdf-107",
    "type": "single",
    "topic": "General",
    "text": "Una solicitud de préstamo hipotecario requiere la aprobación del gerente del equipo Legal y el gerente del equipo de Finanzas. El jefe del equipo Legal debe aprobar antes que el jefe del equipo de Finanzas. ¿Cómo se configura este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Crear un proceso de aprobación para cada gerente en paralelo."
      },
      {
        "id": "b",
        "text": "Aplicar la lógica empresarial para enrutar una sola asignación en el orden correcto."
      },
      {
        "id": "c",
        "text": "Cree un paso de aprobación con aprobación en cascada."
      },
      {
        "id": "d",
        "text": "Enrutar una asignación a una cola de trabajo donde ambos roles tienen acceso."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #131."
  },
  {
    "id": "pdf-108",
    "type": "multiple",
    "topic": "General",
    "text": "Los clientes verifican su estado de membresía con un programa de fidelización de la empresa ingresando su nombre completo y número de identificación de miembro. Una vez que se devuelve el estado de membresía, el cliente abandona el caso o realiza cambios en su membresía. Si el miembro elige hacer cambios, se asigna un ID de caso a la solicitud. ¿Qué dos configuraciones, cuando se aplican en combinación, logran este comportamiento? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Configurar el escenario para resolver el caso."
      },
      {
        "id": "b",
        "text": "Configure el tipo de caso para crear casos temporales."
      },
      {
        "id": "c",
        "text": "Agregar un paso de decisión al proceso."
      },
      {
        "id": "d",
        "text": "Agregar un paso de caso persistente al ciclo de vida del caso."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #132."
  },
  {
    "id": "pdf-109",
    "type": "single",
    "topic": "General",
    "text": "Los usuarios pueden seleccionar una casilla de verificación(checkbox) para suscribirse a un servicio de mensajería de texto. Al seleccionar la casilla de verificación, se muestra un campo para que un usuario ingrese un número de teléfono móvil. ¿Cómo se configura la aplicación para que muestre un campo para ingresar un número de teléfono móvil solo cuando la casilla de verificación está seleccionada?",
    "options": [
      {
        "id": "a",
        "text": "Use una condición cuando en una transformación de datos para determinar si mostrar el campo de número de teléfono móvil."
      },
      {
        "id": "b",
        "text": "Use una condición when en el flujo para bifurcar el flujo en función de los datos del caso."
      },
      {
        "id": "c",
        "text": "Usar una circunstancia en la propiedad de la casilla de verificación para crear una variante de regla que sea efectiva cuando se selecciona la casilla de verificación."
      },
      {
        "id": "d",
        "text": "Use una condición cuando en el formulario Ul para determinar si se debe mostrar el campo de número de teléfono móvil."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #133."
  },
  {
    "id": "pdf-110",
    "type": "single",
    "topic": "General",
    "text": "Está implementando una pantalla de entrada de datos para incluir un campo de ID de activo para rastrear el equipo de la empresa. Todos los ID de activos tienen ocho caracteres de longitud. Los tres primeros caracteres son letras seguidas de un número de cinco dígitos. ¿Qué enfoque de validación restringe las entradas para el campo de ID de activo al formato requerido?",
    "options": [
      {
        "id": "a",
        "text": "Regla de validación"
      },
      {
        "id": "b",
        "text": "Caracteres mín./máx."
      },
      {
        "id": "c",
        "text": "Tipo de datos de texto"
      },
      {
        "id": "d",
        "text": "Editar Regla de validación (Edit Validate)"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #134."
  },
  {
    "id": "pdf-111",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Los clientes en una aplicación de reserva de hotel pueden agregar servicios adicionales a su reserva. La aplicación muestra una vista con lasamenidades disponibles, descripciones y costos. Para reducir el desplazamiento, el contenido se organiza en varias áreas. Se accede a cada área mediante un menú desplegable que enumera cada servicio. ¿Cómo configura la interfaz de usuario para mejorar el acceso al contenido y lograr el requisito comercial descrito?",
    "options": [
      {
        "id": "a",
        "text": "Configure una condición de deshabilitar cuando en cada campo para permitir el acceso cuando se selecciona el servicio asociado en el control desplegable."
      },
      {
        "id": "b",
        "text": "Configure un diseño dinámico repetitivo con una sección incrustada para cada servicio y establezca el formato de diseño en agrupado."
      },
      {
        "id": "c",
        "text": "Configure un grupo de diseño para separar cada servicio en paneles individuales y establezca el diseño en un formato de menú."
      },
      {
        "id": "d",
        "text": "Configure una condición visible cuando en el control desplegable para mostrar cada sección cuando se seleccione el servicio asociado."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #135."
  },
  {
    "id": "pdf-112",
    "type": "multiple",
    "topic": "Procesos y flujos",
    "text": "¿Qué dos dependencias aplica directamente con un paso de espera (TEMPORIZADOR, HERENCIA)? (Elija",
    "options": [
      {
        "id": "a",
        "text": "Pausar un caso hasta que expire un tiempo predeterminado"
      },
      {
        "id": "b",
        "text": "Pausar un caso hasta que un usuario envíe un valor específico"
      },
      {
        "id": "c",
        "text": "Pausar un caso hasta que otro caso alcance un estado específico"
      },
      {
        "id": "d",
        "text": "Pausar un caso hasta que se cree un nuevo caso secundario"
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #136."
  },
  {
    "id": "pdf-113",
    "type": "multiple",
    "topic": "Datos",
    "text": "Una aplicación de reserva de hotel permite a los clientes cambiar de habitación después de hacer una reserva. El estado de cada habitación en cada hotel se almacena en una página de datos procedente de una tabla de base de datos externa. ¿Qué dos opciones de configuración, cuando se aplican en combinación, utiliza para actualizar la tabla de la base de datos cuando un cliente cambia de habitación? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Una página de datos que se puede guardar que contiene la información de la habitación"
      },
      {
        "id": "b",
        "text": "Una regla de cuándo activar la actualización de la base de datos"
      },
      {
        "id": "c",
        "text": "Una transformación de datos para copiar las actualizaciones en la página de datos"
      },
      {
        "id": "d",
        "text": "Una página de datos editable que contiene la información de la habitación"
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #137."
  },
  {
    "id": "pdf-114",
    "type": "single",
    "topic": "Datos",
    "text": "Los clientes pueden registrar sus propias solicitudes de soporte de productos utilizando un portal en línea. Una vez iniciada la sesión, el portal muestra la lista de productos adquiridos por el cliente. El cliente puede iniciar una o más solicitudes de soporte para cada producto. ¿Cuál es el alcance apropiado para una página de datos que obtiene la lista de productos comprados por el cliente?",
    "options": [
      {
        "id": "a",
        "text": "Un hilo"
      },
      {
        "id": "b",
        "text": "Sistema"
      },
      {
        "id": "c",
        "text": "Solicitante"
      },
      {
        "id": "d",
        "text": "Nodo"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #138."
  },
  {
    "id": "pdf-115",
    "type": "single",
    "topic": "Case Management",
    "text": "Usando el siguiente ciclo de vida del caso de reembolso, ¿cómo diseña este caso para omitir la etapa de devolución del artículo si el artículo no se devolverá?",
    "options": [
      {
        "id": "a",
        "text": "Reemplace el paso Esperar en la etapa Devolución de artículo con un paso Cambiar etapa."
      },
      {
        "id": "b",
        "text": "Agregue una condición para omitir la etapa de devolución de artículos cuando no sea necesaria una devolución."
      },
      {
        "id": "c",
        "text": "Agregue una etapa alternativa de Retención de artículos y defina un proceso para la retención de artículos."
      },
      {
        "id": "d",
        "text": "Agregar una decisión en el proceso de devolución de artículos para cambiar la etapa cuando no es necesaria una devolución."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #139."
  },
  {
    "id": "pdf-116",
    "type": "single",
    "topic": "Case Management",
    "text": "Un tipo de caso de reembolso del cliente requiere que un auditor reciba una notificación por correo electrónico si el reembolso es superior al doble del precio del artículo. ¿Qué rol de participante selecciona para configurar este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Un cliente"
      },
      {
        "id": "b",
        "text": "Persona interesada"
      },
      {
        "id": "c",
        "text": "Propietario"
      },
      {
        "id": "d",
        "text": "Cola de trabajo"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #140."
  },
  {
    "id": "pdf-117",
    "type": "single",
    "topic": "General",
    "text": "¿Qué configuración informa a un usuario por correo electrónico cuando se agrega una tarea a la lista de trabajo del usuario?",
    "options": [
      {
        "id": "a",
        "text": "Configure el tipo de caso para enviar notificaciones de asignación a los usuarios asignados."
      },
      {
        "id": "b",
        "text": "Agregue un paso Enviar correo electrónico al proceso después de la asignación para notificar al usuario asignado."
      },
      {
        "id": "c",
        "text": "Configurar un nivel de servicio para enviar una notificación al usuario asignado. (el service level/nivel de servicio permite enviar notificaciones a usuarios cuando cambia de goal, deadline o passed deadline)."
      },
      {
        "id": "d",
        "text": "Agregue un paso Enviar notificación al proceso después de la asignación para notificar al usuario asignado."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #141."
  },
  {
    "id": "pdf-118",
    "type": "multiple",
    "topic": "General",
    "text": "Los empleados presentan solicitudes de tiempo libre que deben ser aprobadas por su gerente. Si el tiempo libre solicitado se extiende más allá de tres semanas, el gerente, el director y un miembro de recursos humanos (HR) deben aprobar la solicitud. ¿Qué dos configuraciones, cuando se aplican en combinación, logran este comportamiento? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Cree una tabla de decisiones y evalúe todas las filas."
      },
      {
        "id": "b",
        "text": "Utilice una aprobación en cascada con una matriz de autoridad."
      },
      {
        "id": "c",
        "text": "Utilice una aprobación en cascada con una estructura de informes."
      },
      {
        "id": "d",
        "text": "Configurar aprobaciones personalizadas en la estructura de informes."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #142."
  },
  {
    "id": "pdf-119",
    "type": "multiple",
    "topic": "General",
    "text": "Un caso de reclamo por accidente crea un caso de reclamo por vehículo para cada vehículo involucrado en un accidente. ¿Qué dos configuraciones evitan que se resuelva el caso de reclamo por accidente antes de que se resuelvan todos los reclamos de vehículos? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Agregue cada reclamo de vehículo como un caso secundario(caso hijo) del reclamo de accidente."
      },
      {
        "id": "b",
        "text": "Agregar un paso de aprobación manual al caso de reclamo de accidente."
      },
      {
        "id": "c",
        "text": "Agregue un proceso opcional para pausar el caso del accidente hasta que se paguen las reclamaciones del vehículo."
      },
      {
        "id": "d",
        "text": "Agregar un paso de espera al caso de reclamo de accidente para esperar hasta que todos los reclamos de vehículos tengan un estado de Resuelto."
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #143."
  },
  {
    "id": "pdf-120",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "En una solicitud de reclamo de seguro, tiene el siguiente requisito: Todos los reclamos deben resolverse dentro de 1 semana. Para cumplir con este requisito, configure un nivel de servicio. ¿Dónde se debe configurar el nivel de servicio?",
    "options": [
      {
        "id": "a",
        "text": "El proceso"
      },
      {
        "id": "b",
        "text": "La etapa"
      },
      {
        "id": "c",
        "text": "El tipo de caso"
      },
      {
        "id": "d",
        "text": "El paso"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #144."
  },
  {
    "id": "pdf-121",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo hace referencia a la propiedad State en un grupo de páginas de direcciones con el índice Inicio(casa)?",
    "options": [
      {
        "id": "a",
        "text": ".Dirección (casa).Estado"
      },
      {
        "id": "b",
        "text": ".Dirección.del.estado.de.hogar"
      },
      {
        "id": "c",
        "text": ".Casa(Dirección).Estado"
      },
      {
        "id": "d",
        "text": ".Dirección.Estado.de.casa"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #145."
  },
  {
    "id": "pdf-122",
    "type": "multiple",
    "topic": "Datos",
    "text": "Un minorista en línea permite a los clientes seleccionar un servicio de mensajería para las entregas. La lista de disponibles los servicios de mensajería se extrae de un tipo de datos procedente de la base de datos de Pega. El departamento de Cumplimiento quiere permitir que los gerentes de almacenes locales agreguen servicios de mensajería para mitigar los aumentos en los tiempos de entrega y eliminar los servicios de mensajería que no cumplen con las métricas de entrega. ¿Qué dos opciones se requieren para permitir que los gerentes de almacenes locales actualicen los registros del servicio de mensajería en producción? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Cree un grupo de acceso para los administradores de almacenes locales."
      },
      {
        "id": "b",
        "text": "Delegar los registros para el tipo de datos del servicio de mensajería."
      },
      {
        "id": "c",
        "text": "Definir un proceso de aprobación para agregar y eliminar servicios de mensajería."
      },
      {
        "id": "d",
        "text": "Habilitar el pago de reglas para los gerentes de almacenes locales."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #146."
  },
  {
    "id": "pdf-123",
    "type": "single",
    "topic": "General",
    "text": "Un librero mantiene una base de datos de más de 10.000 títulos de libros. Se le ha pedido que configure un formulario que permita a los usuarios seleccionar un libro por título. ¿Cómo se configura el formulario?",
    "options": [
      {
        "id": "a",
        "text": "Agregue un control desplegable y obtenga los datos del valor de propiedad utilizado en el control."
      },
      {
        "id": "b",
        "text": "Agregue un control desplegable y obtenga los datos mediante una página de datos."
      },
      {
        "id": "c",
        "text": "Agregue un control de autocompletar y obtenga los datos mediante una página de datos."
      },
      {
        "id": "d",
        "text": "Agregue un control de autocompletar y obtenga los datos de la página de trabajo del portapapeles."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #147."
  },
  {
    "id": "pdf-124",
    "type": "single",
    "topic": "Case Management",
    "text": "Un cliente llama para solicitar una nueva cuenta bancaria. El representante de servicio al cliente (CSR) debe realizar una asignación denominada Seleccionar tipo de cuenta. Durante la discusión, el cliente puede solicitar información por escrito sobre diferentes tipos de cuentas. Seleccione el diseño del ciclo de vida del caso que satisfaga este requisito.",
    "options": [
      {
        "id": "a",
        "text": "Una vista de usuario para solicitar información para la asignación Seleccionar tipo de cuenta."
      },
      {
        "id": "b",
        "text": "Agregue una acción opcional a la etapa que contiene la asignación Seleccionar tipo de cuenta."
      },
      {
        "id": "c",
        "text": "Agregar una acción opcional para todo el caso."
      },
      {
        "id": "d",
        "text": "Agregar un enrutador a la asignación Seleccionar tipo de cuenta."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #148."
  },
  {
    "id": "pdf-125",
    "type": "single",
    "topic": "Datos",
    "text": "Su aplicación de compras en línea atiende a clientes internacionales. Debe definir una página de datos que contenga tipos de cambio de moneda. Todos los usuarios que acceden a la aplicación necesitan utilizar la información. El Ámbito de esta página de datos debe establecerse en A. ______________.",
    "options": [
      {
        "id": "a",
        "text": "Aplicación"
      },
      {
        "id": "b",
        "text": "Nodo (Node)"
      },
      {
        "id": "c",
        "text": "Hilo (Thread)"
      },
      {
        "id": "d",
        "text": "Solicitante (Requestor)"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #149."
  },
  {
    "id": "pdf-126",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Una vista de usuario incluye una lista de cuatro opciones de urgencia que se pueden seleccionar mediante botones de radio. La forma más segura y fácil de ayudarlo a aprobar cualquier examen de TI. ¿Cómo se configura la lista de selección?",
    "options": [
      {
        "id": "a",
        "text": "Configure un grupo de campos con opciones de urgencia seleccionables."
      },
      {
        "id": "b",
        "text": "Configure un campo desplegable con opciones de urgencia seleccionables."
      },
      {
        "id": "c",
        "text": "Configure una lista de selección con botones de radio para las opciones de urgencia."
      },
      {
        "id": "d",
        "text": "Configure un campo booleano con opciones de urgencia seleccionables."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #150."
  },
  {
    "id": "pdf-127",
    "type": "single",
    "topic": "Datos",
    "text": "Una aplicación de transporte bajo demanda tiene un tipo de datos de preferencia de conversación. Cuando los clientes usan la aplicación para solicitar un viaje, pueden especificar su preferencia de conversación: si les gustaría hablar con su conductor o si prefieren el silencio. Las partes interesadas de la empresa están interesadas en analizar los datos de preferencias de conversación. ¿Cómo se obtiene el tipo de datos de preferencia de conversación?",
    "options": [
      {
        "id": "a",
        "text": "Sistema de registro local"
      },
      {
        "id": "b",
        "text": "Sin sistema de registro"
      },
      {
        "id": "c",
        "text": "Sistema de registro externo"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #151."
  },
  {
    "id": "pdf-128",
    "type": "multiple",
    "topic": "Datos",
    "text": "Una aplicación de compras en línea permite a los clientes seleccionar la cantidad de artículos de diferentes productos y agregar artículos al carrito de compras. En el carrito de compras, la aplicación muestra el precio de cada tipo de artículo, indica la cantidad de cada tipo de artículo, calcula los precios totales de los artículos y calcula el costo total de todos los artículos en el carrito de compras. La aplicación extrae el precio de cada tipo de artículo de una página de datos que hace referencia a un sistema de gestión de inventario externo. Seleccione dos pruebas unitarias útiles para desarrollar la página del carrito de compras. (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Verifique que la página de datos tenga los precios correctos de los artículos."
      },
      {
        "id": "b",
        "text": "Verifique que la transformación de datos copie el valor correcto de la página de datos a la página del carrito de compras."
      },
      {
        "id": "c",
        "text": "Verifique que los campos de precios se muestran en el formato correcto."
      },
      {
        "id": "d",
        "text": "Verificar que la propiedad de costo total del pedido se calcule con precisión"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #152."
  },
  {
    "id": "pdf-129",
    "type": "single",
    "topic": "Datos",
    "text": "Mientras prueba un formulario, necesita verificar el contenido de una página de datos en la memoria. ¿Qué herramienta utiliza para ver el contenido actual de la página de datos?",
    "options": [
      {
        "id": "a",
        "text": "La herramienta Portapapeles (Clipboard)"
      },
      {
        "id": "b",
        "text": "Diseñador de casos"
      },
      {
        "id": "c",
        "text": "El Explorador de datos"
      },
      {
        "id": "d",
        "text": "Interfaz de usuario en vivo"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #153."
  },
  {
    "id": "pdf-130",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "Configura un nivel de servicio para ajustar la urgencia de la asignación a 100 cuando transcurre el intervalo del objetivo. ¿Cómo afecta la urgencia de la asignación la fecha límite y los intervalos de fecha límite vencidos?",
    "options": [
      {
        "id": "a",
        "text": "El valor de urgencia permanece en 100, pero continúa el procesamiento de otros niveles de servicio. (Se recuerda que la urgencia límite es 100, si se alcanza el cien antes de terminar, continúa en cien, sin importar que)"
      },
      {
        "id": "b",
        "text": "El valor de urgencia continúa aumentando según lo configurado."
      },
      {
        "id": "c",
        "text": "El procesamiento del nivel de servicio se detiene hasta que se completa la asignación."
      },
      {
        "id": "d",
        "text": "Se notifica al usuario que se ha alcanzado la máxima urgencia."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #154."
  },
  {
    "id": "pdf-131",
    "type": "multiple",
    "topic": "General",
    "text": "Está creando un formulario que contiene una lista de cursos. Los usuarios seleccionarán los cursos en los que quiere inscribirse. ¿Qué dos tareas deben tener lugar en Designer Studio(DevStudio)? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Habilite la edición de secciones y configure la casilla de verificación de selección eliminando el título."
      },
      {
        "id": "b",
        "text": "Cree una propiedad de lista de grupos de campos y convierta la propiedad en una referencia de datos."
      },
      {
        "id": "c",
        "text": "Configure la vista en modo Ejecutar y cambie el orden de las columnas en la vista."
      },
      {
        "id": "d",
        "text": "Edite la propiedad de la lista de grupos de campos y configure el acceso a datos para copiar datos de una página de datos."
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #155."
  },
  {
    "id": "pdf-132",
    "type": "multiple",
    "topic": "General",
    "text": "Considere el siguiente escenario: - Durante el proceso de entrevista para un caso de solicitud de empleo, un asistente administrativo selecciona la fecha y el lugar de la entrevista. - A continuación, se envía un correo electrónico de confirmación al candidato. - Durante la entrevista, el gerente de contratación captura notas de la discusión. - Finalmente, se asigna al candidato un ejercicio técnico y los resultados se agregan al caso. Seleccione dos nombres de pasos que sigan las pautas para identificar y nombrar los pasos en el proceso. (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Notificar al candidato"
      },
      {
        "id": "b",
        "text": "Hacer preguntas"
      },
      {
        "id": "c",
        "text": "Programar entrevista"
      },
      {
        "id": "d",
        "text": "Ejercicio técnico"
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #156."
  },
  {
    "id": "pdf-133",
    "type": "single",
    "topic": "General",
    "text": "Un proceso dirige las solicitudes de préstamo a un oficial de préstamo específico según el tipo de préstamo. - Si el préstamo es una hipoteca, se enruta a Adam Ross. Si el préstamo es para un automóvil, se envía a Julia Samuels. - Si el préstamo es una línea de equidad, el caso se envía a Don Smith. ¿Cómo se configura un enrutador para garantizar que el caso avance al oficial de préstamo correcto?",
    "options": [
      {
        "id": "a",
        "text": "Dirija el caso a una lista de trabajo usando un enrutador calificado (Skill routing)."
      },
      {
        "id": "b",
        "text": "Dirija el caso a una cola de trabajo utilizando una condición Cuando."
      },
      {
        "id": "c",
        "text": "Dirija el caso a una cola de trabajo utilizando un enrutador calificado (Skill routing)."
      },
      {
        "id": "d",
        "text": "Dirija el caso a una lista de trabajo utilizando una condición Cuándo."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #157."
  },
  {
    "id": "pdf-134",
    "type": "single",
    "topic": "General",
    "text": "Está configurando un caso de reclamo de accidente para una compañía de seguros de automóviles con dos casos hijos como se ilustra. ¿Cómo se suspende el procesamiento de un caso de Reclamo por accidente hasta que se resuelvan los casos de Daños al vehículo y Lesiones corporales?",
    "options": [
      {
        "id": "a",
        "text": "Agregue una forma de espera al caso principal, pausando el caso principal hasta que se resuelvan los casos secundarios."
      },
      {
        "id": "b",
        "text": "Agregar un acuerdo de nivel de servicio para resolver los casos menores dentro de los 90 días."
      },
      {
        "id": "c",
        "text": "Agregue una espera de 30 días al caso principal para dar tiempo a que se resuelvan los casos secundarios."
      },
      {
        "id": "d",
        "text": "Agregue una forma de aprobación a cada uno de los casos secundarios para resolver los casos. w"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #158."
  },
  {
    "id": "pdf-135",
    "type": "single",
    "topic": "Datos",
    "text": "¿Qué fuente selecciona para una página de datos que contiene los detalles de un solo registro para un tipo de datos?",
    "options": [
      {
        "id": "a",
        "text": "Definición de informe (Report Definition)"
      },
      {
        "id": "b",
        "text": "Transformación de datos (DataTransform)"
      },
      {
        "id": "c",
        "text": "Conector"
      },
      {
        "id": "d",
        "text": "Búsqueda (LookUp)"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #159."
  },
  {
    "id": "pdf-136",
    "type": "single",
    "topic": "General",
    "text": "Las opciones de color están disponibles para el cliente, pero las opciones están disponibles en la pantalla y no aparecen con la ventana emergente. ¿Qué opción para configurar la opción de color?",
    "options": [
      {
        "id": "a",
        "text": "Desplegable - Dropdown"
      },
      {
        "id": "b",
        "text": "Botón de opción - Radio button"
      },
      {
        "id": "c",
        "text": "Casilla de verificación - Check box"
      },
      {
        "id": "d",
        "text": "Autocompletar/campo de texto/búsqueda **Esta pregunta sale diferente en otros cuestionarios: Cual control le permite al cliente seleccionar solo una opción de color."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #160."
  },
  {
    "id": "pdf-137",
    "type": "single",
    "topic": "General",
    "text": "¿Qué herramienta utiliza para identificar el texto alternativo que falta en una imagen?",
    "options": [
      {
        "id": "a",
        "text": "Herramienta Portapapeles - Clipboard tool"
      },
      {
        "id": "b",
        "text": "Inspector de accesibilidad - Accessibility Inspector"
      },
      {
        "id": "c",
        "text": "Tracer"
      },
      {
        "id": "d",
        "text": "vive ul - Live Ul"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #161."
  },
  {
    "id": "pdf-138",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos reglas localiza utilizando el asistente de localización? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Grupos de Trabajo"
      },
      {
        "id": "b",
        "text": "Párrafo"
      },
      {
        "id": "c",
        "text": "Fragmento de correspondencia"
      },
      {
        "id": "d",
        "text": "Valor del campo (Field Value)"
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #162."
  },
  {
    "id": "pdf-139",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué tres afirmaciones son verdaderas sobre las prácticas de DevOps en prioridad pega? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Se prefiere la entrega intermitente para ayudar a planificar lanzamientos predecibles."
      },
      {
        "id": "b",
        "text": "Los criterios de aceptación ayudan a enfocar la implementación centrada en el cliente"
      },
      {
        "id": "c",
        "text": "Pega puede integrar herramientas DevOps de terceros para promover la flexibilidad."
      },
      {
        "id": "d",
        "text": "DevOps promueve lanzamientos más grandes en ciclos de desarrollo más cortos."
      },
      {
        "id": "e",
        "text": "Se ejecutan pruebas antes de publicar los cambios para garantizar la compatibilidad."
      }
    ],
    "correctOptionIds": [
      "a",
      "c",
      "e"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #163."
  },
  {
    "id": "pdf-140",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "¿Qué requisito se implementa mejor usando un paso de espera en un caso?",
    "options": [
      {
        "id": "a",
        "text": "Debe pausar un caso hasta que un usuario cargue un documento firmado."
      },
      {
        "id": "b",
        "text": "No puede continuar con un informe de gastos hasta que un gerente apruebe la solicitud."
      },
      {
        "id": "c",
        "text": "No puede completar un caso de compra en un sitio web a menos que complete un nuevo subcaso de cuenta."
      },
      {
        "id": "d",
        "text": "Debe enviar un correo electrónico después de que un usuario complete un formulario."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #164."
  },
  {
    "id": "pdf-141",
    "type": "single",
    "topic": "General",
    "text": "Dada una tabla que muestra el total de horas de trabajo, enfermedad, vacaciones. Identificar cómo calculamos los valores respectivos",
    "options": [
      {
        "id": "a",
        "text": "Total de horas de trabajo"
      },
      {
        "id": "b",
        "text": "campo de cálculo, transformación de datos"
      },
      {
        "id": "c",
        "text": "Horas de enfermedad"
      },
      {
        "id": "d",
        "text": "Horas de licencia"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #165."
  },
  {
    "id": "pdf-142",
    "type": "single",
    "topic": "General",
    "text": "Necesita seleccionar una opción de gravedad que sea la mejor",
    "options": [
      {
        "id": "a",
        "text": "Lista de selección"
      },
      {
        "id": "b",
        "text": "Botón de opción"
      },
      {
        "id": "c",
        "text": "Casilla de verificación"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #166."
  },
  {
    "id": "pdf-143",
    "type": "multiple",
    "topic": "General",
    "text": "Identificar texto, relación de datos de registro múltiple, relación de datos de registro único",
    "options": [
      {
        "id": "a",
        "text": ".Address( 1 ).pincode-Multi"
      },
      {
        "id": "b",
        "text": ".ShippingAddress.City-Text"
      },
      {
        "id": "c",
        "text": ".BillingAddress.Telephone-Single Answer: C 168. En una aplicación bancaria, ¿cuáles dos opciones deben usarse juntas para presentar a los usuarios un conjunto de opciones de transferencia de saldo sólo si eligen transferir un saldo a su tarjeta de crédito? (Escoge dos)"
      },
      {
        "id": "a",
        "text": "Agregar un conjunto de acciones en el diseño que contiene las ofertas de transferencia de saldo para activar una actualización"
      },
      {
        "id": "b",
        "text": "Agregar una condición visible en la casilla de verificación para la elección de transferencia de saldo"
      },
      {
        "id": "c",
        "text": "Agregar un conjunto de acciones en la casilla de verificación para que la elección de transferencia de saldo active una actualización"
      },
      {
        "id": "d",
        "text": "Agregar una condición visible en el diseño que contiene las ofertas de transferencia de saldo"
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #167."
  },
  {
    "id": "pdf-144",
    "type": "single",
    "topic": "Reportes",
    "text": "Una aplicación de recursos humanos contiene informes que se utilizan para revisar las prácticas de contratación. El gerente de producto le ha pedido que pruebe el informe de capacitación de contratación reciente. ¿Cómo se ejecuta una prueba unitaria en el informe?",
    "options": [
      {
        "id": "a",
        "text": "Crear una copia de la regla y usar la ventana de regla de ejecución"
      },
      {
        "id": "b",
        "text": "Inicializar la regla con datos de prueba usando la ventana de regla de ejecución"
      },
      {
        "id": "c",
        "text": "Identificar una página de prueba de datos para probar la unidad de la regla"
      },
      {
        "id": "d",
        "text": "Ejecutar la definición del informe utilizando el contenido de una tabla de base de datos"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #169."
  },
  {
    "id": "pdf-145",
    "type": "single",
    "topic": "General",
    "text": "Una aplicación permite a los consultores ingresar semanalmente las horas trabajadas en un proyecto. Las horas de los consultores necesitan la aprobación del gerente y del supervisor del proyecto. Las aprobaciones pueden ocurrir en cualquier orden. ¿Qué configuración de aprobación cumple con este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Configurar un proceso paralelo(Parallel Process) para cada una de las aprobaciones requeridas"
      },
      {
        "id": "b",
        "text": "Agregar la aprobación del administrador a una etapa alternativa en el ciclo de vida del caso"
      },
      {
        "id": "c",
        "text": "Agregar una acción opcional para cada aprobación en la etapa adecuada"
      },
      {
        "id": "d",
        "text": "Configurar una única aprobación en cascada basada en una matriz de autoridad"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #171."
  },
  {
    "id": "pdf-146",
    "type": "single",
    "topic": "Case Management",
    "text": "Está creando una nueva aplicación de reserva en la plataforma pega con un tipo de caso que muestra las diversas cuentas de un cliente y les permite realizar transacciones bancarias. El objeto de datos de transacción permite a los clientes disputar una transacción. El sistema proporciona una lista desplegable de motivos de la disputa, que se recopilan junto con el ID de la transacción. De acuerdo con las mejores prácticas de pega, ¿qué opción utiliza para obtener el objeto de datos de transacción?",
    "options": [
      {
        "id": "a",
        "text": "Sistema de registro externo"
      },
      {
        "id": "b",
        "text": "Una página de datos"
      },
      {
        "id": "c",
        "text": "Sistema de registro de la plataforma Pega"
      },
      {
        "id": "d",
        "text": "Sin sistema de registro"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #172."
  },
  {
    "id": "pdf-147",
    "type": "single",
    "topic": "Datos",
    "text": "Un caso de transacción interrumpida registra la información de la cuenta mediante una propiedad de página. La información de la cuenta se registra en el momento en que se crea el caso y no se actualiza cuando se sigue procesando el caso. La información de la cuenta se almacena en un sistema externo y se accede a ella mediante una página de datos. ¿Cómo se configura la página de información de la cuenta?",
    "options": [
      {
        "id": "a",
        "text": "Seleccione referirse a una página de datos en la propiedad de la página"
      },
      {
        "id": "b",
        "text": "Configure la propiedad de la página para hacer referencia a una página de datos con clave"
      },
      {
        "id": "c",
        "text": "Defina una propiedad de referencia que haga referencia a la página de datos"
      },
      {
        "id": "d",
        "text": "Seleccione copiar de una página de datos en la propiedad de la página"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #173."
  },
  {
    "id": "pdf-148",
    "type": "multiple",
    "topic": "Integración",
    "text": "¿En cuáles dos de las siguientes situaciones simulará una integración? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "El servicio tiene tiempos de respuesta lentos."
      },
      {
        "id": "b",
        "text": "El servicio aún no está disponible."
      },
      {
        "id": "c",
        "text": "Debe probar cada ruta de flujo en el procesamiento del caso."
      },
      {
        "id": "d",
        "text": "El conector está configurado para usar la configuración de recursos globales."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #174."
  },
  {
    "id": "pdf-149",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo se propagan los datos a un nuevo caso infantil (Child Case) en Pega Express/AppStudio?",
    "options": [
      {
        "id": "a",
        "text": "Configurar una página de datos para copiar propiedades específicas."
      },
      {
        "id": "b",
        "text": "Configurar un cálculo de casos para copiar propiedades especificadas."
      },
      {
        "id": "c",
        "text": "Configure la forma Actualizar caso para copiar las propiedades especificadas."
      },
      {
        "id": "d",
        "text": "Configure la forma Crear caso para copiar las propiedades especificadas."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #175."
  },
  {
    "id": "pdf-150",
    "type": "single",
    "topic": "General",
    "text": "Al procesar un reclamo por accidente automovilístico, el sistema requiere tres aprobaciones: la aprobación del ajustador que inspeccionó el automóvil, la aprobación del administrador médico que brindó atención médica al asegurado y la aprobación del agente de seguros que verificó el reclamo. ¿Cómo implementa los requisitos para que cada aprobador pueda trabajar de forma independiente?",
    "options": [
      {
        "id": "a",
        "text": "Crear tres procesos paralelos con asignaciones de aprobación."
      },
      {
        "id": "b",
        "text": "Diríjase a una cesta de trabajo a la que tengan acceso los tres roles."
      },
      {
        "id": "c",
        "text": "Crear lógica de negocios para enrutar a los diferentes aprobadores."
      },
      {
        "id": "d",
        "text": "Crear un paso de aprobación con aprobación en cascada."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #176."
  },
  {
    "id": "pdf-151",
    "type": "single",
    "topic": "General",
    "text": "Quiere que los operadores en dos unidades separadas puedan realizar el trabajo enrutado a cualquiera de las dos unidades. ¿Qué configuración admite este requisito?",
    "options": [
      {
        "id": "a",
        "text": "En el registro de cada operador, asocie el operador con ambas unidades."
      },
      {
        "id": "b",
        "text": "En el registro de cada operador, asocie el operador con el mismo grupo de trabajo."
      },
      {
        "id": "c",
        "text": "En el registro del grupo de trabajo, asocie los operadores con el grupo de trabajo."
      },
      {
        "id": "d",
        "text": "En cada registro de unidad, asocie ambos operadores con cada unidad."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #177."
  },
  {
    "id": "pdf-152",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "Una acción de flujo llama a una transformación de datos de preprocesamiento para iniciar valores. Hay varias acciones de flujo disponibles para la asignación. Desea asegurarse de que los valores solo se inicien una vez para cada flujo acción. ¿Cómo se implementa una solución?",
    "options": [
      {
        "id": "a",
        "text": "No hacer nada. La transformación de datos de preprocesamiento solo se llama una vez para cada asignación."
      },
      {
        "id": "b",
        "text": "Asegúrese de que la acción de flujo no tenga la mayor probabilidad, ya que siempre se invocará."
      },
      {
        "id": "c",
        "text": "Configure la transformación de datos como posprocesamiento en lugar de preprocesamiento."
      },
      {
        "id": "d",
        "text": "Agregue lógica a la transformación de datos de preprocesamiento para probar si los valores ya se iniciaron."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #178."
  },
  {
    "id": "pdf-153",
    "type": "single",
    "topic": "General",
    "text": "¿Cómo identifica si no se puede devolver un resultado en una regla de decisión?",
    "options": [
      {
        "id": "a",
        "text": "Prueba de condiciones faltantes"
      },
      {
        "id": "b",
        "text": "Prueba de integridad"
      },
      {
        "id": "c",
        "text": "Prueba de la regla usando una prueba unitaria"
      },
      {
        "id": "d",
        "text": "Prueba de conflictos"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #179."
  },
  {
    "id": "pdf-154",
    "type": "single",
    "topic": "General",
    "text": "Un formulario debe respaldar la accesibilidad. ¿Cómo permite que un usuario especifique una fecha?",
    "options": [
      {
        "id": "a",
        "text": "Configure un cuadro de texto para permitir la entrada de fechas."
      },
      {
        "id": "b",
        "text": "Use un control de calendario que muestre un año completo."
      },
      {
        "id": "c",
        "text": "Usar un control de calendario que muestre un mes completo."
      },
      {
        "id": "d",
        "text": "Proporcionar controles separados para mes, día y año."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #180."
  },
  {
    "id": "pdf-155",
    "type": "single",
    "topic": "General",
    "text": "¿Qué parte del contenido de la aplicación localiza mediante una regla de valor de campo / FieldValue?",
    "options": [
      {
        "id": "a",
        "text": "Etiquetas y valores desplegables en una regla de sección"
      },
      {
        "id": "b",
        "text": "Logotipos u otras imágenes en una regla de arnés"
      },
      {
        "id": "c",
        "text": "Instrucciones para el usuario en una regla de párrafo"
      },
      {
        "id": "d",
        "text": "Texto editable por el usuario en una regla de correspondencia"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #181."
  },
  {
    "id": "pdf-156",
    "type": "single",
    "topic": "Reportes",
    "text": "Se le ha pedido que cree un gráfico circular que muestre la cantidad de casos que ha creado cada gerente. Un informe de lista contiene columnas para el nombre del administrador, la identificación del caso y la oficina. ¿Cómo se configura el informe de lista para crear el gráfico circular?",
    "options": [
      {
        "id": "a",
        "text": "Agrupe la columna de ID de caso."
      },
      {
        "id": "b",
        "text": "Agrupe la columna del nombre del administrador."
      },
      {
        "id": "c",
        "text": "Resuma la columna del nombre del administrador."
      },
      {
        "id": "d",
        "text": "Resuma la columna de ID de caso"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #187."
  },
  {
    "id": "pdf-157",
    "type": "multiple",
    "topic": "UI / Experiencia de usuario",
    "text": "Se le ha pedido que cree una definición de informe que incluya información sobre las oficinas de ventas y los representantes de ventas. El gerente desea acceder al informe en el Navegador de informes en el portal del usuario. El gerente también quiere incluir el informe en una nueva categoría de informe específicamente para las ventas. grupo. ¿Qué dos configuraciones se requieren para admitir esta solicitud? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Seleccione la opción en el Navegador de informes que permite a los usuarios ver su informe."
      },
      {
        "id": "b",
        "text": "Cree una regla de categoría de informe para los informes de la oficina de ventas."
      },
      {
        "id": "c",
        "text": "Seleccione la opción de definición de informe que muestra su informe en el Explorador de informes."
      },
      {
        "id": "d",
        "text": "Agregar una categoría de informe para informes de grupos de ventas en el Explorador de informes."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #188."
  },
  {
    "id": "pdf-158",
    "type": "single",
    "topic": "Reportes",
    "text": "Ha creado un nuevo informe que contiene una lista de empleados, fechas de contratación y gerentes. Se le ha pedido que muestre a cada gerente en una fila. Debajo de cada fila de gerente, debe enumerar los empleados del gerente y sus fechas de contratación. ¿Cómo apoya esta solicitud?",
    "options": [
      {
        "id": "a",
        "text": "Agrupar la columna del administrador"
      },
      {
        "id": "b",
        "text": "Filtrar la columna del administrador"
      },
      {
        "id": "c",
        "text": "Resumir la columna del administrador"
      },
      {
        "id": "d",
        "text": "Ordenar la columna del administrador"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #189."
  },
  {
    "id": "pdf-159",
    "type": "multiple",
    "topic": "Reportes",
    "text": "¿Quédos declaraciones demuestran el papel de un informe? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Losinformes se utilizan para evaluar el rendimiento del proceso."
      },
      {
        "id": "b",
        "text": "Losinformes se utilizan para actualizar datos en una base de datos."
      },
      {
        "id": "c",
        "text": "Losinformes se utilizan para seleccionar elementos de una lista mientras se trabaja en una tarea."
      },
      {
        "id": "d",
        "text": "Losinformes se utilizan para generar una lista de elementos seleccionables mientras se trabaja en una tarea"
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #190."
  },
  {
    "id": "pdf-160",
    "type": "single",
    "topic": "Reportes",
    "text": "Se le pide que cree un informe que enumere los casos de pedidos de clientes con un valor total de pedido superior a 10000 USD ordenados por fecha de creación (pxCreateDate). El informe debe mostrar los siguientes tres campos: Id. de caso (pylD), Id. de cliente y Total del pedido. ¿Qué propiedad o combinación de propiedades debe optimizar para mejorar el rendimiento?",
    "options": [
      {
        "id": "a",
        "text": "Total del pedido"
      },
      {
        "id": "b",
        "text": "pxCreateDate"
      },
      {
        "id": "c",
        "text": "ID de cliente y total del pedido"
      },
      {
        "id": "d",
        "text": "pxCreateDate y orden"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #191."
  },
  {
    "id": "pdf-161",
    "type": "multiple",
    "topic": "General",
    "text": "Un formulario con una lista de restaurantes cercanos tiene cuatro columnas: Nombre del restaurante ubicación del restaurante Imagen en miniatura de la zona de asientos Reservar (marcar casilla) Desea asegurarse de que los usuarios tengan la información que necesitan para hacer una reserva, independientemente del tamaño de la pantalla. Cuando se ve en una pantalla pequeña, no necesita mostrar las imágenes. ¿Qué tres pasos de configuración toma para cumplir con este requisito? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Establezca la importancia de la columna de la imagen en Secundaria."
      },
      {
        "id": "b",
        "text": "Establezca la importancia de la columna Hacer reserva en Principal."
      },
      {
        "id": "c",
        "text": "Establezca la importancia de la columna de la imagen en Otro."
      },
      {
        "id": "d",
        "text": "Establezca la importancia de las columnas Nombre del restaurante y Hacer reserva en Principal."
      },
      {
        "id": "e",
        "text": "Establezca la importancia de la ubicación del restaurante y las columnas Hacer reserva en Secundario."
      },
      {
        "id": "f",
        "text": "Establezca la importancia de la columna Nombre del restaurante en Principal."
      }
    ],
    "correctOptionIds": [
      "c",
      "e",
      "f"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #192."
  },
  {
    "id": "pdf-162",
    "type": "single",
    "topic": "General",
    "text": "Una empresa requiere que los pacientes reciban actualizaciones de estado durante el procesamiento de pruebas médicas. Los pacientes no son usuarios de la aplicación. ¿Cree el grupo de trabajo para el paciente como una instancia de qué clase?",
    "options": [
      {
        "id": "a",
        "text": "Data-Party-Person"
      },
      {
        "id": "b",
        "text": "Data Party-Operator"
      },
      {
        "id": "c",
        "text": "Data-Party-Org"
      },
      {
        "id": "d",
        "text": "Data-Party-Com"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #193."
  },
  {
    "id": "pdf-163",
    "type": "single",
    "topic": "Procesos y flujos",
    "text": "¿Qué requisito se satisface configurando un acuerdo de nivel de servicio?",
    "options": [
      {
        "id": "a",
        "text": "Las solicitudes de los clientes con estatus élite van a un grupo de trabajo dedicado."
      },
      {
        "id": "b",
        "text": "Se completa una revisión de la transacción dentro de las 24 horas."
      },
      {
        "id": "c",
        "text": "Los usuarios son notificados cuando reciben una asignación."
      },
      {
        "id": "d",
        "text": "Los casos de disputas de transacciones se consideran más urgentes que los casos de cambio de dirección."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #194."
  },
  {
    "id": "pdf-164",
    "type": "single",
    "topic": "Case Management",
    "text": "Como parte del diseño del caso, después de que alguien completa una compra, la aplicación debe enviar un correo electrónico de confirmación. ¿Cómo se diseña el ciclo de vida del caso para enviar el correo electrónico?",
    "options": [
      {
        "id": "a",
        "text": "Como parte de la configuración de la etapa"
      },
      {
        "id": "b",
        "text": "Como una etapa alternativa tC. Como parte de la configuración de la caja"
      },
      {
        "id": "d",
        "text": "Como un paso de proceso separado"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #195."
  },
  {
    "id": "pdf-165",
    "type": "single",
    "topic": "General",
    "text": "En un caso tipo solicitud de compra, tiene el siguiente requisito: Las solicitudes de compra deben ir automáticamente a un gerente de un empleado. Para cumplir con este requisito, diseña un caso con un _______________.",
    "options": [
      {
        "id": "a",
        "text": "paso que enruta al gerente"
      },
      {
        "id": "b",
        "text": "paso de etapa de cambio para permitir que el empleado enrute al gerente"
      },
      {
        "id": "c",
        "text": "etapa para enrutar solicitudes al gerente"
      },
      {
        "id": "d",
        "text": "proceso que enruta al gerente"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #196."
  },
  {
    "id": "pdf-166",
    "type": "single",
    "topic": "General",
    "text": "¿Qué requisito se puede implementar mediante circunstanciación?",
    "options": [
      {
        "id": "a",
        "text": "Una aplicación establece una meta de cuatro horas para ajustar las reclamaciones de los clientes platino. Para otros clientes, la aplicación establece una meta de un día hábil."
      },
      {
        "id": "b",
        "text": "Una aplicación establece la opción de envío predeterminada para pedidos que excedan los USD100 a entrega en dos días. De lo contrario, la opción predeterminada es la entrega en cinco días."
      },
      {
        "id": "c",
        "text": "Una aplicación audita reclamos de seguros que un ajustador de seguros valora en USD10000 o más."
      },
      {
        "id": "d",
        "text": "Una aplicación enruta las solicitudes de actualización para clientes de EE. UU. a una cola de trabajo y las solicitudes de clientes europeos a una cola de trabajo diferente."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #197."
  },
  {
    "id": "pdf-167",
    "type": "multiple",
    "topic": "General",
    "text": "¿Cuáles son los dos requisitos que demuestran la necesidad de configurar la correspondencia(correos/mensajes)? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Envíe por fax un nuevo reclamo de seguro al taller de reparación de automóviles."
      },
      {
        "id": "b",
        "text": "Enviar un mensaje de texto al cliente con cambios de estado en un reclamo de seguro."
      },
      {
        "id": "c",
        "text": "Asignar un nuevo reclamo de seguro a un asistente social para que lo procese."
      },
      {
        "id": "d",
        "text": "Llamar por teléfono a un cliente para obtener información adicional sobre el caso."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #198."
  },
  {
    "id": "pdf-168",
    "type": "single",
    "topic": "Reportes",
    "text": "Mientras prueba un proceso comercial para aprobar un informe de gastos, recibe un error. ¿Qué herramienta le permite revisar la ejecución de la regla para determinar el origen del error?",
    "options": [
      {
        "id": "a",
        "text": "El rastreador - The tracker/ tracer"
      },
      {
        "id": "b",
        "text": "La herramienta Portapapeles"
      },
      {
        "id": "c",
        "text": "El Perfilador de aplicaciones"
      },
      {
        "id": "d",
        "text": "El Analizador de dependencias"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #199."
  },
  {
    "id": "pdf-169",
    "type": "multiple",
    "topic": "General",
    "text": "Creas una aplicación para rastrear las entregas de paquetes. Elija tres elementos que son esenciales para esta aplicación. (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Un caso secundario de cancelación de entrega"
      },
      {
        "id": "b",
        "text": "Un tipo de caso de seguimiento de envío"
      },
      {
        "id": "c",
        "text": "Un conjunto de campos para capturar los detalles de envío"
      },
      {
        "id": "d",
        "text": "Un grupo de trabajo para representar al cliente"
      },
      {
        "id": "e",
        "text": "Una vista de usuario para ingresar los detalles de envío"
      }
    ],
    "correctOptionIds": [
      "b",
      "c",
      "e"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #200."
  },
  {
    "id": "pdf-170",
    "type": "multiple",
    "topic": "General",
    "text": "Seleccione los tres beneficios de usar Captura Directa de Objetivos (DCO). (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Genere el código más reciente a partir de metáforas favorables a la empresa."
      },
      {
        "id": "b",
        "text": "Capacitar a los participantes del proyecto para revisar el progreso del desarrollo."
      },
      {
        "id": "c",
        "text": "Facilitar la colaboración entre el negocio y TI en torno a modelos de trabajo."
      },
      {
        "id": "d",
        "text": "Automatice los procesos comerciales personalizados."
      },
      {
        "id": "e",
        "text": "Ingrese y almacene los requisitos comerciales en la aplicación."
      }
    ],
    "correctOptionIds": [
      "a",
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #201."
  },
  {
    "id": "pdf-171",
    "type": "single",
    "topic": "General",
    "text": "Para calificar para un préstamo instantáneo, el solicitante debe ser mayor de 21 años y tener un ingreso mensual de al menos USD2000. ¿Cómo haces cumplir estas restricciones?",
    "options": [
      {
        "id": "a",
        "text": "Utilice dos reglas de edición y validación: una para la edad y otra para los ingresos."
      },
      {
        "id": "b",
        "text": "Utilice una única regla Validate con dos condiciones: una para la edad y otra para los ingresos."
      },
      {
        "id": "c",
        "text": "Configure los controles de UL para que solo acepten valores superiores a 21 para la edad y USD2000 para los ingresos."
      },
      {
        "id": "d",
        "text": "Utilice dos reglas de validación: una para la edad y otra para los ingresos."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #202."
  },
  {
    "id": "pdf-172",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Está definiendo una vista de usuario para una solicitud de préstamo. Si el solicitante del préstamo indica que existe una cuenta abierta, la fecha de apertura de la cuenta debe ser anterior a la fecha actual. Seleccione el enfoque que cumpla con los requisitos de validación.",
    "options": [
      {
        "id": "a",
        "text": "Utilice un control de lista de selección para verificar que la fecha de apertura de la cuenta sea anterior."
      },
      {
        "id": "b",
        "text": "Utilice una regla de validación para verificar que la fecha de apertura de la cuenta sea anterior."
      },
      {
        "id": "c",
        "text": "Utilice una regla de cuándo para verificar que la fecha de apertura de la cuenta sea anterior."
      },
      {
        "id": "d",
        "text": "Use un control de calendario para verificar que la fecha de apertura de la cuenta sea anterior."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #203."
  },
  {
    "id": "pdf-173",
    "type": "single",
    "topic": "General",
    "text": "Considere el siguiente escenario: un cliente presenta una denuncia de fraude. La queja es investigada por un agente de servicio al cliente. * El agente de servicio al cliente puede solicitar información adicional al cliente. * Se notifica al comerciante y se le dan 15 días para disputar el reclamo de fraude. * Si se aprueba el reclamo de fraude, se envía una declaración jurada al cliente y se registra un reembolso en su cuenta. ¿Cómo se llama el paso en el que el agente investiga la reclamación por fraude?",
    "options": [
      {
        "id": "a",
        "text": "Investigar reclamo"
      },
      {
        "id": "b",
        "text": "Investigación de reclamo"
      },
      {
        "id": "c",
        "text": "Reclamo de fraude"
      },
      {
        "id": "d",
        "text": "Investigar Fraude"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #204."
  },
  {
    "id": "pdf-174",
    "type": "single",
    "topic": "General",
    "text": "Considere el siguiente requisito: el paciente debe poder modificar los detalles del médico en cualquier momento sin afectar el procesamiento primario del caso. ¿Qué configuración satisface este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Agregue una acción opcional para todo el caso al ciclo de vida del caso."
      },
      {
        "id": "b",
        "text": "Agregar una etapa primaria con al menos un proceso al ciclo de vida del caso. un"
      },
      {
        "id": "c",
        "text": "Agregar una etapa alternativa con al menos un proceso al ciclo de vida del caso."
      },
      {
        "id": "d",
        "text": "Agregar una asignación al ciclo de vida del caso."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #205."
  },
  {
    "id": "pdf-175",
    "type": "single",
    "topic": "Case Management",
    "text": "Un requisito establece: Cuando un huésped de negocios se retira de un hotel, el huésped debe completar una revisión del hotel para recibir un descuento corporativo. Seleccione la relación de tipo de caso que satisfaga el requisito.",
    "options": [
      {
        "id": "a",
        "text": "Configure la revisión del hotel como un caso derivado de la solicitud de pago."
      },
      {
        "id": "b",
        "text": "Configurar la solicitud de pago como un caso secundario de revisión de hotel."
      },
      {
        "id": "c",
        "text": "Configure tanto la solicitud de pago como la revisión del hotel como casos de nivel superior."
      },
      {
        "id": "d",
        "text": "Configure la revisión del hotel como un caso secundario de la solicitud de pago."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #206."
  },
  {
    "id": "pdf-176",
    "type": "single",
    "topic": "General",
    "text": "Un requisito establece: Un cliente puede actualizar una dirección en cualquier momento durante el procesamiento del caso realizando los siguientes pasos. 1. El cliente envía la nueva dirección. 2. La aplicación verifica que la dirección coincida con los requisitos del servicio postal. 3. El cliente luego aprueba la dirección corregida. ¿Cómo se configura este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Agregue una acción opcional para todo el caso al flujo de trabajo para el envío de direcciones."
      },
      {
        "id": "b",
        "text": "Agregue un proceso opcional para todo el caso al flujo de trabajo del caso para realizar el cambio de dirección."
      },
      {
        "id": "c",
        "text": "Agregar una etapa alternativa al ciclo de vida del caso para cambiar la dirección."
      },
      {
        "id": "d",
        "text": "Agregue un botón a cada asignación para presentarle al cliente un formulario para enviar una nueva dirección."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #207."
  },
  {
    "id": "pdf-177",
    "type": "single",
    "topic": "General",
    "text": "Al procesar un caso principal Pl, se crean dos casos secundarios Cl y C-2. ¿Cuál de las siguientes afirmaciones sobre el procesamiento de Pl, Cl y C-2 es correcta?",
    "options": [
      {
        "id": "a",
        "text": "Pl debe resolverse antes de que Cl o C-2 puedan resolverse."
      },
      {
        "id": "b",
        "text": "Se debe resolver Cl o C-2 antes de poder resolver Pl."
      },
      {
        "id": "c",
        "text": "Cl debe resolverse antes de que pueda resolverse C-2."
      },
      {
        "id": "d",
        "text": "Tanto Cl como C-2 deben resolverse antes de poder resolver Pl."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #208."
  },
  {
    "id": "pdf-178",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué tres casos de uso demuestran el comportamiento dinámico de UI de Pega? (Elige tres)",
    "options": [
      {
        "id": "a",
        "text": "Mostrar un mensaje al enviar el formulario que indica que un campo de fecha debe estar en el futuro."
      },
      {
        "id": "b",
        "text": "Desenmascarar un campo de contraseña cuando los usuarios hacen clic en un icono."
      },
      {
        "id": "c",
        "text": "Calcule automáticamente el total del pedido cuando los usuarios cambien las cantidades."
      },
      {
        "id": "d",
        "text": "Mostrar campos de información de socios cuando se carga una pantalla para solicitantes casados."
      },
      {
        "id": "e",
        "text": "Muestre una sección de dirección de envío cuando los usuarios seleccionen la casilla de verificación Diferente a la dirección de facturación."
      }
    ],
    "correctOptionIds": [
      "b",
      "d",
      "e"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #209."
  },
  {
    "id": "pdf-179",
    "type": "single",
    "topic": "General",
    "text": "Está implementando un formulario UI para recopilar información sobre los solicitantes de empleo. Los usuarios deben proporcionar valores a ciertos campos antes de enviar el formulario. ¿Qué configuración agrega asteriscos para indicar los campos obligatorios en el formulario?",
    "options": [
      {
        "id": "a",
        "text": "Usar una regla de validación para verificar que los campos obligatorios tengan un valor"
      },
      {
        "id": "b",
        "text": "Configurar los campos obligatorios como obligatorios en la regla de la sección"
      },
      {
        "id": "c",
        "text": "Usar varias reglas de validación para cada campo obligatorio"
      },
      {
        "id": "d",
        "text": "Usar una regla de edición de validación para verificar si cada uno de los campos obligatorios propiedades tiene un valor **Repetida"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #210."
  },
  {
    "id": "pdf-180",
    "type": "single",
    "topic": "General",
    "text": "En una aplicación de reserva de hotel, un formulario muestra una lista de hoteles con habitaciones disponibles según las fechas de entrada y salida ingresadas por los usuarios. ¿Cómo se configura el formulario para actualizar la lista de hoteles cada vez que cambia la fecha de entrada o salida?",
    "options": [
      {
        "id": "a",
        "text": "Muestre el hotel en una sección incrustada con una condición visible."
      },
      {
        "id": "b",
        "text": "Configure las validaciones de edición en los campos de fecha para actualizar la sección cuando cambien los valores de fecha."
      },
      {
        "id": "c",
        "text": "Configure conjuntos de acciones en los campos de fecha para actualizar la sección cuando cambien los valores de fecha."
      },
      {
        "id": "d",
        "text": "Configure un conjunto de acciones en la visualización de la lista de hoteles para actualizar la sección cuando cambie la lista de hoteles."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #211."
  },
  {
    "id": "pdf-181",
    "type": "single",
    "topic": "General",
    "text": "Configura una aplicación para permitir que los usuarios descarguen una aplicación móvil. Cuando los usuarios seleccionan una de las tres plataformas compatibles (Android, iOS o Windows Mobile), la aplicación abre una nueva ventana que apunta a la tienda de aplicaciones adecuada. ¿Cómo se configura este comportamiento?",
    "options": [
      {
        "id": "a",
        "text": "Agregue un botón para cada plataforma y configure un conjunto de acciones para cada botón. En cada conjunto de acciones, especifique un evento de clic y agregue una acción que abra la URL del proveedor en una ventana."
      },
      {
        "id": "b",
        "text": "Agregue un botón y configure tres conjuntos de acciones. En cada conjunto de acciones, especifique un evento de clic y agregue una acción que abra la URL del proveedor en una ventana."
      },
      {
        "id": "c",
        "text": "Agregar un botón y configurar un conjunto de acciones. En el conjunto de acciones, especifique un evento de clic con tres acciones para abrir la URL de cada proveedor en una ventana. Aplique una regla de cuándo a cada acción para determinar la URL correcta."
      },
      {
        "id": "d",
        "text": "Agregue tres casillas de verificación y un botón. Para cada casilla de verificación, configure un conjunto de acciones con un evento de clic para establecer el valor de la URL. Para el botón, configure un conjunto de acciones con un evento de clic para abrir la URL en un ventana."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #212."
  },
  {
    "id": "pdf-182",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "¿Cuáles son los componentes mínimos de un conjunto de acciones de interfaz de usuario (Ul)?",
    "options": [
      {
        "id": "a",
        "text": "Dos acciones y un evento"
      },
      {
        "id": "b",
        "text": "Una acción y un evento"
      },
      {
        "id": "c",
        "text": "Una acción, un evento y una condición"
      },
      {
        "id": "d",
        "text": "Una acción y una condición"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #213."
  },
  {
    "id": "pdf-183",
    "type": "single",
    "topic": "General",
    "text": "Los usuarios pueden acceder a una aplicación de búsqueda de apartamento desde diferentes dispositivos con diferentes tamaños de pantalla. Una pantalla muestra las fotos de las propiedades disponibles. Por defecto, las fotos se muestran en tres columnas. Cuando el ancho de la pantalla es inferior a 800 píxeles, las fotos deben mostrarse en dos columnas. ¿Cómo se implementa la pantalla para este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Use un diseño dinámico con un punto de interrupción receptivo a 800 píxeles para cambiar de formato triple de cuadrícula en línea a formato doble de cuadrícula en línea."
      },
      {
        "id": "b",
        "text": "Use un diseño de columna con un punto de interrupción receptivo a 800 píxeles para ocultar la columna izquierda."
      },
      {
        "id": "c",
        "text": "Circunstancia del diseño para mostrar un número diferente de columnas en diferentes tamaños de pantalla."
      },
      {
        "id": "d",
        "text": "Circunstancia de la regla de la sección para mostrar un número diferente de columnas en diferentes tamaños de pantalla."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #214."
  },
  {
    "id": "pdf-184",
    "type": "multiple",
    "topic": "General",
    "text": "¿Cuáles de estas opciones se configuran normalmente en un diseño dinámico? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Alinear columnas y filas para presentar datos en una hoja de cálculo"
      },
      {
        "id": "b",
        "text": "Posicionamiento de etiquetas"
      },
      {
        "id": "c",
        "text": "Número de columnas en cada fila"
      },
      {
        "id": "d",
        "text": "Alineación de valores de campo"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #215."
  },
  {
    "id": "pdf-185",
    "type": "multiple",
    "topic": "General",
    "text": "Elija dos escenarios que configure mediante el procesamiento de procedimientos. (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Una página de pedido de recetas con una lista de recetas disponibles enviadas por el proveedor de atención médica del cliente. Cuando el usuario opta por surtir una o más recetas, el resumen de costos se actualiza."
      },
      {
        "id": "b",
        "text": "Una página de reserva de restaurante en la que el usuario elige una reserva y el sistema devuelve las mesas disponibles."
      },
      {
        "id": "c",
        "text": "Una página de solicitud de orden de compra con un resumen de artículos. El precio total del pedido se actualiza después de que el cliente cambia una cantidad."
      },
      {
        "id": "d",
        "text": "Una página de reserva de vuelos donde los clientes pueden ajustar la ubicación y la fecha de los vuelos de salida y regreso. Los precios de los boletos se recalculan después de que el cliente elige la opción \"recalcular precio\"."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #216."
  },
  {
    "id": "pdf-186",
    "type": "multiple",
    "topic": "General",
    "text": "¿En qué dos situaciones configura el almacenamiento local de datos? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Definición de valores válidos para una propiedad"
      },
      {
        "id": "b",
        "text": "Almacenamiento en caché de datos recuperados de un sistema externo"
      },
      {
        "id": "c",
        "text": "Almacenamiento de datos de referencia como parte de la aplicación"
      },
      {
        "id": "d",
        "text": "Almacenamiento de datos de casos en una aplicación"
      }
    ],
    "correctOptionIds": [
      "a",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #217."
  },
  {
    "id": "pdf-187",
    "type": "single",
    "topic": "Datos",
    "text": "Una página de datos contiene información del producto y tiene el campo Recargar si tiene más de 30 minutos. La página de datos se crea a las 7:43. Luego, el usuario realiza las siguientes acciones: 8:10, el usuario actualiza la información del producto 8:45, el usuario actualiza la información del producto ¿A qué hora es la página de datos? ¿recargado?",
    "options": [
      {
        "id": "a",
        "text": "8:13"
      },
      {
        "id": "b",
        "text": "8:10"
      },
      {
        "id": "c",
        "text": "8:40"
      },
      {
        "id": "d",
        "text": "8:45"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #218."
  },
  {
    "id": "pdf-188",
    "type": "single",
    "topic": "General",
    "text": "Un cliente quiere copiar el contenido de un pedido anterior a su pedido actual. ¿Qué tipo de regla usa para copiar el contenido del pedido?",
    "options": [
      {
        "id": "a",
        "text": "Página de datos"
      },
      {
        "id": "b",
        "text": "Transformación de datos"
      },
      {
        "id": "c",
        "text": "Declarar expresión"
      },
      {
        "id": "d",
        "text": "Función"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #219."
  },
  {
    "id": "pdf-189",
    "type": "single",
    "topic": "Case Management",
    "text": "Está configurando una aplicación para procesar reservas de viajes. El caso de reserva crea casos secundarios para cada componente de reserva: vuelo, estadía en hotel y alquiler de vehículos. ¿Cómo se actualiza el costo total de la reserva a medida que los usuarios actualizan cada caso secundario?",
    "options": [
      {
        "id": "a",
        "text": "Defina un cálculo de caso para actualizar el total de la reserva con el total de cada caso secundario."
      },
      {
        "id": "b",
        "text": "Configure la forma Crear caso para propagar el costo total de cada caso secundario a su servicio. *Cree una expresión de declaración para actualizar el total de la reserva cuando cambie el costo de cada componente."
      },
      {
        "id": "c",
        "text": "Agregue la forma Actualizar caso al tipo de caso Reservación para capturar los cambios en el costo de cada componente."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #220."
  },
  {
    "id": "pdf-190",
    "type": "single",
    "topic": "General",
    "text": "Al diseñar su aplicación, desea aplicar estilos visuales consistentes a todas las partes de la aplicación. ¿Cómo cumples con este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Especifique una máscara en la regla de aplicación."
      },
      {
        "id": "b",
        "text": "Aplicar estilos al diseño de la pantalla."
      },
      {
        "id": "c",
        "text": "Use la herramienta Live Ul para seleccionar la regla de máscara."
      },
      {
        "id": "d",
        "text": "Especifique una máscara en la regla de arnés."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #223."
  },
  {
    "id": "pdf-191",
    "type": "single",
    "topic": "General",
    "text": "Con el enfoque Situational Layer Cake de Pega, ¿cómo se configura una variación regional para los casos de tiempo libre de Recursos Humanos (HR)?",
    "options": [
      {
        "id": "a",
        "text": "Cree una regla para la variación y agregue la regla a la capa común de la aplicación."
      },
      {
        "id": "b",
        "text": "Cree una regla para la variación y reemplace la regla de tiempo libre de recursos humanos existente en la capa común de la aplicación."
      },
      {
        "id": "c",
        "text": "Cree una regla para la variación y agréguela a una capa de aplicación común secundaria."
      },
      {
        "id": "d",
        "text": "Cree una regla para la variación y agregue la regla a la capa para la región"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #224."
  },
  {
    "id": "pdf-192",
    "type": "single",
    "topic": "General",
    "text": "¿Qué necesidad empresarial aborda a través de la delegación?",
    "options": [
      {
        "id": "a",
        "text": "Un representante de servicio debe adjuntar el formulario correspondiente al enviar un correo electrónico a un cliente."
      },
      {
        "id": "b",
        "text": "Un oficial de riesgo desea ajustar el umbral de ingresos para los préstamos para automóviles."
      },
      {
        "id": "c",
        "text": "Un supervisor de atención desea autorizar una segunda opinión para un reclamo de seguro."
      },
      {
        "id": "d",
        "text": "Un director general debe aprobar las propuestas de catering que superen los 5000 EUR"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #225."
  },
  {
    "id": "pdf-193",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Desea que su aplicación tenga un estilo uniforme en todos los portales. Desea que el color de fondo de todos los botones de su aplicación sea azul. Desea que el color de fondo de los botones se actualice fácilmente en caso de que cambie la marca corporativa. ¿Qué atributo modifica para establecer el color de fondo?",
    "options": [
      {
        "id": "a",
        "text": "La máscara de la aplicación"
      },
      {
        "id": "b",
        "text": "El formato de los botones"
      },
      {
        "id": "c",
        "text": "El formato de los controles"
      },
      {
        "id": "d",
        "text": "La mezcla de fondo"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #226."
  },
  {
    "id": "pdf-194",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Usted crea una aplicación para que los empleados envíen hojas de tiempo. Los empleados ingresan el trabajo, las vacaciones y el tiempo de enfermedad para una semana en particular. En el formulario de entrada, los empleados ven un resumen del total de horas ingresadas. Después de que el empleado envía la hoja de tiempo, la aplicación muestra las vacaciones restantes y el tiempo de enfermedad del empleado. Configure la vista de usuario que muestra las vacaciones restantes y el tiempo de enfermedad. El saldo se calcula restando el tiempo de vacaciones y el tiempo de enfermedad de la semana de los saldos actuales de vacaciones y tiempo de enfermedad. ¿Qué opción de configuración se usa para resumir las vacaciones restantes y el tiempo de enfermedad?",
    "options": [
      {
        "id": "a",
        "text": "Utilice una regla Cuándo. Cuando la aplicación hace referencia a las vacaciones restantes y al tiempo de enfermedad, se calcula cada valor."
      },
      {
        "id": "b",
        "text": "Utilizar procesamiento declarativo. Cada vez que cambian las entradas de tiempo de vacaciones o tiempo de enfermedad, se calculan las vacaciones restantes y el tiempo de enfermedad."
      },
      {
        "id": "c",
        "text": "Use pyDefault y pySetFieldDefaults. Cuando el proceso invoca las transformaciones de datos, el resto Calculo de tiempo de vacaciones y enfermedad."
      },
      {
        "id": "d",
        "text": "Usar procesamiento procedimental con una transformación de datos. Las vacaciones restantes y el tiempo de enfermedad se calculan después de la el usuario envía una hoja de tiempo."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #227."
  },
  {
    "id": "pdf-195",
    "type": "multiple",
    "topic": "Procesos y flujos",
    "text": "¿Cuáles son las dos configuraciones que utiliza para validar la edad mínima de un nuevo cliente potencial en el paso de asignación Recopilar información de la cuenta? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Cree y edite la regla de validación para verificar la edad del cliente."
      },
      {
        "id": "b",
        "text": "Haga referencia a la regla Editar validación en la acción de flujo Recopilar información de la cuenta."
      },
      {
        "id": "c",
        "text": "Haga referencia a la regla Validar en la acción de flujo Recopilar información de la cuenta."
      },
      {
        "id": "d",
        "text": "Haga referencia a la regla Validar en la tarea Recopilar información de la cuenta."
      },
      {
        "id": "e",
        "text": "Haga referencia a la regla de validación de edición en la asignación Recopilar información de la cuenta."
      },
      {
        "id": "f",
        "text": "Creeunaregla de validación para verificar la edad del cliente."
      }
    ],
    "correctOptionIds": [
      "c",
      "f"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #228."
  },
  {
    "id": "pdf-196",
    "type": "single",
    "topic": "General",
    "text": "como parte de un itinerario de viaje. ¿Qué configuración muestra una casilla de verificación para permitir que los usuarios seleccionen un seguro de viaje solo si el itinerario incluye un vuelo?",
    "options": [
      {
        "id": "a",
        "text": "Una condición visible cuando se aplica a la casilla de verificación"
      },
      {
        "id": "b",
        "text": "Un conjunto de acciones aplicado a la casilla de verificación"
      },
      {
        "id": "c",
        "text": "Una expresión de declaración configurada para el encadenamiento directo"
      },
      {
        "id": "d",
        "text": "Una regla de validación aplicada a la acción de flujo"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #229."
  },
  {
    "id": "pdf-197",
    "type": "multiple",
    "topic": "General",
    "text": "Identifique los dos requisitos que se satisfacen mediante el uso de una transformación de datos. (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Mostrar los mismos datos en varias vistas de usuario."
      },
      {
        "id": "b",
        "text": "Convierta datos enteros en datos de texto."
      },
      {
        "id": "c",
        "text": "Copiar una orden existente a un nuevo caso."
      },
      {
        "id": "d",
        "text": "Validar el formato de un valor de propiedad."
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #230."
  },
  {
    "id": "pdf-198",
    "type": "multiple",
    "topic": "General",
    "text": "Una aplicación de ventas en línea es compatible tanto con computadoras portátiles como con dispositivos móviles. Está configurando la máscara(Skin) de la aplicación y observa que el diseño receptivo(Responsive) en el dispositivo móvil no muestra las vistas que requieren las partes interesadas. ¿Qué dos opciones le permiten resolver esta situación sin afectar negativamente a los usuarios de portátiles? (Escoge dos.)",
    "options": [
      {
        "id": "a",
        "text": "Use la misma máscara(Skin) de aplicación en todos los portales."
      },
      {
        "id": "b",
        "text": "Actualizar el proceso para brindar a los usuarios móviles un portal separado."
      },
      {
        "id": "c",
        "text": "No use una máscara(Skin) para la versión de la aplicación móvil."
      },
      {
        "id": "d",
        "text": "Ajuste el comportamiento receptivo(Responsive) en la máscara(Skin) para una visualización óptima en el portal móvil."
      }
    ],
    "correctOptionIds": [
      "a",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #231."
  },
  {
    "id": "pdf-199",
    "type": "single",
    "topic": "Case Management",
    "text": "Está creando un tipo de caso para procesar solicitudes de empleo para una gran corporación. Las solicitudes de empleo para puestos de seguridad requieren una evaluación física además de la verificación estándar de antecedentes penales. La evaluación física puede ocurrir antes o después de la verificación de antecedentes. ¿Cómo se configura un tipo de caso para lograr el comportamiento requerido?",
    "options": [
      {
        "id": "a",
        "text": "Cree un proceso para la evaluación física seguido de un proceso para la verificación de antecedentes."
      },
      {
        "id": "b",
        "text": "Crear un proceso para la evaluación física que sea paralelo al proceso de verificación de antecedentes."
      },
      {
        "id": "c",
        "text": "Crear un proceso en una etapa para la verificación de antecedentes y un proceso en otra etapa para la evaluación física."
      },
      {
        "id": "d",
        "text": "Crear un proceso para la verificación de antecedentes y un proceso opcional para la evaluación física."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #237."
  },
  {
    "id": "pdf-200",
    "type": "single",
    "topic": "Datos",
    "text": "Está configurando una fuente de datos externa mediante Integration Designer. Tiene las direcciones URL de punto final de REST, Dev, Stage y Prod, y un nombre para la fuente de datos. ¿Qué otra información necesita para configurar la fuente de datos externa?",
    "options": [
      {
        "id": "a",
        "text": "El nombre de la base de datos donde se almacenan los datos de origen."
      },
      {
        "id": "b",
        "text": "Las vistas de datos usando la fuente de datos externa"
      },
      {
        "id": "c",
        "text": "Un plan para mapear los datos y los campos de respuesta REST"
      },
      {
        "id": "d",
        "text": "Una URL de punto final de respaldo si la URL configurada se niega a conectarse"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #240."
  },
  {
    "id": "pdf-201",
    "type": "single",
    "topic": "Datos",
    "text": "En una aplicación para configurar equipos de hardware para nuevos empleados, el gerente elige un modelo de computadora portátil de una lista desplegable. La lista de modelos de portátiles disponibles se mantiene en un sistema externo y puede cambiar con el tiempo. ¿Cuál de los siguientes utiliza como fuente de datos para esta lista desplegable?",
    "options": [
      {
        "id": "a",
        "text": "Una página de datos (Data Pages)"
      },
      {
        "id": "b",
        "text": "Una lista local (Local List)"
      },
      {
        "id": "c",
        "text": "Una tabla de datos (Data Types)"
      },
      {
        "id": "d",
        "text": "Una transformación de datos (Data Transform)"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #241."
  },
  {
    "id": "pdf-202",
    "type": "single",
    "topic": "UI / Experiencia de usuario",
    "text": "Un cliente ve un producto disponible en varias opciones de color. El cliente debe seleccionar un solo color para cada producto. ¿Qué control de UL permite a un desarrollador presentar al usuario todas las opciones de color a la vez, sin preguntar ni hacer clic, y al mismo tiempo garantizar que el usuario solo pueda seleccionar una de las opciones de color?",
    "options": [
      {
        "id": "a",
        "text": "Botones de opción"
      },
      {
        "id": "b",
        "text": "Entrada de texto"
      },
      {
        "id": "c",
        "text": "Menú desplegable"
      },
      {
        "id": "d",
        "text": "Casilla de verificación"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #242."
  },
  {
    "id": "pdf-203",
    "type": "single",
    "topic": "Case Management",
    "text": "Está desarrollando un tipo de caso que procesa solicitudes de becas. Las solicitudes de becas avanzan según los puntajes de las pruebas estandarizadas de los solicitantes. Una forma de decisión dirige el flujo del proceso. Desea probar si el proceso fluye correctamente, pero no ha configurado completamente la interfaz de usuario para que los solicitantes puedan ingresar sus puntajes de exámenes estandarizados. ¿Cómo prueba que el proceso fluye correctamente en función de la decisión?",
    "options": [
      {
        "id": "a",
        "text": "Utilice la ventana Ejecutar regla para crear una prueba unitaria para evaluar la regla de flujo."
      },
      {
        "id": "b",
        "text": "Utilice una expresión de declaración para establecer un valor para el campo de puntuación de la prueba estandarizada."
      },
      {
        "id": "c",
        "text": "Utilice Live Ul para ver cómo se procesa el caso y si se produce un error."
      },
      {
        "id": "d",
        "text": "Utilice la herramienta Portapapeles para establecer un valor para el campo de puntaje de la prueba estandarizada."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #243."
  },
  {
    "id": "pdf-204",
    "type": "single",
    "topic": "Case Management",
    "text": "Un requisito para un tipo de caso de reserva de hotel establece que a medida que los clientes cambian su selección de habitación, el coste total de las actualizaciones de la reserva. ¿Cómo satisface este requisito?",
    "options": [
      {
        "id": "a",
        "text": "Configure una regla de validación para el paso de selección de habitaciones."
      },
      {
        "id": "b",
        "text": "Aplique una condición de Deshabilitar cuando al campo de costo total."
      },
      {
        "id": "c",
        "text": "Agregue una condición Cuándo al paso de selección de la habitación."
      },
      {
        "id": "d",
        "text": "Defina una expresión de declaración para el campo de costo total."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #244."
  },
  {
    "id": "pdf-205",
    "type": "single",
    "topic": "General",
    "text": "Mientras ejecuta un proceso, observa que un campo de solo lectura en un formulario contiene un valor. ¿Qué herramienta le permite determinar si se utilizó una expresión de declaración para calcular el valor?",
    "options": [
      {
        "id": "a",
        "text": "Red declarativa - Declarative network"
      },
      {
        "id": "b",
        "text": "Herramienta Portapapeles - Clipboard tool"
      },
      {
        "id": "c",
        "text": "El rastreador - The Tracer"
      },
      {
        "id": "d",
        "text": "vive ul - Live Ul"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #245."
  },
  {
    "id": "pdf-206",
    "type": "multiple",
    "topic": "General",
    "text": "Una expresión Declare evalúa un árbol de decisión circunstancial. El árbol de decisión evalúa una propiedad establecida por una transformación de datos. ¿Qué dos pasos realiza para asegurarse de que el árbol de decisión esté configurado correctamente? (Elija 2)",
    "options": [
      {
        "id": "a",
        "text": "Probar la expresión de declaración para verificar que la regla está configurada correctamente"
      },
      {
        "id": "b",
        "text": "Configurar una página de prueba con datos para satisfacer la condición de circunstancia"
      },
      {
        "id": "c",
        "text": "Especificar el valor de la propiedad de circunstancia cuando se le solicite en el cuadro de diálogo de regla de ejecución."
      },
      {
        "id": "d",
        "text": "Probar la transformación de datos para verdad el resultado es correcto"
      }
    ],
    "correctOptionIds": [
      "b",
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #246."
  },
  {
    "id": "pdf-207",
    "type": "multiple",
    "topic": "General",
    "text": "Varios equipos de desarrollo trabajan en diferentes mejoras. La fecha de lanzamiento de cada mejora es incierta. ¿Qué dos opciones permiten que cada equipo mantenga su trabajo separado? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Cree una nueva versión del conjunto de reglas para cada equipo. *"
      },
      {
        "id": "b",
        "text": "Configurar un conjunto de reglas de rama para cada equipo *"
      },
      {
        "id": "c",
        "text": "Crear una nueva aplicación para cada equipo"
      },
      {
        "id": "d",
        "text": "Crear un conjunto de reglas de producción para cada equipo."
      }
    ],
    "correctOptionIds": [
      "a",
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #247."
  },
  {
    "id": "pdf-208",
    "type": "single",
    "topic": "General",
    "text": "¿En qué situación configura conjuntos de reglas bifurcados?",
    "options": [
      {
        "id": "a",
        "text": "Un equipo crea un nuevo parche para una aplicación mientras que otro equipo crea una nueva versión principal de la aplicación"
      },
      {
        "id": "b",
        "text": "Debe delegar reglas para procesar a los propietarios de la empresa"
      },
      {
        "id": "c",
        "text": "Varios equipos deben trabajar en la misma versión de la aplicación"
      },
      {
        "id": "d",
        "text": "El equipo necesita trabajar en la próxima versión de una aplicación mientras se prepara para migrar la versión actual."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #248."
  },
  {
    "id": "pdf-209",
    "type": "multiple",
    "topic": "General",
    "text": "Los usuarios crean Casos de Solicitud de Cobertura de Seguro para autorizar pagos de seguro. Usuarios ingresan la información que incluya el nombre del paciente, la fecha del procedimiento y el tipo de procedimiento. Después de ingresar la información, el usuario envía la solicitud de revisión de la póliza de seguro del paciente. Debido a que múltiples usuarios ingresan solicitudes, pueden ocurrir solicitudes duplicadas. Una solicitud se considera duplicada si el nombre del paciente, el tipo de procedimiento y la fecha del procedimiento coinciden con una solicitud existente. Se le han dado dos requisitos: - Asegúrese de que los usuarios puedan identificar solicitudes duplicadas. - Si un caso está duplicado, no se escribe en la base de datos. De lo contrario, escriba el caso en la base de datos. ¿Qué dos opciones configuran la aplicación para que los usuarios puedan identificar solicitudes duplicadas? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Agregue un paso de búsqueda duplicado al diseño del ciclo de vida del caso."
      },
      {
        "id": "b",
        "text": "Configurar una tabla de decisiones de búsqueda duplicada y agregarla a una forma de Decisión"
      },
      {
        "id": "c",
        "text": "Configurar condiciones ponderadas."
      },
      {
        "id": "d",
        "text": "Configurar una regla de validación para validar casos coincidentes."
      }
    ],
    "correctOptionIds": [
      "b",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #249."
  },
  {
    "id": "pdf-210",
    "type": "multiple",
    "topic": "General",
    "text": "Dependiendo del monto de la solicitud de compra, las aprobaciones van en cascada de los usuarios a un oficial de crédito, luego a un director y finalmente a un vicepresidente. El oficial de crédito es el administrador del usuario. El director es el gerente del oficial de crédito. El vicepresidente es el gerente del director. ¿Qué dos enfoques puede usar para configurar la aprobación en cascada? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Aprobación basada en la matriz de autoridad, con una regla de árbol de decisión para determinar los aprobadores"
      },
      {
        "id": "b",
        "text": "Aprobación basada en la matriz de autoridad, con una regla de tabla de decisión para determinar el/los aprobador(es)"
      },
      {
        "id": "c",
        "text": "Aprobación basada en la estructura de informes, utilizando el administrador de la cesta de trabajo para determinar los aprobadores"
      },
      {
        "id": "d",
        "text": "Aprobación basada en la estructura de informes y las condiciones de cuándo, utilizando los informes de cada operador al gerente para determinar el aprobador (es)"
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #250."
  },
  {
    "id": "pdf-211",
    "type": "multiple",
    "topic": "Case Management",
    "text": "En el primer paso de un tipo de caso, el usuario compara los datos de un formulario con los datos de una cuenta de cliente. Si los datos coinciden, el caso está resuelto. Si los datos no coinciden, el usuario avanza el caso para actualizar la cuenta. La gerencia solo quiere un registro de los casos que actualizan una cuenta. ¿Qué dos opciones de configuración utiliza para implementar este requisito? (Escoge dos)",
    "options": [
      {
        "id": "a",
        "text": "Agregue una forma de caso persistente después del primer paso."
      },
      {
        "id": "b",
        "text": "Configure el flujo inicial para instanciar el tipo de caso como un caso temporal."
      },
      {
        "id": "c",
        "text": "Aplique una condición de cuándo al primer paso para conservar sólo los casos que requieran actualizaciones."
      },
      {
        "id": "d",
        "text": "Configure el primer paso para instanciar el tipo de caso como un caso temporal."
      }
    ],
    "correctOptionIds": [
      "c",
      "d"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #251."
  },
  {
    "id": "pdf-212",
    "type": "single",
    "topic": "Case Management",
    "text": "Está configurando la lógica de búsqueda de casos duplicados en un tipo de caso. ¿Cómo se asegura de que los casos resueltos no se evalúen como posibles duplicados?",
    "options": [
      {
        "id": "a",
        "text": "Agregue una condición de coincidencia obligatoria donde el estado de trabajo del caso actual no contenga \"Resuelto\""
      },
      {
        "id": "b",
        "text": "Agregar una condición ponderada en la que el estado de trabajo de los posibles duplicados no contenga \"Resuelto\""
      },
      {
        "id": "c",
        "text": "Agregar una condición ponderada que evalúe el estado de trabajo de los casos actuales y existentes donde el estado de trabajo es igual a \"Resuelto\" y tiene un peso de \"0\""
      },
      {
        "id": "d",
        "text": "Agregue una condición de coincidencia obligatoria en la que el estado de trabajo de los posibles duplicados no contenga \"Resuelto\"."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #252."
  },
  {
    "id": "pdf-213",
    "type": "single",
    "topic": "Aplicación / Rulesets",
    "text": "El siguiente ejemplo muestra la lista del conjunto de reglas para el operador conectado. ¿Qué se almacena en el conjunto de reglas de Admin@MyCo? Admin@MyCo: Compras:01-01 Compras:01-01 MyCo:01-01 MyColnt:01-01 Proveedor:01-01 Cliente:01-01 lnventory:01-01 Pega ProcessCommander:07-10 Pega DeploymnetDefaults:07-10 Pega-LP Mobile:07-10",
    "options": [
      {
        "id": "a",
        "text": "Preferencias para el operador"
      },
      {
        "id": "b",
        "text": "Reglas revisadas por el operador"
      },
      {
        "id": "c",
        "text": "Reglas delegadas al operador"
      },
      {
        "id": "d",
        "text": "Reglas abiertas recientemente por el operador"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "source": "imported",
    "explanation": "Pregunta original del PDF #253."
  }
];
