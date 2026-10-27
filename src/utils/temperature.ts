const UNITS = {
  celcius: "°C",
  faranheit: "°F",
};

function convertTemperatureTo(temperature: number, unitTo: string) {
  if (unitTo === UNITS.celcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === UNITS.faranheit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid Unit");
  }
}

function getOpposite(unit: string) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

export { convertTemperatureTo, getOpposite, UNITS };
