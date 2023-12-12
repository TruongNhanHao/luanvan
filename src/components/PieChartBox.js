import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Nhiệt Độ", value: 10.00, color: "#0088FE" },
  { name: "Độ PH", value: 5.00, color: "#00C49F" },
  { name: "Oxi Hòa Tan", value: 4.00, color: "#FFBB28" },
  { name: "Độ mặn", value: 7.00, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="h-full flex border-gray-700 shadow-md flex-col justify-between text-black border rounded-md">
      <h1 className="m-5 mx-4 text-2xl font-semibold ">Số lượng thiết bị theo từng cảm biến</h1>
      <div className="flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 flex justify-between text-lg">
        {data.map((item) => (
          <div className="flex flex-col items-center" key={item.name}>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="pl-1">{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;