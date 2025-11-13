export default function StatsTheatre({ Tpieces }) {
  let totalSpectateurs = 0;
  let revenuTotal = 0;
  let piecePopulaire = Tpieces[0]; 

  for (let piece of Tpieces) {
    totalSpectateurs += +piece.capacite;
    revenuTotal += +piece.ticketsvendu * +piece.prix;

    if (+piece.ticketsvendu > +piecePopulaire.ticketsvendu) {
      piecePopulaire = piece;
    }
  }

  return (
    <div>
      <p>Total de pièces : {Tpieces.length}</p>
      <p>Total des spectateurs : {totalSpectateurs}</p>
      <p>Revenu total : {revenuTotal}</p>
      {piecePopulaire && (
        <p>
           Pièce la plus populaire : <p>{piecePopulaire.titre}</p> ({piecePopulaire.ticketsvendu} tickets vendus)
        </p>
      )}
    </div>
  );
}
