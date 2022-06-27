import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost'
})

export async function cadastrar(nome, poderes, podevoar) {
    const resposta = await api.post('/superheroi', {
        nome:nome,
        poderes: poderes,
        podevoar: podevoar
    })
    return resposta.data;
}

export async function listar(){
    const resposta = await api.get('/superheroi');
    return resposta.data;
}