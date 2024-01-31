
export const listController = (e) =>{
   if (e.target.childNodes[1].classList.contains('anexo')){
        e.target.childNodes[1].classList.toggle('hide')
   }
}