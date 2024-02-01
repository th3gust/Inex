import { navigator } from "./scripts/elements.js";
import { headerCatch, reset} from "./scripts/catchs.js";
import * as ato from "./scripts/processoCompleto.js";
import { pageCreator} from "./scripts/creators.js";
import { listController } from "./scripts/controllers.js";

navigator.addEventListener('click', (e) =>{
    const element = e.target.id
    
    if (Object.keys(ato.processoCompleto.abertura).length === 0 ){
        headerCatch()
    }

    const elements = {
        'solicitacao': [ato.solicitacao, 'Solicitação formal'],
        'despacho-dlcp': [ato.despachoDLCP, 'Despacho'],
        'autorizacao-processual': [ato.autorizacaoProcessual, 'Autorização processual'],
        'parecer': [ato.parecer, 'Parecer jurídico'],
        'autorizacao-motivada': [ato.autorizacaoMotivada, 'Autorização motivada'],
        'contrato': [ato.contrato, 'Contrato'],
        'dfd': [ato.dfd, 'Documento de Formalização de Demanda'],
        'projeto-basico': [ato.projetoBasico, 'Projeto básico'],
        'pesquisa-pncp': [ato.pesquisaPNCP, 'Pesquisa PNCP']
    } 

    if (Object.keys(elements).includes(element)){
        pageCreator(element, elements[element][0],elements[element][1] )
    }

    listController(e)
})