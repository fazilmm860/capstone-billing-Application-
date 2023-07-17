import React from 'react'
import { Card } from 'antd';

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
                <Meta title={item.name} description={item.price} />
            </Card>
        </div >
    )
}

export default itemList;

