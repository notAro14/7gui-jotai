import { atom } from "jotai"

const baseAtom = atom(0)

export const countAtom = atom((get) => get(baseAtom))

export const incrementByOneAtom = atom(null, (get, set) => {
  set(baseAtom, get(baseAtom) + 1)
})

export const decrementByOneAtom = atom(null, (get, set) => {
  set(baseAtom, get(baseAtom) - 1)
})
