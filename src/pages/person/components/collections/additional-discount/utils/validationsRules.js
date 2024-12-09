// Función para obtener reglas de validación dependiendo del tipo de identificación
export const getValidationRules = (type) => {
  switch (type) {
    case "opcion1": // Cédula de ciudadanía
    case "opcion2": // Cédula de extranjería
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[0-9]{6,10}$/, // Solo números, 6-10 dígitos
          message: "La cédula debe ser un número válido",
        },
      };
    case "opcion3": // Carnet Diplomático
    case "opcion8": // Documento de Identidad Consular
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[A-Z0-9]{6,9}$/, // Alfanumérico, 6-9 caracteres
          message: "El número de carnet diplomático no es válido",
        },
      };
    case "opcion4": // Pasaporte
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[A-Z0-9]{6,9}$/, // Alfanumérico, 6-9 caracteres
          message: "El pasaporte no es válido",
        },
      };
    case "opcion5": // Tarjeta de Identidad
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[0-9]{6,10}$/, // Solo números, 6-10 dígitos
          message: "La tarjeta de identidad debe ser un número válido",
        },
      };
    case "opcion6": // Registro Civil
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[A-Za-z0-9]{6,12}$/, // Alfanumérico, 6-12 caracteres
          message: "El registro civil no es válido",
        },
      };
    case "opcion7": // Permiso Especial de Permanencia
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[A-Za-z0-9]{6,12}$/, // Alfanumérico, 6-12 caracteres
          message: "El permiso especial de permanencia no es válido",
        },
      };
    case "opcion9": // Certificado de Nacimiento
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[0-9]{6,10}$/, // Solo números, 6-10 dígitos
          message: "El certificado de nacimiento no es válido",
        },
      };
    case "opcion10": // NIUP
      return {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[A-Z0-9]{6,9}$/, // Alfanumérico, 6-9 caracteres
          message: "El NIUP no es válido",
        },
      };
    default:
      return { required: "Este campo es obligatorio" };
  }
};
