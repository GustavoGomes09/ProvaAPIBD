import './index.scss'
import {listar} from '../../api/heroi'
import { useEffect, useState } from 'react';


export default function Index(){
    
    const [heroi, setHeroi] = useState([]);

    async function litartodos() {
        const r = await listar();
        setHeroi(r);
    }

    useEffect(() => {
        litartodos();
    }, [])

    return (
        <main className='page-consultar'>
            <div>
               <h1 className='nome'>Consultar</h1>
            </div>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Poder</th>
                    <th>Pode Voar</th>
                </thead>
                <tbody>
                    {heroi.map(item => 
                       <tr>
                          <td>{item.nome}</td>
                          <td>{item.poder}</td>
                          <td>{item.podevoar ? 'sim' : 'não'}</td>
                       </tr>
                    )}
                    
                </tbody>
            </table>
                       
        </main>
    )
}