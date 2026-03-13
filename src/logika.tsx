export function calculatePrice(
    rodzaj: string,
    godziny: number,
    kapoki: boolean,
    instruktor: boolean
): number {
    let cena = 0;

    switch (rodzaj) {
        case "kajak":
            cena = 20;
            break;
        case "rower":
            cena = 35;
            break;
        case "lodz":
            cena = 150;
            break;
    }

    cena *= godziny;

    if (kapoki) cena += 5;
    if (instruktor) cena += 50*godziny;

    return cena;
}