export default function Result(props) {
    return (
        <div className="results--container">
            <div className="list--typer">
                <img src={props.index.img.src} alt={props.index.alt}></img>
            </div>
            <div className="right--container">
                <div className="--dealer">
                <h2>{props.index.marca} {props.index.model}</h2>
                <h2>AutoDealer</h2>
                </div>
                <span>
                    <p>{props.index.pret}$</p>
                </span>
                <div className="details">
                    <ol>
                        <li>Anul {props.index.an}</li>
                        <li>{props.index.capacitate} {props.index.motor}</li>
                        <li>{props.index.putere} HP</li>
                        <li>{props.index.submodel}</li>
                        <li>{props.index.km} KM</li>
                    </ol>
                </div>
                <p className="details--btn">Vezi detalii  &gt;&gt;&gt; </p>
            </div>
        <br/>
        <br/>
        </div>
    )
}