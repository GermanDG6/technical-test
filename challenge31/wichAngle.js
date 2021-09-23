const wichTypeOfAngle = (degrees) => {
  let angle = degrees % 360;
  return angle < 90
    ? "Es un triangulo agudo"
    : angle === 90
    ? "Es un triangulo recto"
    : angle > 90 && angle < 180
    ? "Es un triangulo obtuso"
    : angle === 180
    ? "Es un triangulo llano"
    : angle === 360
    ? "Es un triangulo completo"
    : angle > 180 && angle < 360
    ? "Es un triangulo convexo o concavo"
    : null;
};

console.log(wichTypeOfAngle(195));
