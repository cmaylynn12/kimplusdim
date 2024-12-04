import "./input.css";

interface RSVPInputProps {
  label?: boolean;
  fieldName?: string;
  fieldValue?: string;
  onChange?: (name: string) => void;
  onEnter?: (e: any) => void;
  disabled?: boolean;
}

const RSVPInput: React.FC<RSVPInputProps> = ({
  label,
  fieldName,
  fieldValue,
  disabled,
  onChange,
  onEnter,
}) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      {label && <div>{fieldName}</div>}
      <input
        name="guestName"
        spellCheck="false"
        className="input"
        placeholder={!label ? fieldName : ""}
        value={fieldValue}
        readOnly={disabled}
        onChange={handleChange}
        onKeyDown={onEnter}
        autoComplete="off"
      />
    </>
  );
};

export default RSVPInput;
