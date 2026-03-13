import "./App.css";

function App() {
    return (
        <div className="container">
            <h1>Mazurska Przystań – Rezerwacja</h1>

            <div className="form">
                <label>
                    Wybierz łódkę:
                    <select>
                        <option>Kajak – 40 zł</option>
                        <option>Rower wodny – 60 zł</option>
                        <option>Łódź wiosłowa – 120 zł</option>
                    </select>
                </label>

                <label>
                    Liczba godzin:
                    <input type="range" min={1} max={10} />
                </label>

                <label className="checkbox">
                    <input type="checkbox" />
                    Kapoki (+20 zł)
                </label>

                <label className="checkbox">
                    <input type="checkbox" />
                    Instruktor (+50 zł)
                </label>

                <button>Oblicz cenę </button>

                <div className="result">
                    <h2>Cena końcowa : — zł</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
