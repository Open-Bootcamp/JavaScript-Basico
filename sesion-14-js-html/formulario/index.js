const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
})