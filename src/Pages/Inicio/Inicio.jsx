import InicioBnv from '../../components/Inicio-Bnv/Inicio-bnv.jsx';
import NavLogin from "../../components/navs/UserNav/UserNav.jsx";
import AdminNav from "../../components/navs/AdminNav/AdminNav.jsx";
import RenderNav from "../../components/navs/RenderNav/RenderNav.jsx";

function InicioPage(){
    return(
        <>
            <div>
                {/* <NavLogin></NavLogin> */}
                {/* <AdminNav></AdminNav> */}
                <RenderNav></RenderNav>
                <InicioBnv></InicioBnv>
            </div>
        
        </>
    )
}

export default InicioPage