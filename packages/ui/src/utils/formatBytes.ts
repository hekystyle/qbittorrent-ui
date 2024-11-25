export function formatBytes(bytes: number): [number, string] {
  const units = ['b', 'kb', 'Mb', 'Gb', 'Tb'] as const;

  if (bytes === 0) return [0, units[0]];

  const k = 1000;

  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));

  return [
    bytes / Math.pow(k, Math.min(i, units.length - 1)),
    units.at(i) ?? units.at(-1) ?? '',
  ];
}
