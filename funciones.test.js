const { promedioNotas } = require("./Practicas/Practica");

test("El promedio de notas deberia ser 14.5", () => {
  expect(promedioNotas([15, 11, 17, 15])).toBe(14.5);
});

const { concatenar } = require("./Practicas/Practica");

test("Kevin Mallqui deberia estar en mayusculas", () => {
  expect(concatenar("kevin", "mallqui")).toBe("KEVIN MALLQUI");
});

const { mayorEdad } = require("./Practicas/Practica");

test("Para ser mayor de edad deberias ser mayor ah 18", () => {
  expect(mayorEdad(18)).toBe("Es mayor de edad");
});

const { mayorNumero } = require("./Practicas/Practica");

test("El mayor numero deberia ser 90", () => {
  expect(mayorNumero([8, 5, 90, 80, 55])).toBe(90);
});
