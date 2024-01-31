import { navigator } from "./scripts/elements.js";
import { headerCatch, reset} from "./scripts/catchs.js";
import { despachoDLCP, processoCompleto, solicitacao, autorizacaoProcessual, parecer, autorizacaoMotivada, contrato} from "./scripts/processoCompleto.js";
import { pageCreator} from "./scripts/creators.js";
import { listController } from "./scripts/controllers.js";

navigator.addEventListener('click', (e) =>{
    const element = e.target.id
    
    if (Object.keys(processoCompleto.abertura).length === 0 ){
        headerCatch()
    }

    const elements = {
        'solicitacao': [solicitacao, 'Solicitação formal'],
        'despacho-dlcp': [despachoDLCP, 'Despacho'],
        'autorizacao-processual': [autorizacaoProcessual, 'Autorização processual'],
        'parecer': [parecer, 'Parecer jurídico'],
        'autorizacao-motivada': [autorizacaoMotivada, 'Autorização motivada'],
        'contrato': [contrato, 'Contrato']
    } 

    if (Object.keys(elements).includes(element)){
        pageCreator(element, elements[element][0],elements[element][1] )
    }

    listController(e)

    console.log(e)
})