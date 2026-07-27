import Movement from "./Movement.jsx";
import Jump from "./Jump.jsx";
import Stamina from "./Stamina.jsx";

export default function PlayerController(body) {

  const stamina = Stamina();

  Movement(body, stamina);

  Jump(body);

}
