import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'whatsapp' | 'ghost' | 'dark'

const base =
  'motion-press inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-[color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-orange text-white shadow-md shadow-brand-orange/25 hover:bg-brand-orange-hover focus-visible:outline-brand-orange',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:outline-[#25D366]',
  ghost:
    'border border-stone-300/70 bg-white/90 text-brand-ink hover:bg-stone-50 focus-visible:outline-brand-teal',
  dark:
    'bg-brand-ink text-white hover:bg-brand-orange focus-visible:outline-brand-ink',
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
