import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarChartBox = (props) => {
  return (
    <div className="w-full h-full shadow-md py-6 border border-gray-700  rounded-md  lg:px-4 md:px-1 sm:px-12">
      <h1 className="text-2xl  mb-4 font-medium text-black">{props.title}</h1>
      <div>
        <ResponsiveContainer  height={200}>
          <BarChart data={props.chartData} barSize={40} margin={{
            right: 20,
            left: 10,
          }}>
          <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 20 }} tick={{ fill: 'black' }}/>
          <YAxis tick={{ fill: 'black' }}/>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px", color: "black"}}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;