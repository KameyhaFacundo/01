import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, index) => (
        <ItemTarea key={index}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
