import "./input.css";

interface RSVPInputProps {
  fieldName: string;
  fieldValue: string;
  onChange?: (name: string) => void;
  onEnter?: (e: any) => void;
  disabled?: boolean;
}

const RSVPInput: React.FC<RSVPInputProps> = ({fieldName, fieldValue, disabled, onChange, onEnter}) => {

  const handleChange = (e: any) => {

    if (onChange) {
      onChange(e.target.value);
    }
  }

  return (
    <input spellCheck="false" className="input" placeholder={fieldName} value={fieldValue} readOnly={disabled} onChange={handleChange} onKeyDown={onEnter}/>
  )
}

export default RSVPInput;