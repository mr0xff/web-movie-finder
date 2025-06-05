import { expect, test, describe } from 'vitest';
import { BrowserCache } from '../src/lib/utils';

describe("browser cache client", ()=> {
  const bcache = new BrowserCache();
  
  test("toplist method", ()=> {
    bcache.updateTopList([ 1, 3, 2]);
    expect(bcache.getTopList()).toMatchObject([1, 3, 2]);
  });

  test("viewed items", ()=>{
    
  });
})