import { Line } from "../../../../../Styles/Documentary/MenuContext";
import { setOpenMenuContextOptionMeta } from "../../../../../Store/ModalCore";
import { useDispatch } from "react-redux";

const Dropdown = ({ x, y }) => {
    const dispatch = useDispatch();

  const style = () => {
    return {
      width: 120,
      height: 175,
      zIndex: 1,
      borderRadius: 1,
      backgroundColor: "#fffbf8",
      boxShadow: "0 0 1.5px 1px #F68A20",
      color: "#FCD2D1",
      display: "flex",
      flexDirection: "column",
      padding: 8,
      top: y,
      left: x,
      position: "absolute",
    };
  };

  const Equals = () => {
    dispatch(setOpenMenuContextOptionMeta());
  }

  return (
    <div style={style()}>
      <div style={styles.div} onClick={() => Equals()}>
        Equals
      </div >
      <Line />
      <div style={styles.div} onClick={() => Equals()}>
        Doesn't Equals 
      </div>
      <Line />
      <div style={styles.div} onClick={() => Equals()}>Contains</div>
      <Line />
      <div style={styles.div} onClick={() => Equals()}>Doesn't Contains</div>
      <Line />
      <div style={styles.div} onClick={() => Equals()}>Is like</div>
    </div>
  );
};

const styles = {
    div: {
      flex: .2,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fffbf8",
      color: "#F68A20",
      fontWeight: "bold",
      cursor: "pointer",
    },
    margin: {
      margin: "0",
    },
  };

export default Dropdown;
