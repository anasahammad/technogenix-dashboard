import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Online: 0, Store: 1 },
    { name: 'Feb', Online: 5, Store: 10 },
    { name: 'Mar', Online: 7, Store: 14 },
    { name: 'Apr', Online: 15, Store: 7 },
    { name: 'May', Online: 20, Store: 9 },
    { name: 'Jun', Online: 30, Store: 15 },
];

const yTicks = [0, 5, 10, 15, 20, 25, 30, 35];

const LineChartComponent = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ul className='flex uppercase ml-6 gap-4 text-xl'>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
                <li>Yearly</li>
            </ul>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#965DB6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#965DB6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorStore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="95%" stopColor="#FA9B42" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FA9B42" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 35]} ticks={yTicks} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} wrapperStyle={{ paddingBottom: 5, paddingRight: 0 }} />
                    <Area type="monotone" dataKey="Online" stroke="#965DB6" fillOpacity={1} fill="url(#colorOnline)" />
                    <Area type="monotone" dataKey="Store" stroke="#FA9B42" fillOpacity={1} fill="url(#colorStore)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;
