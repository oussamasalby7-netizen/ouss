import { useState } from "react";

export default function TicketManager({ Tpieces }) {
  let [Piece, setPiece] = useState({
    id: "",
    titre: "",
    auteur: "",
    genre: "",
    duree: "",
    prix: "",
    capacite: 0,
    ticketsvendu: 0,
  });

  let change = (e) => {
    let selected = Tpieces.find((p) => p.id == e.target.value);
    setPiece(selected);
  };

  let addtecket = () => {
    setPiece({
      ...Piece,
      ticketsvendu: +(Piece.ticketsvendu) + 1,
    });
  };
  let x= Number(Piece.capacite) - Number(Piece.ticketsvendu)

  return (
    <div>
      <select name="id" onChange={change}>
        <option value="">---</option>
        {Tpieces.map((e) => (
          <option  value={e.id}>
            {e.titre}
          </option>
        ))}
      </select>

      <button
        onClick={addtecket}
        disabled={!Piece.id || Piece.ticketsvendu >= Piece.capacite}
      >
        Vendre un ticket
      </button>

      <p>Tickets vendus : {Piece.ticketsvendu}</p>
      <p>nombre de placas restant:{x}</p>

    </div>
  );
}
