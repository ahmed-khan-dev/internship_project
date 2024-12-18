import React from 'react'

function Dashb() {
    return (<div className="p-4"> <h1 className="text-4xl font-bold mb-4">Dashboard</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <Card title="Card 1" description="Some content here." /> <Card title="Card 2" description="Some content here." /> <Card title="Card 3" description="Some content here." /> </div> </div>);
} function Card({ title, description }) {
    return (<div className="p-4 bg-white rounded shadow"> <h2 className="text-xl font-semibold mb-2">{title}</h2> <p>{description}</p> </div>);
}

export default Dashb