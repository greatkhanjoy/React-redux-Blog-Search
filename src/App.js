import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      
    <Nav />

        
    <Search />

    <Articles />

        
        <section className="pt-6">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
            >
                <div>Copyright 2022</div>
                <div>
                    <a
                        href="https://www.fiverr.com/greatkhanjoy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Hire me
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
