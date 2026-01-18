import { Bug, FileText, UserPlus, AlertCircle } from 'lucide-react';

const NotificationsPanel = () => {
  const notifications = [
    { text: 'You have a bug that needs...', time: '9:00 AM', icon: Bug },
    { text: 'New user registered', time: '8:45 AM', icon: UserPlus },
    { text: 'You have a bug that needs...', time: '8:30 AM', icon: Bug },
    { text: 'Andi Lane subscribed to you', time: '8:00 AM', icon: UserPlus },
  ];

  const activities = [
    { text: 'You have a bug that needs...', time: 'Just now', icon: Bug },
    { text: 'Released a new version', time: '30 mins ago', icon: FileText },
    { text: 'Submitted a bug', time: '1 hour ago', icon: Bug },
    { text: 'Modified A data in Page X', time: '2 hours ago', icon: FileText },
    { text: 'Deleted a page in Project X', time: '3 hours ago', icon: AlertCircle },
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: 'NC' },
    { name: 'Drew Cano', avatar: 'DC' },
    { name: 'Orlando Diggs', avatar: 'OD' },
    { name: 'Andi Lane', avatar: 'AL' },
    { name: 'Kate Morrison', avatar: 'KM' },
    { name: 'Koray Okumus', avatar: 'KO' },
  ];

  return (
    <aside className="notifications-panel">
      <section className="panel-section">
        <h3>Notifications</h3>
        <div className="notification-list">
          {notifications.map((notif, idx) => (
            <div key={idx} className="notification-item">
              <div className="notification-icon">
                <notif.icon size={16} />
              </div>
              <div className="notification-content">
                <p>{notif.text}</p>
                <span className="time">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-section">
        <h3>Activities</h3>
        <div className="activity-list">
          {activities.map((activity, idx) => (
            <div key={idx} className="activity-item">
              <div className="activity-avatar">
                <activity.icon size={14} />
              </div>
              <div className="activity-content">
                <p>{activity.text}</p>
                <span className="time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-section">
        <h3>Contacts</h3>
        <div className="contacts-list">
          {contacts.map((contact, idx) => (
            <div key={idx} className="contact-item">
              <div className="contact-avatar">{contact.avatar}</div>
              <span>{contact.name}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default NotificationsPanel;
