import { useState } from "react";
import "./App.css";

function App() {
    const [boatType, setBoatType] = useState("kajak");
    const [hours, setHours] = useState(1);
    const [lifeJackets, setLifeJackets] = useState(false);
    const [instructor, setInstructor] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const basePrices = {
        kajak: 40,
        rower: 60,
        lodz: 120,
    };

    const calculatePrice = () => {
        let price = basePrices[boatType];
        price += hours * 10;
        if (lifeJackets) price += 20;
        if (instructor) price += 50;
        setTotalPrice(price);
    };

    return (
        <div className="container">
            <h1>Mazurska Przystań – Rezerwacja</h1>

            <div className="form">
                <label>
                    Wybierz łódkę:
                    <select value={boatType} onChange={(e) => setBoatType(e.target.value)}>
                        <option value="kajak">Kajak – 40 zł</option>
                        <option value="rower">Rower wodny – 60 zł</option>
                        <option value="lodz">Łódź wiosłowa – 120 zł</option>
                    </select>
                </label>

                <label>
                    Liczba godzin: {hours}
                    <input
                        type="range"
                        min={1}
                        max={10}
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                    />
                </label>

                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={lifeJackets}
                        onChange={() => setLifeJackets(!lifeJackets)}
                    />
                    Kapoki (+20 zł)
                </label>

                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={instructor}
                        onChange={() => setInstructor(!instructor)}
                    />
                    Instruktor (+50 zł)
                </label>

                <button onClick={calculatePrice}>Oblicz cenę</button>

                <div className="result">
                    <h2>Cena końcowa: {totalPrice} zł</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
