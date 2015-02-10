describe('math.digits', function(){
    it('should exist', function(){
        expect(math.digits).toBeDefined();
    });

    it('should be a function', function(){
        expect(typeof math.digits).toBe('function');
    });

    describe('single argument \'n\'', function(){
        it('should return decimal digits of argument', function(){
            [
                { n: 1,   expected: [1] },
                { n: 2,   expected: [2] },
                { n: 10,  expected: [1, 0] },
                { n: 11,  expected: [1, 1] },
                { n: 100, expected: [1, 0, 0] },
            ].forEach(function(data){
                expect(math.digits(data.n)).toEqual(data.expected);

            });
        });
    });

    describe('double argument \'n\' & \'b\'', function(){
        it('should return base b digits of argument n', function(){
            [
                { n: 1, b: 2, expected: [1] },
                { n: 1, b: 3, expected: [1] },
                { n: 1, b: 5, expected: [1] },
                { n: 2, b: 2, expected: [1, 0] },
                { n: 2, b: 3, expected: [2] },
                { n: 2, b: 5, expected: [2] },
                { n: 3, b: 2, expected: [1, 1] },
                { n: 3, b: 3, expected: [1, 0] },
                { n: 3, b: 5, expected: [3] },
                { n: 4, b: 2, expected: [1, 0, 0] },
                { n: 4, b: 3, expected: [1, 1] },
                { n: 4, b: 5, expected: [4] },
                { n: 5, b: 2, expected: [1, 0, 1] },
                { n: 5, b: 3, expected: [1, 2] },
                { n: 5, b: 5, expected: [1, 0] },
            ].forEach(function(data){
                expect(math.digits(data.n, data.b)).toEqual(data.expected);

            });
        });
    });
});
