export default function TABLEAU({ TS, supp, modifier, like }) {
  return (
    <div>
      <table border="1" cellSpacing='0'>
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
          {
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
   }
        </tbody>
      </table>
    </div>
  );
}
