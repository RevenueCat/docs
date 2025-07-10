import React, { useState } from "react";

interface InteractiveCheckboxProps {
  id: string;
  children: React.ReactNode;
}

export default function InteractiveCheckbox({
  id,
  children,
}: InteractiveCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked); // no localStorage
  };

  return (
    <label className="interactive-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        className="interactive-checkbox-input"
      />
      <div className="interactive-checkbox-content">{children}</div>
    </label>
  );
}
