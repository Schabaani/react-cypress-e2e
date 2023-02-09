// put CT-only commands here

import './commands'

import {mount} from 'cypress/react18'
import '../../src/styles.scss'

Cypress.Commands.add('mount', mount)
