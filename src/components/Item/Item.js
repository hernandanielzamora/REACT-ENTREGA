import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import './item.css'

export const Item = ({ product }) => {
    return (
        <div className='col col-md-auto'>
            <CardGroup >
                <Card className='bg-dark card'>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='bg-dark'>
                        <Link to={`/detail/${product.id}`} className='link'>
                            <Card.Title className='main__minititle'>{product.name}</Card.Title>
                        </Link>
                    </Card.Body>
                    <ListGroup className="list-group-flush card-body">
                        <ListGroup.Item className='list-group-item bg-dark'>FLOAT: {product.float} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>ESTADO: {product.status} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>CATEGORÍA: {product.category} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>PRECIO: $ {product.price} </ListGroup.Item>
                    </ListGroup>
                </Card>

            </CardGroup>
        </div>
    );
}
