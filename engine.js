const allatok=['Busz', 'Vonat', 'Repülő', 'Autó']
function init() {
    document.getElementById('body').innerHTML=allatok.map( v=>
        `<div onclick="f('${ v }')">${ v }</div>`
    ).join("")

}
const f = console.log