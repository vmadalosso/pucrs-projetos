const fields = document.querySelectorAll("[required]")
//console.log(fields)

function customValidation(event) {
  const field = event.target

  //logica para verificar se existem erros
  function verifyErrors() {
    let foundError = false

    for (let error in field.validity) {
      //se nao for customError
      // entao verifica se tem erro
      if (error != "customError" && field.validity[error]) {
        foundError = error
      }
    }
    return foundError
  }

  const error = verifyErrors()

  if (error) {
    //trocar mensagem padrao
    field.setCustomValidity("Esse campo é obrigatório")
  } else {
    field.setCustomValidity("")
  }
}

for (field of fields) {
  field.addEventListener("invalid", customValidation)
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("Enviar o formulario")

  //nao vai enviar o formulario
  event.preventDefault()
})
