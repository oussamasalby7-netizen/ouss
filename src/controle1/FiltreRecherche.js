export default function FiltreRecherche({ searchbytitre, searchbygenre, changeT, changeG }) {
  return (
    <div >
      <input
        type="text"
        placeholder="Rechercher par titre"
        onChange={changeT}
        value={searchbytitre}
      />
      <select onChange={changeG} value={searchbygenre}>
        <option value="">Tous les genres</option>
        <option value="tragédie">Tragédie</option>
        <option value="comédie">Comédie</option>
      </select>
    </div>
  );
}
