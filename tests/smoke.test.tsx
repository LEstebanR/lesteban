import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'

test('React Testing Library renders correctly', () => {
  const { getByText } = render(<div>hello</div>)
  expect(getByText('hello')).toBeDefined()
})
