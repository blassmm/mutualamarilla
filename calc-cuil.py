DOCUMENTO = "31158011"   # <-- cambiar acá


def solo_digitos(valor):
    return "".join(ch for ch in str(valor) if ch.isdigit())


def calcular_cuil(documento, sexo):
    dni = solo_digitos(documento).zfill(8)

    if len(dni) != 8:
        raise ValueError("Documento inválido. Se espera DNI de 7 u 8 dígitos.")

    sexo = str(sexo).strip().upper()

    if sexo in ("M", "H", "HOMBRE", "MASCULINO"):
        prefijo = "20"
    elif sexo in ("F", "MUJER", "FEMENINO"):
        prefijo = "27"
    else:
        raise ValueError("Sexo inválido. Usar M/H o F.")

    pesos = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]

    def calcular_dv(pref, dni_num):
        base = pref + dni_num
        total = sum(int(d) * p for d, p in zip(base, pesos))
        resto = total % 11
        dv = 11 - resto

        if dv == 11:
            return 0
        if dv == 10:
            return 10
        return dv

    dv = calcular_dv(prefijo, dni)

    if dv == 10:
        prefijo = "23"
        dv = calcular_dv(prefijo, dni)

        if dv == 10:
            dv = 0

    return f"{prefijo}{dni}{dv}"


def calcular_cuil_posibles(documento):
    return {
        "M": calcular_cuil(documento, "M"),
        "F": calcular_cuil(documento, "F"),
    }


if _name_ == "_main_":
    try:
        resultado = calcular_cuil_posibles(DOCUMENTO)

        print("Documento:", DOCUMENTO)
        print("CUIL posible M:", resultado["M"])
        print("CUIL posible F:", resultado["F"])

    except Exception as e:
        print("Error:", e)