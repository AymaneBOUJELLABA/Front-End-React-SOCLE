import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox, message, Space, Divider, Descriptions, Select } from 'antd';
import { addCandidat } from '../../services/candidatsService';
import DataContext from '../../storage/dataContext';

const formItems = [
    "nom",
    "prenom",
    "adresse",
    "codePostal",
    "dateNaissance",
    "email",
    "lieuNaissance",
    "mobile",
    "nationalite",
    "noCandidat",
    "paysOrigine",
    "sexe",
    "telephone",
    "universiteOrigine",
    "ville"
]

function AddCandidat(props)
{
    const {promotions} = useContext(DataContext)||[];
    
    const onFinish = (values) =>
    {

        let candidat = {
            ...values,
            promotion: promotions[values.promotion]
        }
        console.log(values);
      async function sendRequest(entity)
      {
        const response = await addCandidat(entity);
        console.log(response);
        message.success('Candidat ' + response.nom + ' ajouter avec succes!');
      }
      sendRequest(candidat);
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
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
            {
                formItems.map((name,idx) => {
                    let content = <Form.Item
                        key={idx}
                        label={name}
                        name={name}
                        placeholder={"Veuillez saisir le " + name + " du candidat"}
                        rules={[
                        {
                            required: (name==="nom" || name==="prenom" || name==="noCandidat")?true:false,
                            message: 'le '+name+' est requis!',
                        },
                        ]}
                    >
                        <Input type={name==="dateNaissance"?'date' : "text"}/>
                    </Form.Item>

                    return content;
                })
            }
        <Form.Item  labelCol={{ span: 4}}
                        wrapperCol={{ span: 8 }}
                name="promotion" label="Promotion" rules={[{required:true,message:'la promotion est requis'}]}>
                    <Select placeholder="veuillez selectionner une promotion" allowClear>
                        {
                            promotions.map((item,idx)=>(
                                <Select.Option key={idx} value={idx}>
                                    {item.id.codeFormation+'-'+item.id.anneeUniversitaire}
                                </Select.Option>
                            ))
                        }
                    </Select>
            </Form.Item>
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

export default AddCandidat;