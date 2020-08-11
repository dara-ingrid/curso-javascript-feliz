const pathGueio = 'images/gueio.png'
const gueio = Character `
        width: 18%;
        ${pathGueio}
`
const WrapperCharacters = (css, children) => (`
    <div styles="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-evenly;
    ${gueio + gueio + gueio}
`