import { SearchClient } from '@akisha_jm/search-sdk';
function App() {

  const searchUrl = 'https://dummyjson.com/products/search'
  
const search = SearchClient({
  debounceMs: 300,
  maxCalls: 5,
  interval: 1000,
  cacheTtl: 10_000
});
  
  const onSearchInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  try {
    const value = event.currentTarget.value;
    const results = await search(searchUrl, value);
    console.log(results);
  } catch (err) {
    console.error("Search failed:", err);
  }
}

  return (
    <main>
      <h1>Search</h1>

      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" placeholder="Type to search..." onKeyDown={onSearchInput} />
      </form>

      <section>
        <p className="state">Start typing to see results</p>

        {/* 
        <p className="state">Loading...</p>
        <p className="state">No results found</p>
        <p className="state error">Something went wrong</p>
        */}

        <ul>
          {/* results */}
        </ul>
      </section>
    </main>
  );
}

export default App;
