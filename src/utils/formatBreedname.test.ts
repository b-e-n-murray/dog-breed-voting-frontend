import { formatBreedname } from "./formatBreedname";

test("formatBreedname returns the words in reverse order and without the slash", () => {
    expect(formatBreedname("shepherd/german")).toBe("German Shepherd")
  });

test("formatBreedname returns the words in reverse order and without the slash", () => {
    expect(formatBreedname("shepherd")).toBe("SHEPHERD")
  });