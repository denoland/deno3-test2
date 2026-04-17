import { ok } from "assert";

export function greet(name: string): string {
  ok(name.length > 0, "name must not be empty");
  return `hello ${name}`;
}

export const VERSION = "1.2.0";
