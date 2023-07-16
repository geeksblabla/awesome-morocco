import { RemoteImage } from "../remote-image";
import type { Podcast } from "@prisma/client";

export const PodcastList = ({ title, description, image, url }: Podcast) => {
    return (
        <div className="relative flex flex-col items-center p-2 md:p-4 border border-gray-200 shadow md:flex-row ">
            <a href={url} className="absolute inset-0" target="_blank">
                <span aria-hidden="true" className="hidden">{title}</span>
            </a>
            <RemoteImage
                className="w-24 h-24 rounded-full shadow-lg"
                src={image}
                alt={`${title} website image`}
            />
            <div className="flex flex-col justify-between pl-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
            </div>
        </div>
    )
}
