"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"

type Option = {
  label: string
  value: string
}

type Props = {
  options: Option[]
  value: string
}

export default function Dropdown({ options, value }: Props) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [category, setCategory] = useState(value)

  const selected = options.find((o) => o.value === category)

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative w-48"
    >
      {/* Button */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border rounded-lg px-4 py-2 bg-gray-50 hover:bg-gray-100"
      >
        {selected?.label}

        <ChevronDown size={16} />
      </button>

      {/* Menu */}

      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">

          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setCategory(option.value)
                setOpen(false)
              }}
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option.label}

              {category === option.value && (
                <Check size={16} />
              )}
            </div>
          ))}

        </div>
      )}
    </div>
  )
}