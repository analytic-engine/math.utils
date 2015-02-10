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
});
