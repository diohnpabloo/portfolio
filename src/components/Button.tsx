import type { ReactNode } from 'react'

type Props = React.ComponentProps<'button'> & {
  iconLeft?: ReactNode
  className?: string
}

export function Button({ type = 'button', iconLeft, children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-2 border border-white/10 hover:border-white bg-transparent p-3 rounded-lg cursor-pointer hover:bg-primary hover:text-white/80 transition ease-linear text-primary ${className}`}
    >
      {iconLeft}
      {children}
    </button>
  )
}
