"use strict";

import { den, vit, pricePerHour } from "./data.js";

const CalculatePrice = function (hour, price) {
  return hour * price;
};

const sumtime = function (test) {
  let sum = 0;
  for (let i = 0; i < test.uptime.length; i++) {
    sum = sum + test.uptime[i];
  }
  return sum;
};

const outPut = function (test) {
  const inputSum = sumtime(test);

  return `${test.name} ${
    test.lastName
  } is used the service for ${inputSum} hours and the final cost is ${
    inputSum * pricePerHour
  }.`;
};
