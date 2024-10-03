import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({
    id,
    name,
    description,
    price,
    imageUrl,
}) => {
    return (
        <Link href={'/products/' + id}>
            <div className="max-w-lg bg-gray-953 rounded-sm overflow-hidden h-full flex flex-col justify-between">
                <div className="relative h-96 bg-center">

                    <Image
                        src={imageUrl}
                        style={{ objectFit: "cover" }}
                        alt={name}
                        fill={true}
                        className="rounded-t"
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="text-2xl mb-2 uppercase line-clamp-2">
                        {name}
                    </div>
                    <div className="text-gray-700 text-base truncate uppercase">
                        {description}
                    </div>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block text-2xl text-gray-952 mr-2">
                        ${price}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Card