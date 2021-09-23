import { useCallback, useState } from 'react'

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount)

  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return { count, incrementCounter, decrementCounter }
}

export default useCounter
