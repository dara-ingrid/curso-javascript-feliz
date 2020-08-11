const root = document.querySelector('#root')
const textTitle = 'Dificuldade'
//const pathGueio = 'images/gueio.png'

//Tagged Template String
const title = Title`
    color: #82589F;
    font-size: 2.5rem;
    letter-spacing: 1.7px;
    margin-bottom: 4rem;
    ${textTitle}
`



root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)

