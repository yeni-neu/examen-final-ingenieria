# examen-final

## Descripción

Una mini aplicación web que muestra de manera interactiva el **Nombre**, **DNI** y el texto **"Examen Final"** al hacer clic en un botón. Los datos aparecen uno por uno con un efecto visual.

## Tecnologías utilizadas

- HTML5
- CSS3 
- JavaScript 
- Docker + Nginx   

## Cómo ejecutar el proyecto con Docker

Construye la imagen del contenedor y ejecútala:

```bash
docker build -t examen-final .
docker run -d -p 8080:80 examen-final
```

## Verificar el contenedor en ejecución 

Para comprobar que el contenedor se está ejecutando correctamente:

```bash
docker ps
```

## Visualizar la aplicación 

Abre el navegador y accede a: http://localhost:8080