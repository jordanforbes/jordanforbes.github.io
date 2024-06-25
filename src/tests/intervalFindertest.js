const findInterval = require('../utils/intervalFinder');

test('find distance between two points', ()=>{
    expect(findInterval('c','e')).toBe('M3')
    expect(findInterval('c','g')).toBe('P5')
    expect(findInterval('d','fg')).toBe('M3')
    expect(findInterval('de','g')).toBe('M3')
})

