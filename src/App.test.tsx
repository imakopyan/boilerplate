import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./client/App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const mock = {
  form: {
    schema: {
      title: "Тест формы",
      description: "Описание формы",
      type: "object",
      properties: {},
    },
    uiSchema: {},
  },
  formKey: 111,
  formData: {},
};



describe("App Form", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore(mock);
  })

  it("renders component form", async () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(await screen.findByText(/Тест формы/i)).toBeInTheDocument();
    screen.debug();
  });
});

// describe("App", () => {
//   let store: any;
//   beforeEach(() => {
//     store = mockStore(mock);
//   })
//   test("renders App", () => {
//     const app = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     // expect(await screen.findByText(/Описание формы/i)).toBeInTheDocument();
//   });
// });