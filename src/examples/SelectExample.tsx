import { Listbox } from '@headlessui/react'
import { CheckIcon } from '../components/Icons'
import { NJSelect } from '../components/NJSelect'
import { useState } from 'react'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' }
]

const SelectExample = () => {
  const [selected, setSelected] = useState(people[0])
  const [selected1, setSelected1] = useState([people[0]])

  return (
    <div>
      <NJSelect selected={selected} onSelected={setSelected}>
        {people.map((person, personIdx) => (
          <Listbox.Option
            key={personIdx}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
            }
            value={person}
          >
            {({ selected }) => (
              <>
                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person.name}</span>
                {selected ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Listbox.Option>
        ))}
      </NJSelect>

      <div className="mt-3" />

      <NJSelect selected={selected1} onSelected={setSelected1}>
        {people.map((person, personIdx) => (
          <Listbox.Option
            key={personIdx}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
            }
            value={person}
          >
            {({ selected }) => (
              <>
                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person.name}</span>
                {selected ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Listbox.Option>
        ))}
      </NJSelect>
    </div>
  )
}

export default SelectExample
