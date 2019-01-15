import React from 'react';

export const FormErrors = ({ formErrors }) => {
  return (<span>
        {
            (formErrors.length >0)
            ? <p className="error" key="password">{ formErrors }</p>
            : ''
        }
      </span>
  )
}
