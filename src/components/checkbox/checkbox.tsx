import "./checkbox.css";

interface CheckboxProps {
  checked?: boolean;
  name: string;
  onChange: (event: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({name, onChange, checked}: CheckboxProps) => {
 
  return (
    <div className="checkbox-wrapper-62">
    {/* <input type="checkbox" className="check" id={name} checked={currentStatus === name} name={name} onChange={(e) => onChange(e.target.name)}/> */}
    <input type="checkbox" className="check" id={name} checked={checked} name={name} onChange={(e) => onChange(e)}/>
    <label htmlFor={name} className="label">
      <svg width="43" height="43" viewBox="0 0 90 90">
        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
        <g transform="translate(0,-952.36218)">
          <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3" className="path1" fill="none" />
          <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3" className="path1" fill="none" />
        </g>
      </svg>
      <span>{name}</span>
    </label>
  </div>
  )
}

export default Checkbox;