import { useState } from "react";
import TABLEAU from "./f1/F2/TABLEAU";
import FORMS from "./f1/F2/FORMS";
import Search from "./f1/F2/Search";
import FormB from "./f3/FormB";
import TableB from "./f3/TableB";
import FormPiece from "./controle1/FormPiece";
import PieceCard from "./controle1/PieceCard";
import FiltreRecherche from "./controle1/FiltreRecherche";
import TickeManager from "./controle1/TickeManager";
import StatsTheatre from "./controle1/StatsTheatre";
import TriPieces from "./controle1/TriPieces";

{/*import { useState } from 'react';
import './App.css';
import StagiaireForm from './f1/StagiaireForm';
import StagiaireTable from './f1/StagiaireTable';
import FormModifier from './f1/FormModifier';
import TABLEAU from './f1/F2/TABLEAU';

function App() {
  const [Tstagiare, setTStagiare] = useState([
    { id: 1, nom: 'salby', prenom: 'oussama', adresse: 'aaa', ville: 'Rabat' }
  ]);

  const [Affichage, setAffichage] = useState(false);
  const [Stagiaire, setStagiaire] = useState(null);


  const Ajouter = (newStagiaire) => {
    setTStagiare([...Tstagiare, newStagiaire]);
  };


  const Supprimer = (id) => {
    setTStagiare(Tstagiare.filter(s => s.id !== id));
  };


  const Editer = (stagiaire) => {
    setStagiaire(stagiaire);
    setAffichage(true);
  };


  const AppliquerEdition = (StagiaireModifie) => {
    setTStagiare(Tstagiare.map(s => s.id === StagiaireModifie.id ? StagiaireModifie : s));
    setAffichage(false);
  };

  return (
    <div className="App">
      {Affichage
        ? <FormModifier Stagiaire={Stagiaire} onEdit={AppliquerEdition} />
        : <StagiaireForm Ajouter={Ajouter} />}


      <StagiaireTable Tstagiare={Tstagiare} Supprimer={Supprimer} Editer={Editer} />

    </div>



  );
}

export default App;

export default function App() {
  const [editMode, setEditMode] = useState(false);
  const [s, sets] = useState({ id: "", nom: "", ville: "", likes: 0 });
  const [TS, setTS] = useState([]);
  const [search, setSearch] = useState("");
 const [searchv,setSearchv]=useState("")
  const Ajouter = () => {
      setTS([...TS, s]);
      sets({ id: "", nom: "", ville: "", likes: 0 });

  };

  const like = (id) => {
    setTS(TS.map((e) => (e.id === id ? { ...e, likes: e.likes + 1 } : e)));
  };

  const supp = (id) => {
    setTS(TS.filter((e) => e.id !== id));
  };

  const change = (e) => {
    sets({ ...s, [e.target.name]: e.target.value });
  };

  const modifier = (e) => {
    sets({ id: e.id, nom: e.nom, ville: e.ville, likes: e.likes });
    setEditMode(true);
  };

  const Modifier = () => {
    setTS(TS.map((el) => (el.id === s.id ? s : el)));
    sets({ id: "", nom: "", ville: "", likes: 0 });
    setEditMode(false);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
const changeSearchville = (e) => {
    setSearchv(e.target.value);
  };
  const data = TS.filter((e) =>
    e.nom.toLowerCase().includes(search.toLowerCase())
  && e.ville.toLowerCase().includes(searchv.toLocaleLowerCase())
  );


  return (
    <div>
      <FORMS
        s={s}
        change={change}
        Ajouter={Ajouter}
        editMode={editMode}
        Modifier={Modifier}
      />

      <input
        type="text"
        placeholder="Rechercher par nom "
        value={search}
        onChange={changeSearch}
      />
          <input
        type="text"
        placeholder="Rechercher par ville"
        value={searchv}
        onChange={changeSearchville}
      />


      <TABLEAU TS={data} supp={supp} modifier={modifier} like={like} />
    </div>
  );
}

export default function App(){
  let [search,setSearch]=useState("")
  let [editM,seteditM]=useState(false)
  let [p,setp]=useState({id:'',nom:'',ville:''})
  let [Tp,setTp]=useState([])
  let Ajouter=()=>{
    setTp([...Tp,p])
    setp({id:'',nom:'',ville:''})
  }
  let supp=(id)=>{
    setTp(Tp.filter((e)=>e.id!==id))
  }
  let modifier=(e)=>{
    setp({id:e.id,nom:e.nom,ville:e.ville})
    seteditM(true)
  }

  let Vmodifier=()=>{
setTp(Tp.map((el)=> (el.id === p.id? p : el )))
setp({id:'',nom:'',ville:''})
seteditM(false)
  }
  let change=(e)=>{
    setp({...p,[e.target.name]:e.target.value})
  }
  let changeSearch=(e)=>
  {
    setSearch(e.target.value)
  }

  let data=Tp.filter((e)=>
  e.nom.toLowerCase().includes(search.toLowerCase()))
  return(
    <div>
      <FormB change={change} Ajouter={Ajouter} p={p} Vmodifier={Vmodifier} editM={editM}/>
      <input
      type="text"
      name="search"
      onChange={changeSearch}/>
      <TableB Tp={data} supp={supp} modifier={modifier}/>
    </div>
  )
}
  */}
  export default function App(){
    let [searchbytitre,setSearchbytitre]=useState('')
    let [searchbygenre,setSearchbygenre]=useState('')
    let changeT=(e)=>{
      setSearchbytitre(e.target.value)
    }
    let changeG=(e)=>{
      setSearchbygenre(e.target.value)
    }

    let change=(e)=>{
      setP({...P,[e.target.name]:e.target.value})
    }
    let [editM,seteditM]=useState(false)
     let [P,setP]=useState({id:'',titre:'',auteur:'',genre:'',duree:'',prix:'',capacite:'',ticketsvendu:''});
     let [Tpieces,setTpieces]=useState([]);
      let data = Tpieces.filter((e) =>
  e.titre.toLowerCase().includes(searchbytitre.toLowerCase()) &&
  e.genre.toLowerCase().includes(searchbygenre.toLowerCase())
);


     let Ajouter=()=>{
        if (
      P.id === '' || P.titre === '' || P.auteur === '' ||
      P.genre === '' || P.duree === '' || P.prix === '' ||
      P.capacite === '' || P.ticketsvendu === ''
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }else{
          setTpieces([...Tpieces,P]);
      setP({id:'',titre:'',auteur:'',genre:'',duree:'',prix:'',capacite:'',ticketsvendu:''})
    }

     }
     let modifier=(e)=>{
    setP({id:e.id,titre:e.titre,auteur:e.auteur,genre:e.genre,duree:e.duree,prix:e.prix,capacite:e.capacite,ticketsvendu:e.ticketsvendu})
    seteditM(true)
  }
    let Vmodifier=()=>{
setTpieces(Tpieces.map((el)=> (el.id === P.id? P : el )))
setP({id:'',titre:'',auteur:'',genre:'',duree:'',prix:'',capacite:'',ticketsvendu:''})
seteditM(false)
  }
  let supp=(id)=>{
   setTpieces(Tpieces.filter((e)=>e.id!==id))
  }
    return(
      <div>
       <FormPiece editM={editM} Ajouter={Ajouter} P={P} Vmodifier={Vmodifier} change={change}/>
       <PieceCard Tpieces={data}  modifier={modifier} supp={supp} />
       <FiltreRecherche searchbygenre={searchbygenre} searchbytitre={searchbytitre} changeG={changeG} changeT={changeT} />
       <TickeManager Tpieces={Tpieces}/>
       <StatsTheatre Tpieces={Tpieces}/>
       <TriPieces modifier={modifier} supp={supp} Tpieces={Tpieces}/>
         </div>
    )
  }