import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between m-1 border-1">
      {tarea}
      <Button variant="success" onClick={() => borrarTarea(tarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
