function datos_BBDD(BBDD,array){
    const response = db.collection(BBDD).get()
    response.then(snapshot => {
      snapshot.forEach((doc) => {
        const item = {
          id: doc.id,
          ...doc.data()
        }
        array.push(item)
      })
    }).catch( error => {
        console.log(error)
      })
}