import './StagiaireTable.css';

export default function StagiaireTable({ Tstagiare, Supprimer,Editer }) {
  return (
    <div>
      <table className="stagiaire-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Tstagiare.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nom}</td>
              <td>{e.prenom}</td>
              <td>{e.adresse}</td>
              <td>{e.ville}</td>
              <td>
                <button onClick={() => Supprimer(e.id)}>Supprimer</button>
                <button onClick={() => Editer(e)}>Editer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
