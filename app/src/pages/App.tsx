import { Header } from "../components/Header"
import { RoutesProvider } from "../routes"

function App() {
    return (
        <main className="md:mx-8 sm:mx-4 mx-2">
            <Header />
            <RoutesProvider />
        </main>
    )
}

export default App
