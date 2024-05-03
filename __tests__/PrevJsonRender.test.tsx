import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrevJsonRender from "@/components/PrevJsonRender";
import { IMindyResponse } from "types/MindyType";

const dummyMindyResponse: IMindyResponse = {
 version: "1.0",
 autor: "Adam",
 codigo: "X123",
 nombre: "Indicador de Prueba",
 unidad_medida: "Unidades",
 serie: [
  { fecha: "2024-05-01", valor: 100 },
  { fecha: "2024-05-02", valor: 105 },
 ],
};

describe("PrevJsonRender", () => {
 test("should display the button and toggle data visibility on mobile mode", () => {
  render(<PrevJsonRender data={dummyMindyResponse} isMobile={true} />);
  const button = screen.getByRole("button", { name: /ver data/i });
  expect(button).toBeInTheDocument();
  expect(screen.queryByText(/Indicador de Prueba/i)).not.toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.getByText(/Indicador de Prueba/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Ocultar Data/i })).toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.queryByText(/Indicador de Prueba/i)).not.toBeInTheDocument();
 });

 test("should display the data directly if not in mobile mode", () => {
  render(<PrevJsonRender data={dummyMindyResponse} isMobile={false} />);
  expect(screen.getByText(/Indicador de Prueba/i)).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
 });
});
