"use strict";
import { den, vit, pricePerHour } from "./data.js";
let sum = 0;

const CalculatePriceArrow = (hour) => hour * pricePerHour;

const sumtimeArrow = (test) => {
  for (let i = 0; i < test.uptime.length; i++) {
    sum += test.uptime[i];
  }
  return sum;
};

const arrowOutput = (test) => {
  const inputSum = sumtimeArrow(test);
  return `${test.name} ${
    test.lastName
  } is used the service for ${inputSum} hours and the final cost is ${
    inputSum * pricePerHour
  }.`;
};
