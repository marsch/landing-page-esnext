import 'babel-polyfill';
import React from 'react'
import ReactDom from 'react-dom'
import routes from './routes'
import UniversalRouter from 'universal-router'

const index = async () => {

  const router = new UniversalRouter(routes)

  router.resolve({
    pathname: '/'
  }).then(component => {
    ReactDom.render(component, document.getElementById('app'))
  })

}

index();

