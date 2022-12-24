"use strict";

var _alumno$domicilio, _alumno$domicilio$ref;
/**
 * PARA INSTALAR BABEL POR MEDIO DE NPM:
 * npm install @babel/core @babel/cli @babel/preset-env -D
 */
var alumno = {
  nombre: 'Juan',
  domicilio: {
    calle: 'Colon',
    numero: 45,
    cp: 30110,
    referencias: [{
      id: 0,
      nombre: 'Cibeles'
    }, {
      id: 1,
      nombre: 'Nueva Italia'
    }]
  }
};
console.log((_alumno$domicilio = alumno.domicilio) === null || _alumno$domicilio === void 0 ? void 0 : (_alumno$domicilio$ref = _alumno$domicilio.referencias[10]) === null || _alumno$domicilio$ref === void 0 ? void 0 : _alumno$domicilio$ref.nombre);