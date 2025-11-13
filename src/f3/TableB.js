export default function TableB({Tp,supp,modifier}){
    return(
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>ville</th>
                     <th>Actions</th>
                </thead>
                <tbody>
                    {[Tp.map((e)=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.nom}</td>
                        <td>{e.ville}</td>
                        <td>
                            <button onClick={()=>supp(e.id)}>supprimer</button>
                            <button onClick={()=>modifier(e)}>modifier</button>
                        </td>
                    </tr>)]}
                </tbody>
            </table>
        </div>
    )
}