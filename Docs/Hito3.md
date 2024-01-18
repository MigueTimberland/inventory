# Hito 3 : Creación de un contenedor para pruebas

## Elección de un contenedor base

Se usara Laragon para implementar el servicio de PHP, Apache y MySql. En esta fase del proyecto, se ha seleccionado un contenedor base para la aplicación en PHP y PgAdmin.

Se empleará una imagen de PHP que ofrece un entorno de ejecución PHP estandarizado y reproducible. Esto resulta fundamental para garantizar que la aplicación funcione de manera consistente en diversos entornos, ya sea durante el desarrollo, las pruebas o la producción. Además, se podrá aprovechar la integración con otros servicios de Docker, como bases de datos, servidores web y sistemas de orquestación de contenedores.

Se usara la imagen oficial de PHP 7.4.33 para establecer un entorno de ejecución estándar y reproducible. En términos generales, esta imagen de PHP 7.4.33 ya incluye configuraciones predeterminadas con las opciones más comunes y recomendadas para un entorno de ejecución PHP.

Se procederá con la instalación de estas imágenes para poner en marcha los componentes mencionados.

Realizar la instalación de dichas imagenes

   ![Hito3_1](https://github.com/MigueTimberland/inventory/blob/master/Docs/DockerFile.png)

   ![Hito3_2](https://github.com/MigueTimberland/inventory/blob/master/Docs/dockerimagen.png)

   ![Hito3_3](https://github.com/MigueTimberland/inventory/blob/master/Docs/imagenphp.png)

 Aqui instalamos composer

   ![Hito3_4](https://github.com/MigueTimberland/inventory/blob/master/Docs/run_composer.png)  

Aqui comprobaremos que las imagenes se encuentran dentro del contenedor

   ![Hito3_5](https://github.com/MigueTimberland/inventory/blob/master/Docs/imagestotal.png)


## Configuración del contenedor

### Archivo Dockerfile

Creamos el archivo Dockerfile para realizar la configuración de PHP

 - Construiremos nuestro contenedor base a partir de la imagen oficial de PHP 8.2.
 
![Hito3_6](img/Hito3_6.png)

 - Definimos el usuario root debido a que necesitaremos permisos de administrador para instalar composer.
 
![Hito3_7](img/Hito3_7.png)

 - Establecemos el directorio dentro del contenedor en /var/www/html.
 
![Hito3_8](img/Hito3_8.png)

 - Copiamos los archivos de configuración de apacher de la carpeta base en las carpetas del contenedor
 
![Hito3_9](img/Hito3_9.png)

 - Construiremos contenedor a partir de la imagen postgres
 
![Hito3_10](img/Hito3_10.png)

 - Definición de variables de entorno:
 
![Hito3_11](img/Hito3_11.png)

Asi quedaria el archivo [Dockerfile](https://github.com/gabrielacampoverde/CC_Gabriela/blob/main/ERP-Inventario/Dockerfile)

![Hito3_0](img/Hito3_0.png)

### Archivo docker-compose.yml

Luego pasaremos a la configuración de [docker-compose.yml](https://github.com/gabrielacampoverde/CC_Gabriela/blob/main/ERP-Inventario/docker-compose.yml)

- El servicio php-apache utiliza la imagen oficial de PHP con Apache y expone el puerto 80.

![Hito3_12](img/Hito3_12.png)

- El servicio pgadmin utiliza la imagen oficial de Postgres, se ha configurado con un usuario y contraseña.

![Hito3_14](img/Hito3_14.png)

- El servicio pgadmin utiliza la imagen oficial de pgAdmin4, se ha configurado con un usuario y contraseña.

![Hito3_15](img/Hito3_15.png)

## Ejecución del contenedor

Para construir la imagen del contenedor se ejecuta el siguiente comando:

![Hito3_21](img/Hito3_21.png)

Dando el siguiente resultado:

![Hito3_22](img/Hito3_22.png)

Como siguienre paso inicializamos los servicios definidos en el archivo docker-compose.yml, con el siguiente comando:

![Hito3_16](img/Hito3_16.png)

![Hito3_19](img/Hito3_19.png)

Primero comprobaremos la ejecución de postgres y psAdmin, así que en un navegador probaremos el localhost:8081, en el cual pondremos el usuario y contraseña que colocamos en el archivo docker-compose.yml, como a continuación se ven en las imagenes:

![Hito3_17](img/Hito3_17.png)

![Hito3_18](img/Hito3_18.png)

Luego comprobaremos la ejecución de PHP

![Hito3_20](img/Hito3_20.png)

## Docker Hub

Iniciamos creando una imagen del proyecto.

![Hito3_23](img/Hito3_23.png)

LUego subimos la imagen a docker hub con el siguiente comando:

![Hito3_24](img/Hito3_24.png)

De la misma forma podemos visualizar el resultado en el navegador

![Hito3_25](img/Hito3_25.png)

## Uso de registros alternativos y públicos de contenedores 

 - **Primero:** Creamos un archivo en el área de trabajo, el cual se encontrara en la ruta [.github/workflows/update-imagen.yml](github/workflows/update-imagen.yml)

 - **Segundo:** Una vez que se creo y configuro el archivo YAML, confirma y empuja los cambios a tu repositorio en GitHub.

 - **Tercero:** Luego revisar la sección "Actions" en el repositorio en GitHub para ver los resultados de la ejecución de las acciones programadas. 

![Hito3_26](img/Hito3_26.png)














