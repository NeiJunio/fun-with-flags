import Image from "next/image";

type CardsProps = {
    index: number;
    flag: string;
    name: string;
    capital: string;
    region: string;
    population: number;
}

const Card = ({ index, flag, name, capital, region, population }: CardsProps) => {
    return (
        <div className=" h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <Image
                    src={flag || "https://placehold.co/600x400"}
                    alt={`Flag of ${name}`}
                    width={500}
                    height={300}
                    quality={100}
                    className="w-full h-full object-cover"
                    priority={index < 16}
                />
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{name}</h2>
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