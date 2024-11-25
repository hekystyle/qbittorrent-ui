import { FormattedNumber } from 'react-intl';
import { formatBytes } from './utils/formatBytes.js';

export interface FormattedBytesProps {
  value: number | undefined;
  per?: string | undefined;
}

export function FormattedBytes({ value, per }: FormattedBytesProps) {
  if (typeof value === "undefined") return <>-</>;

  const [formattedValue, unit] = formatBytes(value);

  if (Number.isNaN(formattedValue)) return <>-</>;

  return (
    <>
      <FormattedNumber value={formattedValue} /> {unit}
      {per ? <>/{per}</> : null}
    </>
  );
}
