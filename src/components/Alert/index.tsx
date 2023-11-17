import { X } from "lucide-react";
import "./style.scss";
import { ReactNode } from "react";

interface IProp {
  type: string;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-error",
  icon,
  title,
  description,
  children,
}: IProp) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close" />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
