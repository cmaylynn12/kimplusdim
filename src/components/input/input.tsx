import "./input.css";

interface RSVPInputProps {
  fieldName: string;
  fieldValue: string;
  onChange?: (name: string) => void;
  disabled?: boolean;
}

const RSVPInput: React.FC<RSVPInputProps> = ({fieldName, fieldValue, disabled, onChange}) => {

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }

  return (
    <input className="input" placeholder={fieldName} value={fieldValue} readOnly={disabled} onChange={handleChange}/>
  )
}

export default RSVPInput;