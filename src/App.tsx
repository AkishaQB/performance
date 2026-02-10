function App() {
  return (
    <main>
      <h1>Search</h1>

      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" placeholder="Type to search..." />
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
