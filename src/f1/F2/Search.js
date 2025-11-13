export default function TABLEAU({ TS, supp, modifier, like }) {
  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>VILLE</th>
            <th>LIKES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {TS.length > 0 ? (
            TS.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nom}</td>
                <td>{e.ville}</td>
                <td>{e.likes}</td>
                <td>
                  <button onClick={() => like(e.id)}>Like</button>
                  <button onClick={() => supp(e.id)}>Supprimer</button>
                  <button onClick={() => modifier(e)}>Modifier</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">
                Aucun élément trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
