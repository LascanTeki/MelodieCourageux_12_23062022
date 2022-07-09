

  export async function api() {

    let response = await fetch('http://localhost:3000/user/12')
    response= await response.json()
    let dure = await fetch('http://localhost:3000/user/12/average-sessions')
    dure = await dure.json()
    let Activ = await fetch('http://localhost:3000/user/12/activity')
    Activ = await Activ.json()
    let Int = await fetch('http://localhost:3000/user/12/performance')
    Int= await Int.json()
      return([response, dure, Activ,Int])
  }

