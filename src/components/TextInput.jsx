import "./TextInput.css";
import PropTypes from "prop-types";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

TextInput.propTypes = {
  id: PropTypes.string.isRequired, //⭐ - Input/Label Association
  label: PropTypes.string.isRequired, //⭐ - Input/Label Association
  hideLabel: PropTypes.bool, //⭐ - Accessible Friendly Way of Hiding a Label
  disabled: PropTypes.bool, //⭐ - Disabled State styles
  error: PropTypes.string, //⭐ - Handling Error Messages
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value:
    PropTypes.string.isRequired /** The controlled value of the text input. */,
  onChange:
    PropTypes.func
      .isRequired /** Event handler called when the value changes. */
};

export default function TextInput(props) {
  const {
    id,
    label,
    disabled,
    hideLabel,
    error,
    type = "text",
    placeholder,
    name,
    value,
    onChange
  } = props;

  const hasError = error?.length > 0;

  return (
    <div>
      <label htmlFor={id} className={hideLabel ? "visually-hidden" : null}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        aria-describedby={hasError ? "error-message" : null}
        aria-invalid={hasError ? "true" : "false"}
      />
      {hasError && (
        <p id="error-message" className="error">
          <ExclamationTriangleIcon aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
