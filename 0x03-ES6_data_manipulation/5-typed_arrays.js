export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);

  if (position >= int8Array.length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8Array[position] = value;

  return new DataView(buffer);
}
