import { Row, Col } from 'antd';
import { Form, Formik } from 'formik';

import TextInput from '@/components/Form/TextInput';

export default function NodeForm({ data, handleSubmit }) {
  const initialValues = {
    label: data.label || '',
    x: data.x || null,
    y: data.y || null,
    color: data.color || '#dddddd',
    size: data.size || 10,
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form id="main-form">
        <Row gutter={[16, 24]}>
          <Col span={12}>
            <TextInput placeholder="Label" name="label" required />
          </Col>
          <Col span={12}>
            <TextInput
              placeholder="Size"
              name="size"
              required
              type="number"
              min={0}
            />
          </Col>

          <Col span={12}>
            <TextInput placeholder="X" name="x" required type="number" />
          </Col>
          <Col span={12}>
            <TextInput placeholder="Y" name="y" required type="number" />
          </Col>

          <Col span={24}>
            <TextInput placeholder="#fff" name="color" required type="color" />
          </Col>
        </Row>
      </Form>
    </Formik>
  );
}
