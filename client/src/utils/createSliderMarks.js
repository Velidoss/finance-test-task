const createSliderMarks = () => {
  return Array(300 / 30).fill(1).map((mark, index) => {
    const markValue = (index + 1) * 30;
    return { 
      value: markValue,
      label: `${ markValue >= 60 ? `${markValue / 60} min` : `${markValue} sec`}`,
    }
  })
};

export default createSliderMarks;