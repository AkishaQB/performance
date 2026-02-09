function App() {
  return (
    <main>
      <h1>Search</h1>

      <form>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          placeholder="Type to search..."
        />
      </form>

      <section>
        <ul>
          {/* results will go here */}
        </ul>
      </section>
    </main>
  );
}

export default App;
