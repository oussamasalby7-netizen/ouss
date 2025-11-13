export default function FormB({Ajouter,p,change,editM,Vmodifier}){
    return(
        <div>
            id:<input type="Number" name="id" value={p.id} onChange={change}/>
            nom:<input type="text" name="nom" value={p.nom} onChange={change}/>
          villes  <select value={p.ville} onChange={change} name="ville">
            <option value=''>---</option>
            <option value='casa'>Casablanca</option>
            <option value='rabat'>Rabat</option>
          </select>
          {editM?(<button onClick={Vmodifier}>Modifier</button>)
          :(<button onClick={Ajouter}>Ajouter</button>)}
        </div>
    )
}