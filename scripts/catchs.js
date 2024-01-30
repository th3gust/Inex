import { numeroProcessoAdm, dataDeAberturaDoProcessoAdm } from "./elements.js"
import { processoCompleto } from "./processoCompleto.js"

export const headerCatch = () =>{
    processoCompleto.abertura.numeroDeAbertura = numeroProcessoAdm.value
    processoCompleto.abertura.dataDeAbertura = dataDeAberturaDoProcessoAdm.value
}