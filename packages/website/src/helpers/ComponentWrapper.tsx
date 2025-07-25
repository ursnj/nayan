import Code from './Code';
import Sidebar from './Sidebar';
import SubHeader from './SubHeader';
import Attributes from './Attributes';
import Meta from './Meta';
import { useLocation } from 'react-router-dom';
import { getMenuItem } from '../services/Utils';
import TagsList from '../tags/TagsList';

interface Props {
  children: any;
}

const ComponentWrapper = (props: Props) => {
  const { children } = props;
  const location = useLocation();
  const component: any = getMenuItem(location.pathname);

  return (
    <Sidebar title={component.title}>
      <Meta title={component.title} description={component.description} />
      <div className="mb-5">{component.description}</div>

      <SubHeader title="Demo">{children}</SubHeader>

      <Attributes data={component.attributes} />

      <SubHeader title="Usage">
        <Code code={component.code} />
      </SubHeader>

      <SubHeader title="Tags">
        <TagsList tags={component.tags} />
      </SubHeader>
    </Sidebar>
  );
};

export default ComponentWrapper;
