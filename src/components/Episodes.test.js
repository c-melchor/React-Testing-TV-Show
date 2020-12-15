import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./Episodes";
import { fetchShow as mockFetchShow } from "../api/fetchShow";

test("Episodes renders", () => {
  render(<Episodes episodes={[]} />);
});

// jest.mock("./api/fetchShow");
// test("renders dropdown", async ()=>{
//     mockFetchShow.mockResolvedValueOnce(showData)
// })
