
export default function FormPiece({Ajouter,P,Vmodifier,editM,change}){
    return(
        <div>
            id:<input type="Number" name="id" value={P.id} onChange={change}/>
            titre:<input type="text" name="titre" value={P.titre} onChange={change}/>
            Auteur:<input type="text" name="auteur" value={P.auteur} onChange={change}/>
            genre:
            <select  name="genre" value={P.genre} onChange={change}>
                <option value=''>---</option>
                <option value='comédie'>comédie</option>
                <option value='Tragédie'>Tragédie</option>
            </select>
            duree:<input type="Number" name="duree" value={P.duree} onChange={change}/>
            prix:<input type="Number" name="prix" value={P.prix} onChange={change}/>
            capacité:<input type="Number" name="capacite" value={P.capacite} onChange={change}/>
            ticketsvendu:<input type="Number" name="ticketsvendu" value={P.ticketsvendu} onChange={change}/>
              {editM?(<button onClick={Vmodifier}>Modifier</button>)
          :(<button onClick={Ajouter}>Ajouter</button>)}
        </div>
    )
}