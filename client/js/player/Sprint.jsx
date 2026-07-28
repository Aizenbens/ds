import keys from "../input/Input.js";

export default function Sprint(stamina) {
  return keys["ShiftLeft"] && stamina.stamina > 0;
}
