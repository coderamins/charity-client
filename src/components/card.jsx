const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};

export { Card, CardContent };
