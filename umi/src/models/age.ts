import {useState, useCallback} from 'react'
export default () => {
  const [age, setAge] = useState(0)

  const add = useCallback(
    (val: number = 1) => {
      setAge((pre) => pre + val)
    },
    [],
  )

  return {
      setAge,
      add,
      age
  }
}