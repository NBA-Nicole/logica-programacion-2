// Conversor de temperatura: Celsius a Fahrenheit y Kelvin (para Node / terminal de VS Code)
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function pedirCelsius(rl) {
  while (true) {
    const entrada = await rl.question("Ingresa la temperatura en grados Celsius: ");
    const numero = Number(entrada.trim().replace(",", "."));

    // Valida que sea de tipo number (y que no esté vacío ni sea NaN)
    if (entrada.trim() === "" || typeof numero !== "number" || isNaN(numero)) {
      console.log("Error: debes ingresar un número válido. Intenta de nuevo.\n");
      continue; // vuelve a solicitar el dato
    }

    return numero;
  }
}

async function main() {
  const rl = readline.createInterface({ input, output });
  const celsius = await pedirCelsius(rl);
  rl.close();

  const kelvin = Math.round((celsius + 273.15) * 100) / 100;
  const fahrenheit = Math.round(((celsius * 9) / 5 + 32) * 100) / 100;

  console.log("Grados Celsius: " + celsius);
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);
}

main();