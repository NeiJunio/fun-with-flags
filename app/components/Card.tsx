import Image from "next/image";

type CardsProps ={
    id: number;
    country: string;
    capital: string;
    region: string;
    population: string;
}

const Card = ({id, country, capital, region, population}: CardsProps) => {
    return (
        <div id={`${id}`} className=" h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <Image
                    src="https://via.placeholder.com/600x400"
                    alt="Placeholder"
                    width={600}
                    height={400}
                    quality={100}
                    layout="responsive"
                    className="w-full h-full object-cover"
                />
                {/* <img src="https://placehold.co/600x400" alt="test image" className="w-full h-full object-cover" /> */}
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{country}</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Capital:</span>
                        <span>{capital}</span>
                    </div>
                    <div className="flex items-center gap-1">
                    <span className="font-semibold">Region:</span>
                        <span>{region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Population:</span>
                        <span>{population}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;