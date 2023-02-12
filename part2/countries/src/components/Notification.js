const Notification = ({ message }) => {
  if (!message) {
    return null;
  }
  const color = message.includes("not") ? "error" : "notification";
  return <div className={`notif ${color}`}>{message}</div>;
};

export default Notification;
