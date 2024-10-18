
import Image from "next/image";

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    imageSrc: string;

    altText: string;
}

export function ServiceCard({
    icon: Icon,
    title,
    subtitle,
    description,
    buttonText,
    imageSrc,
    altText
}: ServiceCardProps) {
    return (
        <div className="border rounded-lg max-w-7xl mx-auto mt-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 p-6">
                <div className="flex items-center text-orange-500 mb-2">
                    <Icon className="mr-2 text-2xl" />
                    <p className="font-semibold">{title}</p>
                </div>
                <h2 className="text-2xl font-bold mb-2">{subtitle}</h2>
                <p className="text-gray-700 mb-4">
                    {description}
                </p>
                <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">
                    {buttonText}
                </button>
            </div>
            <div className="w-full md:w-1/3 p-4">
                <Image
                    src={imageSrc}
                    alt={altText}
                    layout="responsive"
                    width={200}
                    height={200}
                    objectFit="contain"
                    className="rounded-md"
                />
            </div>
        </div>
    );
}
