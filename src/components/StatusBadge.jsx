

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Process: 'bg-pink-500 text-white',
    Open: 'bg-purple-500 text-white',
    'On Hold': 'bg-blue-500 text-white',
    Closed: 'bg-green-500 text-white',
  };

  return (
    <span className={`inline-flex items-center  justify-center w-24 h-8 text-whitepx-4 py-2 rounded-lg ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
