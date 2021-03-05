import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"

import { Retrospective } from './component/retrospective'
import configureStore from "./store";

const store = configureStore()

const retrospective = (
  <React.StrictMode>
    <Provider store={store}>
      <Retrospective />
    </Provider>
  </React.StrictMode>
)
const here = document.querySelector('#here')

render(retrospective, here)
