import React, {useState} from "react";
import Form from '@rjsf/material-ui';

export default function FormGenerator(props : any) {
    const initialFormData = props.data.formData
    const [formData, setFormData] = useState(initialFormData);
    return (<Form
        schema={props.data.schema}
        uiSchema={props.data.uiSchema}
        formData={formData}
        onSubmit={() => console.log(formData)}
        onChange={({formData}) => setFormData(formData)}/>);
}
