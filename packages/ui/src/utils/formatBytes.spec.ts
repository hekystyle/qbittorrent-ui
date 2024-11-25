import { it, expect } from 'vitest';
import { formatBytes } from './formatBytes';

it.each([
  [56, [56, 'b']],
  [56_000, [56, 'kb']],
  [56_000_000, [56, 'Mb']],
  [56_000_000_000, [56, 'Gb']],
  [56_000_000_000_000, [56, 'Tb']],
  [56_000_000_000_000_000, [56_000, 'Tb']],
])('should format %j as %j', (bytes, expected) => {
  expect(formatBytes(bytes)).toStrictEqual(expected);
});
