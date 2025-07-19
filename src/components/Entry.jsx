

export default function Entry(props) {
    return (
        <article className="entry">
            <div className="image-container">
                <img src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="info">
                <img src="src/assets/marker.png" alt="marker" />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h3>{props.entry.title}</h3>
                <p className="date">{props.entry.dates}</p>
                <p>{props.entry.text}</p>
            </div>
        </article>
    )
}