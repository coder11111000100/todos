// import {useEffect, useState} from 'react'
// import "./styles.css";

// interface Ticket {
//   // Цена в рублях
//   price: number
//   // Код авиакомпании (iata)
//   carrier: string
//   // Массив перелётов.
//   // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
//   segments: [
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета туда
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     },
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета обратно
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     }
//   ]
// }

// interface IinitialState {
//   tickets:Ticket[]
//   stop:boolean
// }

// const initialState:IinitialState = {
//   tickets:[],
//   stop:false
// }

// export default function App() {

//   const [state,setState] = useState(initialState)
//   // const [tokenAPI,setTokenAPI] = useState('')
//   //response : {tickets:[{},{},{}] ,stop:boolean}

//   useEffect(() => {
//     const getToken = async () => {
//       const response = await fetch("https://aviasales-test-api.kata.academy/search")
//       const {searchId} = await response.json()
//       return searchId
//     }
//     const fetchTickets = async (tokenAPI: string) => {
//       const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${tokenAPI}`)
//       const obj = await res.json()

//       if (obj.stop) return

//       setState((prev) => ({
//         tickets: prev.tickets.concat(obj.tickets),
//         stop: prev.stop = obj.stop
//       }))
//    }
//     getToken().then((searchID) => fetchTickets(searchID))
//   }, [])

//   // https://aviasales-test-api.kata.academy/search GET - {"searchId":"4niyd"}
//   //
//   // https://aviasales-test-api.kata.academy/tickets?searchId=${tokenAPI} GET - {tickets:[{},{},{}] ,stop:boolean}

//   const elements = state.tickets.map((el)=>{
//     return <li>{el.price}</li>
//   })

//   return (
//     <div className="App">
//       {elements}
//     </div>
//   );
// }

// /////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////
// import {useEffect, useState} from 'react'
// import "./styles.css";

// interface Ticket {
//   // Цена в рублях
//   price: number
//   // Код авиакомпании (iata)
//   carrier: string
//   // Массив перелётов.
//   // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
//   segments: [
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета туда
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     },
//     {
//       // Код города (iata)
//       origin: string
//       // Код города (iata)
//       destination: string
//       // Дата и время вылета обратно
//       date: string
//       // Массив кодов (iata) городов с пересадками
//       stops: string[]
//       // Общее время перелёта в минутах
//       duration: number
//     }
//   ]
// }

// interface IinitialState {
//   tickets:Ticket[]
//   stop:boolean
// }

// const initialState:IinitialState = {
//   tickets:[],
//   stop:false
// }

// const fetchTickets: (tokenAPI: string) => Promise<Ticket[]> = async (tokenAPI) => {
//   try {
//     const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${tokenAPI}`)
//     const ticketsData = await response.json()

//     if (!ticketsData.stop) {
//       const newTickets = await fetchTickets(tokenAPI)
//       return [...ticketsData.tickets, ...newTickets]
//     }

//     return ticketsData.tickets
//   } catch (err) {
//     return fetchTickets(tokenAPI)
//   }
// }

// export default function App() {

//   const [state,setState] = useState(initialState)
//   // const [tokenAPI,setTokenAPI] = useState('')
//   //response : {tickets:[{},{},{}] ,stop:boolean}

//   useEffect(() => {
//     const getToken = async () => {
//       const response = await fetch("https://aviasales-test-api.kata.academy/search")
//       const {searchId} = await response.json()
//       return searchId
//     }

//     getToken().then((searchID) => {
//       return fetchTickets(searchID)
//     }).then(tickets => {
//       console.log(tickets)
//       setState({
//         stop: true,
//         tickets: tickets || []
//       })
//     })
//   }, [])

//   // https://aviasales-test-api.kata.academy/search GET - {"searchId":"4niyd"}
//   //
//   // https://aviasales-test-api.kata.academy/tickets?searchId=${tokenAPI} GET - {tickets:[{},{},{}] ,stop:boolean}

//   // const elements = state.tickets.map((el)=>{
//   //   return <li>{el.price}</li>
//   // })

//   return (
//     <div className="App">
//       {state.tickets.length}
//     </div>
//   );
// }
