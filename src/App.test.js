import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "react-select";
import selectEvent from "react-select-event";

import userEvent from "@testing-library/user-event";
import App from "./App";
import Dropdown from "react-dropdown";

test("App renders, first test", () => {
  render(<App />);
});

test("dropdown render and is able to be used", () => {
  render(<Dropdown option={"Season 1"} />);
  const dropdown = screen.getByText(/select/i);
  //   userEvent.click(dropdown);
  //   expect(/season 1/).toBeInTheDocument();
  //   const dropdown = screen.getByTestId("dropdown");
  //   expect(dropdown).toBeInTheDocument();
});

// test("react-select", ({ option, values, onChange }) => {
//   function handleChange(e) {
//     const option = options.find(opt => opt.value === e.currentTarget.value);
//     onChange(option);
//   }
//   return (
//     <select data-testid="select" value={values} onChange={handleChange}>
//       {console.log(option, "OPTIONS ")
//         option.map(({ label, value }) => (
//           <option key={value} value={value}>
//             {label}
//           </option>
//         ))}
//       }
//     </select>
//   );
// });
