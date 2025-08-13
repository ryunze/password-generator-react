import NavbarComponent from "./Components/NavbarComponent";
import ContentComponent from "./Components/ContentComponent";

function App() {
    return (
        <div id="app-wraper" className="h-auto md:h-full">
            <div className="lg:w-7xl md:w-full md:p-12 m-auto">
                <NavbarComponent/>
                <ContentComponent/>
            </div>
        </div>
    )
}

export default App;