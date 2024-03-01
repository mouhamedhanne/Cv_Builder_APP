"use client";

import { Input } from "@/components/ui/input";
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <Input type="text" {...props} />
    </div>
  );
}

export default InputControl;
