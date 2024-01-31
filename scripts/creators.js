import { main } from "./elements.js"
import { reset } from "./catchs.js"

export const createForm = (id, text) =>{
    const form = document.createElement('form')
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    const title = document.createElement('h3')
    const div = document.createElement('div')

    div.classList.add('wrap-div')
    form.id = `${id}-form`
    fieldset.id = "form-wrapper"
    title.textContent = text
    
    fieldset.appendChild(div)
    legend.appendChild(title)
    fieldset.appendChild(legend)
    form.appendChild(fieldset)
    main.appendChild(form)
}

export const createInputs = (id, legendText, place) =>{
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    const input = document.createElement('input')

    legend.textContent = legendText
    input.type = 'text'
    input.placeholder = place
    input.id = id

    fieldset.appendChild(legend)
    fieldset.appendChild(input)

    const div = document.querySelector('.wrap-div')
    div.appendChild(fieldset)
}

export const createButton = () =>{
    const button = document.createElement('button')

    button.type = 'submit'
    button.id = 'submit-btn'
    button.textContent = 'Adicionar'

    const form = document.getElementById('form-wrapper')
    form.appendChild(button)
}

export const pageCreator = (element, pageType, text) =>{
    reset()
    createForm(element, text)
    pageType.forEach((item) =>{
        createInputs(item[0], item[1], item[2])
    })
    createButton()
}