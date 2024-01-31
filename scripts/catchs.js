import { numeroProcessoAdm, dataDeAberturaDoProcessoAdm } from "./elements.js"
import { processoCompleto } from "./processoCompleto.js"
import { main } from "./elements.js"

export const reset  = () =>{
    main.innerHTML = ''
}

export const headerCatch = () =>{
    processoCompleto.abertura.numeroDeAbertura = numeroProcessoAdm.value
    processoCompleto.abertura.dataDeAbertura = dataDeAberturaDoProcessoAdm.value
}