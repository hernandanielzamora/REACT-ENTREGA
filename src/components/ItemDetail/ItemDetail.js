import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './itemdetail.css'


export const ItemDetail = ({ product }) => {
    console.log(product[0].name);
    return (
        <div className='container-card'>
                <Card className='bg-dark card'>
                    <Card.Img variant="top" src={product[0].img} />
                    <Card.Body className='bg-dark'>
                        <Card.Title className='main__minititle'>{product[0].name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush card-body">
                        <ListGroup.Item className='list-group-item bg-dark'>FLOAT: {product[0].float} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>ESTADO: {product[0].status} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>CATEGORÍA: {product[0].category} </ListGroup.Item>
                        <ListGroup.Item className='list-group-item bg-dark'>PRECIO: $ {product[0].price} </ListGroup.Item>
                    </ListGroup>
                </Card>
        </div>
    )
}
