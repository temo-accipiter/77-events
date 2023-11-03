import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {

        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01"); // Creation d'objet Date pour 2022-01-01
            const result = getMonth(date); // Appel de la fonction getMonth 
            expect(result).toEqual("janvier"); // Verifier si le resultat est "janvier"
        });

        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08"); // Creation d'objet Date pour 2022-07-08
            const result = getMonth(date); // Appel de la fonction getMonth 
            expect(result).toEqual("juillet"); // Verifier si le resultat est "juillet" 
        });
    });
});
