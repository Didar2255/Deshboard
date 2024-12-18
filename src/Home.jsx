import React from 'react'
import Calander from './Calander';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs'
import { LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Members from './Members';

function Home() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h4>Task Summery</h4>
            </div>
            <div className='card-head'>
                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <BsFillArchiveFill className='card_icon' />
                        </div>
                        <div>
                            <h3>300</h3>
                        </div>
                        <div className='card-category'>
                            <h5>PRODUCTS</h5>
                            <p>Task</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <BsFillGrid3X3GapFill className='card_icon' />
                        </div>
                        <div>
                            <h3>12</h3>
                        </div>
                        <div className='card-category'>
                            <h5>CATAGORIES</h5>
                            <p>Task</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <div>
                            <h3>32</h3>
                        </div>
                        <div className='card-category'>
                            <h5>CUSTOMER</h5>
                            <p>Task</p>
                        </div>
                    </div>

                </div>
                <div className="Sample">
                    <div className="Sample__container">
                        <main className="Sample__container__content">
                            <Calander />
                        </main>
                    </div>
                </div>
            </div>
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <Members />
            </div>
        </main >
    )
}

export default Home