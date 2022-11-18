it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 90000,
    years: 10,
    rate: 8.9,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1135.22");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 137563,
    years: 9,
    rate: 30,
  };
  expect(calculateMonthlyPayment(values)).toEqual("3695.84");
});

it("should handle terribly high interest rates", function () {
  const values = {
    amount: 9000,
    years: 77,
    rate: 135,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1012.50");
});
