const generateNumber = (max, min) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export default generateNumber;
