import Movement from "./Movement.jsx";
import Jump from "./Jump.jsx";

export default function PlayerController(body) {
  Movement(body);
  Jump(body);
}
