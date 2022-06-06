import { Header } from "../components/Header"
import { RoutesProvider } from "../routes"

function App() {
    return (
        <>
            <Header />
            <main className="mx-2 sm:mx-4 md:mx-8 mt-12">
                <RoutesProvider />
            </main>
        </>
    )
}

export default App
