export function useTimeNow() {

    const tiempo = Date.now();
    const hoy = new Date(tiempo);
    const hora = {"hora":hoy.getHours().toLocaleString(),"minutos":hoy.getMinutes().toLocaleString()}
    return hora
    

}