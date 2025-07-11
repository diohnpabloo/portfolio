import { CardTitle } from "./CardTitle"
import { useState } from "react";
import { ImageModal } from "./ImageModal";

type ProjectProps = {
    title?: string;
    description?: string;
    stack: string[];
    image?: string;
}

export function ProjectCard({ title, description, image, stack }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col gap-6 w-full max-w-sm border border-purply-100/50 p-6 rounded-3xl overflow-hidden h-[480px]">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white-100 text-lg break-words">{title}</h2>
                    <p className="text-gray-500 text-md line-clamp-3">{description}</p>
                </div>

                <div className="flex gap-4 flex-wrap">
                    {stack?.map((tech, index) => (
                        <CardTitle key={index}>{tech}</CardTitle>
                    ))}
                </div>

                <img
                    src={image}
                    alt="Imagem do projeto"
                    className="rounded-2xl object-cover w-full h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 cursor-pointer hover:brightness-90 transition"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            {isOpen && (
                <ImageModal
                    imageUrl={image}
                    onClose={() => setIsOpen(false)}
                    title={title}
                    description={description}
                />
            )}
        </>
    );
}