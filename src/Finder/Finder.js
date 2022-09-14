export default function Finder() {
    return (
        <div className="finder">
            <div>
                <h1><strong>Cauta </strong>automobilul</h1>
            </div>
            <form>
                <div>
                    <label for="cars">Marca :</label>
                    <select>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Mazda">Mazda</option>
                    </select>
                </div>
                <div>
                    <label for="cars">Model :</label>
                    <select>
                        <option value="Audi">RS7</option>
                        <option value="BMW">M4</option>
                        <option value="Mercedes">CLS</option>
                        <option value="Mazda">RX7</option>
                    </select>
                </div>
                <div>
                    <label for="an" placeholder="Din">Anul:</label>
                    <div className="sectioner">
                    <select>
                        <option value="" disabled selected>Din</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Pina in</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                    </select>
                    </div>
                </div>

                <div >
                    <label>Pret:</label>
                    <div className="sectioner">
                    <select>
                        <option value="" disabled selected>De la</option>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Pina la</option>
                        <option value="90000">90000</option>
                        <option value="100000">100000</option>
                        <option value="300000">300000</option>
                        <option value="40000">400000</option>
                        <option value="500000">500000</option>
                    </select>
                    </div>
                </div>
                <div>
                    <label>KM:</label>
                    <div className="sectioner">
                    <select>
                        <option value="" disabled selected>De la</option>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Pina la</option>
                        <option value="10000">100000</option>
                        <option value="20000">200000</option>
                        <option value="30000">300000</option>
                    </select>
                </div>
                </div>
            </form>
            <button> Cauta</button>
        </div>
    )
}