import { cn } from '@/lib/ultis'
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: { message?: string }
  className?: string
}

export const Textarea = forwardRef(
  (
    { name, error, className, ...rest }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <div className="py-1 w-full">
        <textarea
          className={cn(
            className,
            'textarea bg-base-200 w-full text-sm focus:outline-none',
          )}
          name={name}
          ref={ref}
          {...rest}
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

Textarea.displayName = 'Textarea'
