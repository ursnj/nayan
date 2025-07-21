import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { AlertTypes, NAlert } from 'nayan';

const Alert = () => {
  return (
    <ComponentWrapper>
      <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => alert('Alert close clicked!')} />
      <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => alert('Alert close clicked!')} />
      <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => alert('Alert close clicked!')} />
      <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => alert('Alert close clicked!')} />
      <NAlert
        type={AlertTypes.ERROR}
        title="Error!"
        message="New version available!"
        className="mb-3"
        onClose={() => alert('Alert close clicked!')}
      />
    </ComponentWrapper>
  );
};

export default Alert;
