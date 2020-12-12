import React from 'react';
import InputRow from '../../InputRow/InputRow';


const UserInputRows = (props) => {
    const {inputsState, onChange} = props;

    const formElementsArray = [];
    for (let key in inputsState) {
      formElementsArray.push({id: key, config: inputsState[key]})
    }

    return (
        <section>
            {
                formElementsArray.map(formElement => (
                    <React.Fragment key={formElement.id}>
                    <InputRow
                        label = {formElement.config.label}
                        type={formElement.config.elementType}
                        placeholder= {formElement.config.placeholder}
                        value={formElement.config.value}
                        isValid={formElement.config.valid}
                        toutched={formElement.config.toutched}
                        onChange={(event) => onChange(event, formElement.id)}
                        invalidMessage = {formElement.config.invalidMessage}/>
                    </React.Fragment>
                ))
            }
        </section>
    )
}

export default UserInputRows
