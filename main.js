import { navigator } from "./scripts/elements.js";
import { headerCatch } from "./scripts/catchs.js";
import { processoCompleto } from "./scripts/processoCompleto.js";
import { createForm,createInputs } from "./scripts/creators.js";

navigator.addEventListener('click', (e) =>{
    const element = e.target.id
    
    if (Object.keys(processoCompleto.abertura).length === 0 ){
        headerCatch()
    }
    
    if (element === 'solicitacao'){
        createForm(element, 'Solicitação formal')
        createInputs('secretaria-solicitante', 'Secretaria solicitante', 'Secretaria Municipal de...')
    }
    
})