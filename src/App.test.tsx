import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./client/App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState } from "./client/features/form/formSlice";

const mockStore = configureMockStore([thunk]);

const initialStateMock = {
  form: initialState
};

const mock = {
  form: {
    schema: {
      title: "Тест формы",
      description: "Описание формы",
      type: "object",
      properties: {},
    },
    uiSchema: {},
    formKey: 111,
    formData: {},
  }
};

describe("App Form", () => {
  let store: any;

  it("renders app", async () => {
    store = mockStore(initialStateMock);
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(await screen.findByText(/Форма 1/i)).toBeInTheDocument();
    // screen.debug();
  });

  it("renders component form", async () => {
    store = mockStore(mock);
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(await screen.findByText(/Тест формы/i)).toBeInTheDocument();
    // screen.debug();
  });
});

