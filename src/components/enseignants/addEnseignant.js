import React from 'react';
import { Form, Input, Button, Checkbox, message, Space, Divider, Descriptions } from 'antd';
import { addEnseignant } from '../../services/enseignantsService';

const formItems = [
    "adresse"
    ,"codePostal"
    ,"emailPerso"
    ,"emailUbo"
    ,"mobile"
    ,"nom"
    ,"pays"
    ,"prenom"
    ,"sexe"
    ,"telephone"
    ,"type"
    ,"ville"
]

function AddEnseignant(props) {
    
    const onFinish = (values) =>
    {
      async function sendRequest(entity)
      {
        const response = await addEnseignant(entity);
        console.log(response);
        message.success('Enseignant ' + response.nom + ' ajouter avec succes!');
      }
      sendRequest(values);
    }
  
    const onFinishFailed = (errorInfo) =>
    {
        console.log('Failed:', errorInfo);
    };
  
    return (
        <Form
          name="basic"
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
                        placeholder={"Veuillez saisir le " + name + " de l'enseignant"}
                        rules={[
                        {
                            required: true,
                            message: 'le '+name+' est requis!',
                        },
                        ]}
                    >
                        <Input />
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