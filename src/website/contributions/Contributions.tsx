import Sidebar from '../helpers/Sidebar';
import Meta from '@/website/helpers/Meta';

const Contributions = () => {
  return (
    <Sidebar title="Contributions">
      <Meta title="Contributions" />
      <div className="mb-5">
        We welcome all contributions. You can submit any ideas as Pull Requests or as GitHub Issues. If you'd like to improve code, check out the
        Development Instructions and have a good time! :)
      </div>
    </Sidebar>
  );
};

export default Contributions;
