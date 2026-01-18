import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Plus, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface Order {
  id: string;
  user: { name: string; avatar: string };
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const orders: Order[] = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
    },
    {
      id: '#CM9806',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      id: '#CM9807',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      id: '#CM9808',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
    },
    {
      id: '#CM9809',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
    },
    {
      id: '#CM9810',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'status-complete';
      case 'In Progress':
        return 'status-progress';
      case 'Pending':
        return 'status-pending';
      case 'Approved':
        return 'status-approved';
      case 'Rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((order) => order.id));
    }
  };

  const toggleSelectOrder = (orderId: string) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]
    );
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Order List</h1>
      </div>

      <div className="orders-toolbar">
        <div className="toolbar-left">
          <button className="btn-icon" title="Add new">
            <Plus size={18} />
          </button>
          <button className="btn-icon" title="Filter">
            <SlidersHorizontal size={18} />
          </button>
          <button className="btn-icon" title="Sort">
            <ArrowUpDown size={18} />
          </button>
        </div>
        <div className="toolbar-right">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => toggleSelectOrder(order.id)}
                  />
                </td>
                <td className="order-id">{order.id}</td>
                <td>
                  <div className="user-cell">
                    <div className="avatar">{order.user.avatar}</div>
                    <span>{order.user.name}</span>
                  </div>
                </td>
                <td>{order.project}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-btn" disabled={currentPage === 1}>
          <ChevronLeft size={18} />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="pagination-btn">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default OrdersList;
