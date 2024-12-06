
import { Card, Footer, Header } from "./components"

export default function Home() {
    const Countries = [
        {
            id: 1,
            country: "Brazil",
            capital: "Brasília",
            region: "Americas",
            population: "213993437"
        },
        {
            id: 2,
            country: "United States",
            capital: "Washington, D.C.",
            region: "Americas",
            population: "331002651"
        },
        {
            id: 3,
            country: "Germany",
            capital: "Berlin",
            region: "Europe",
            population: "83783942"
        },
        {
            id: 4,
            country: "Japan",
            capital: "Tokyo",
            region: "Asia",
            population: "126476461"
        },
        {
            id: 5,
            country: "Australia",
            capital: "Canberra",
            region: "Oceania",
            population: "25499884"
        },
        {
            id: 6,
            country: "France",
            capital: "Paris",
            region: "Europe",
            population: "66991282"
        }
    ];


    return (
        <>
            <Header />
            <main className="flex-1">
                <Card
                    id={Countries[0].id}
                    country={Countries[0].country}
                    capital={Countries[0].capital}
                    region={Countries[0].region}
                    population={Countries[0].population} />
                <Card
                    id={Countries[1].id}
                    country={Countries[1].country}
                    capital={Countries[1].capital}
                    region={Countries[1].region}
                    population={Countries[1].population} />
                <Card
                    id={Countries[2].id}
                    country={Countries[2].country}
                    capital={Countries[2].capital}
                    region={Countries[2].region}
                    population={Countries[2].population} />
                <Card
                    id={Countries[3].id}
                    country={Countries[3].country}
                    capital={Countries[3].capital}
                    region={Countries[3].region}
                    population={Countries[3].population} />
                <Card
                    id={Countries[4].id}
                    country={Countries[4].country}
                    capital={Countries[4].capital}
                    region={Countries[4].region}
                    population={Countries[4].population} />
                <Card
                    id={Countries[5].id}
                    country={Countries[5].country}
                    capital={Countries[5].capital}
                    region={Countries[5].region}
                    population={Countries[5].population} />

            </main>
            <Footer />
        </>
    );
}
