function soloDigitos(valor: unknown): string {
  return String(valor).replace(/\D/g, "");
}

export function calcCuil(documento: string | number, sexo: string): string {
  const dni = soloDigitos(documento).padStart(8, "0");

  if (dni.length !== 8) {
    throw new Error("Documento inválido. Se espera DNI de 7 u 8 dígitos.");
  }

  const sexoNorm = sexo.trim().toUpperCase();

  let prefijo: string;

  if (["M", "H", "HOMBRE", "MASCULINO"].includes(sexoNorm)) {
    prefijo = "20";
  } else if (["F", "MUJER", "FEMENINO"].includes(sexoNorm)) {
    prefijo = "27";
  } else {
    throw new Error("Sexo inválido. Usar M/H o F.");
  }

  const pesos = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  function calcularDV(pref: string, dniNum: string): number {
    const base = pref + dniNum;

    const total = base
      .split("")
      .reduce((acc, d, i) => acc + Number(d) * pesos[i], 0);

    const resto = total % 11;
    const dv = 11 - resto;

    if (dv === 11) return 0;
    if (dv === 10) return 10;

    return dv;
  }

  let dv = calcularDV(prefijo, dni);

  if (dv === 10) {
    prefijo = "23";
    dv = calcularDV(prefijo, dni);

    if (dv === 10) {
      dv = 0;
    }
  }

  return `${prefijo}${dni}${dv}`;
}

export function calcularCuilPosibles(documento: string | number): {
  M: string;
  F: string;
} {
  return {
    M: calcCuil(documento, "M"),
    F: calcCuil(documento, "F"),
  };
}
