import { RemoteImage } from "../remote-image";
import type { Podcast } from "@prisma/client";

export const PodcastCard = ({ title, description, image, url }: Podcast) => {
    return (
        <div className="relative p-5 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm hover:shadow-lg">
            <a href={url} className="absolute inset-0" target="_blank">
                <span aria-hidden="true" className="hidden">{title}</span>
            </a>
            <RemoteImage
                className="m-auto h-40"
                src={image}
                alt={`${title} website image`}
            />
            <div className="mt-4">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                <p className="font-normal text-gray-700 mb-3">{description}</p>
            </div>
        </div>
    )
}
