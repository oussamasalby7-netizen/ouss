export default function PieceCard({Tpieces,modifier,supp}){
    return(
        <div>
            
            {Tpieces.map((e)=>
            <div>
            <h1>{e.titre}</h1>
            <p>Auteur:{e.auteur}</p>
            <p>genre:{e.genre}</p>
            <p>Durée:{e.duree}</p>
            <p>prix:{e.prix}</p>
            <p>capacité:{e.capacite}</p>
            <p>ticketsvendu:{e.ticketsvendu}</p>
            <div>
                <button onClick={()=>supp(e.id)}>Supprimer</button>
                <button onClick={()=>modifier(e)}>modifier</button>
            </div>
            </div>)}
        </div>
    )
}