export const showSnack = (mensaje,color,show) =>{

        const snack = ref({
            mensaje:mensaje,
            color:color,
            show: show
        })

        return snack

}