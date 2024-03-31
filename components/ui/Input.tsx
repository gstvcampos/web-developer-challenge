import { cn } from '@/lib/ultis'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: { message?: string }
  className?: string
}

export const Input = forwardRef(
  (
    { name, type = 'text', error, className, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="py-1 w-full">
        <input
          className={cn(
            className,
            'input bg-base-200 w-full text-sm focus:outline-none',
          )}
          type={type}
          name={name}
          {...rest}
          ref={ref}
        />
        {error && (
          <p className="text-red-500 text-xs text-start mt-1">
            {error.message}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
