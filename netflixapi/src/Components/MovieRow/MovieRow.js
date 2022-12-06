import "./MovieRow.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ items, title }) => {
    return (
        <div>
            <h2> {title}</h2>

            <div className="movieRow--area">
                <div className="movieRow--List">
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <div key={key} className="movieRow--item">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    alt={items.name}
                                ></img>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
