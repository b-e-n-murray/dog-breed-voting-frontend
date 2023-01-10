export const randomiseBreed = (): number[] => {
    let different = true;
    let index1 = 0;
    let index2 = 0;
    while (different) {
      index1 = Math.floor(Math.random() * 149);
      index2 = Math.floor(Math.random() * 149);
      if (index1 !== index2) {
        different = false;
      }
    }
    return [index1, index2];
  };