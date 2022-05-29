import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"
import Add from './Add';
function Home() {
    const navigate = useNavigate()
    const { id } = useParams()
    const list = () => {
        navigate('/MoviesList')
    }
    const Add = () => {
        navigate('/Add')
    }
    return (
        <Card>
            <div>Home</div>

            <Button onClick={list}>Go to Movies List</Button>
            <Button onClick={Add}>Add</Button>
        </Card>
    )
}

export default Home