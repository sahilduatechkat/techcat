import React from 'react'

export const InputComponent = ({ 
    label, 
    placeholder,
    value,
    onChange,
    className,
    name,
    type = 'input'
}: { 
    label: string, 
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    className?: string,
    name: string,
    type?: 'input' | 'textarea'
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label className='text-[#344054] text-sm'>
            {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='border border-[#D0D5DD] rounded-lg py-[10px] px-4 text-[#6A6A6A] text-sm min-h-[70px] focus:outline-[#5A3AEC]'
            name={name}
            rows={2}
          />
        ) : (
          <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='border border-[#D0D5DD] rounded-lg py-[10px] px-4 text-[#6A6A6A] text-sm focus:outline-[#5A3AEC]'
            name={name}
          />
        )}
    </div>
  )
}
