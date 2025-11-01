import { useEffect, useState } from 'react'

/**
 * Custom hook to check if component has mounted on the client.
 * Useful for preventing hydration mismatches with theme-dependent content.
 *
 * @returns {boolean} true if component is mounted on client, false otherwise
 */
export function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
