import { ChangeEvent, FC, Fragment, useState } from "react";

import { Button } from "@/components";
import { CheckmarkIcon, ChevronDownIcon } from "@/components/icons";

import styles from "@/styles/components/form.module.scss";

type Field = {
  label: string;
  type: string; // "checkbox" | "email" | "multiline" | "select" | "text";
  required?: boolean;
  options?: string[];
};
type Row = Field[];
type FieldValue = {
  label: string;
  required?: boolean;
  value: string | boolean;
  setValue: (newValue: string | boolean) => void;
};
type TextFieldType = FieldValue & { isEmail: boolean; required?: boolean };
type SelectFieldType = FieldValue & { options: string[]; required?: boolean };

const TextField: FC<TextFieldType> = ({
  label,
  isEmail,
  required,
  setValue,
  value,
}) => {
  return (
    <div className={styles["form-field-wrapper"]}>
      <input
        {...{ required }}
        className={styles["form-field"]}
        name={isEmail ? "_replyto" : label}
        type={isEmail ? "email" : "text"}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder={label + (required ? " *" : "")}
        value={value as string}
      />
    </div>
  );
};

const MultilineField: FC<FieldValue> = ({
  label,
  required,
  setValue,
  value,
}) => {
  return (
    <div className={styles["form-field-wrapper"]}>
      <textarea
        {...{ required }}
        className={styles["form-field"]}
        name={label}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        rows={5}
        placeholder={label + (required ? " *" : "")}
        value={value as string}
      />
    </div>
  );
};

const SelectField: FC<SelectFieldType> = ({
  label,
  options,
  required,
  setValue,
  value,
}) => {
  return (
    <div
      className={`${styles["form-field-wrapper"]} ${styles["select-field"]}`}
    >
      <select
        {...{ required }}
        className={`${styles["form-field"]} ${
          !value ? styles["default-value"] : ""
        }`}
        name={label}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
        value={value as string}
      >
        <option disabled key="default" value="">
          {label + (required ? " *" : "")}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={styles["svg-wrapper"]}>
        <ChevronDownIcon size={16} />
      </div>
    </div>
  );
};

const CheckboxField: FC<FieldValue> = ({ label, setValue, value }) => {
  return (
    <label
      className={`${styles["form-field-wrapper"]} ${styles["checkbox-field"]}`}
    >
      <input
        checked={!!value}
        name={label}
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.checked)
        }
      />
      <CheckmarkIcon size={18} />
      {label}
    </label>
  );
};

const arrayToObject = (
  array: { label: string; isBoolean: boolean }[],
  defaultStringValue: string = "",
  defaultBooleanValue: boolean = false
) => {
  const obj: { [key: string]: string | boolean } = {};

  array.forEach(({ label, isBoolean }) => {
    obj[label] = isBoolean ? defaultBooleanValue : defaultStringValue;
  });

  return obj;
};

export const Form: FC<{
  buttonLabel: string;
  fields: Row[];
  formspreeId: string;
}> = ({ buttonLabel, fields, formspreeId }) => {
  const [fieldValues, setFieldValues] = useState<{
    [label: string]: string | boolean;
  }>(
    arrayToObject(
      fields
        .flat()
        .map(({ label, type }) => ({ label, isBoolean: type === "checkbox" }))
    )
  );

  const getFieldProps = (field: Field) => ({
    ...field,
    setValue: (newValue: string | boolean) =>
      setFieldValues((fv) => ({ ...fv, [field.label]: newValue })),
    value: fieldValues[field.label],
  });

  return (
    <form
      action={`https://formspree.io/f/${formspreeId}`}
      className={styles.component}
      method="POST"
    >
      {fields.map((row, rowIndex) => (
        <div
          className={styles.row}
          key={rowIndex}
          style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
        >
          {row.map((field, fieldIndex) => (
            <Fragment key={fieldIndex}>
              {(field.type === "text" || field.type === "email") && (
                <TextField
                  {...getFieldProps(field)}
                  isEmail={field.type === "email"}
                />
              )}
              {field.type === "multiline" && (
                <MultilineField {...getFieldProps(field)} />
              )}
              {field.type === "select" && field.options && (
                <SelectField
                  {...getFieldProps(field)}
                  options={field.options}
                />
              )}
              {field.type === "checkbox" && (
                <CheckboxField {...getFieldProps(field)} />
              )}
            </Fragment>
          ))}
        </div>
      ))}
      <div className={styles["button-wrapper"]}>
        <Button isSubmit title={buttonLabel} />
      </div>
    </form>
  );
};
