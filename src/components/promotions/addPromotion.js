import { Select, message ,Button, DatePicker, Form, Input, InputNumber, Row, Col, Space } from 'antd';
import React, { useContext } from 'react';
import { addPromotion } from '../../services/promotionsService';
import DataContext from '../../storage/dataContext';


const formItems = [
        "anneeUniversitaire",
        "dateRentree",
        "lieuRentree",
        "nbMaxEtudiant",
        "siglePromotion"
]

function AddPromotion(props)
{
    const {enseignantsProf,formations} = useContext(DataContext);
    const onFinish = (values) =>
    {
        let promotion = {
            ...values,
            enseignant : enseignantsProf[values.enseignant],
            formation : formations[values.formation],
            id : {
                anneeUniversitaire : values.anneeUniversitaire,
                codeFormation : formations[values.formation].codeFormation
            }
        }
        console.log(promotion)
        async function sendRequest(entity)
        {
           const response = await addPromotion(entity);
            console.log(response);
            
            response.error ?
                message.error("Erreur lors de l'ajout du promotion")
                    :
                message.success('promotion ' + response.siglePromotion + ' ajouter avec succes!');
        }
        sendRequest(promotion);
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
          wrapperCol={{ span: 8 }}
        >
            {
                formItems.map((attr,idx) => (
                    <Form.Item
                        key={idx}
                        label={attr}
                        name={attr}
                        placeholder={"Veuillez saisir le " + attr + " du promotion"}
                        rules={[
                        {
                            required: true,
                            message: 'le '+attr+' est requis!',
                        },
                        ]}
                    >
                        <Input type={
                            (attr==="dateRentree") ? "date"
                            : attr==="nbMaxEtudiant" ?"number"
                            :"text"
                        }/>
                    </Form.Item>
                ))
            }
            <Space direction="horizontal">
                <Form.Item  labelCol={{ span: 8,offset: 4 }}
                            wrapperCol={{ span: 12 }}
                 name="enseignant" label="Enseignant" rules={[{required:true,message:'l\'enseignant est requis'}]}>
                        <Select placeholder="veuillez selectionner un enseignant" allowClear>
                            {
                                enseignantsProf.map((item,idx)=>(
                                    <Select.Option key={idx} value={idx}>
                                        {item.nom + ' ' + item.prenom}
                                    </Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item labelCol={{ span: 10}}
                            wrapperCol={{ span: 20 }}
                    name="formation" label="formation" rules={[{required:true,message:'l\'formation est requis'}]}>
                        <Select placeholder="veuillez selectionner un formation" allowClear>
                            {
                                formations.map((item,idx)=>(
                                    <Select.Option key={idx} value={idx}>
                                        {item.nomFormation + ' ' + item.codeFormation}
                                    </Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
            </Space>
            
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

export default AddPromotion;