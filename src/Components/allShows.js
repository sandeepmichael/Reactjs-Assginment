import React, {useState, useEffect} from 'react'
import { Table, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const AllShows = () => {
    const [Data, setData] = useState([]);
   
    const getData =  async( req, res) => {
        try {
            const result = await axios.get('https://api.tvmaze.com/search/shows?q=all')
            console.log(result.data);
            setData(result.data);
        } 
      
        catch (error) {
             console.log(error)
        }
    }

    useEffect(() => {
      getData();

    }, [])


  return (
    <div>

        <Container>
            <Table striped bordered hover variant="dark">
            <thead>
                    <tr>
                        <th>Score</th>
                        <th>Show Name</th>
                        <th>Language</th>
                        <th>Action</th>
                       
                      
                    </tr>
                    </thead>
                    <tbody>
                        {Data && Data.map((item) => {
                            return (
                                <tr key={item.show.id}>
                                    <td>{item.score}</td>
                                    <td>{item.show.name}</td>
                                    <td>{item.show.language}</td>
                                    <td>
                                     <Link to={`/${item.show.summary.replace(/<[^>]*>/g, ' ')}/${item.show.name}`} className='btn btn-primary'>Click</Link>
                                     {/* <Button>Click</Button> */}
                                    </td>
                                </tr>
                            )
                        }) }
                    </tbody>

            </Table>
        </Container>

     
    </div>
  )
}

export default AllShows