import type { Question } from '../types/exam';

/**
 * Banco de preguntas "Solo preguntas del PDF 2.0".
 * Preguntas reales extraídas del PDF "Pega-CSA-Test-ES.pdf" (Examen de práctica —
 * Pega Certified System Architect, traducción al español). La respuesta correcta
 * se toma del apartado "Respuesta:" de cada pregunta.
 * Se excluyeron las preguntas de tipo arrastrar/soltar, relacionar y hotspot, que no
 * son compatibles con el formato de opción múltiple de esta aplicación.
 */
export const pdfQuestions2: Question[] = [
  {
    "id": "pdf2-001",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Un negocio internacional de venta de repuestos de automóvil en línea quiere que los clientes encuentren piezas para cualquier vehículo con facilidad. Se le pide implementar el siguiente requisito: los clientes deben seleccionar una marca, un modelo y un año para iniciar una búsqueda específica del vehículo. ¿Cómo configura el almacenamiento de datos en la aplicación para implementar el requisito?",
    "options": [
      { "id": "a", "text": "Configurar una página de datos para almacenar los datos de marca, modelo y año del vehículo." },
      { "id": "b", "text": "Configurar una conexión a un sistema de registro externo que contenga los datos de marca, modelo y año del vehículo." },
      { "id": "c", "text": "Configurar una lista estática con los datos de marca, modelo y año del vehículo." },
      { "id": "d", "text": "Configurar un almacenamiento de datos local con los datos de marca, modelo y año del vehículo." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #1."
  },
  {
    "id": "pdf2-002",
    "type": "single",
    "topic": "General",
    "text": "Está implementando una pantalla de entrada de datos que incluye un campo de ID de activo para rastrear el equipamiento de la empresa. Todos los ID de activo tienen ocho caracteres de longitud. Los tres primeros caracteres son letras, seguidos de un número de cinco dígitos. ¿Qué enfoque de validación restringe las entradas del campo ID de activo al formato requerido?",
    "options": [
      { "id": "a", "text": "Regla Validate" },
      { "id": "b", "text": "Mínimo/Máximo de caracteres" },
      { "id": "c", "text": "Tipo de dato Texto" },
      { "id": "d", "text": "Regla Edit Validate" }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #2."
  },
  {
    "id": "pdf2-003",
    "type": "multiple",
    "topic": "Datos e integración",
    "text": "¿En cuáles tres situaciones puede usar una transformación de datos (data transform)? (Elija tres)",
    "options": [
      { "id": "a", "text": "Establecer la ubicación de destino como la ubicación de llegada." },
      { "id": "b", "text": "Crear una nueva propiedad después de la creación del caso." },
      { "id": "c", "text": "Establecer la fecha de llegada predeterminada en cinco días en el futuro." },
      { "id": "d", "text": "Copiar las propiedades de nombre y apellido en un único valor de propiedad." },
      { "id": "e", "text": "Realizar una acción que permita al usuario actualizar una reserva." }
    ],
    "correctOptionIds": ["a", "c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #3."
  },
  {
    "id": "pdf2-004",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "¿Cuáles dos de los siguientes casos de uso implementa utilizando uno o más campos calculados? (Elija dos)",
    "options": [
      { "id": "a", "text": "Un representante de ventas quiere cotizar el costo de una póliza de seguro en función de las opciones de cobertura seleccionadas." },
      { "id": "b", "text": "Un contador quiere listar el mayor pedido del último mes para cada cuenta de cliente." },
      { "id": "c", "text": "Un jefe de proyecto quiere estimar el costo de pintar un salón de banquetes según la mano de obra y los materiales requeridos." },
      { "id": "d", "text": "Un responsable de certificación quiere determinar el número de exámenes realizados en cada centro de pruebas en el trimestre actual." }
    ],
    "correctOptionIds": ["a", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #4."
  },
  {
    "id": "pdf2-005",
    "type": "multiple",
    "topic": "General",
    "text": "Un requisito indica: la fecha de nacimiento presentada para los estudiantes de primer grado debe ser al menos cinco años anterior al 1 de septiembre del año en curso. ¿Qué tres métodos de validación, aplicados en combinación, satisfacen el requisito? (Elija tres)",
    "options": [
      { "id": "a", "text": "Regla When" },
      { "id": "b", "text": "Control de calendario" },
      { "id": "c", "text": "Tipo de dato Fecha" },
      { "id": "d", "text": "Regla de validación (Validation rule)" },
      { "id": "e", "text": "Regla Edit Validate" }
    ],
    "correctOptionIds": ["b", "c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #6."
  },
  {
    "id": "pdf2-006",
    "type": "single",
    "topic": "Datos e integración",
    "text": "Una página de datos contiene información de productos. El campo \"Reload if older than\" (Recargar si es más antigua que) de la página de datos está configurado en 15 minutos. La página de datos se crea a las 06:12. A las 06:20 el usuario solicita información del producto. A las 06:42 el usuario solicita información del producto. ¿Cuándo se recarga la página de datos?",
    "options": [
      { "id": "a", "text": "06:35" },
      { "id": "b", "text": "06:20" },
      { "id": "c", "text": "06:27" },
      { "id": "d", "text": "06:42" }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #7."
  },
  {
    "id": "pdf2-007",
    "type": "multiple",
    "topic": "Interfaz de usuario",
    "text": "En una aplicación de Recursos Humanos (RR. HH.), un arquitecto de negocio ha desarrollado un nuevo proceso para el tipo de caso Onboarding (Incorporación). Usted quiere probar el proceso y los campos para verificar que los elementos de la interfaz de usuario recopilan los resultados esperados. Aplicadas en combinación, ¿qué dos configuraciones le permiten grabar un conjunto de interacciones y guardar los resultados de la prueba para verificar la funcionalidad del proceso? (Elija dos)",
    "options": [
      { "id": "a", "text": "Añadir aserciones explícitas sobre los elementos de la interfaz de usuario." },
      { "id": "b", "text": "Crear una prueba unitaria para el tipo de caso Onboarding." },
      { "id": "c", "text": "Crear una prueba de escenario para el tipo de caso Onboarding." },
      { "id": "d", "text": "Añadir validaciones sobre los elementos de la interfaz de usuario." }
    ],
    "correctOptionIds": ["c", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #8."
  },
  {
    "id": "pdf2-008",
    "type": "multiple",
    "topic": "Pruebas",
    "text": "¿Qué dos condiciones prueba con una prueba unitaria? (Elija dos)",
    "options": [
      { "id": "a", "text": "Una página de datos se llena sin errores." },
      { "id": "b", "text": "El valor de una propiedad se establece correctamente mediante una transformación de datos." },
      { "id": "c", "text": "Una aplicación muestra las vistas de usuario para 20 usuarios en menos de tres segundos." },
      { "id": "d", "text": "Una aplicación se migra correctamente a un sistema de pruebas." }
    ],
    "correctOptionIds": ["a", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #9."
  },
  {
    "id": "pdf2-009",
    "type": "multiple",
    "topic": "Pruebas",
    "text": "¿Qué dos pasos de configuración realiza, en combinación, para grabar una prueba unitaria destinada a pruebas automatizadas? (Elija dos)",
    "options": [
      { "id": "a", "text": "Seleccionar un ruleset configurado para almacenar casos de prueba automatizados." },
      { "id": "b", "text": "Añadir un caso de prueba a la página de destino de Pruebas Automatizadas." },
      { "id": "c", "text": "Añadir una aserción para definir un resultado esperado." },
      { "id": "d", "text": "Seleccionar un ruleset configurado para almacenar los resultados de la prueba." }
    ],
    "correctOptionIds": ["c", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #10."
  },
  {
    "id": "pdf2-010",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "Desde el portal de capacitación de empleados, un empleado abre un nuevo caso de Inscripción, envía las selecciones de curso y recibe un correo electrónico de confirmación. Hay un error en el correo de confirmación. Debe identificar la causa del error grabando un conjunto de interacciones en el portal y probando el comportamiento esperado en los campos de recopilación de datos. ¿Qué tres pasos, aplicados en combinación, logran las pruebas requeridas? (Elija tres)",
    "options": [
      { "id": "a", "text": "Añadir validaciones de entrada de etapa (stage-entry) en los campos del caso de Inscripción." },
      { "id": "b", "text": "Crear un caso de prueba para el portal del empleado." },
      { "id": "c", "text": "Añadir aserciones sobre los elementos de la interfaz de usuario para verificar la correcta recopilación de datos." },
      { "id": "d", "text": "Ejecutar un nuevo caso de Inscripción desde el portal de capacitación de empleados." },
      { "id": "e", "text": "Añadir validaciones de campo en el paso de selección de cursos." }
    ],
    "correctOptionIds": ["b", "c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #12."
  },
  {
    "id": "pdf2-011",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "¿Cómo enruta una asignación de modo que cualquier miembro disponible del departamento pueda realizar la tarea?",
    "options": [
      { "id": "a", "text": "Enrutar la asignación a una lista de trabajo (work list)." },
      { "id": "b", "text": "Enrutar la asignación al usuario administrador." },
      { "id": "c", "text": "Enrutar la asignación por separado a todos los miembros." },
      { "id": "d", "text": "Enrutar la asignación a una cola de trabajo (work queue)." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #13."
  },
  {
    "id": "pdf2-012",
    "type": "single",
    "topic": "Informes",
    "text": "Un informe de lista de solicitudes de compra incluye columnas para el ID de caso y el centro de costos regional. Un gerente quiere que el informe muestre el número total de solicitudes de compra por cada centro de costos regional. ¿Cómo configura la definición del informe?",
    "options": [
      { "id": "a", "text": "Resumir los centros de costos regionales por conteo." },
      { "id": "b", "text": "Crear un filtro para cada centro de costos y contar los ID de caso." },
      { "id": "c", "text": "Resumir la columna de ID de caso por conteo." },
      { "id": "d", "text": "Definir una función para la columna de centro de costos que totalice los ID de caso." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #15."
  },
  {
    "id": "pdf2-013",
    "type": "single",
    "topic": "Informes",
    "text": "Un gerente solicita un informe que contenga las siguientes columnas: Fecha de creación, ID de caso, Operador de creación y Estado del trabajo. Debe ordenar los casos de modo que el caso con la fecha de creación más reciente aparezca al inicio de la lista y descienda en orden. ¿Cómo diseña la definición del informe para cumplir este requisito?",
    "options": [
      { "id": "a", "text": "Añadir una condición de filtro donde la Fecha de creación sea mayor que la fecha actual." },
      { "id": "b", "text": "Hacer que la Fecha de creación sea la primera columna del informe." },
      { "id": "c", "text": "Seleccionar el tipo de orden \"De mayor a menor\" para la Fecha de creación." },
      { "id": "d", "text": "Seleccionar el tipo de orden \"De menor a mayor\" para la Fecha de creación." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #16."
  },
  {
    "id": "pdf2-014",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "El Usuario A debe tener permisos de aplicación idénticos a los del Usuario B. A diferencia del Usuario B, el Usuario A no tiene acceso a la página Mis Casos. ¿Cómo concede acceso a la página Mis Casos al Usuario A?",
    "options": [
      { "id": "a", "text": "Actualizar al Usuario A al mismo rol que el Usuario B." },
      { "id": "b", "text": "Añadir la página Mis Casos al perfil del Usuario A." },
      { "id": "c", "text": "Actualizar la cuenta del Usuario A para que acceda al mismo portal que el Usuario B." },
      { "id": "d", "text": "Añadir la página Mis Casos al rol del Usuario A." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #18."
  },
  {
    "id": "pdf2-015",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "¿Cómo habilita la auditoría a nivel de campo para las propiedades?",
    "options": [
      { "id": "a", "text": "Añadir una acción opcional de auditoría al flujo de trabajo del caso." },
      { "id": "b", "text": "Habilitar la función de auditoría en los formularios de reglas de propiedad." },
      { "id": "c", "text": "Añadir una validación de campo al flujo de trabajo del caso." },
      { "id": "d", "text": "Habilitar la auditoría a nivel de campo para el tipo de caso." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #19."
  },
  {
    "id": "pdf2-016",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "Una aplicación gubernamental proporciona valores de marcador de posición (placeholder) en los campos para ayudar a los usuarios a introducir los datos correctos. El líder de diseño le ha pedido aumentar el tamaño de fuente de los componentes de valor de marcador de posición para ayudar a los usuarios con discapacidad visual. ¿Qué configuración aplica el requisito de estilo de fuente a los valores de marcador de posición de los campos en la aplicación?",
    "options": [
      { "id": "a", "text": "Actualizar la entrada de texto del tema (theme) Default existente." },
      { "id": "b", "text": "Ejecutar un tipo de caso que use el componente y cambiar la fuente en la vista." },
      { "id": "c", "text": "Añadir una nueva entrada de texto de tema al tema de la aplicación." },
      { "id": "d", "text": "Cargar un nuevo tema de aplicación." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #21."
  },
  {
    "id": "pdf2-017",
    "type": "multiple",
    "topic": "General",
    "text": "Una cotización de seguro de automóvil requiere una vista para que los clientes potenciales introduzcan información y se procese la solicitud. ¿Cuáles son las tres decisiones principales que debe tomar antes de añadir campos a la vista? (Elija tres)",
    "options": [
      { "id": "a", "text": "¿Es obligatoria la entrada del campo?" },
      { "id": "b", "text": "¿Cómo introducen los usuarios los valores en el campo?" },
      { "id": "c", "text": "¿Necesitan los usuarios ver el campo?" },
      { "id": "d", "text": "¿Requiere el campo una fuente de datos?" },
      { "id": "e", "text": "¿Se aplican acciones de procesamiento al campo?" }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #22."
  },
  {
    "id": "pdf2-018",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Los usuarios pueden marcar una casilla de verificación para suscribirse a un servicio de mensajería de texto. Al marcar la casilla se muestra un campo para que el usuario introduzca un número de teléfono móvil. ¿Cómo configura la aplicación para mostrar el campo de número de teléfono móvil solo cuando la casilla está marcada?",
    "options": [
      { "id": "a", "text": "Usar una condición When en una transformación de datos para determinar si mostrar el campo de número de teléfono móvil." },
      { "id": "b", "text": "Usar una condición When en el flujo para ramificar el flujo según los datos del caso." },
      { "id": "c", "text": "Usar una circunstancia (circumstance) sobre la propiedad de la casilla para crear una variante de regla efectiva cuando la casilla esté marcada." },
      { "id": "d", "text": "Usar una condición When en el formulario de la interfaz de usuario para determinar si mostrar el campo de número de teléfono móvil." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #23."
  },
  {
    "id": "pdf2-019",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "Los inquilinos de apartamentos envían solicitudes de mantenimiento que especifican su nombre, dirección, tipo de solicitud y descripción de la solicitud. La empresa administradora recibe a menudo varias solicitudes desde una misma dirección sobre el mismo problema. La empresa quiere identificar solicitudes de mantenimiento duplicadas presentadas con menos de 30 días de diferencia. ¿Qué tres configuraciones, aplicadas en combinación en el paso \"Search duplicate cases\" (Buscar casos duplicados), logran este objetivo?",
    "options": [
      { "id": "a", "text": "Configurar el período de tiempo de la fecha de solicitud como condición ponderada (weighted)." },
      { "id": "b", "text": "Configurar la dirección del apartamento como condición ponderada." },
      { "id": "c", "text": "Configurar la dirección del apartamento como condición básica (basic)." },
      { "id": "d", "text": "Configurar el tipo de solicitud como condición ponderada." },
      { "id": "e", "text": "Configurar el nombre del inquilino como condición básica." }
    ],
    "correctOptionIds": ["a", "c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #25."
  },
  {
    "id": "pdf2-020",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Un tipo de caso de reembolso a clientes requiere que un auditor reciba una notificación por correo electrónico si el reembolso es mayor que el doble del precio del artículo. ¿Qué rol de participante selecciona para configurar este requisito?",
    "options": [
      { "id": "a", "text": "Cliente (Customer)" },
      { "id": "b", "text": "Individuo interesado (Interested Individual)" },
      { "id": "c", "text": "Propietario (Owner)" },
      { "id": "d", "text": "Cola de trabajo (Work Queue)" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #28."
  },
  {
    "id": "pdf2-021",
    "type": "single",
    "topic": "General",
    "text": "Para calificar para el préstamo instantáneo, el solicitante debe tener un ingreso mensual de al menos 2000 GBP y no puede superar las 2000 GBP de pasivo total. ¿Cómo hace cumplir estas restricciones al solicitar un préstamo instantáneo?",
    "options": [
      { "id": "a", "text": "Usar una regla Validate que invoque dos reglas Edit Validate: una para el ingreso y una para el pasivo." },
      { "id": "b", "text": "Usar dos reglas Edit Validate: una para el ingreso y una para el pasivo." },
      { "id": "c", "text": "Usar una única regla Validate con dos condiciones: una para el ingreso y una para el pasivo." },
      { "id": "d", "text": "Usar controles de interfaz de usuario para validar las entradas de los campos de ingreso y pasivo." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #30."
  },
  {
    "id": "pdf2-022",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Un tipo de caso de cumplimiento de pedidos permite al cliente actualizar la información de su perfil de usuario durante la etapa de realización del pedido. El perfil de usuario consta de tres páginas:",
    "options": [
      { "id": "a", "text": "ID de cuenta y contraseña" },
      { "id": "b", "text": "Información de contacto del cliente" },
      { "id": "c", "text": "Una lista de pedidos abiertos con el estado de cada pedido. ¿Cómo configura el tipo de caso para permitir que los clientes actualicen cualquiera de las páginas del perfil de usuario en cualquier momento durante el procesamiento del caso?" },
      { "id": "d", "text": "Añadir un conjunto de acciones opcionales al flujo de trabajo del caso." },
      { "id": "e", "text": "Añadir una etapa alternativa al ciclo de vida del caso." },
      { "id": "f", "text": "Añadir un proceso opcional al flujo de trabajo del caso." },
      { "id": "g", "text": "Añadir un botón para cada página de perfil en cada asignación." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #31."
  },
  {
    "id": "pdf2-023",
    "type": "single",
    "topic": "General",
    "text": "Un interesado (stakeholder) prefiere agrupar un conjunto de acciones existentes en un formulario de varios pasos. ¿Qué elemento de trabajo crea en el Agile Workbench para atender esta solicitud de cambio?",
    "options": [
      { "id": "a", "text": "Bug (Error)" },
      { "id": "b", "text": "Feedback (Comentario)" },
      { "id": "c", "text": "Status (Estado)" },
      { "id": "d", "text": "User Story (Historia de usuario)" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #32."
  },
  {
    "id": "pdf2-024",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos datos componen el elemento de datos (data element)?",
    "options": [
      { "id": "a", "text": "El nombre de la vista de usuario que lo referencia." },
      { "id": "b", "text": "El nombre del elemento de datos." },
      { "id": "c", "text": "El nombre de la página del portapapeles (clipboard)." },
      { "id": "d", "text": "El valor del elemento de datos." }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #33."
  },
  {
    "id": "pdf2-025",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Al solicitar un aumento del límite de crédito, los clientes con tarjetas de crédito estándar deben proporcionar información en un proceso de información laboral. Las solicitudes de los clientes con tarjetas de crédito platino omiten automáticamente este proceso. ¿Qué tarea realiza para implementar este requisito?",
    "options": [
      { "id": "a", "text": "En el proceso de información laboral, añadir el campo verdadero/falso del tipo de tarjeta a la vista de usuario." },
      { "id": "b", "text": "En el proceso de información laboral, añadir una condición personalizada para iniciar el proceso comprobando el tipo de tarjeta." },
      { "id": "c", "text": "En el proceso de información laboral, añadir un paso de aprobar o rechazar para comprobar el tipo de tarjeta." },
      { "id": "d", "text": "En el proceso de información laboral, validar el tipo de tarjeta para continuar el procesamiento." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #34."
  },
  {
    "id": "pdf2-026",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Una compañía de seguros de vida tiene oficinas satélite en varios países. Cada oficina satélite tiene su propia cola. La política de la empresa exige que la suscripción del seguro de vida se asigne a la oficina según la residencia del titular de la póliza. ¿Qué enfoque de enrutamiento respalda este requisito?",
    "options": [
      { "id": "a", "text": "Enrutar la asignación a la cola de trabajo correcta usando enrutamiento basado en habilidades (skill-based)." },
      { "id": "b", "text": "Enrutar la asignación a la cola de trabajo correcta usando una matriz de autoridad." },
      { "id": "c", "text": "Enrutar la asignación a un suscriptor específico basándose en la lógica de negocio." },
      { "id": "d", "text": "Enrutar la asignación a la cola de trabajo correcta basándose en la lógica de negocio." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #35."
  },
  {
    "id": "pdf2-027",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "El proceso de negocio de una reclamación de seguro de automóvil consta de las siguientes fases: Presentación (Submission): el cliente contacta a un representante de servicio al cliente (CSR) para presentar la reclamación. Revisión (Review): un tasador revisa la reclamación, evalúa los daños de cada vehículo y proporciona una estimación del costo de las reparaciones. Reparación (Repair): un tercero realiza las reparaciones de cada vehículo, comunicándose con el tasador y el cliente según sea necesario. Verificación (Verification): tras la reparación de cada vehículo, el tasador cierra la reclamación. Según las buenas prácticas de Pega, ¿qué fase puede implementar como caso hijo?",
    "options": [
      { "id": "a", "text": "Revisión" },
      { "id": "b", "text": "Verificación" },
      { "id": "c", "text": "Reparación" },
      { "id": "d", "text": "Presentación" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #36."
  },
  {
    "id": "pdf2-028",
    "type": "multiple",
    "topic": "General",
    "text": "El personal del hospital introduce los detalles de la cita, incluida la información relevante del paciente, diagnósticos, órdenes de laboratorio y medicación prescrita. Esta información se agrega en la vista de resumen de la visita del paciente. El paciente recibe una copia de esta vista por correo electrónico. ¿Qué dos configuraciones, aplicadas en combinación, logran este comportamiento?",
    "options": [
      { "id": "a", "text": "Añadir una automatización \"Create PDF\" que haga referencia a la vista de resumen de la visita del paciente." },
      { "id": "b", "text": "Añadir un paso \"Send email\" y habilitar la opción de incluir adjuntos." },
      { "id": "c", "text": "Añadir un paso \"Send email\" y componer el mensaje para hacer referencia a las propiedades relevantes." },
      { "id": "d", "text": "Habilitar las notificaciones por correo electrónico en el tipo de caso." }
    ],
    "correctOptionIds": ["a", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #37."
  },
  {
    "id": "pdf2-029",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Está desarrollando un tipo de caso para procesar solicitudes de visa. Como parte del proceso, los solicitantes necesitan programar una entrevista con el consulado. Se crea un caso hijo para el proceso y la evaluación de la entrevista. Tras la entrevista, el consulado suele tardar 48 horas en tomar una decisión. Para que el caso de visa avance a la notificación del solicitante, el caso de entrevista debe estar resuelto. ¿Cómo configura el caso para lograr el comportamiento requerido?",
    "options": [
      { "id": "a", "text": "Añadir un paso Create que cree el caso hijo de entrevista; a continuación, añadir un paso Wait que pause el caso padre hasta que hayan transcurrido 48 horas." },
      { "id": "b", "text": "Añadir un paso Create que cree el caso hijo de entrevista; a continuación, añadir un paso Wait que pause el caso padre hasta que el caso de entrevista alcance el estado Resuelto y hayan transcurrido 48 horas." },
      { "id": "c", "text": "Añadir un paso Create que cree el caso hijo de entrevista; a continuación, añadir un paso Wait que pause el caso padre hasta que el caso de entrevista tenga el estado Resuelto." },
      { "id": "d", "text": "Añadir un paso Create que cree el caso hijo de entrevista; no es necesario añadir un paso Wait." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #38."
  },
  {
    "id": "pdf2-030",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "¿Qué problema resuelve simulando la fuente de datos (data source)?",
    "options": [
      { "id": "a", "text": "Necesita probar un plan de guardado (save plan) para una página de datos guardable (savable data page) que actualiza el costo de las opciones de cobertura de las pólizas de seguro." },
      { "id": "b", "text": "En Producción, la base de datos de clientes debe desconectarse durante la noche para mantenimiento programado." },
      { "id": "c", "text": "La base de datos de productos se traslada a una nueva fuente de datos accesible por un servicio web que aún no está configurado." },
      { "id": "d", "text": "Durante el staging necesita acceder a datos realistas de clientes sin exponer información de identificación personal a los presentadores." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #40."
  },
  {
    "id": "pdf2-031",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos dependencias hace cumplir directamente con un paso Wait?",
    "options": [
      { "id": "a", "text": "Pausar un caso hasta que expire un tiempo predeterminado." },
      { "id": "b", "text": "Pausar un caso hasta que un usuario envíe un valor especificado." },
      { "id": "c", "text": "Pausar un caso hasta que otro caso alcance un estado especificado." },
      { "id": "d", "text": "Pausar un caso hasta que se cree un nuevo caso hijo." }
    ],
    "correctOptionIds": ["a", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #42."
  },
  {
    "id": "pdf2-032",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Antes del desarrollo, su equipo crea una hoja de cálculo con elementos de trabajo para poblar el backlog. Todos los elementos de trabajo que describen un requisito de negocio se priorizan como \"must have\" (imprescindibles). También crea elementos de trabajo para atender otros aspectos. ¿Cómo puebla el backlog directamente desde la hoja de cálculo?",
    "options": [
      { "id": "a", "text": "Crear Bug" },
      { "id": "b", "text": "Crear Feedback" },
      { "id": "c", "text": "Importar historias (Import Stories)" },
      { "id": "d", "text": "Crear historias (Create Stories)" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #43."
  },
  {
    "id": "pdf2-033",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Una solicitud de préstamo hipotecario requiere aprobaciones del gerente del equipo legal y del gerente del equipo financiero. El gerente del equipo legal debe aprobar antes que el gerente del equipo financiero. ¿Cómo configura este requisito?",
    "options": [
      { "id": "a", "text": "Crear un proceso de aprobación para cada gerente en paralelo." },
      { "id": "b", "text": "Aplicar lógica de negocio para enrutar una única asignación en el orden correcto." },
      { "id": "c", "text": "Crear un paso de aprobación con aprobación en cascada (cascading approval)." },
      { "id": "d", "text": "Enrutar una asignación a una cola de trabajo a la que ambos roles tengan acceso." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #44."
  },
  {
    "id": "pdf2-034",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "En una aplicación de reclamaciones de seguros, tiene el siguiente requisito: todas las reclamaciones deben resolverse en el plazo de una semana. Para cumplir este requisito configura un nivel de servicio (service level). ¿Dónde debe configurarse el nivel de servicio?",
    "options": [
      { "id": "a", "text": "Proceso (Process)" },
      { "id": "b", "text": "Etapa (Stage)" },
      { "id": "c", "text": "Tipo de caso (Case type)" },
      { "id": "d", "text": "Paso (Step)" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #45."
  },
  {
    "id": "pdf2-035",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "En un tipo de caso de pedido, se aplica automáticamente un descuento porcentual al pedido del cliente en función de: 1. El número de años que el cliente ha sido miembro. 2. El tipo de membresía (Standard, Silver o Gold). ¿Cómo configura un ajuste de configuración (Configuration Setting) para determinar el descuento?",
    "options": [
      { "id": "a", "text": "Tipo: Texto, Booleano, Decimal, Lista de opciones (picklist)" },
      { "id": "b", "text": "Valor predeterminado: Constante, Calculado a partir de una tabla de decisión" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #56."
  },
  {
    "id": "pdf2-036",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Un requisito indica: cuando un cliente solicita una tarjeta de crédito, debe completarse una verificación de crédito para que el crédito sea aprobado. Seleccione la relación de tipo de caso que satisface el requisito.",
    "options": [
      { "id": "a", "text": "Hacer que la verificación de crédito sea un caso hijo de la solicitud de tarjeta de crédito." },
      { "id": "b", "text": "Hacer que tanto la solicitud de préstamo como la verificación de crédito sean casos de nivel superior." },
      { "id": "c", "text": "Hacer que la verificación de crédito sea un caso derivado (spin-off) de la solicitud de tarjeta de crédito." },
      { "id": "d", "text": "Hacer que la solicitud de tarjeta de crédito sea un caso hijo de la verificación de crédito." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #57."
  },
  {
    "id": "pdf2-037",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Un proveedor de internet determina la mejor velocidad de internet para un cliente en función de las respuestas del cliente a una serie de preguntas anidadas, como si busca el servicio para un negocio o una residencia y cuál es el uso esperado de internet. ¿Qué característica utiliza para configurar la aplicación de modo que recomiende una velocidad de internet según las respuestas del cliente?",
    "options": [
      { "id": "a", "text": "Configurar una vista que muestre las respuestas del cliente." },
      { "id": "b", "text": "Configurar un árbol de decisión (decision tree)." },
      { "id": "c", "text": "Configurar una tabla de decisión (decision table)." },
      { "id": "d", "text": "Configurar un proceso con múltiples formas de decisión." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #58."
  },
  {
    "id": "pdf2-038",
    "type": "single",
    "topic": "General",
    "text": "¿Qué escenario requiere que configure correspondencia?",
    "options": [
      { "id": "a", "text": "Un trabajador de casos recibe una notificación push móvil para aprobar una reclamación de seguro." },
      { "id": "b", "text": "Un trabajador de casos llama a un cliente para obtener información adicional sobre el caso." },
      { "id": "c", "text": "Un trabajador de casos recibe una nueva reclamación de seguro en su cola de trabajo." },
      { "id": "d", "text": "Un trabajador de casos recibe un correo electrónico cuando la reclamación de seguro se enruta a la lista de trabajo." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #59."
  },
  {
    "id": "pdf2-039",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Está desarrollando un tipo de caso VISA para procesar solicitudes de visa de entrada. Como parte del proceso, los solicitantes programan una entrevista con el consulado. Se crea un caso hijo de entrevista para el proceso de entrevista. Tras la entrevista, el consulado toma una decisión en 48 horas o más. Para que el caso VISA avance a la notificación del solicitante, el caso de entrevista debe estar resuelto. Después de crear el caso hijo de entrevista, ¿cómo configura el tipo de caso para lograr el comportamiento requerido?",
    "options": [
      { "id": "a", "text": "Tras el paso Create case, añadir un paso Wait que pause el caso padre hasta que el caso de entrevista alcance el estado Resuelto." },
      { "id": "b", "text": "Tras el paso Create case, añadir un acuerdo de nivel de servicio que escale el caso padre después de 48 horas." },
      { "id": "c", "text": "Tras el paso Create case, añadir un paso Wait que pause el caso padre hasta que el solicitante programe la entrevista." },
      { "id": "d", "text": "Tras el paso Create case, añadir un paso de entrevista que se resuelva automáticamente después de 48 horas." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #60."
  },
  {
    "id": "pdf2-040",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Una editorial trabaja con proveedores para traducir su contenido del inglés a diferentes idiomas. El jefe de proyecto debe enviar todas las cotizaciones de traducción a su gerente para revisión y aprobación.",
    "options": [
      { "id": "a", "text": "Si la cotización supera los 5000 USD, debe ser aprobada por un director." },
      { "id": "b", "text": "Si la cotización supera los 10 000 USD, también debe ser aprobada por un vicepresidente. ¿Cómo configura el ciclo de vida del caso para respaldar este comportamiento?" },
      { "id": "c", "text": "Configurar un paso de aprobación como aprobación en cascada con la estructura jerárquica que usa aprobaciones personalizadas (custom approvals)." },
      { "id": "d", "text": "Configurar un paso de aprobación como aprobación en cascada con la estructura jerárquica que usa todos los niveles." },
      { "id": "e", "text": "Configurar una serie de pasos de aprobación configurados como aprobaciones de un solo nivel." },
      { "id": "f", "text": "Configurar un paso de aprobación como aprobación en cascada con una matriz de autoridad." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #61."
  },
  {
    "id": "pdf2-041",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "¿Cómo indica el progreso del caso hacia su resolución?",
    "options": [
      { "id": "a", "text": "Diseñar interfaces de usuario impulsadas por la intención (intent-driven)." },
      { "id": "b", "text": "Configurar un campo de nota del caso para capturar la información de progreso." },
      { "id": "c", "text": "Actualizar el estado del caso con los pasos apropiados." },
      { "id": "d", "text": "Aplicar un nivel de servicio a los pasos de asignación." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #62."
  },
  {
    "id": "pdf2-042",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "En una solicitud de aumento de límite de crédito, los clientes con tarjetas de crédito estándar deben proporcionar información laboral en un proceso de verificación de empleo. Los clientes con tarjeta de crédito platino que solicitan un aumento de límite de crédito omiten automáticamente este proceso. ¿Cómo implementa este requisito?",
    "options": [
      { "id": "a", "text": "Añadir un paso aprobar/rechazar para comprobar si el tipo de tarjeta de crédito es Estándar o Platino." },
      { "id": "b", "text": "Añadir un campo booleano a la vista que los clientes activan si tienen la tarjeta de crédito platino." },
      { "id": "c", "text": "Añadir una condición personalizada para iniciar el proceso de verificación de empleo si el tipo de tarjeta es estándar." },
      { "id": "d", "text": "Añadir una condición de validación al campo de tipo de tarjeta para continuar condicionalmente el proceso." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #63."
  },
  {
    "id": "pdf2-043",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Un requisito indica: un cliente puede actualizar una dirección en cualquier momento durante el procesamiento del caso realizando los siguientes pasos. 1. El cliente envía la nueva dirección. 2. La aplicación verifica que la dirección cumpla los requisitos del servicio postal. 3. El cliente confirma entonces la dirección corregida. ¿Cómo configura este requisito?",
    "options": [
      { "id": "a", "text": "Añadir una acción opcional a nivel de caso al flujo de trabajo para realizar el proceso de cambio de dirección." },
      { "id": "b", "text": "Añadir un botón a cada asignación para presentar al cliente un formulario para enviar una nueva dirección." },
      { "id": "c", "text": "Añadir una acción opcional a nivel de caso al flujo de trabajo para enviar una nueva dirección." },
      { "id": "d", "text": "Añadir una etapa alternativa al ciclo de vida del caso para cambiar la dirección." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #64."
  },
  {
    "id": "pdf2-044",
    "type": "multiple",
    "topic": "General",
    "text": "¿En cuáles dos situaciones es apropiado usar una tabla de decisión? (Elija dos)",
    "options": [
      { "id": "a", "text": "Un gimnasio recomienda un tipo de membresía según el número y tipo de clases de fitness a las que el cliente quiere asistir cada mes." },
      { "id": "b", "text": "Si el cliente decide añadir seguro, equipaje facturado o embarque prioritario a sus billetes de avión, se agregan tarifas adicionales a su total." },
      { "id": "c", "text": "Una empresa de cuidado capilar sugiere una línea de productos a los clientes según su tipo de cabello, humedad del cuero cabelludo, humedad del cabello y si está teñido." },
      { "id": "d", "text": "El total del pedido se calcula según la cantidad y el precio de los artículos en el carrito de compras del cliente." }
    ],
    "correctOptionIds": ["a", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #66."
  },
  {
    "id": "pdf2-045",
    "type": "multiple",
    "topic": "Interfaz de usuario",
    "text": "Un arquitecto de negocio ha desarrollado un nuevo proceso para un tipo de caso. Para verificar que los elementos de la interfaz de usuario recopilan los resultados esperados, usted quiere probar el proceso y los campos. ¿Qué dos configuraciones, usadas conjuntamente, le permiten grabar un conjunto de interacciones y guardar los resultados para verificar la funcionalidad del proceso?",
    "options": [
      { "id": "a", "text": "Añadir aserciones explícitas sobre los elementos de la interfaz de usuario." },
      { "id": "b", "text": "Crear una prueba de escenario para el tipo de caso." },
      { "id": "c", "text": "Añadir aserciones explícitas en la página de destino de pruebas de escenario." },
      { "id": "d", "text": "Crear una prueba unitaria para el tipo de caso." }
    ],
    "correctOptionIds": ["b", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #69."
  },
  {
    "id": "pdf2-046",
    "type": "single",
    "topic": "Informes",
    "text": "Un informe de lista de solicitudes de compra incluye columnas para el ID de caso y el centro de costos regional. Un gerente quiere que el informe muestre el número total de solicitudes de compra por cada centro de costos regional. ¿Cómo configura la definición del informe?",
    "options": [
      { "id": "a", "text": "Resumir los centros de costos regionales por conteo." },
      { "id": "b", "text": "Crear un filtro para cada centro de costos y contar los ID de caso." },
      { "id": "c", "text": "Resumir la columna de ID de caso por conteo." },
      { "id": "d", "text": "Definir una función para la columna de centro de costos que totalice los ID de caso." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #70."
  },
  {
    "id": "pdf2-047",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "¿Qué opción sigue las buenas prácticas para nombrar un ruleset en la plataforma Pega?",
    "options": [
      { "id": "a", "text": "Credit Check: 03-01-02" },
      { "id": "b", "text": "Expense: 01-02-05" },
      { "id": "c", "text": "Pega-Prod: 01-04-01" },
      { "id": "d", "text": "Grand-Corporation-Human-Resources-Department: 01-01-03" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #72."
  },
  {
    "id": "pdf2-048",
    "type": "multiple",
    "topic": "Pruebas",
    "text": "¿Qué dos pasos de configuración realiza, en combinación, para grabar una prueba unitaria destinada a pruebas automatizadas? (Elija dos)",
    "options": [
      { "id": "a", "text": "Seleccionar un ruleset configurado para almacenar casos de prueba automatizados." },
      { "id": "b", "text": "Añadir un caso de prueba a la página de destino de Pruebas Automatizadas." },
      { "id": "c", "text": "Añadir una aserción para definir un resultado esperado." },
      { "id": "d", "text": "Seleccionar un ruleset configurado para almacenar los resultados de la prueba." }
    ],
    "correctOptionIds": ["c", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #73."
  },
  {
    "id": "pdf2-049",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "¿Qué parte del contenido de la aplicación localiza usando valores de campo (field values)?",
    "options": [
      { "id": "a", "text": "Instrucciones para el usuario en una regla de párrafo." },
      { "id": "b", "text": "Texto editable por el usuario en una regla de correspondencia." },
      { "id": "c", "text": "Etiquetas y valores de listas desplegables en una regla de sección." },
      { "id": "d", "text": "Logotipos u otras imágenes en una regla de harness." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #75."
  },
  {
    "id": "pdf2-050",
    "type": "multiple",
    "topic": "Interfaz de usuario",
    "text": "Un formulario de pedido ofrece cuatro opciones de las cuales los clientes pueden seleccionar una. Según las buenas prácticas, ¿qué dos tipos de control de interfaz de usuario pueden usarse para minimizar el desorden en el formulario de pedido?",
    "options": [
      { "id": "a", "text": "Botón de opción (Radio button)" },
      { "id": "b", "text": "Autocompletar (Autocomplete)" },
      { "id": "c", "text": "Lista desplegable (Dropdown)" },
      { "id": "d", "text": "Casilla de verificación (Checkbox)" }
    ],
    "correctOptionIds": ["b", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #76."
  },
  {
    "id": "pdf2-051",
    "type": "multiple",
    "topic": "Informes",
    "text": "Un formulario que lista restaurantes cercanos tiene cuatro columnas:",
    "options": [
      { "id": "a", "text": "Nombre del restaurante" },
      { "id": "b", "text": "Ubicación del restaurante" },
      { "id": "c", "text": "Imagen en miniatura de la zona de asientos" },
      { "id": "d", "text": "Hacer reserva (casilla de verificación) Quiere asegurarse de que los usuarios tengan la información necesaria para hacer una reserva independientemente del tamaño de la pantalla. Cuando se ve en una pantalla pequeña, no necesita mostrar imágenes. ¿Qué tres pasos de configuración realiza para respaldar este requisito? (Elija tres)" },
      { "id": "e", "text": "Establecer la importancia de la columna Hacer reserva en Primaria." },
      { "id": "f", "text": "Establecer la importancia de la columna Nombre del restaurante en Primaria." },
      { "id": "g", "text": "Establecer la importancia de la columna de imagen en Otra (Other)." },
      { "id": "h", "text": "Establecer la importancia de la columna de imagen en Secundaria." },
      { "id": "i", "text": "Establecer la importancia de las columnas Ubicación del restaurante y Hacer reserva en Secundaria." },
      { "id": "j", "text": "Establecer la importancia de las columnas Nombre del restaurante y Hacer reserva en Primaria." }
    ],
    "correctOptionIds": ["f", "i", "g"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #77."
  },
  {
    "id": "pdf2-052",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "En una aplicación de construcción, el grupo de acceso del usuario está configurado con un rol de acceso a registro de objeto (Access of Role to Object), como se muestra en la siguiente imagen.",
    "options": [
      { "id": "a", "text": "Abrir instancias (Open Instances) - 5" },
      { "id": "b", "text": "Modificar instancias (Modify Instances) - 4" },
      { "id": "c", "text": "Eliminar instancias (Delete Instances) - 1" },
      { "id": "d", "text": "Ejecutar informes (Run Reports) - 3" },
      { "id": "e", "text": "Abrir reglas (Open Rules) - 2" },
      { "id": "f", "text": "Modificar reglas (Modify Rules) - 2" },
      { "id": "g", "text": "Eliminar reglas (Delete Rules) - 0" },
      { "id": "h", "text": "Ejecutar actividades (Execute Activities) - 2 Actualmente la aplicación está en un sistema de Staging. ¿Qué dos operaciones pueden realizar los usuarios en esta aplicación en este nivel?" },
      { "id": "i", "text": "Abrir instancias" },
      { "id": "j", "text": "Ejecutar informes" },
      { "id": "k", "text": "Modificar instancias" },
      { "id": "l", "text": "Modificar reglas" }
    ],
    "correctOptionIds": ["i", "k"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #78."
  },
  {
    "id": "pdf2-053",
    "type": "single",
    "topic": "General",
    "text": "Dada la imagen de los libros dispuestos de cierta manera, ¿qué diseño (layout) es la mejor opción para organizar los libros de ese modo?",
    "options": [
      { "id": "a", "text": "Diseño de pantalla (Screen layout)" },
      { "id": "b", "text": "Diseño de columnas (Column layout)" },
      { "id": "c", "text": "Diseño dinámico repetitivo (Repeating Dynamic Layout)" },
      { "id": "d", "text": "Diseño dinámico (Dynamic layout)" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #79."
  },
  {
    "id": "pdf2-054",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "¿Qué dos configuraciones, usadas conjuntamente, le permiten rastrear las actualizaciones de los campos en su aplicación? (Elija dos)",
    "options": [
      { "id": "a", "text": "Seleccionar el campo que desea rastrear." },
      { "id": "b", "text": "Habilitar la auditoría de campos en la página de destino del tipo de caso." },
      { "id": "c", "text": "Añadir el rol de administrador al tipo de caso." },
      { "id": "d", "text": "Habilitar la auditoría a nivel de campo en la vista." }
    ],
    "correctOptionIds": ["b", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #80."
  },
  {
    "id": "pdf2-055",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "Los casos de solicitud de admisión universitaria avanzan automáticamente en el ciclo de vida del caso si las puntuaciones de las pruebas estandarizadas del solicitante están por encima de cierto umbral. El umbral se determina cada año en función del promedio nacional proporcionado. ¿Qué dos configuraciones, aplicadas conjuntamente, respaldan este requisito? (Elija dos)",
    "options": [
      { "id": "a", "text": "Configurar un ajuste de configuración TestThreshold con el promedio nacional como umbral de puntuación." },
      { "id": "b", "text": "Configurar un proceso con una forma de decisión que continúe si el ajuste TestThreshold es menor que la puntuación del solicitante." },
      { "id": "c", "text": "Configurar un proceso con una forma de decisión que continúe si el ajuste TestThreshold es mayor que la puntuación del solicitante." },
      { "id": "d", "text": "Configurar un ajuste de configuración TestThreshold que calcule el promedio nacional como umbral de puntuación." }
    ],
    "correctOptionIds": ["d", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #81."
  },
  {
    "id": "pdf2-056",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Una tienda minorista quiere una aplicación para procesar una nueva cuenta de fidelización de clientes. El cliente introduce su información de contacto, incluyendo nombre, correo electrónico, número de teléfono y dirección. Esta vista de entrada de datos se muestra en una relación de datos (data relationship). ¿Qué tipo de relación de datos crea?",
    "options": [
      { "id": "a", "text": "Un campo de consulta (Query field)" },
      { "id": "b", "text": "Un campo de referencia de datos (Data reference field)" },
      { "id": "c", "text": "Un campo de referencia de caso (Case reference field)" },
      { "id": "d", "text": "Un campo de datos incrustados (Embedded data field)" }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #82."
  },
  {
    "id": "pdf2-057",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Todos los gerentes necesitan ver el informe de solicitudes de vacaciones de empleados en los paneles de su portal de gerente. Solo los gerentes tienen acceso a los informes. ¿Qué configuración realiza para cumplir los requisitos?",
    "options": [
      { "id": "a", "text": "Añadir un widget de informe al panel del portal de gerente y luego hacer clic en publicar." },
      { "id": "b", "text": "Añadir un informe a la categoría pública y luego añadir la página de destino de Informes lista para usar al portal de gerente." },
      { "id": "c", "text": "Añadir un widget de informe al panel del portal de gerente y luego hacer clic en publicar como predeterminado." },
      { "id": "d", "text": "Crear una nueva página de destino en el portal de gerente con un nuevo informe guardado en la categoría pública." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #83."
  },
  {
    "id": "pdf2-058",
    "type": "single",
    "topic": "General",
    "text": "Un requisito indica: el número de identificación fiscal debe contener 10 dígitos. ¿Cómo configura el campo para respaldar este requisito?",
    "options": [
      { "id": "a", "text": "Usar una regla Edit Validate que valide el patrón del número de identificación fiscal." },
      { "id": "b", "text": "Configurar una regla Validate para probar el patrón del número de identificación fiscal." },
      { "id": "c", "text": "Establecer los valores mínimo y máximo en \"10\" en un campo de texto." },
      { "id": "d", "text": "Usar un tipo de propiedad decimal y hacer el campo obligatorio." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #84."
  },
  {
    "id": "pdf2-059",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "¿Qué dos afirmaciones son verdaderas sobre el control de estilo (Styling) en App Studio?",
    "options": [
      { "id": "a", "text": "Los desarrolladores pueden crear un nuevo formato de estilo para aplicar estilo a un control de botón listo para usar." },
      { "id": "b", "text": "Los desarrolladores pueden configurar un control de fecha y hora para que se muestre como campo de entrada de texto, lista desplegable o control de calendario." },
      { "id": "c", "text": "Los desarrolladores pueden configurar un control de botón para que se oculte cuando los usuarios hagan clic en él." },
      { "id": "d", "text": "Los desarrolladores pueden configurar un control de entrada de texto para que cambie el fondo cuando el usuario haga clic en él." }
    ],
    "correctOptionIds": ["a", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #85."
  },
  {
    "id": "pdf2-060",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "¿Qué dos requisitos garantizan que se usen datos válidos en el caso?",
    "options": [
      { "id": "a", "text": "Los datos provienen de una fuente local." },
      { "id": "b", "text": "Los datos se ajustan a la lógica de negocio." },
      { "id": "c", "text": "Los datos están organizados en el tipo de dato (data type)." },
      { "id": "d", "text": "Los datos son del tipo de campo correcto." }
    ],
    "correctOptionIds": ["d", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #86."
  },
  {
    "id": "pdf2-061",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "¿Qué problema resuelve simulando una fuente de datos?",
    "options": [
      { "id": "a", "text": "Necesita capturar métricas de rendimiento cuando un caso procesa una gran cantidad de datos locales." },
      { "id": "b", "text": "En Producción, la base de datos de clientes debe desconectarse durante la noche para mantenimiento programado." },
      { "id": "c", "text": "La base de datos de productos se traslada a una nueva fuente de datos accesible por un servicio web que aún no está configurado." },
      { "id": "d", "text": "Necesita guardar el plan de prueba de una página de datos guardable que actualiza el costo de las opciones de cobertura de las pólizas de seguro." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #87."
  },
  {
    "id": "pdf2-062",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "Un desarrollador configura un botón con el conjunto de acciones (action set) que se muestra a continuación:",
    "options": [
      { "id": "a", "text": "Evento: Click" },
      { "id": "b", "text": "Acción: Refrescar esta sección" },
      { "id": "c", "text": "Destino: Sección" },
      { "id": "d", "text": "Transformación de datos: SetDefaultValues Ordene el flujo de eventos:" },
      { "id": "e", "text": "El sistema aplica una transformación de datos." },
      { "id": "f", "text": "El sistema refresca la sección." },
      { "id": "g", "text": "El valor de Order ID se establece con el valor del número de confirmación si el sistema confirma el pago." },
      { "id": "h", "text": "Un usuario hace clic en el botón." }
    ],
    "correctOptionIds": ["h", "e", "g", "f"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #89."
  },
  {
    "id": "pdf2-063",
    "type": "single",
    "topic": "Seguridad y acceso",
    "text": "Una aplicación interna otorga actualmente acceso a 75 empleados a uno de cuatro roles: Admin, Author, User y Manager. Un nuevo analista que se une a la empresa requiere todo el acceso del rol Author, pero solo algunas de las capacidades de informes disponibles para el rol Manager. ¿Cómo satisface el requisito de seguridad?",
    "options": [
      { "id": "a", "text": "Añadir el analista al rol Manager." },
      { "id": "b", "text": "Crear un nuevo rol de analista con el acceso requerido." },
      { "id": "c", "text": "Actualizar el rol Author para incluir los informes de analista requeridos." },
      { "id": "d", "text": "Añadir el analista tanto al rol Author como al Manager." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #90."
  },
  {
    "id": "pdf2-064",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Se le pide crear un estado personalizado llamado Open-Review. Este estado debe aplicarse a las asignaciones de una aplicación. ¿Cómo satisface la solicitud?",
    "options": [
      { "id": "a", "text": "Aplicar circunstancia (circumstance) al registro de valor de campo Open existente según el nombre de la aplicación y actualizar el valor de estado a Open-Review." },
      { "id": "b", "text": "Crear un registro de valor de campo llamado Open-Review para .pyStatusWork y configurar un registro Access When para aplicar el estado a la aplicación correcta." },
      { "id": "c", "text": "Crear un registro de valor de campo llamado Open-Review para .pyStatusWork con la clase \"Apply To\" establecida en el grupo de clases (class group)." },
      { "id": "d", "text": "Añadir el estado Open-Review al registro de Aplicación para la aplicación." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #91."
  },
  {
    "id": "pdf2-065",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos afirmaciones sobre los registros de datos (data records) son verdaderas?",
    "options": [
      { "id": "a", "text": "El registro de datos requiere almacenamiento externo." },
      { "id": "b", "text": "El registro de datos permite valores admisibles para los campos de datos." },
      { "id": "c", "text": "El registro de datos necesita ID únicos generados por el usuario." },
      { "id": "d", "text": "Los registros de datos se muestran en una lista desplegable de forma predeterminada." }
    ],
    "correctOptionIds": ["d", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #92."
  },
  {
    "id": "pdf2-066",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "En un tipo de caso de pago de tarjeta de crédito, quiere establecer la cuota anual en 75 USD. ¿Cómo establece el campo de cuota anual?",
    "options": [
      { "id": "a", "text": "En la página de inicialización de datos (Data Initialization), establecer la cuota anual en 75 USD." },
      { "id": "b", "text": "Configurar la cuota anual como campo calculado." },
      { "id": "c", "text": "Configurar el campo de cuota anual para que haga referencia al importe mínimo a pagar." },
      { "id": "d", "text": "Configurar una validación de campo en el campo de cuota anual." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #93."
  },
  {
    "id": "pdf2-067",
    "type": "multiple",
    "topic": "General",
    "text": "Una cotización de seguro de automóvil requiere una vista para que los clientes potenciales introduzcan información y se procese la solicitud. ¿Cuáles son las tres decisiones principales que debe tomar antes de añadir campos a la vista? (Elija tres)",
    "options": [
      { "id": "a", "text": "¿Es obligatoria la entrada del campo?" },
      { "id": "b", "text": "¿Requiere el campo una fuente de datos?" },
      { "id": "c", "text": "¿Se aplican acciones de procesamiento al campo?" },
      { "id": "d", "text": "¿Cómo introducen los usuarios los valores en el campo?" },
      { "id": "e", "text": "¿Debe el usuario ver el campo?" }
    ],
    "correctOptionIds": ["a", "d", "e"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #95."
  },
  {
    "id": "pdf2-068",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Durante las pruebas, observa que el paso de enviar el estado del caso por correo electrónico no envía el correo. ¿Qué elemento de trabajo crea en el Agile Workbench para atender este problema?",
    "options": [
      { "id": "a", "text": "Status (Estado)" },
      { "id": "b", "text": "Feedback (Comentario)" },
      { "id": "c", "text": "Bug (Error)" },
      { "id": "d", "text": "User Story (Historia de usuario)" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #96."
  },
  {
    "id": "pdf2-069",
    "type": "single",
    "topic": "Datos e integración",
    "text": "Una empresa de fabricación tiene una página de datos de inventario que usa estructura de página (page). Necesita escribir una única página de datos en una única fila de base de datos en el sistema de registro configurado. ¿Qué opción cumple el requisito?",
    "options": [
      { "id": "a", "text": "Conector (connector)" },
      { "id": "b", "text": "Insight" },
      { "id": "c", "text": "Tipo de dato (data type)" },
      { "id": "d", "text": "Guardado en base de datos (database save)" }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #97."
  },
  {
    "id": "pdf2-070",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "En el diseñador de casos (Case Designer), ¿qué dos componentes pueden etiquetar los usuarios con una versión de Producto Mínimo Viable/Amable (MLP) para fines de estimación del proyecto? (Elija dos)",
    "options": [
      { "id": "a", "text": "Un canal de app móvil de usuario." },
      { "id": "b", "text": "Una automatización." },
      { "id": "c", "text": "Una decisión de aprobación." },
      { "id": "d", "text": "Un sistema de registro externo." }
    ],
    "correctOptionIds": ["d", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #98."
  },
  {
    "id": "pdf2-071",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "¿Qué escenario requiere realizar actualizaciones en Dev Studio?",
    "options": [
      { "id": "a", "text": "Un representante de cliente puede aprobar o rechazar una reclamación." },
      { "id": "b", "text": "Una nueva vista de confirmación muestra una propiedad de texto de solo lectura." },
      { "id": "c", "text": "Se añade una correspondencia por correo electrónico al tipo de caso." },
      { "id": "d", "text": "Una tarea se reasigna cuando alcanza el objetivo de un acuerdo de nivel de servicio." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #99."
  },
  {
    "id": "pdf2-072",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "Está probando un tipo de caso de reserva de aerolínea que aún no tiene una interfaz de usuario configurada. Necesita verificar que al cambiar el campo PurchaseInsurance en la herramienta de portapapeles (clipboard) se actualiza el campo TotalCost. ¿En qué categoría de la herramienta de portapapeles esperaría encontrar el campo PurchaseInsurance?",
    "options": [
      { "id": "a", "text": "Páginas de usuario (User Pages)" },
      { "id": "b", "text": "Páginas del sistema (System Pages)" },
      { "id": "c", "text": "Páginas de datos (Data Pages)" },
      { "id": "d", "text": "Páginas de propiedad enlazada (Linked property Pages)" }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #100."
  },
  {
    "id": "pdf2-073",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "Un desarrollador descubre que el valor de una propiedad calculada devuelve un resultado inesperado. ¿Qué dos características de la herramienta Tracer le permiten diagnosticar el problema sin afectar significativamente el rendimiento de la aplicación? (Elija dos)",
    "options": [
      { "id": "a", "text": "El monitor de eventos (Event Monitor)" },
      { "id": "b", "text": "La herramienta de portapapeles (clipboard)" },
      { "id": "c", "text": "La función Watch (observar)" },
      { "id": "d", "text": "Los puntos de interrupción (Breakpoints)" }
    ],
    "correctOptionIds": ["c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #101."
  },
  {
    "id": "pdf2-074",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "Está configurando el enrutamiento de una solicitud de servicio de garantía a clientes. Todas las solicitudes de servicio de garantía se enrutan al grupo de resolución de garantías, excepto las de un producto en versión beta que requieren revisión del vicepresidente de servicio. ¿Cómo configura el enrutamiento de asignaciones para revisar las solicitudes de servicio de garantía?",
    "options": [
      { "id": "a", "text": "Enrutar la asignación al grupo de resolución de garantías, que envía una notificación por correo al vicepresidente de servicio para el producto en beta." },
      { "id": "b", "text": "Enrutar la asignación al grupo con la habilidad para la beta cuando la solicitud sea para la beta; de lo contrario, enrutar al grupo de resolución de garantías." },
      { "id": "c", "text": "Enrutar la asignación al vicepresidente de servicio, que la enruta al grupo de resolución de garantías según sea necesario." },
      { "id": "d", "text": "Enrutar la asignación al vicepresidente de servicio cuando la solicitud sea para la beta; de lo contrario, enrutar al grupo de resolución de garantías." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #102."
  },
  {
    "id": "pdf2-075",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Un tipo de caso para solicitudes de locución (voice over) incluye dos tareas: Editar guion y Grabar guion. Se ha pedido a su equipo enrutar la tarea de editar guion a los editores y la tarea de grabar guion a los actores. ¿Qué enfoque cumple el requisito?",
    "options": [
      { "id": "a", "text": "Crear una nueva cola de trabajo y dividir las tareas por tipo." },
      { "id": "b", "text": "Crear un grupo de trabajo para ambas personas y enrutar al grupo de trabajo." },
      { "id": "c", "text": "Crear dos nuevos grupos de trabajo en Dev Studio que hagan referencia a una cola de trabajo." },
      { "id": "d", "text": "Crear dos nuevas colas de trabajo, una para editores y una para actores." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #104."
  },
  {
    "id": "pdf2-076",
    "type": "single",
    "topic": "General",
    "text": "¿Qué afirmación determina con mayor precisión el uso de la vista previa móvil de Pega (Pega Mobile Preview)?",
    "options": [
      { "id": "a", "text": "La vista previa móvil de Pega modela una interacción típica del usuario para hacer pruebas de escenario en una app móvil." },
      { "id": "b", "text": "La vista previa móvil de Pega le permite configurar la interfaz de usuario de la aplicación." },
      { "id": "c", "text": "La vista previa móvil de Pega simula cargas de usuario para probar el rendimiento de la app móvil." },
      { "id": "d", "text": "La vista previa móvil de Pega le permite simular una aplicación Pega en el dispositivo móvil." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #105."
  },
  {
    "id": "pdf2-077",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Una empresa recibe a menudo varios tickets de TI por el mismo problema, como \"El wifi de la oficina no funciona\". Configura un paso de búsqueda de casos duplicados para identificar tickets de TI duplicados. ¿Cuál es la condición básica (basic condition) para el paso \"Search duplicate cases\"?",
    "options": [
      { "id": "a", "text": "La ubicación de la oficina es la misma." },
      { "id": "b", "text": "El departamento es el mismo." },
      { "id": "c", "text": "El tipo de problema es el mismo." },
      { "id": "d", "text": "El nombre del remitente es el mismo." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #106."
  },
  {
    "id": "pdf2-078",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "¿Para qué caso de uso crea una nueva regla en una aplicación de la plataforma Pega?",
    "options": [
      { "id": "a", "text": "Un desarrollador crea un proceso paralelo para auditar los cambios que realiza un agente de servicio." },
      { "id": "b", "text": "Un diseñador reutiliza una sección de interfaz de usuario cada vez que se necesita el mismo comportamiento en la aplicación." },
      { "id": "c", "text": "Un diseñador usa el modo diseño en tiempo de ejecución para modificar una vista y usar una plantilla de dos columnas." },
      { "id": "d", "text": "Un desarrollador realiza cambios en un mensaje de correo electrónico configurado en el ciclo de vida del caso." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #107."
  },
  {
    "id": "pdf2-079",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "ABC Bank Corp quiere crear una experiencia de app móvil para usuarios y CSR de su aplicación de disputa de transacciones. De los siguientes requisitos, ¿cuál requiere configurar canales de app móvil distintos?",
    "options": [
      { "id": "a", "text": "La app móvil personaliza las unidades de moneda y el formato de fecha/hora según la ubicación de los usuarios." },
      { "id": "b", "text": "Las paletas de color de la app móvil son diferentes para usuarios y CSR." },
      { "id": "c", "text": "Los CSR pueden crear instancias de otros tipos de caso en la app móvil." },
      { "id": "d", "text": "La app móvil admite todos los sistemas operativos de teléfonos móviles." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #108."
  },
  {
    "id": "pdf2-080",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos opciones puede configurar en un canal de app móvil?",
    "options": [
      { "id": "a", "text": "Diseñar cómo se renderizan los elementos de la interfaz de usuario en diferentes dispositivos móviles." },
      { "id": "b", "text": "Definir el comportamiento de la interfaz de usuario para cada vista del tipo de caso cuando el caso se muestra en el dispositivo móvil." },
      { "id": "c", "text": "Definir el comportamiento de seguridad de una app móvil, como los identificadores biométricos." },
      { "id": "d", "text": "Gestionar funciones administrativas, como el acceso a los archivos de registro." }
    ],
    "correctOptionIds": ["c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #109."
  },
  {
    "id": "pdf2-081",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "¿Qué escenario es un caso de uso para un paso Wait?",
    "options": [
      { "id": "a", "text": "Un usuario de nómina no puede procesar un aumento de salario hasta que el gerente del departamento apruebe el aumento." },
      { "id": "b", "text": "El cliente no puede completar una solicitud de cuenta corriente hasta que un representante del banco revise el informe de crédito." },
      { "id": "c", "text": "El cliente debe iniciar sesión en su cuenta antes de recibir un descuento de membresía en una compra en línea." },
      { "id": "d", "text": "Un agente debe enviar un correo de confirmación a un cliente asegurado después de que complete un formulario." }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #111."
  },
  {
    "id": "pdf2-082",
    "type": "single",
    "topic": "SLA y plazos",
    "text": "¿Qué estudio utiliza para configurar un SLA con plazo vencido (passed deadline)?",
    "options": [
      { "id": "a", "text": "App Studio" },
      { "id": "b", "text": "Dev Studio" },
      { "id": "c", "text": "Admin Studio" },
      { "id": "d", "text": "Prediction Studio" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #112."
  },
  {
    "id": "pdf2-083",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "¿Qué dos escenarios requieren configurar procesamiento condicional dentro del tipo de caso?",
    "options": [
      { "id": "a", "text": "Una solicitud de elegibilidad para beca requiere que los estudiantes introduzcan sus puntuaciones de pruebas estandarizadas. Los estudiantes con puntuación calificada pueden programar una entrevista. Los que no la tienen reciben un correo de rechazo." },
      { "id": "b", "text": "Una aplicación requiere que los clientes seleccionen el tipo de solicitud en una lista desplegable. El sistema enruta la solicitud a la cola de trabajo del departamento apropiado. Un usuario con acceso a la cola procesa el caso hasta su cumplimiento." },
      { "id": "c", "text": "Una aplicación de reservas de catering requiere que los clientes introduzcan información sobre el tamaño de la fiesta, la fecha y la hora del evento. Cuando el cliente envía la información, la empresa de catering envía un correo de confirmación." },
      { "id": "d", "text": "Una aplicación de compras requiere que un invitado complete la información de pago. Un usuario que introduce un número de membresía omite el paso de información de pago." }
    ],
    "correctOptionIds": ["a", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #113."
  },
  {
    "id": "pdf2-084",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Como parte del tipo de caso de Reserva que gestiona alquileres de coches, el cliente puede revisar sus alquileres anteriores seleccionando de una lista de casos de alquiler. ¿Qué tipo de campo configura para lograr este comportamiento?",
    "options": [
      { "id": "a", "text": "Datos incrustados (Embedded data)" },
      { "id": "b", "text": "Referencia de caso (Case reference)" },
      { "id": "c", "text": "Referencia de datos (Data reference)" },
      { "id": "d", "text": "Consulta (Query)" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #114."
  },
  {
    "id": "pdf2-085",
    "type": "multiple",
    "topic": "Interfaz de usuario",
    "text": "¿Qué dos elementos deben configurarse para añadir una fuente externa al objeto de datos (data object)?",
    "options": [
      { "id": "a", "text": "Una transformación de datos para mapear el modelo de datos de la aplicación al conector." },
      { "id": "b", "text": "El identificador uniforme de recurso (URI) que identifica el servicio web." },
      { "id": "c", "text": "Una fuente de datos simulada para probar la implementación." },
      { "id": "d", "text": "La información de autenticación, si el servicio correspondiente la requiere." }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #115."
  },
  {
    "id": "pdf2-086",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "Está definiendo una vista de usuario para la solicitud de préstamo. Si el solicitante del préstamo indica que tiene una cuenta abierta existente, la fecha de apertura de la cuenta debe ser anterior a la fecha actual. ¿Cómo configura el tipo de caso para verificar que el valor de la fecha de apertura de la cuenta esté en el pasado?",
    "options": [
      { "id": "a", "text": "Usar un control de lista de opciones (picklist)." },
      { "id": "b", "text": "Usar un control de calendario." },
      { "id": "c", "text": "Usar una regla Validate." },
      { "id": "d", "text": "Usar una regla When." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #116."
  },
  {
    "id": "pdf2-087",
    "type": "single",
    "topic": "Reglas y aplicación",
    "text": "¿Cómo proporciona a los usuarios orientación para completar un formulario y evitar la necesidad de capacitación en la aplicación?",
    "options": [
      { "id": "a", "text": "Enviar una notificación al usuario asignado." },
      { "id": "b", "text": "Añadir un paso de correspondencia a la etapa apropiada." },
      { "id": "c", "text": "Añadir una acción opcional al caso para explicar la tarea." },
      { "id": "d", "text": "Añadir una instrucción a la asignación." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #117."
  },
  {
    "id": "pdf2-088",
    "type": "single",
    "topic": "Datos e integración",
    "text": "Un caso de transacción disputada registra la información de la cuenta usando una propiedad de página (page property). La información de la cuenta se registra en el momento en que se crea el caso y no se actualiza cuando el caso se procesa posteriormente. La información de la cuenta se almacena en un sistema externo y se accede mediante la página de datos. ¿Cómo configura la página de información de la cuenta?",
    "options": [
      { "id": "a", "text": "Definir una propiedad de referencia que refiera a la página de datos." },
      { "id": "b", "text": "Configurar la propiedad de página para referir a una página de datos con clave (keyed data page)." },
      { "id": "c", "text": "Seleccionar \"refer to data page\" (referir a la página de datos) en la propiedad de página." },
      { "id": "d", "text": "Seleccionar \"copy from data page\" (copiar de la página de datos) en la propiedad de página." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #118."
  },
  {
    "id": "pdf2-089",
    "type": "single",
    "topic": "Datos e integración",
    "text": "Una vez que el cliente inicia sesión en la aplicación de compras, esta muestra la lista de productos comprados por el cliente. ¿Cuál es el alcance (scope) apropiado de la página de datos?",
    "options": [
      { "id": "a", "text": "Nodo (Node)" },
      { "id": "b", "text": "Solicitante (Requestor)" },
      { "id": "c", "text": "Hilo (Thread)" },
      { "id": "d", "text": "Sistema (System)" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #119."
  },
  {
    "id": "pdf2-090",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "En una aplicación bancaria, ¿qué dos opciones deben usarse conjuntamente para presentar a los usuarios un conjunto de opciones de transferencia de saldo solo si eligen transferir un saldo a su tarjeta de crédito? (Elija dos)",
    "options": [
      { "id": "a", "text": "Añadir un conjunto de acciones (action set) en el diseño que contiene las ofertas de transferencia de saldo para activar un refresco." },
      { "id": "b", "text": "Añadir una condición \"visible when\" a la casilla de verificación de la elección de transferencia de saldo." },
      { "id": "c", "text": "Añadir un conjunto de acciones a la casilla de verificación de la elección de transferencia de saldo para activar un refresco." },
      { "id": "d", "text": "Añadir una condición \"visible when\" al diseño que contiene las ofertas de transferencia de saldo." }
    ],
    "correctOptionIds": ["c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #120."
  },
  {
    "id": "pdf2-091",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Un proceso de reserva permite a los clientes reservar un vuelo, una habitación de hotel y un coche de alquiler como parte de un itinerario de viaje. ¿Qué configuración muestra una casilla de \"seleccionar seguro de vuelo\" solo si el itinerario incluye un vuelo?",
    "options": [
      { "id": "a", "text": "Una condición de deshabilitación (regla When) aplicada a la sección con la información del seguro de vuelo." },
      { "id": "b", "text": "Una condición de obligatoriedad (regla When) aplicada a la casilla Seleccionar seguro de vuelo." },
      { "id": "c", "text": "Una condición de visibilidad (regla When) aplicada a la casilla Seleccionar seguro de vuelo." },
      { "id": "d", "text": "Una condición de deshabilitación (regla When) aplicada a la casilla Seleccionar seguro de vuelo." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #121."
  },
  {
    "id": "pdf2-092",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "Está implementando un formulario de interfaz de usuario para recopilar información de solicitantes de empleo. Los usuarios deben proporcionar valores a ciertos campos antes de enviar el formulario. ¿Qué configuración añade asteriscos para indicar los campos obligatorios del formulario?",
    "options": [
      { "id": "a", "text": "Usar varias reglas Validate para cada campo obligatorio." },
      { "id": "b", "text": "Usar una regla Edit Validate para verificar si cada una de las propiedades obligatorias tiene un valor." },
      { "id": "c", "text": "Usar una regla Validate para verificar que los campos obligatorios tengan un valor." },
      { "id": "d", "text": "Configurar los campos obligatorios como Requeridos (Required) en la regla de sección." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #122."
  },
  {
    "id": "pdf2-093",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "¿Qué dos casos de uso admite la configuración de un canal móvil en App Studio?",
    "options": [
      { "id": "a", "text": "Conceder acceso a la aplicación a un usuario específico." },
      { "id": "b", "text": "Establecer el ancho de la aplicación en 180 x 180 píxeles." },
      { "id": "c", "text": "Configurar un comportamiento de deslizamiento hacia la izquierda para abrir un mensaje." },
      { "id": "d", "text": "Bloquear la aplicación tras 20 minutos de inactividad." }
    ],
    "correctOptionIds": ["c", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #123."
  },
  {
    "id": "pdf2-094",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "En un tipo de caso de pago de tarjeta de crédito, quiere establecer el importe del pago en el importe mínimo a pagar cuando el usuario crea un caso. ¿Cómo establece el método de pago?",
    "options": [
      { "id": "a", "text": "Configurar la transformación de datos pySetFieldDefaults para establecer el valor predeterminado." },
      { "id": "b", "text": "Configurar una validación de campo en el importe del pago." },
      { "id": "c", "text": "Configurar el campo de importe del pago para que haga referencia al importe mínimo a pagar." },
      { "id": "d", "text": "Configurar el pago como campo calculado." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #125."
  },
  {
    "id": "pdf2-095",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos afirmaciones sobre los objetos de datos (data objects) son verdaderas?",
    "options": [
      { "id": "a", "text": "Los objetos de datos reutilizan activos de objetos de datos existentes mediante herencia." },
      { "id": "b", "text": "Un objeto de datos en borrador (draft) hace referencia a un tipo de dato." },
      { "id": "c", "text": "Un objeto de datos creado en App Studio crea un tipo de dato en Dev Studio." },
      { "id": "d", "text": "Los objetos de datos provienen de un sistema de registro externo." }
    ],
    "correctOptionIds": ["a", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #126."
  },
  {
    "id": "pdf2-096",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "Una aplicación debe validar los códigos postales de clientes canadienses para que coincidan con el patrón A1A 1A1, donde A representa una letra y 1 representa un número. ¿Qué dos configuraciones distintas garantizan que el usuario proporcione un código postal válido?",
    "options": [
      { "id": "a", "text": "Configurar un control desplegable para seleccionar el código postal según la ciudad y la provincia." },
      { "id": "b", "text": "Configurar el campo de código postal como propiedad de texto con campo de entrada obligatorio." },
      { "id": "c", "text": "Configurar una regla Validate para probar que el código postal introducido cumple el patrón requerido." },
      { "id": "d", "text": "Configurar una regla Edit Validate para probar que el código postal introducido cumple el patrón requerido." }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #127."
  },
  {
    "id": "pdf2-097",
    "type": "multiple",
    "topic": "General",
    "text": "¿Qué dos afirmaciones son verdaderas sobre los insights?",
    "options": [
      { "id": "a", "text": "Los insights transforman consultas de datos en visualizaciones compartibles." },
      { "id": "b", "text": "La visibilidad siempre es compartida para los gráficos de insight." },
      { "id": "c", "text": "Puede editar los datos de la aplicación directamente en un insight." },
      { "id": "d", "text": "Solo puede usar campos preconfigurados en un insight." }
    ],
    "correctOptionIds": ["a", "b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #128."
  },
  {
    "id": "pdf2-098",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Una autorización de viaje requiere aprobaciones del gerente del solicitante, del VP de división y de contabilidad según el importe total. ¿Qué configuración satisface el caso de uso?",
    "options": [
      { "id": "a", "text": "Aprobación en cascada usando reglas When." },
      { "id": "b", "text": "Aprobación en cascada usando el gerente jerárquico (reporting manager)." },
      { "id": "c", "text": "Aprobación en cascada usando una matriz de autoridad." },
      { "id": "d", "text": "Aprobación en cascada usando el gerente del grupo de trabajo." }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #129."
  },
  {
    "id": "pdf2-099",
    "type": "single",
    "topic": "General",
    "text": "El gerente de ventas debe poder aprobar las propuestas de cotización de ventas por correo electrónico y desde un dispositivo móvil. ¿Cómo logra este requisito?",
    "options": [
      { "id": "a", "text": "Añadir un paso aprobar/rechazar y habilitar la aprobación por correo y móvil." },
      { "id": "b", "text": "Añadir un paso aprobar/rechazar y un paso de enviar correo." },
      { "id": "c", "text": "Añadir un paso aprobar/rechazar con aprobación móvil habilitada y un paso de enviar correo." },
      { "id": "d", "text": "Añadir un paso aprobar/rechazar y habilitar las notificaciones por correo en el tipo de caso." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #130."
  },
  {
    "id": "pdf2-100",
    "type": "single",
    "topic": "General",
    "text": "Una reclamación médica debe resolverse en 5 días. Debemos establecer ________ en 5 días.",
    "options": [
      { "id": "a", "text": "START (Inicio)" },
      { "id": "b", "text": "GOAL (Objetivo)" },
      { "id": "c", "text": "DEADLINE (Plazo)" },
      { "id": "d", "text": "PASSED DEADLINE (Plazo vencido)" }
    ],
    "correctOptionIds": ["c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #131."
  },
  {
    "id": "pdf2-101",
    "type": "multiple",
    "topic": "General",
    "text": "Un requisito indica: los solicitantes de préstamo deben introducir su salario anual. Si el salario está por encima del umbral de calificación, la solicitud se aprueba automáticamente. Si el salario está por debajo del umbral, el solicitante debe identificar a un codeudor (cosigner). Seleccione dos opciones de configuración que sigan las buenas prácticas para cumplir el requisito.",
    "options": [
      { "id": "a", "text": "Diseñar una vista de usuario con un campo de salario anual y una sección para la información del codeudor. Usar una condición \"visible when\" para mostrar la información del codeudor cuando el salario esté por debajo del umbral." },
      { "id": "b", "text": "Crear un paso de asignación para que un oficial de préstamos revise el salario anual del solicitante y determine si es necesario un codeudor." },
      { "id": "c", "text": "Diseñar una vista de usuario con un campo de salario anual. Crear una acción opcional para recopilar información sobre el codeudor y asignar la acción a la etapa apropiada." },
      { "id": "d", "text": "Usar un paso de recopilar información con un campo de salario anual. Usar una forma de decisión para determinar si avanzar el paso para introducir la información del codeudor o completar el proceso." }
    ],
    "correctOptionIds": ["a", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #132."
  },
  {
    "id": "pdf2-102",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "¿Cuándo se actualiza el estado del caso?",
    "options": [
      { "id": "a", "text": "Al inicio del paso." },
      { "id": "b", "text": "Al final del paso." },
      { "id": "c", "text": "Después de que el paso se procesa." },
      { "id": "d", "text": "Después de que el caso se resuelve." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #133."
  },
  {
    "id": "pdf2-103",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Se envía una encuesta a un cliente por correo electrónico. ¿Cómo configura una solución para garantizar que el correo incluya el ID de caso de la encuesta?",
    "options": [
      { "id": "a", "text": "Crear un campo obligatorio para el ID de caso que el usuario deba introducir." },
      { "id": "b", "text": "Invocar la transformación de datos para copiar el ID de caso de pyWorkPage al correo." },
      { "id": "c", "text": "Crear un proceso usando un paso de enviar correo que permita a los representantes añadir rápidamente el ID de caso al correo." },
      { "id": "d", "text": "Usar la función \"insertar propiedad\" (insert property) del paso Send Email para añadir el ID de caso al componer el mensaje." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #134."
  },
  {
    "id": "pdf2-104",
    "type": "multiple",
    "topic": "General",
    "text": "Una empresa de mudanzas ofrece a los clientes una herramienta que recomienda un vehículo de mudanza según el número de dormitorios de su vivienda actual y si planean mover muebles pesados como marcos de cama, colchones o sofás. ¿Qué dos configuraciones se usan para crear una tabla de decisión?",
    "options": [
      { "id": "a", "text": "Crear una columna para el vehículo de mudanza recomendado." },
      { "id": "b", "text": "Crear filas para el vehículo de mudanza recomendado." },
      { "id": "c", "text": "Crear dos filas: una para el número de dormitorios y una para si el cliente mueve muebles pesados." },
      { "id": "d", "text": "Crear dos columnas: una para el número de dormitorios y una para si el cliente mueve muebles pesados." }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #135."
  },
  {
    "id": "pdf2-105",
    "type": "single",
    "topic": "General",
    "text": "Un proveedor de internet tiene un cuestionario que ofrece a los clientes una velocidad de internet recomendada según su uso típico de internet. Las preguntas difieren según las selecciones que hace el cliente; por ejemplo, si la recomendación es para una residencia o un negocio. Una vez que el cliente completa el cuestionario, ¿cómo recomienda la velocidad de internet?",
    "options": [
      { "id": "a", "text": "Configurar una tabla de decisión." },
      { "id": "b", "text": "Configurar un árbol de decisión." },
      { "id": "c", "text": "Configurar una vista con las preguntas del cuestionario." },
      { "id": "d", "text": "Configurar un proceso con múltiples formas de decisión." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #136."
  },
  {
    "id": "pdf2-106",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "Para reducir el desplazamiento (scrolling) en una vista, quiere organizar el contenido existente en la visualización de detalles cuando se selecciona la opción como menú desplegable. Actualmente no hay ningún menú desplegable en la vista. ¿Qué dos configuraciones logran el requisito de negocio?",
    "options": [
      { "id": "a", "text": "Configurar un grupo de diseño (layout group) para separar cada opción en paneles individuales y establecer el formato del diseño como menú." },
      { "id": "b", "text": "Configurar una condición de deshabilitación (regla When) en cada campo para permitir el acceso cuando la opción asociada se seleccione en la lista desplegable." },
      { "id": "c", "text": "Configurar un diseño dinámico repetitivo con una sección incrustada para cada opción y establecer el formato del diseño como agrupado." },
      { "id": "d", "text": "Configurar una relación de datos para seleccionar la opción usando la opción de registro de lista desplegable." }
    ],
    "correctOptionIds": ["a", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #137."
  },
  {
    "id": "pdf2-107",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "ABC Bank Corp quiere crear una experiencia de app móvil para usuarios y CSR de su aplicación de disputa de transacciones. De los siguientes requisitos, ¿qué dos opciones afectan al número de canales de app móvil que necesita configurar?",
    "options": [
      { "id": "a", "text": "La app móvil admite tanto teléfonos como tabletas." },
      { "id": "b", "text": "Los clientes solo pueden crear casos de disputa, mientras que los CSR pueden crear casos de informe de fraude." },
      { "id": "c", "text": "La paleta de color de la app móvil está personalizada para cada filial (subsidiary)." },
      { "id": "d", "text": "La app personaliza las unidades de moneda y el formato de fecha/hora según la configuración regional del usuario." }
    ],
    "correctOptionIds": ["b", "c"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #138."
  },
  {
    "id": "pdf2-108",
    "type": "single",
    "topic": "Interfaz de usuario",
    "text": "Necesita probar si una interfaz de usuario es adecuada para usuarios con discapacidades visuales, como la deuteranopía (confusión de rojo y verde). ¿Cómo realiza la tarea?",
    "options": [
      { "id": "a", "text": "Usando el inspector de accesibilidad (accessibility inspector)." },
      { "id": "b", "text": "Usar una extensión de lector de pantalla." },
      { "id": "c", "text": "Habilitar la herramienta Live UI." },
      { "id": "d", "text": "Realizar pruebas unitarias de las reglas de sección." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #139."
  },
  {
    "id": "pdf2-109",
    "type": "single",
    "topic": "General",
    "text": "Necesita localizar una correspondencia a un idioma que no está disponible en el paquete de idiomas de Pega. ¿Qué opción satisface el requisito?",
    "options": [
      { "id": "a", "text": "Aprovechar los servicios de traducción mediante llamadas SOAP y habilitar los registros para traducción." },
      { "id": "b", "text": "Configurar un registro de valor de campo que contenga el texto de la correspondencia." },
      { "id": "c", "text": "Crear el archivo de traducción manualmente e incluir la regla en el ruleset de la aplicación." },
      { "id": "d", "text": "Ejecutar el asistente de localización y añadir las traducciones a Translation.html." }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #140."
  },
  {
    "id": "pdf2-110",
    "type": "multiple",
    "topic": "Reglas y aplicación",
    "text": "¿Qué configuraciones podemos hacer usando el canal móvil en App Studio?",
    "options": [
      { "id": "a", "text": "Cambiar el host de una app móvil a un sistema de producción, en lugar de uno de desarrollo." },
      { "id": "b", "text": "Identificar cómo los diferentes dispositivos móviles renderizan los controles de interfaz de usuario." },
      { "id": "c", "text": "Establecer el comportamiento de seguridad de una app móvil, como los identificadores biométricos." },
      { "id": "d", "text": "Definir el comportamiento de la interfaz de usuario de una vista cuando se muestra en un dispositivo móvil." },
      { "id": "e", "text": "Definir el rol aplicado a los usuarios cuando ejecutan la app móvil." }
    ],
    "correctOptionIds": ["a", "c", "e"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #141."
  },
  {
    "id": "pdf2-111",
    "type": "single",
    "topic": "General",
    "text": "Debe considerar usar un valor de campo (field value) cuando la lista de valores permitidos es:",
    "options": [
      { "id": "a", "text": "actualizada con frecuencia" },
      { "id": "b", "text": "compartida entre todos los tipos de caso" },
      { "id": "c", "text": "de tres elementos o menos" },
      { "id": "d", "text": "en su mayoría estática" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #142."
  },
  {
    "id": "pdf2-112",
    "type": "multiple",
    "topic": "General",
    "text": "¿Cuáles de los siguientes se pueden usar en los datos de un insight?",
    "options": [
      { "id": "a", "text": "Página de datos exportable (Exportable data page)" },
      { "id": "b", "text": "Lista (List)" },
      { "id": "c", "text": "CSV" },
      { "id": "d", "text": "Gráfico interactivo (Interactive Chart)" }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #143."
  },
  {
    "id": "pdf2-113",
    "type": "single",
    "topic": "General",
    "text": "Si la estimación del tamaño del proyecto no se establece correctamente y el MLP no se entrega a tiempo, ¿a quién debe enviarse la escalación?",
    "options": [
      { "id": "a", "text": "Scrum Master" },
      { "id": "b", "text": "Líder de entrega del proyecto (Project Delivery Leader)" },
      { "id": "c", "text": "LSA (Lead System Architect)" },
      { "id": "d", "text": "Arquitecto de despliegue (Deployment architect)" }
    ],
    "correctOptionIds": ["b"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #145."
  },
  {
    "id": "pdf2-114",
    "type": "single",
    "topic": "General",
    "text": "Dado el siguiente escenario:",
    "options": [
      { "id": "a", "text": "El equipo de empleados realizará la entrevista." },
      { "id": "b", "text": "El equipo de RR. HH. emitirá la carta de oferta." },
      { "id": "c", "text": "El equipo de instalaciones (Facilities) preparará la infraestructura requerida." },
      { "id": "d", "text": "El equipo de TI configurará el sistema requerido. ¿Cuántas personas (personas) se requieren en este escenario?" },
      { "id": "e", "text": "Una persona (Empleado)" },
      { "id": "f", "text": "Dos personas (Empleado y RR. HH.)" },
      { "id": "g", "text": "Tres personas (Empleado, RR. HH. y TI)" },
      { "id": "h", "text": "Cuatro personas (Empleado, RR. HH., TI e Instalaciones)" }
    ],
    "correctOptionIds": ["h"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #146."
  },
  {
    "id": "pdf2-115",
    "type": "single",
    "topic": "Gestión de casos",
    "text": "Sam está trabajando en el concepto de caso padre e hijo. Los datos del caso padre no se copian al caso hijo. ¿Qué herramienta ayudará a averiguar dónde está el problema?",
    "options": [
      { "id": "a", "text": "Ajustes de configuración (Configuration settings)" },
      { "id": "b", "text": "Regla Validate" },
      { "id": "c", "text": "Grupo de acceso (Access group)" },
      { "id": "d", "text": "Herramienta Tracer" }
    ],
    "correctOptionIds": ["d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #147."
  },
  {
    "id": "pdf2-116",
    "type": "multiple",
    "topic": "Seguridad y acceso",
    "text": "¿Qué dos controles le permiten mostrar tres ofertas de transferencia de saldo en un formulario en un único control, para impedir que el cliente seleccione más de una oferta?",
    "options": [
      { "id": "a", "text": "Botón (Button)" },
      { "id": "b", "text": "Botón de opción (Radio button)" },
      { "id": "c", "text": "Casilla de verificación (Checkbox)" },
      { "id": "d", "text": "Lista desplegable (Dropdown list)" }
    ],
    "correctOptionIds": ["b", "d"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #148."
  },
  {
    "id": "pdf2-117",
    "type": "multiple",
    "topic": "Gestión de casos",
    "text": "Un tipo de caso para solicitudes de locución (voice over) incluye dos tareas: Editar guion y Grabar guion. Se ha pedido a su equipo enrutar la tarea de editar guion a los editores y la tarea de grabar guion a los actores. ¿Qué dos enfoques cumplen el requisito?",
    "options": [
      { "id": "a", "text": "Crear dos nuevos grupos de trabajo, uno para editores y uno para actores." },
      { "id": "b", "text": "Crear un grupo de trabajo para ambas personas y enrutar al grupo de trabajo." },
      { "id": "c", "text": "Crear dos nuevas colas de trabajo, una para editores y una para actores." },
      { "id": "d", "text": "Crear una nueva cola de trabajo y dividir las tareas por tipo." }
    ],
    "correctOptionIds": ["c", "a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #149."
  },
  {
    "id": "pdf2-118",
    "type": "single",
    "topic": "SLA y plazos",
    "text": "Un intervalo de plazo vencido (passed deadline) se mide desde el _____________.",
    "options": [
      { "id": "a", "text": "Fin del intervalo de plazo (deadline)." },
      { "id": "b", "text": "Fin del intervalo de objetivo (goal)." },
      { "id": "c", "text": "Fin del intervalo de inicio (start)." },
      { "id": "d", "text": "Comienzo del intervalo de plazo (deadline)." }
    ],
    "correctOptionIds": ["a"],
    "source": "imported",
    "explanation": "Pregunta original del PDF 2.0 #150."
  },
];
