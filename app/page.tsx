
"use client"

import { useEffect, useState } from "react";
import { Card, Footer, Header, Grid } from "./components"

type Country = {
    cca3: string,
    flags: {
        svg: string,
    },
    name: {
        common: string,
    },
    capital: string[],
    region: string,
    population: number
}

export default function Home() {

    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=cca3,flags,name,capital,region,population");
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                setError("Failed to fetch data");
                console.error(error)
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Error: {error}</p>
            </div>
        )
    }

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
                    {countries.map(({ cca3, flags, name, capital, region, population }, index) => {
                        const { svg: flag } = flags ?? {};
                        const { common: countryName } = name ?? {};
                        const [capitalName] = capital ?? []

                        return (
                            <Card
                                key={cca3}
                                index={index}
                                flag={flag}
                                name={countryName}
                                capital={capitalName}
                                region={region}
                                population={population}
                            />
                        )
                    }
                    )}
                </Grid>
            </main>
            <Footer />
        </>
    );
}
