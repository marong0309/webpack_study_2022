// ES6 
import _ from 'lodash';
// ES6
// var _ = require('lodash');
// var path = require('path');

function component() {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());