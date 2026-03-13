import {useEffect, useState} from "react";
import "./App.css";
import { calculatePrice } from "./logika";

function App() {
    const [rodzaj, setRodzaj] = useState("kajak");
    const [godziny, setGodziny] = useState(1);
    const [kapoki, setKapoki] = useState(false);
    const [instruktor, setInstruktor] = useState(false);
    const [platnosc, setPlatnosc] = useState("blik");
    const [wynik, setWynik] = useState<number | null>(null);
    useEffect(() => {
        if (rodzaj === "lodz") {
            alert("Do prowadzenia żaglówki Omega wymagany jest patent żeglarski!");
        }
    }, [rodzaj]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cena = calculatePrice(rodzaj, godziny, kapoki, instruktor);
        setWynik(cena);
    };

    return (
        <div className="container">
            <h1>Mazurska Przystań – Rezerwacja</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Wybierz łódkę:
                    <select value={rodzaj} onChange={(e) => setRodzaj(e.target.value)}>
                        <option value="kajak">Kajak – 20 zł</option>
                        <option value="rower">Rower wodny – 35 zł</option>
                        <option value="lodz" >Flagowa Lodz Omega (zaglowka) – 150 zł</option>
                    </select>
                </label>

                <label>
                    Liczba godzin: {godziny}
                    <input
                        type="range"
                        min={1}
                        max={8}
                        value={godziny}
                        onChange={(e) => setGodziny(Number(e.target.value))}
                    />
                </label>

                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={kapoki}
                        onChange={(e) => setKapoki(e.target.checked)}
                    />
                    Kapok dla dziecka (+5 zł)
                </label>

                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={instruktor}
                        onChange={(e) => setInstruktor(e.target.checked)}
                    />
                    Instruktor(+50 zł/h)
                </label>
                <label className={"radio"}>
                    <input type="radio" name="radio" value="blik"  onChange={(e) => setPlatnosc(e.target.value)}/>Blik
                    <input type="radio" name="radio" value="karta" onChange={(e) => setPlatnosc(e.target.value)}/>Karta

                </label>


                <button type="submit">Oblicz cenę</button>

                <div className="result">
                    <h2>
                        Cena końcowa: {wynik !== null ? `${wynik} zł \n platnosc za pomoca: ${platnosc}` : "— zł"}
                    </h2>
                </div>
            </form>
        </div>
    );
}

export default App;