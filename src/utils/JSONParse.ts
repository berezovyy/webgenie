import JSON5 from 'json5';
import { jsonrepair } from 'jsonrepair';

export function parseJSONWithFixes(input: string): any {
  if (typeof input !== 'string') {
    throw new Error(`Input is not a string. Input: ${input}`);
  }

  try {
    return JSON5.parse(input);
  } catch (error) {
    try {
      const fixedInput = jsonrepair(input);
      return JSON5.parse(fixedInput);
    } catch (error) {
      throw new Error(`Unable to parse JSON even after applying fixes. Input: ${input}. Error: ${error}`);
    }
  }
}

export default parseJSONWithFixes;
