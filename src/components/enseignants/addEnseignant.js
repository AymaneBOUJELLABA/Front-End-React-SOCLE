import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const formItems = [
    "adresse"
    ,"codePostal"
    ,"emailPerso"
    ,"emailUbo"
    ,"mobile"
    ,"noEnseignant"
    ,"nom"
    ,"pays"
    ,"prenom"
    ,"sexe"
    ,"telephone"
    ,"type"
    ,"ville"
]

function AddEnseignant(props) {
    
    const onFinish = (values) => {
        console.log('Success:', values);
    }
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  
    return (
        <Form
          name="basic"
          labelCol={{span: 4,}}
          wrapperCol={{span: 6,}}
          initialValues={{remember: true,}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="small"
        >

            {
                formItems.map((name,idx) => {
                    
                    let content = <Form.Item
                        key={idx}
                        label={name}
                        name={name}
                        plcaholder={"Veuillez saisir le " + name + " de l'enseignant"}
                        rules={[
                        {
                            required: true,
                            message: 'le '+name+' est requis!',
                        },
                        ]}
                    >
                        {name==="noEnseignant" ? <Input type="number"/>:<Input />}
                    </Form.Item>

                    return content;
                })
            }
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
}

export default AddEnseignant;