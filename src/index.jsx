import React from 'react'
import { render } from 'react-dom'
import { Retrospective } from './component/retrospective'

const retrospective = <Retrospective />
const here = document.querySelector('#here')

render(retrospective, here)
