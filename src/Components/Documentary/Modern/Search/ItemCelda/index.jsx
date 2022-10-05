import { setSelectedGroupCore, setFilterGroupsCore } from "../../../../../Store/ActionCore";
import { Icons, Name } from "../../../../../Styles/Documentary/Modern/Search";
import { GroupIcon } from "../Item/Icon";
import  IconSearch from "./Icons";
import "./ItemCelda.css";
import { useDispatch, useSelector } from "react-redux";

const ItemCelda = ({ key, index, id, name, element }) => {

    const selectGroup = (index) => {
        const collection = document.getElementsByClassName("Celda");
        for (let i = 0; i < collection.length; i++){
            collection[i].style.backgroundColor = "white";
            collection[i].style.color = "#939393";
            if ( id === index) {
                document.getElementById(index).style.backgroundColor = "#F68A20";
                document.getElementById(index).style.color = "#e9e6e6";
            }
        }
      }

    return(
        <div id={id} className="Celda" onClick={() => selectGroup(id)}>
            <Icons>
                <IconSearch element={element} />
            </Icons>
            <Name>{name}</Name>
        </div>
    )
};

export default ItemCelda;