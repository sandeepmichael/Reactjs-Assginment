import React, {} from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import BookTicket from './BookTicket'
const SummaryPage = () => {


const {name, id} = useParams("")
    console.log(name, id)

    // useEffect(() => {
    //     const getsummary = async () => {
    //         const res =   await axios.get(`https://api.tvmaze.com/search/shows?q=${summary}`)
    //         console.log(res.data)
    //     }
    //     getsummary()
    // })

 
  
        
  return (
    <div>
        <Card style={{ width: '18rem', marginLeft:'30%', marginTop:'10%' }}>
      <Card.Body>
        <Card.Title>Show Name: {id}</Card.Title>
        <Card.Text>
         <strong>Summary</strong>: {name}
        </Card.Text>
      <BookTicket id={id}/>
       
      </Card.Body>
    </Card>
      {/* <p>Show name : {id}</p>
        <p>summary is : {name}</p> */}
    </div>
  )
}

export default SummaryPage