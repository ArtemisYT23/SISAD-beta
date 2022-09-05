import "../../../Styles/PageInitial/EndFooter/EndFooter.css";

export const EndFooter = () => {
    return(
        <div className="ContentEndFooter">
            <div className="footerNav">
                <nav className="NavFooter">
                    <a href="/">Conócenos</a>
                    <span>-</span>
                    <a href="/">Servicios</a>
                    <span>-</span>
                    <a href="/">Contactenos</a>
                </nav>
            </div>
            <div className="Content-Refe">
            <span>Artemis CF Todos los derechos reservados</span>
            <span>@copyright-2022</span>
            </div>
        </div>
    );
}

export default EndFooter;