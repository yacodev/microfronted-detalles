
# ApuestaTotal - challenge - Microfronted Detalles

En este repositorio se utiliza el stack de React + TypeScript + Vite para desarrollar el reto frontend de la empresa Apuestatotal.
Herramientas que se utilizaron:
- Microfrontends
- Tailwind
- Zustand para el manejo de estado y la persistencia.
- axios para obtener los datos de la API.
- react-router-dom para la navegación


## Explicación del Microfrontend

1. Este microfrontend tiene por objetivo mostrar los detalles de un pokemon seleccionado en el Host, y que fue almacenado en store mediante zustand 

## Estructura del repositorio

This repository has the following  organization:

    ├── src                     # React - app
        ├── components
            ├── BasicInformation              # Component
            ├── Physical                      # Component
            ├── Skills                        # Component
        ├── Page
            ├── PokemonDetails                  # Page show pokemon details
        ├── interfaces
            ├── pokemon                  
            ├── theme                  
            
    └── README.md                   # README

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Ejecutar:

```bash
npm install
```

3.  completar las variables de entorno `env.template` con los datos de los otros 2 microfrontend
```
VITE_HOST_URL=

```
4. Ejecutar

```bash
npm run dev
```

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://yacodev.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).

## vista

![vista ](https://github.com/yacodev/test/blob/1c56988130d4a2fd777d107ec6f7a355de9c5f66/src/assets/details.png)