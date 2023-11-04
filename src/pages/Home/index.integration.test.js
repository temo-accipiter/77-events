import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("When a page is created", () => {

    it("a list of events is displayed", () => {
      render(<Home />);
      screen.findByText("Nos réalisations").then(() => { // Recherche du texte "Nos réalisations"
        const eventListElements = screen.queryAllByTestId("card-testid"); // Sélection de tous les éléments avec l'attribut data-testid="card-testid"
        expect(eventListElements.length).toBeGreaterThan(0); // Vérifiez que la liste de personnes contient au moins un élément
      });
    });
    
    it("a list of PeopleCard is displayed", () => {
      render(<Home />);
      const listContainer = screen.getByTestId("people-list-container"); // Sélectionnez la div avec la classe "ListContainer"
      const personElements = listContainer.querySelectorAll(".PeopleCard"); // Sélectionnez tous les éléments "PeopleCard" à l'intérieur de la "ListContainer"
      expect(personElements.length).toBeGreaterThan(0); // Vérifiez que la liste de personnes contient au moins un élément
    })
  
    it("a footer is displayed", () => {
      render(<Home />);
      const footer = screen.getByTestId("page-footer"); // Sélectionner le footer par l'attribut data-testid
      expect(footer).toBeInTheDocument(); // Vérifier que le footer est dans le document
    })
  });
  