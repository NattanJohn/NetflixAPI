import "./MovieRow.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ items, title }) => {
    return (
        <div>
            <h2> {title}</h2>
            <div className="MovieRow--area">
                {items.results.length > 0 &&
                    items.results.map(() => (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                            src={`https://image.tmbd.org/t/p/w300${items.poster_path}`}
                        ></img>
                    ))}
            </div>
        </div>
    );
};
