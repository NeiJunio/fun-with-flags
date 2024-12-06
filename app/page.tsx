
import { Card, Footer, Header, Grid } from "./components"

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
                {/* {Countries.map((country) =>
                    <Card
                        key={country.id}
                        country={country.country}
                        capital={country.capital}
                        region={country.region}
                        population={country.population}
                    />
                )} */}
                <Grid>
                    {Countries.map(({ id, country, capital, region, population }) =>
                        <Card
                            key={id}
                            country={country}
                            capital={capital}
                            region={region}
                            population={population}
                        />
                    )}
                </Grid>
            </main>
            <Footer />
        </>
    );
}
