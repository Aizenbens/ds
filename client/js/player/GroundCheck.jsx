export default function GroundCheck(body) {
  if (!body.current) return false;

  const position = body.current.translation();

  return position.y <= 1.05;
}
