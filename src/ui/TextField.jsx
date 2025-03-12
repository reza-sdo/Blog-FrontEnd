const TextField = ({
  name,
  type = 'text',
  dir = 'rtl',
  label,
  value,
  onChange,
  isRequired,
  className = {},
}) => {
  return (
    <div className="textField">
      <label htmlFor={name}>
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        dir={dir}
        value={value}
        onChange={onChange}
        className={`textField__input ${
          dir === 'ltr' ? 'text-left' : 'text-right'
        } ${className}`}
      />
    </div>
  );
};

export default TextField;
