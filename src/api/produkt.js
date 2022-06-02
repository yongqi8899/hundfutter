export const getProdukt = ()=> {
    return [
        {
          title: "Yummy Beef",
          price: "5.00",
          id: 1,
          card: require("@/assets/img/Produkte/1-1.jpg"),
          imgs: [
            require("@/assets/img/Produkte/1-1.jpg"),
            require("@/assets/img/Produkte/1-2.jpg"),
            require("@/assets/img/Produkte/1-3.jpg"),
          ],
          count:1,
          text: "Ein schmackhaftes und duftendes Alleinfuttermittel für anspruchsvolle ausgewachsene Hunde. Mit frischem Rindfleisch als Hauptzutat ist dieses Nassfutter reich an Eiweiß, Fettsäuren, Mineralstoffen und Vitaminen. Darüber hinaus enthält die Rezeptur Süßkartoffeln, schwarze Johannisbeeren, Yucca und Leinsamenöl, um den gesamten Ernährungsbedarf Ihres Hundes vollständig zu decken. Kann allein oder mit Trockenfutter serviert werden.",
        },
        {
          title: "Chicken & Lamb Feast",
          price: "6.00",
          id: 2,
          card: require("@/assets/img/Produkte/2-1.jpg"),
          imgs: [
            require("@/assets/img/Produkte/2-1.jpg"),
            require("@/assets/img/Produkte/2-2.jpg"),
            require("@/assets/img/Produkte/2-3.jpg"),
          ],
          count:1,
          text: "Ein schmackhaftes und duftendes Alleinfuttermittel für anspruchsvolle ausgewachsene Hunde. Mit frischem Rindfleisch als Hauptzutat ist dieses Nassfutter reich an Eiweiß, Fettsäuren, Mineralstoffen und Vitaminen. Darüber hinaus enthält die Rezeptur Süßkartoffeln, schwarze Johannisbeeren, Yucca und Leinsamenöl, um den gesamten Ernährungsbedarf Ihres Hundes vollständig zu decken. Kann allein oder mit Trockenfutter serviert werden.",
        },
        {
          title: "Grass-fed Ostrich",
          price: "5.00",
          id: 3,
          card: require("@/assets/img/Produkte/3-1.jpg"),
          imgs: [
            require("@/assets/img/Produkte/3-1.jpg"),
            require("@/assets/img/Produkte/3-2.jpg"),
            require("@/assets/img/Produkte/3-3.jpg"),
          ],
          count:1,
          text: "Ein schmackhaftes und duftendes Alleinfuttermittel für anspruchsvolle ausgewachsene Hunde. Mit frischem Rindfleisch als Hauptzutat ist dieses Nassfutter reich an Eiweiß, Fettsäuren, Mineralstoffen und Vitaminen. Darüber hinaus enthält die Rezeptur Süßkartoffeln, schwarze Johannisbeeren, Yucca und Leinsamenöl, um den gesamten Ernährungsbedarf Ihres Hundes vollständig zu decken. Kann allein oder mit Trockenfutter serviert werden.",
        },
        {
          title: "Chicken & Lamb Feast",
          price: "5.00",
          id: 4,
          card: require("@/assets/img/Produkte/4-1.jpg"),
          imgs: [
            require("@/assets/img/Produkte/4-1.jpg"),
            require("@/assets/img/Produkte/4-2.jpg"),
            require("@/assets/img/Produkte/4-3.jpg"),
          ],
          count:1,
          text: "Ein schmackhaftes und duftendes Alleinfuttermittel für anspruchsvolle ausgewachsene Hunde. Mit frischem Rindfleisch als Hauptzutat ist dieses Nassfutter reich an Eiweiß, Fettsäuren, Mineralstoffen und Vitaminen. Darüber hinaus enthält die Rezeptur Süßkartoffeln, schwarze Johannisbeeren, Yucca und Leinsamenöl, um den gesamten Ernährungsbedarf Ihres Hundes vollständig zu decken. Kann allein oder mit Trockenfutter serviert werden.",
        },
      ]
}

export const getProduktById = (id)=> {
  let arr =  getProdukt();
  const prod =arr.find(prod=>{
    return prod.id == id
})

  return prod;
} 


export const searchProdukt = (data)=> {
  let arr =  getProdukt();
  const prod =arr.find(prod=>{
    return prod.id == data.id
})
  return prod;
} 

window.shopcart = [];
export const getShopcart = ()=> {  
  return window.shopcart;
}

export const  getShopcartGoodsById = id=> {
  return window.shopcart.find( prod=> {
    return prod.id == id;
  })
}

export const addShopcart  = (prod)=>{  
  window.shopcart.push(prod)
}
