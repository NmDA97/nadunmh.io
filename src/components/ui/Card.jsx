// components/ui/Card.jsx
export const Card = ({ children, className }) => (
    <div className={`rounded-xl  ${className}`}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ children }) => (
    <div className="p-6 border-b border-zinc-700">{children}</div>
  );
  
  // Add this new component
  export const CardTitle = ({ children }) => (
    <h3 className="text-xl font-bold mb-2">{children}</h3>
  );
  
  export const CardContent = ({ children }) => (
    <div className="p-6">{children}</div>
  );