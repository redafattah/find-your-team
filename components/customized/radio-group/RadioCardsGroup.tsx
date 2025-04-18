"use client"

import React from "react"
import * as RadioGroup from "@radix-ui/react-radio-group"

type Option = {
  value: string
  label: string
}

interface RadioCardsGroupProps {
  value: string
  onChange: (val: string) => void
  options: Option[]
  columns?: number // default is 3
}

const RadioCardsGroup = ({
  value,
  onChange,
  options,
  columns ,
}: RadioCardsGroupProps) => {
  return (
    <RadioGroup.Root
      value={value}
      onValueChange={onChange}
      className={`w-full grid grid-cols-${columns} gap-3 max-w-md`}
    >
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          className="ring-[1px] w-full ring-border rounded py-2 px-3 text-center data-[state=checked]:ring-2 data-[state=checked]:ring-green-500 cursor-pointer"
        >
          <span className="font-semibold tracking-tight">{option.label}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}

export default RadioCardsGroup
