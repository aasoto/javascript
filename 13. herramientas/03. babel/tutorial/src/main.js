/**
 * PARA INSTALAR BABEL POR MEDIO DE NPM:
 * npm install @babel/core @babel/cli @babel/preset-env -D
 */
const alumno = {
    nombre: 'Juan',
    domicilio: {
        calle: 'Colon',
        numero: 45,
        cp: 30110,
        referencias: [
            {
                id: 0,
                nombre: 'Cibeles'
            },
            {
                id: 1,
                nombre: 'Nueva Italia'
            }
        ]
    }
}

console.log(alumno.domicilio?.referencias[10]?.nombre);