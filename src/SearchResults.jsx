
function SearchResults(prop){
    const filterResult = prop.tracks.filter((track) => track.name.toLowerCase().includes(prop.searchInput.toLowerCase()));

    return(
        <div>
            <h2>Search Results</h2>
            {filterResult.map((track) => (
            <div key={track.id}>
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
            </div>
            ))};

        </div>
    )
}
export default SearchResults;