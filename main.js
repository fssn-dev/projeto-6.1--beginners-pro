const CEP = document.getElementById('cep')
const LOGRADOURO = document.getElementById('logradouro')
const BAIRRO = document.getElementById('bairro')
const CIDADE = document.getElementById('cidade')
const UF = document.getElementById('uf')

CEP.addEventListener('change', (e) => {

    let urlApi = `https://viacep.com.br/ws/${e.target.value}/json/`

    fetch(urlApi).then(valorJson => {
        valorJson.json().then((obj) => {

            if (Object.keys(obj) == 'erro') {

                CEP.focus()
                document.querySelectorAll('input').forEach(x => {
                    x.value = ''
                })

            } else {

                LOGRADOURO.value = obj.logradouro
                BAIRRO.value = obj.bairro
                CIDADE.value = obj.localidade
                UF.value = obj.uf

            }
        })
    })
})