import { forwardRef } from 'react';
import { useField } from 'formik';

import { Input, type InputRef, type InputProps, Typography } from 'antd';

const { Text, Title } = Typography;

export interface TextInputProps extends InputProps {
  label?: React.ReactNode;
  name: string;
  value?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const TextInput = forwardRef<InputRef, TextInputProps>(
  (
    {
      label,
      name,
      placeholder,
      value,
      containerProps,
      required = false,
      ...rest
    },
    ref
  ) => {
    const [field, meta] = useField({ name, value });
    let error = meta.touched && meta.error ? meta.error : false;

    return (
      <div {...containerProps}>
        {label ? <Title level={5}>{label}</Title> : null}

        <Input
          ref={ref}
          placeholder={placeholder}
          required={required}
          status={error ? 'error' : undefined}
          {...field}
          {...rest}
        />
        {error ? <Text type="danger">{error}</Text> : null}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
export default TextInput;
