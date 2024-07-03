export const productos = [
    {
      id: 1,
      nombre: "REMERA TRAIN ESSENTIALS FEELREADY",
      precio: 28500,
      categoria: "Remeras",
      stock: 5,
      descripcion:
        "Una remera que favorece el movimiento hecha parcialmente con materiales reciclados.",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80279178375d4c0ca75faf9e00483350_9366/Remera_de_Entrenamiento_Train_Essentials_Feelready_Verde_IC7452_01_laydown.jpg",
    },
    {
      id: 2,
      nombre: "BUZO CON CAPUCHA TERREX",
      precio: 130000,
      categoria: "Buzos",
      stock: 7,
      descripcion:
        "El buzo con capucha que usas cuando no estás en los senderos. Diseñado pensando en la naturaleza.",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ea885f202834f6e892dee4bd9bb152a_9366/Buzo_con_Capucha_Terrex_Negro_IB6565_01_laydown.jpg",
    },
    {
      id: 3,
      nombre: "PANTALON SAN LORENZO 2024",
      precio: 69900,
      categoria: "Pantalones",
      stock: 5,
      descripcion:
        "Comodidad absorbente de sudor. Los pantalones San Lorenzi DriFIT Park cuentan con tela abosrbente de sudor para mantenerte seco y cómodo durante el entrenamiento.",
      img: "https://nikearprod.vtexassets.com/arquivos/ids/770866-1200-1200?width=1200&height=1200&aspect=true",
    },
    {
      id: 4,
      nombre: "REMERA ESSENTIALS TRIFOLIO",
      precio: 33900,
      categoria: "Remeras",
      stock: 5,
      descripcion:
        "Una remera esencial para usar en todo momento y lugar 100% de algodón.",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/137047921862420d85f4af15009a7b30_9366/Remera_Essentials_Trifolio_Azul_IA4874_01_laydown.jpg",
    },
    {
      id: 5,
      nombre: "ORIGINALS COUNTRY",
      precio: 114900,
      categoria: "Zapatillas",
      stock: 5,
      descripcion:
        "Zapatillas inspiradas en el running que cobran vida en los detalles.",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29c619fb67fc4061bbe17bfa195d8ee1_9366/Zapatillas_Originals_Country_OG_Negro_ID2962_01_standard.jpg",
    },
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos)
        }, 2000)
    })
  }

  export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
      const productosFiltrados = productos.filter((prod) => prod.categoria === categoria)


      setTimeout(() => {
        resolve(productosFiltrados)
      }, 2000)
    })
  
  }

  export const getProductById = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
      setTimeout(() => {
        resolve(productoFiltrado)
      }, 2000)
    })
  }