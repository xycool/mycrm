export function assertDefined<T>(value: T | undefined, message: string): asserts value is NonNullable<T> {
  if (value == undefined) {
    throw new Error(message)
  }
}
