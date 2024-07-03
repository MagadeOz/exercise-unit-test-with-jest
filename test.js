const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected);
})

test("One euro should be 547.75 yens", function() {
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5; 
     expect(dollars).toBe(expected); 
})

test("One yen should be 3.045 pounds", function() {
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87; 
     expect(pounds).toBe(expected); 
})