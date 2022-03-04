import { message ,Button, DatePicker, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { addFormation } from '../../services/formationsService';


const formItems = [
        "codeFormation", //0
        "nomFormation", //1
        "debutAccreditation", //2
        "finAccreditation", //3
        "doubleDiplome", //4
        "diplome",//5
        "n0Annee" //6
]

function AddFormation(props)
{
    const onFinish = (values) =>
    {
        async function sendRequest(entity)
        {
            const response = await addFormation(entity);
            console.log(response);
            
            response.error ?
                message.error("Erreur lors de l'ajout du formation - vérifier que e doubleDiplome est un seul caractère")
                    :
                message.success('formation ' + response.nomFormation + ' ajouter avec succes!');
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
          autoComplete="on"
          size="small"  
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 6 }}
        >
            {
                formItems.map((attr,idx) => (
                    <Form.Item
                        key={idx}
                        label={attr}
                        name={attr}
                        placeholder={"Veuillez saisir le " + attr + " du formation"}
                        rules={[
                        {
                            required: true,
                            message: 'le '+attr+' est requis!',
                        },
                        ]}
                    >
                        <Input type={  
                            (attr==="debutAccreditation" || attr==="finAccreditation") ? 'date'
                            : attr==="n0Annee" ?"number"
                            :[0,1,4,5].includes(idx) ? "text":'hidden'
                        }/>
                    </Form.Item>
                ))
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

export default AddFormation;