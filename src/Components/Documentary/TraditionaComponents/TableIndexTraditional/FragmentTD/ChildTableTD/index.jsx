import { Collapse, TableRow } from "@material-ui/core";

const ChildTableTD = ({open}) => {
    return(
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className="table-second">
                        <div className="HeaderTable">
                            <button>Actual</button>
                        </div>
                        <table className="Table-Files">
                            <thead>
                                <th>Nombre</th>
                                <th>Tipo Archivo</th>
                                <th>Descripcion</th>
                                <th>Tipo Doc</th>
                                <th>Ver/Grabar</th>
                            </thead>
                            
                        </table>
                    </div>
                </Collapse>
            </TableCell>
        </TableRow>
    );
}

export default ChildTableTD;