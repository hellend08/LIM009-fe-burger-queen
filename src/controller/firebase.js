// COLECCION PRODUCTOS 

export const dataProducts = () => {
    return firebase.firestore().collection("products").add({
        desayuno: [
            {
                cafe_americano: "5",
                café_con_leche: "7",
                sandwich_de_jamon_y_queso: "10",
                jugo_de_frutas_natural: "7"
            }],
        almuerzo: [
            {
                hamburguesas: [{
                    simple: "10",
                    doble: "15"
                }],
                acompañamientos: [{
                    Papas_fritas: "5",
                    Aros_de_cebolla: "5"
                }],
                bebidas: [{
                    Agua_500ml: "5",
                    Agua_750ml: "7",
                    gaseosa_500ml: "7",
                    gaseosa_750ml: "10"
                }]
            }]
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export const getProducts = () => {
    
}