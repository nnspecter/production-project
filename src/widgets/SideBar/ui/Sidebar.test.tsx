import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { withTranslation } from "react-i18next"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"

describe("Тест сайдбара", ()=>{
    test("Рендер", ()=>{
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test("Cворачивание-Разворачивание", ()=>{
        renderWithTranslation(<Sidebar/>)
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})