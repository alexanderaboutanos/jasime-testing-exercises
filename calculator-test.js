
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount : 100000, years: 30, rate: 0.25})).toEqual("2084.58");
  expect(calculateMonthlyPayment({amount : 1000, years: 5, rate: 0.05})).toEqual("18.87");

});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount : 1, years: 1, rate: 0.1})).toEqual("0.09");
  expect(calculateMonthlyPayment({amount : 0, years: 0, rate: 0})).toEqual("0.00");
  expect(calculateMonthlyPayment({amount : 200000, years: 20, rate: 0.03})).toEqual("1109.20");
});

