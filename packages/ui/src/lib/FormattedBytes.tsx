export interface FormattedBytesProps {
  value?: number | undefined | null;
  /**
   * Append another unit after byte unit: 's' => 'B/s'
   */
  perUnit?: string | undefined;
}

export function FormattedBytes({ value, perUnit }: FormattedBytesProps) {
  return (
    <>
      {/* TODO: implement dynamic value & unit conversion (1 000 000 => 1 MiB) */}
      {value} b{perUnit ? ` ${perUnit}` : ''}
    </>
  );
}

export default FormattedBytes;
