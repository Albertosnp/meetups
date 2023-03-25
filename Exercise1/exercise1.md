El mayor problema que veo es de escalabilidad, ya que si se quieren añadir nuevos servicios hay que seguir aumentando el metodo `getTotal` con comprobaciones de si es un sevicio u otro.

Solucion propuesta:

- En cada servicio agregar un metodo que retorne el precio del contenido multimedia.
- Ahora en el metodo `getTotal` ya no se se comprueba de que tipo es, directamente se llama al metodo getPrice que retorna su precio.
- Por último, se ha añadido a la clase padre Service el metodo `getMultimediaContent`  que devuelve el contenido y comprueba que sea una instancia de `PremiumContent`, si es asi accedemos a la propiedad `additionalFee` (Se debería crear un metodo para acceder a esta propiedad). 

En general, este cambio hace más fácil escalar el código en el futuro añadiendo nuevos servicios o tipos de contenido.

