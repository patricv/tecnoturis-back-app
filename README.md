# Descripción
API encargada de crear usuarios en base de datos mongoDB y consultar un listado de hoteles, así como el detalle de cada hotel.

## Instrucciones
### Despliegue del proyecto
1. Clonar el repositorio.
2. Ejecutar npm install.
3. Ejecutar npm start. 
4. Se puede acceder al API en **localhost:80**.
5. Para las peticiones autenticadas usar el token obtenido en la peticion de login.

## Explicación del diseño de la API
### API segura: Autenticación
Autenticación con jwt. Ejecutar el endpoint login para obtener el token.

### Endpoints y métodos HTTP ###
Para la gestión de productos se han creado los siguientes Endpoints y métodos HTTP:

#### **/users**
- **users/register/ - POST:** 
 Realiza la creación de un usuario dentro de la aplicación.
  - Campos json a especificar en la petición:
    - username
    - password
  - Parámetros requeridos:
    - username
    - password
  - Propiedades recuperadas:
    - id
    - username
- **users/login/ - POST:** 
 Permite la obtención del token para poder acceder al resto de información.
  - Campos json a especificar en la petición:
    - username
    - password
  - Parámetros requeridos:
    - username
    - password
  - Propiedades recuperadas:
    - token
#### **/tecnoturist**
- **/tecnoturist/token - GET:** 
  Permite obtener el token del API de tecnoturist.
  - **JWT** obligatorio
  - Propiedades recuperadas:
    - token
- **/tecnoturist/hotels - GET:** 
  Recupera el listado de hoteles. 
  - **JWT** obligatorio
  - Campos json a especificar en la petición:
    - name
    - rating
  - Propiedades recuperadas:
    - id
    - type
    - name
    - created
    - modified
    - address1
    - airportCode
    - amenityMask
    - city
    - confidenceRating
    - countryCode
    - deepLink
    - highRate
    - hotelId
    - hotelInDestination
    - hotelRating
    - location
    - locationDescription
    - lowRate
    - metadata
    - postalCode
    - propertyCategory
    - proximityDistance
    - proximityUnit
    - rateCurrencyCode
    - shortDescription
    - stateProvinceCode
    - thumbNailUrl
    - tripAdvisorRating
    - tripAdvisorRatingUrl

- **/hotel/:id - GET:** 
  Devuelve la información de un hotel específico identificado por su ID.
  - **JWT** obligatorio
  - Parámetros requeridos:
    - id
  - Propiedades recuperadas:
    - id
    - type
    - name
    - created
    - modified
    - address1
    - airportCode
    - amenityMask
    - city
    - confidenceRating
    - countryCode
    - deepLink
    - highRate
    - hotelId
    - hotelInDestination
    - hotelRating
    - location
    - locationDescription
    - lowRate
    - metadata
    - postalCode
    - propertyCategory
    - proximityDistance
    - proximityUnit
    - rateCurrencyCode
    - shortDescription
    - stateProvinceCode
    - thumbNailUrl
    - tripAdvisorRating
    - tripAdvisorRatingUrl
