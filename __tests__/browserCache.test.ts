import { expect, test, describe } from 'vitest';
import { BrowserCache } from '../src/lib/utils';
const bcache = new BrowserCache();

describe("browser cache client", ()=> {
  
  test("toplist method", ()=> {
    bcache.updateTopList([ 1, 3, 2]);
    expect(bcache.getTopList()).toMatchObject([1, 3, 2]);
  });

  // test("viewed items", ()=>{
  //   bcache.updateViewed({ imdbId: "testId" });
  //   expect(bcache.getViewed("testId")).toMatchObject({ imdbId: "testId" });
  // });
})