import { MdOutlineClose } from "react-icons/md"
type ImageModalProps = {
    imageUrl?: string
    title?: string
    description?: string
    onClose: () => void
}

export function ImageModal({ imageUrl, title, description, onClose }: ImageModalProps) {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop:blur-sm flex items-center justify-center z-50">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 cursor-pointer"
                >
                    <MdOutlineClose className="text-3xl"/>
                </button>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Imagem expandida"
                        className="max-w-[90vw] max-h-[80vh] rounded-2xl"
                    />
                )}
                <div className="flex flex-col p-4">
                    {title && <h2 className="text-xl font-semibold text-purply-100 mb-2">{title}</h2>}
                    {description && <p className="text-gray-500 whitespace-pre-line">{description}</p>}
                </div>

            </div>
        </div>
    )
}