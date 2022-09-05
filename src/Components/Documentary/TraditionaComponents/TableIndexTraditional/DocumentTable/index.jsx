import "../../../../../Styles/Traditional/MetaConsult/TableIndex.css";

const DocumentTable = ({ name }) => {
    return(
        <tr>
            <td>
                <div className="Container-Celda">
                    <h1 className="TituloDoc">{name}</h1>
                </div>
            </td>
        </tr>
    );
}

export default DocumentTable;