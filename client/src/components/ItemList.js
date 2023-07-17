import React from 'react'
import { Button, Card } from 'antd';


const itemList = ({ item }) => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                    height: 300,
                    margin: 10
                }}
                cover={<img alt={item.name} src={item.image} style={{ height: 200 }} />}

            >
                <Meta title={item.name}  />
                <div className="item-button">
                    <Button>Add to cart</Button>
                </div>
            </Card>
        </div >
    )
}

export default itemList;

