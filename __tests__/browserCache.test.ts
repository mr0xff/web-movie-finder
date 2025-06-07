import { expect, test, describe } from 'vitest';
import { BrowserCache } from '../src/lib/utils';
const bcache = new BrowserCache();

describe("Cache do navegador", ()=> {
  
  test("Filmes recomendados", ()=> {
    bcache.updateTopList([ 1, 3, 2]);
    expect(bcache.getTopList()).toMatchObject([1, 3, 2]);
  });

  test("Filme visto", ()=>{
    bcache.updateViewed({ imdbID: "testId" });
    expect(bcache.getViewed("testId")).toMatchObject({ imdbID: "testId" });
    expect(bcache.getViewed("fakeId")).toBeNull();
  });

  test("Filmes buscados", ()=>{
    const movies = { 
      Search: [{ imdbID: "fakeId" }],
      totalResults: 1 
    }

    bcache.addSearchHistory("test", 1, movies);
    const first = bcache.getSearchHistory("test", 1);
    const second = bcache.getSearchHistory("test", 2);
    expect(first).toMatchObject(movies);
    expect(second).toBeNull();
  });
})