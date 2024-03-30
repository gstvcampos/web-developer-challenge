import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: { message?: string }
}

export const Input = forwardRef(
  (
    { name, type = 'text', error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="py-2">
        <input
          className="input bg-base-200"
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
