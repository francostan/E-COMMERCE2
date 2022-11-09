const fakeData = [
  {
    nombre: "Rutini",
    marca: "Rutini",
    cosecha: 2020,
    variedad: "Malbec",
    tipo: "Vino Tinto",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano.",
    enologo: "Lic. Mariano Di Paola",
    guarda: 4,
    precio: 1818,
    descripcion:
      "De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto.",
    maridaje:
      "Tabla de quesos duros (Parmesano, Sardo), carnes vacunas grilladas: bife de chorizo y pastas rellenas con salsas a base de carnes.",
    bodega: "Rutini Wines",
    stock: 6,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000007000/7911.jpg",
  },

  {
    nombre: "Rutini",
    variedad: "Pinot Noir",
    cosecha: 2020,
    crianza: "12 meses el 30% del corte en roble francés.",
    marca: "Rutini",
    guarda: 5,
    enologo: "Lic. Mariano Di Paola",
    precio: 2347,
    descripcion:
      "De color rojo rubí con matices rojizos. En nariz aparecen aromas frutados de frambuesas, ciruelas y de violetas, que con la presencia de la madera ofrecen un elegante aroma. La suavidad, finura y delicadeza de sus taninos le otorgan una textura sedosa y también compleja.",
    maridaje:
      "Quesos suaves como Brie o Camembert junto a frutos secos. Risottos y platos que contengan hongos y setas ( Champiñón, Portobello, Shiitake.) Carnes blancas como pato, pollo o pescados grasos grillados: atún.",
    bodega: "Rutini Wines",
    stock: 3,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000030000/30571.jpg",
  },
  {
    nombre: "Fond de Cave",
    variedad: "Malbec",
    cosecha: 2021,
    crianza: "12 meses en Roble francés y americano",
    marca: "Trapiche",
    guarda: 5,
    enologo: "",
    precio: 1390,
    descripcion:
      "De color rojo púrpura intenso con matices rubí, este Malbec expresa aromas a mermelada de frutas negras y liqueur, con un toque elegante de humo, vainilla y chocolate. En boca tiene un gusto seco, con un final largo y aterciopelado.",
    maridaje: "",
    bodega: "Trapiche",
    stock: 5,
    images:
      "https://http2.mlstatic.com/D_NQ_NP_877192-MLA49375527365_032022-O.webp",
  },

  {
    nombre: "Trapiche Reserva",
    variedad: "Malbec",
    cosecha: 2021,
    crianza: "12 meses en Roble francés y americano",
    marca: "Trapiche",
    guarda: 5,
    enologo: "",
    precio: 1491,
    descripcion:
      "	De un intenso color rojo violáceo, este Malbec expresa aromas dulces a moras y ciruelas, percibiéndose notas ahumadas con una elegante presencia de vainilla. En boca se percibe su textura aterciopelada y un final amable y persistente.",
    maridaje: "",
    bodega: "Trapiche",
    stock: 30,
    images:
      "https://http2.mlstatic.com/D_NQ_NP_888300-MLA50146737636_052022-O.webp",
  },

  {
    nombre: "Rutini",
    variedad: "Sauvignon Blanc",
    cosecha: 2021,
    crianza: "3 meses el 10% del corte en roble francés.",
    marca: "Rutini",
    guarda: 3,
    enologo: "Lic. Mariano Di Paola",
    precio: 2950,
    descripcion:
      "Amarillo brillante, con reflejos verdosos. Intensamente aromático, de carácter cítrico que recuerda al pomelo rosado y algunos toques herbáceos. Frutado y fresco en boca, la fugaz nota robliza debida a su breve crianza en madera lo convierte en un blanco equilibrado y singular.",
    maridaje:
      "Ensaladas verdes, mariscos (vieiras, langostinos, camarones) palta, sopas marineras, pescados de mar (lenguado, brótola) y de laguna (pejerrey), salmón al vapor con salsa de cítricos, tortillas de papa, quesos de cabra, pastas con frutos de mar.",
    bodega: "Rutini Wines",
    stock: 20,
    images:
      "https://http2.mlstatic.com/D_NQ_NP_988167-MLA48026464753_102021-O.webp",
  },
  {
    nombre: "Escorihuela",
    variedad: "Malbec",
    cosecha: 2015,
    enologo: "",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano.",
    marca: "Escorihuela Gascón",
    guarda: 4,
    precio: 2910,
    descripcion:
      "Rojo rubí oscuro, con densos tonos púrpura. La nariz es intensa y concentrada, con aromas a mermelada de cereza negra y notas de tabaco y vainilla. La sensación en boca es suave e incitante, con notas a fruta madura (cereza, ciruela) y un final agradable y persistente.",
    maridaje:
      "Carnes rojas braseadas y aromatizadas con hierbas y otras especias, comida india y tailandesa, carnes de caza (codorniz, conejo en salsa de mostaza), carré de cerdo con batatas asadas o una tabla de fiambres.",
    bodega: "Rutini Wines",
    stock: 32,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000006000/6328.jpg",
  },
  {
    nombre: "Artesano",
    variedad: "Cabernet Franc Organico",
    cosecha: 2018,
    enologo: "",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano.",
    marca: "Grupo Avinea",
    guarda: 3,
    precio: 3439,
    stock: 14,
    descripcion:
      "Es un vino de color morado intenso con aromas concentrados a ciruelas cerezas negras y notas de violeta. Redondo en boca con taninos suaves y final largo.",
    maridaje: "",
    bodega: "Grupo Avinea",
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000018000/18679.jpg",
  },

  {
    nombre: "DV Catena",
    variedad: "Cabernet",
    cosecha: 2018,
    enologo: "",
    crianza: "18 meses en roble francés.",
    marca: "Catena Zapata",
    guarda: 5,
    precio: 3120,
    descripcion:
      "Las uvas poseen un sabor intenso a cassis y una excelente estructura. Esta mayor altitud y viñedos con climas más frescos otorgan aromas a cerezas negras maduras, con un leve toque mineral y notas de orègano y tomillo.",
    maridaje: "",
    bodega: "Catena Zapata",
    stock: 10,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000005000/5530.jpg",
  },

  {
    nombre: "Malamado",
    variedad: "Malbec",
    cosecha: 2018,
    enologo: "",
    crianza: "",
    marca: "Catena Zapata",
    guarda: 2,
    precio: 3025,
    descripcion:
      "Malamado Malbec fue el primer vino fortificado de la Argentina. Es un vino tinto dulce, 100% Malbec.",
    maridaje: "",
    bodega: "Familia Zuccardi",
    stock: 12,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000007000/7898.jpg",
  },
  {
    nombre: "Estate",
    precio: 2299,
    variedad: "Malbec",
    crianza: "",
    cosecha: 2020,
    guarda: 4,
    marca: "Humberto Canale",
    descripcion:
      "Un vino de gran cuerpo y estructura, color rojo rubi intenso, con sorprendentes aromas a frutas rojas, eucaliptus, especias y pimientos negros. Luego de un año en botella se vuelve untuoso, intenso, concentrado.",
    tipo: "Vino Tinto",
    bodega: "Humberto Canale",
    stock: 15,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000007000/7906.jpg",
  },

  {
    nombre: "Terrazas Reserva",
    variedad: "Cabernet Sauvignon",
    cosecha: 2015,
    enologo: "",
    crianza: "12 meses en roble francés.",
    marca: "Terrazas",
    guarda: 3,
    precio: 2209,
    descripcion: "Vino tinto. Cabernet Sauvignon",
    maridaje: "",
    bodega: "Terrazas",
    stock: 14,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000010000/10709.jpg",
  },
  {
    nombre: "Zuccardi Q",
    variedad: "Malbec",
    cosecha: 2020,
    precio: 3579,
    crianza: "12 meses en roble francés.",
    marca: "Zuccardi",
    guarda: 3,
    descripcion:
      "Intenso aroma de rojos rojos y negros maduros, matices de especias, violetas y chocolate.",
    tipo: "Vino Tinto",
    bodega: "Zuccardi",
    stock: 16,
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000022000/22667.jpg",
  },
  {
    nombre: "Trumpeter",
    variedad: "Malbec",
    precio: 1370,
    marca: "Trumpeter",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano",
    guarda: 5,
    descripcion:
      "De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto.",
    tipo: "Vino Tinto",
    bodega: "Rutini Wines",
    stock: 18,
    maridaje:
      "Tabla de quesos duros (Parmesano, Sardo), carnes vacunas grilladas: bife de chorizo y pastas rellenas con salsas a base de carnes.",
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000007000/7914.jpg",
  },
  {
    nombre: "Medalla",
    variedad: "Malbec",
    precio: 3059,
    marca: "Trapiche",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano",
    guarda: 4,
    descripcion:
      "De un intenso color púrura con tonalidades violaceas, expresa aromas concentrados de frutos rojos, ciruelas, cerezas y pasas de uvas. Se destacan notas de vainilla, coco y pan tostado gracias a su crianza en roble.Se destacan sus sabores a frutas maduras, con notas especiadas, con un agradable y persistente final.",
    tipo: "Vino Tinto",
    bodega: "Trapiche",
    stock: 22,
    maridaje: "",
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000007000/7928.jpg",
  },
  {
    nombre: "Puro",
    variedad: "Cabernet Sauvignon",
    precio: 1635,
    marca: "Trapiche",
    crianza: "12 meses en roble americano",
    guarda: 3,
    descripcion:
      "De un color rojo profundo con tintes violáceoEste sabroso y perfumado vino despliega una intensa concentración de frutas y aromas de grosellas negras, frutillas y notas de pimiento rojo asado. En boca se siente elegante, untuso y complejo.",
    tipo: "Vino Tinto",
    bodega: "Trapiche",
    stock: 25,
    maridaje: "",
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000011000/11071.jpg",
  },
  {
    nombre: "Garbo",
    variedad: "Cabernet Franc",
    precio: 1035,
    marca: "Grupo Avinea",
    crianza: "100% en roble americano",
    guarda: 5,
    descripcion:
      "De un  gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto.",
    tipo: "Vino Tinto",
    bodega: "Grupo Avinea",
    stock: 24,
    maridaje: "",
    images:
      "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000018000/18680.jpg",
  },
  {
    nombre: "Trinitá",
    variedad: "Blend",
    precio: 6390,
    marca: "Piattelli",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano",
    guarda: 4,
    descripcion:
      "Un vino complejo y elegante con un profundo tono rubí, Trinitá seduce los sentidos con un aromático ramo de café y especias, se despliega en el paladar con dulzura y un toque de chocolate, y persiste con un tanino moderado y un final que recuerda a ciruelas y roble.",
    tipo: "Vino Tinto",
    bodega: "Piattelli",
    stock: 26,
    maridaje: "",
    images:
      "https://musters.com.ar/wp-content/uploads/2022/01/Piattelli_Grand_Reserve_Trinita.jpg",
  },
  {
    nombre: "De Sangre",
    variedad: "Malbec",
    precio: 4149,
    marca: "Luigi Bosca",
    crianza:
      "12 meses. Terminada la crianza, se realiza el blend final, se filtra y se embotella.",
    guarda: 5,
    descripcion:
      "Es un tinto rojo granate brillante con aromas muy atractivos a fruta negra, pimienta negra y notas de té en armonía, equilibrados con leves tonos ahumados de la crianza en roble. En boca se lo percibe compacto, maduro, con taninos incipientes y textura redonda. Llena la boca con fruta que denota muy buena definición de terroir. Gran carácter y acidez, y final largo, complejo y profundo.",
    tipo: "Vino Tinto",
    bodega: "Luigi Bosca",
    stock: 28,
    maridaje: "",
    images:
      "https://vinotecaligier.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/e/be71294_1.jpg",
  },
  {
    nombre: "Altamisque",
    variedad: "Malbec",
    precio: 4750,
    marca: "Altamisque",
    crianza:
      "100% en barricas francesas nuevas (Taransaud-Demptos) durante14 meses.",
    guarda: 3,
    descripcion:
      "A la vista presenta un color rojo intenso con reflejos púrpuras y destellos violaceos. De aromas a violetas típicas de la variedad, algo de frutas negras maduras y frutas secas con dejos sutiles de café y Tabaco aportados por el roble. Al degustarlo se aprecia concentrado, untuoso y elegante. Mermelada de moras y ciruelas, taninos marcados que confieren estructura.",
    tipo: "Vino Tinto",
    bodega: "Altamisque",
    stock: 20,
    maridaje: "",
    images:
      "https://vinotecaligier.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/e/be03410_base_1.jpg",
  },
  {
    nombre: "Clos De Los Siete",
    variedad: "Malbec",
    precio: 2780,
    marca: "Michael Rolland",
    crianza:
      "7 meses el 50% del corte en roble francés y 50% en roble americano",
    guarda: 5,
    descripcion:
      "Un blend de un rojo intenso con aromas a frutos rojos maduros y especias. Posee taninos maduros que dan una sensación de redondez y una amplitud y final perdurables.",
    tipo: "Vino Tinto",
    bodega: "Michael Rolland",
    stock: 12,
    maridaje: "",
    images:
      "https://vinotecaligier.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/e/be70597.jpg",
  },
];

module.exports = { fakeData };
