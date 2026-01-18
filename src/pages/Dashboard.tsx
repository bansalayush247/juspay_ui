import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  const projectionsData = [
    { month: 'Jan', actual: 15, projected: 12 },
    { month: 'Feb', actual: 18, projected: 16 },
    { month: 'Mar', actual: 22, projected: 18 },
    { month: 'Apr', actual: 24, projected: 22 },
    { month: 'May', actual: 28, projected: 24 },
    { month: 'Jun', actual: 26, projected: 26 },
  ];

  const revenueData = [
    { date: 'Jan', current: 58000, previous: 45000 },
    { date: 'Feb', current: 42000, previous: 38000 },
    { date: 'Mar', current: 35000, previous: 32000 },
    { date: 'Apr', current: 28000, previous: 25000 },
    { date: 'May', current: 22000, previous: 18000 },
    { date: 'Jun', current: 15000, previous: 12000 },
  ];

  const topProducts = [
    { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
    { name: 'Marco Lightweight Shirt', price: 128.5, quantity: 37, amount: 4754.5 },
    { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
    { name: 'Lightweight Jacket', price: 20.0, quantity: 184, amount: 3680.0 },
    { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 5087.36 },
  ];

  const salesData = [
    { name: 'Direct', value: 300.56, color: '#4F46E5' },
    { name: 'Affiliate', value: 135.18, color: '#10B981' },
    { name: 'Sponsored', value: 154.02, color: '#F59E0B' },
    { name: 'E-mail', value: 48.96, color: '#EF4444' },
  ];

  const locationData = [
    { location: 'New York', value: '72K' },
    { location: 'San Francisco', value: '39K' },
    { location: 'Sydney', value: '25K' },
    { location: 'Singapore', value: '61K' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>eCommerce</h1>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Customers</h3>
          <div className="metric-value">
            <span className="value">5,781</span>
            <span className="change positive">
              <TrendingUp size={16} />
              +11.01%
            </span>
          </div>
        </div>

        <div className="metric-card">
          <h3>Orders</h3>
          <div className="metric-value">
            <span className="value">1,219</span>
            <span className="change negative">
              <TrendingDown size={16} />
              -0.03%
            </span>
          </div>
        </div>

        <div className="metric-card">
          <h3>Revenue</h3>
          <div className="metric-value">
            <span className="value">$695</span>
            <span className="change positive">
              <TrendingUp size={16} />
              +15.03%
            </span>
          </div>
        </div>

        <div className="metric-card">
          <h3>Growth</h3>
          <div className="metric-value">
            <span className="value">30.1%</span>
            <span className="change positive">
              <TrendingUp size={16} />
              +6.08%
            </span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card projections-chart">
          <h3>Projections vs Actuals</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectionsData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="actual" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="projected" fill="#A5B4FC" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="revenue-growth-container">
          <div className="chart-card">
            <h3>Revenue</h3>
            <div className="revenue-summary">
              <span className="current">Current Week $58,211</span>
              <span className="previous">Previous Week $68,768</span>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#A5B4FC"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Growth</h3>
            <div className="growth-value">30.1%</div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="table-card">
          <h3>Top Selling Products</h3>
          <table className="products-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, idx) => (
                <tr key={idx}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>${product.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sales-location-container">
          <div className="chart-card sales-chart">
            <h3>Total Sales</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="sales-legend">
              {salesData.map((item, idx) => (
                <div key={idx} className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                  <span className="legend-label">{item.name}</span>
                  <span className="legend-value">${item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card location-chart">
            <h3>Revenue by Location</h3>
            <div className="location-map">
              <div className="map-placeholder">🌍</div>
            </div>
            <div className="location-list">
              {locationData.map((loc, idx) => (
                <div key={idx} className="location-item">
                  <span className="location-name">{loc.location}</span>
                  <span className="location-value">{loc.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
