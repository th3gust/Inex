import { main } from "./elements.js"

export const createForm = (id, text) =>{
    const form = document.createElement('form')
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    const title = document.createElement('h3')

    form.id = `${id}-form`
    fieldset.id = "form-wrapper"
    title.textContent = text

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

    const firstField = document.getElementById('form-wrapper')
    firstField.appendChild(fieldset)
}