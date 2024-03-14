import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../oc.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Mock order data
const mockOrders = [
  { id: 1, title: 'Order #1', deliveryDate: '2024-03-15' },
  { id: 2, title: 'Order #2', deliveryDate: '2024-03-20' },
  { id: 3, title: 'Order #3', deliveryDate: '2024-03-21' },
  { id: 4, title: 'Order #4', deliveryDate: '2024-03-23' },
  { id: 5, title: 'Order #5', deliveryDate: '2024-03-25' },
  { id: 6, title: 'Order #6', deliveryDate: '2024-03-27' },
  { id: 7, title: 'Order #7', deliveryDate: '2024-03-30' },
  { id: 8, title: 'Order #8', deliveryDate: '2024-03-31' },
  { id: 9, title: 'Order #9', deliveryDate: '2024-04-01' },
  { id: 10, title: 'Order #10', deliveryDate: '2024-04-10' }
];


const OrdersCalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const handleSelectSlot = slotInfo => {
    const selectedDate = slotInfo.start;
    setSelectedDate(selectedDate);

    // Filter orders for the selected date
    const filtered = mockOrders.filter(order => moment(order.deliveryDate).isSame(selectedDate, 'day'));
    setFilteredOrders(filtered);
  };

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={mockOrders.map(order => ({
            ...order,
            start: new Date(order.deliveryDate),
            end: new Date(order.deliveryDate)
          }))}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          selectable
          style={{ margin: '20px' }}
        />
      </div>
      {selectedDate && (
        <div>
          <h3>Orders Due on {moment(selectedDate).format('MMMM DD, YYYY')}</h3>
          <ul>
            {filteredOrders.map(order => (
              <li key={order.id}>{order.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendarView;
