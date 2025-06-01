import { test, expect } from 'vitest';

test("setup vitest runner...", ()=>{
  expect(1+2).toBe(3);
});

test("random test runner implementation", ()=>{
  const randInt = (fallbackNumber=1)=> fallbackNumber ?? Math.round(Math.random()*10);
  
  const MAGIC_NUMBER: [ number, number ] = [ 
    randInt(), 
    randInt()
  ];

  expect(MAGIC_NUMBER[0]).toBe(MAGIC_NUMBER[1]);
});