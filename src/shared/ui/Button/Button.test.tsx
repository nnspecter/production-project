import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

 describe('Button', ()=>{
    test("Рендер", ()=>{
        render(<Button>TEXT</Button>)
        expect(screen.getByText('TEXT')).toBeInTheDocument()
    });
    test("Тема clear", ()=>{
        render(<Button theme="clear">TEXT</Button>)
        expect(screen.getByText('TEXT')).toHaveClass("clear");
    });
    test("Тема contained", ()=>{
        render(<Button theme="contained">TEXT</Button>)
        expect(screen.getByText('TEXT')).toHaveClass("contained");
    });

 })