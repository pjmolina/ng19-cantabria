# App0 de ejempo

API:

- Componente `PlanetList`
- Componente `PlanetDetail`
- Servicio   `PlanetService`

Servicio para Planetas

```
GET https://swapi.dev/api/planets/?page=1
```

## CORS

navegador                         servidor
<http://localhost:4200/>            <https://api.mikasa.es>
                                  <http://localhost:5000>

  -> GET <https://swapi.dev/api/planets/?page=1>

Origin: proto + hostname + port

http -> 80
https -> 443

Contexto de seguridad
