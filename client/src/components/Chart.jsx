import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  {
    name: '< 1 mon',
    ave: 5,
    people: 40,
    tokens: 200
  },
  {
    name: '2-5 mon',
    ave: 3,
    people: 40,
    tokens: 120
  },
  {
    name: '6-8 mon',
    ave: 2,
    people: 50,
    tokens: 100
  },
  {
    name: '9-12 mon',
    ave: 1,
    people: 100,
    tokens: 100
  },
  {
    name: '> 12 mon',
    ave: 1,
    people: 150,
    tokens: 150
  }
]

const BarChart = () => {
  return (
        <ComposedChart
          layout="vertical"
          width={300}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 0
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area type="monotone" name="Tokens/Stake" dataKey="people" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="tokens" name="Tokens in pool" barSize={25} fill="#413ea0" />
          <Line type="monotone" name="No. of people" dataKey="ave" stroke="#ff7300" />
        </ComposedChart>
  )
}

export default BarChart
