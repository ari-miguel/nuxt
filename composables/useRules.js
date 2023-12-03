export const useRulesText = (campo)=>{
    const rules = [
        (campo) => !!campo || "El campo es requerido",
        (campo) => (!!campo && campo.length >= 2) || "La longitud del campo debe ser mayor",
      ];

      return rules
}

export const useRulesAge = (campo)=>{

    const rulesEdad = [
        (campo) => !!campo || "El campo es requerido",
        (campo) => (!!campo && campo >= 18) || "El usuario debe ser mayor de 18 años",
      ];

      return rulesEdad

}

export const useRulesEmail = (campo)=>{
    const rulesEmail = [
        (campo) => !!campo || "El campo es requerido",
        (campo) => (!!campo && (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/).test(campo)) || "El email debe ser valido",
      ];

      return rulesEmail
    
}