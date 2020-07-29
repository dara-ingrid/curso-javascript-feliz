const root = document.querySelector('#root')
const textTitle = 'Daradid'
const textSmall = 'texto pequeno'
const otherText =  'Outro texto'

//Tagged Template String
const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
`
root.insertAdjacentHTML('beforeend', title)