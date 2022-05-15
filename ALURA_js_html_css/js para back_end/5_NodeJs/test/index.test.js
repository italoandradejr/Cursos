//import { expect, test } from '@jest/globals'
import pegaArquivo from '../1_index.js';


test("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe('function');
})