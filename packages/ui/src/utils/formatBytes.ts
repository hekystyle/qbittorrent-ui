
export function formatBytes(bytes: number): [number, string] {
  const k = 1000;
  const units = ['b', 'kb', 'Mb', 'Gb', 'Tb'] as const;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return [
    bytes / Math.pow(k, Math.min(i, units.length - 1)),
    units.at(i) ?? units.at(-1) ?? units[0],
  ];
}
