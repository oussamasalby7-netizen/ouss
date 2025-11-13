import { useState } from 'react';

export default function FormModifier({ Stagiaire, onEdit }) {
  const [editStagiaire, setEditStagiaire] = useState({ ...Stagiaire });

  const handleChange = (e) => {
    setEditStagiaire({ ...editStagiaire, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    onEdit(editStagiaire);
  };

  return (
    <div className="stagiaire-form">
      ID: <input type="number" name="id" value={editStagiaire.id} onChange={handleChange} required /><br/>
      Nom: <input type="text" name="nom" value={editStagiaire.nom} onChange={handleChange} /><br/>
      Prénom: <input type="text" name="prenom" value={editStagiaire.prenom} onChange={handleChange} /><br/>
      Adresse: <input type="text" name="adresse" value={editStagiaire.adresse} onChange={handleChange} /><br/>
      Ville:
      <select name="ville" value={editStagiaire.ville} onChange={handleChange}>
        <option value="">-choisirrrrrr-</option>
        <option value="Rabat">Rabat</option>
        <option value="Fus">Fus</option>
        <option value="Casablanca">Casablanca</option>
      </select><br/>
      <button onClick={handleEdit}>Editer</button>
    </div>
  );
}
