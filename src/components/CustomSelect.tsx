import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { ChevronDown, type LucideIcon } from 'lucide-react'

export type CustomSelectOption = {
  value: string
  label: string
  icon?: LucideIcon
}

type Props = {
  id: string
  options: CustomSelectOption[]
  value: string
  onChange: (value: string) => void
  /** Texto cuando value está vacío o no coincide */
  placeholder?: string
  className?: string
  /** Input oculto para forms (name + value) */
  name?: string
  disabled?: boolean
}

export function CustomSelect({
  id,
  options,
  value,
  onChange,
  placeholder = 'Seleccionar…',
  className = '',
  name,
  disabled = false,
}: Props) {
  const listId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)

  const selected = options.find((o) => o.value === value)
  const displayLabel = selected?.label ?? placeholder
  const DisplayIcon = selected?.icon ?? options[0]?.icon

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open, close])

  const syncHighlightToValue = useCallback(() => {
    const idx = Math.max(0, options.findIndex((o) => o.value === value))
    setHighlight(idx)
  }, [options, value])

  const pick = (v: string) => {
    onChange(v)
    close()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (disabled) return
    if (e.key === 'Escape') {
      e.preventDefault()
      close()
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      if (!open) {
        e.preventDefault()
        syncHighlightToValue()
        setOpen(true)
        return
      }
    }
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight((h) => (h + 1) % options.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((h) => (h - 1 + options.length) % options.length)
    } else if (e.key === 'Enter' && open) {
      e.preventDefault()
      pick(options[highlight]?.value ?? '')
    }
  }

  return (
    <div ref={containerRef} className={`relative z-10 ${className}`.trim()}>
      {name ? (
        <input type="hidden" name={name} value={value} readOnly aria-hidden />
      ) : null}
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onKeyDown={onKeyDown}
        onClick={() => {
          if (disabled) return
          setOpen((o) => {
            if (!o) syncHighlightToValue()
            return !o
          })
        }}
        className={`select-pill-trigger flex w-full items-center gap-2 text-left ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${!selected || value === '' ? 'text-stone-500' : 'text-brand-ink'}`}
      >
        {DisplayIcon ? (
          <DisplayIcon
            className="size-4 shrink-0 text-brand-teal/90 sm:size-[1.125rem]"
            strokeWidth={1.75}
            aria-hidden
          />
        ) : null}
        <span className="min-w-0 flex-1 truncate">{displayLabel}</span>
        <ChevronDown
          strokeWidth={2}
          className={`size-3.5 shrink-0 text-brand-ink/45 transition-transform duration-200 sm:size-4 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 z-[200] mt-1.5 max-h-[min(16rem,52svh)] overflow-y-auto rounded-xl border border-stone-200/90 bg-white py-1 shadow-xl shadow-brand-teal/12 ring-1 ring-stone-900/5 sm:max-h-[min(20rem,60vh)] sm:rounded-2xl sm:py-1.5"
        >
          {options.map((opt, i) => {
            const Icon = opt.icon
            const isSelected = opt.value === value
            const isHi = i === highlight
            return (
              <li key={opt.value || `opt-${opt.label}`} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`flex w-full items-center gap-2 px-2.5 py-2 text-left text-base transition-colors duration-150 sm:gap-2.5 sm:px-3 sm:py-2.5 min-[1920px]:px-3.5 min-[1920px]:py-3 min-[1920px]:text-[1.125rem] ${
                    isHi ? 'bg-brand-teal/[0.07]' : ''
                  } ${
                    isSelected
                      ? 'font-semibold text-brand-teal'
                      : 'font-normal text-brand-ink/90 hover:bg-stone-50'
                  }`}
                  onMouseEnter={() => setHighlight(i)}
                  onClick={() => pick(opt.value)}
                >
                  {Icon ? (
                    <Icon
                      className={`size-[1.125rem] shrink-0 ${isSelected ? 'text-brand-orange' : 'text-brand-teal/75'}`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  ) : (
                    <span className="w-[1.125rem] shrink-0" aria-hidden />
                  )}
                  <span className="min-w-0 flex-1 leading-snug">{opt.label}</span>
                  {isSelected ? (
                    <span className="text-brand-orange" aria-hidden>
                      <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
