export default function FORMS({ s, change, Ajouter, editMode, Modifier }) {
  return (
    <div>
      id:<input type="number" name="id" value={s.id} onChange={change} />
      nom:<input type="text" name="nom" value={s.nom} onChange={change} />
      ville:<select value={s.ville} onChange={change} name="ville">
        <option value="">-----</option>
        <option value="RABAT">RABAT</option>
        <option value="CASABLANCA">CASABLANCA</option>
      </select>
      {editMode ? (
        <button onClick={Modifier}>Modifier</button>
      ) : (
        <button onClick={Ajouter}>Ajouter</button>
      )}
    </div>
  );
}
