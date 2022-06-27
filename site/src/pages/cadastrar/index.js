import './index.scss'
import {useState} from 'react'

import {cadastrar} from '../../api/heroi'



export default function index(){
    const [nome, setNome] = useState('');
    const [poderes, setPoderes] = useState('');
    const [podevoar, setPodevoar] = useState(false);

    async function salvarClick(){
        try {
           const r = await cadastrar(nome, poderes, podevoar);

           alert('cadastrado')
        } 
        catch (err) {
            alert(err.message);
        }
    }

    return (
        <main className='page-cadastrar'>
            <div>
                <div>
                    <h1 className='nome'>Cadastrar</h1>
                </div>
                <div>
                    <label>Heroi</label>
                    <input type='text' placeholder='Nome do Heroi' value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Poder</label>
                    <input type='text' placeholder='Poder do Heroi' value={poderes} onChange={e => setPoderes(e.target.value)}/>
                </div>
                <div>
                    <label></label>
                    <input type='checkbox' checked={podevoar} onChange={e => setPodevoar(e.target.checked)}/>
                </div>
                <div>
                    <button onClick={salvarClick}>Salvar</button>
                </div>
            </div>
        </main>
    )
}