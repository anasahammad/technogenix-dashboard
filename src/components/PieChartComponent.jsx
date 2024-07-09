import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { FaGraduationCap } from 'react-icons/fa'; // Importing a react icon from react-icons
import useTheme from '../hooks/useTheme';

const data = [
  { name: 'Facebook', value: 33, color: '#9B52E1' },
  { name: 'Youtube', value: 50, color: '#EB1A1A' },
  { name: 'Direct Search', value: 12, color: '#0063C1' },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
    </g>
  );
};

const CustomActiveShapePieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {theme} = useTheme()
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ position: 'relative' }}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip/>
          <Legend verticalAlign="bottom" align="left" iconType="circle" iconSize={10} wrapperStyle={{ paddingTop: 5 }} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{
        position: 'absolute', 
        top: '43%', 
        left: '50%',
        border: '1px solid',
        padding: "16px",
        background: theme === 'dark' ? 'gray' : '#60CDF6',
        borderRadius: "100%",
        transform: 'translate(-50%, -50%)', 
        fontSize: '3rem', 
        // Color for the React icon
      }}>
      <FaGraduationCap className="text-white"/>
      </div>
    </div>
  );
};

export default CustomActiveShapePieChart;
