import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};

export const assertValue = <T>(
  value: T | undefined,
  errorMessage: string
): T => {
  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
};
