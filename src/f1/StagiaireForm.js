import './StagiaireForm.css';
import { useState } from 'react';

export default function StagiaireForm({ Ajouter  }) {

let [Stagiaire, setStagiaire] = useState({
    id: null,
    nom: '',
    prenom: '',
    adresse: '',
    ville: ''
  });

 let Change = (e) => {
    setStagiaire({ ...Stagiaire, [e.target.name]: e.target.value });
  };
  let add=()=>{Ajouter(Stagiaire);setStagiaire( {id: null,
    nom: '',
    prenom: '',
    adresse: '',
    ville: ''
  })}
  return (
    <div className="stagiaire-form">
      <label>
        ID:
        <input
          type="number"
          name="id"
          onChange={Change}
          value={Stagiaire.id}
          required
        />
      </label>
      <br />

      <label>
        Nom:
        <input
          type="text"
          name="nom"
          onChange={Change}
          value={Stagiaire.nom}
        />
      </label>
      <br />

      <label>
        Prénom:
        <input
          type="text"
          name="prenom"
          onChange={Change}
          value={Stagiaire.prenom}
        />
      </label>
      <br />

      <label>
        Adresse:
        <input
          type="text"
          name="adresse"
          onChange={Change}
          value={Stagiaire.adresse}
        />
      </label>
      <br />

      <label>
        Ville:
        <select name="ville" value={Stagiaire.ville} onChange={Change}>
          <option value="">-choisir-</option>
          <option value="Rabat">Rabat</option>
          <option value="Fus">Fes</option>
          <option value="Casablanca">Casablanca</option>
        </select>
      </label>
      <br />



        <button onClick={add}>Ajouter</button>

       

      <br />
      <input type="text" placeholder="search" />
    </div>
  );
}
