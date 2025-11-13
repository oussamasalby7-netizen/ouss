import { useState } from "react";

export default function TriPieces({ Tpieces, modifier, supp }) {
  const [sortOrder, setSortOrder] = useState('');

  let piecesTriees = [...Tpieces];
   piecesTriees.sort((a, b) => Number(a.prix) - Number(b.prix));
  return (
    <div>
      {piecesTriees.map(e => (
        <div>
          <h2>{e.titre}</h2>
          <p>Auteur: {e.auteur}</p>
          <p>Genre: {e.genre}</p>
          <p>Durée: {e.duree}</p>
          <p>Prix: {e.prix}</p>
          <p>Capacité: {e.capacite}</p>
          <p>Tickets vendus: {e.ticketsvendu}</p>
          <button onClick={() => supp(e.id)}>Supprimer</button>
          <button onClick={() => modifier(e)}>Modifier</button>
        </div>
      ))}
    </div>
  );
}
