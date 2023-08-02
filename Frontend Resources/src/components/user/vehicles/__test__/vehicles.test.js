import Vehicles from "../vehicles";
import {  cleanup, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { renderWithProviders } from "../../../../helpers/testing/test-utils";
import { vehiclesData } from "../../../../helpers/testing/test-data";

jest.mock("axios");

describe("vehicles", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("should render loading", async () => {
    axios.get.mockResolvedValueOnce({ data: vehiclesData });
    renderWithProviders(<Vehicles />);
    const loadingEl = screen.getByTestId(/loading/i);
    expect(loadingEl).toBeInTheDocument();
    await waitFor(() => {
      expect(loadingEl).not.toBeInTheDocument();
    });
  });

  it("should render vehicle", async () => {
    axios.get.mockResolvedValueOnce({ data: vehiclesData });
    renderWithProviders(<Vehicles />);
    const vehicleEl = await screen.findByTestId(/vehicle-card-1/i);
    expect(vehicleEl).toBeInTheDocument();
  });
});
