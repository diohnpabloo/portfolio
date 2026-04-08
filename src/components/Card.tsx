import type { ReactNode } from 'react'

type Props = {
    title?: string
    description?: string
    icon?: ReactNode
    items?: string[]
    className?: string
}

export function Card({ title, description, icon, items, className }: Props) {
    return (
        <div
            className={`flex flex-col border p-8 rounded-3xl gap-2 w-full max-w-sm bg-gray-900/40 backdrop-blur-sm border-white/8 ${className}`}
        >
            <p className='text-primary text-4xl'>{icon}</p>
            <h2 className='text-xl font-bold italic tracking-tight text-white'>{title}</h2>
            <p className='text-gray-400 text-sm leading-relaxed mb-6'>{description}</p>

           {items && (
            <div className='flex flex-col gap-2'>
                {items.map((item, index) => (
                    <span key={index} className='text-[10px] font-black font-tag uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 w-fit'>{item}</span>
                ))}
            </div>
           )}
        </div>
    )
}
