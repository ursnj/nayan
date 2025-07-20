import { Navigate, Route, Routes } from 'react-router-dom';
import { NTheme, useLocalStorage, THEMES } from 'nayan';
import Wrapper from './react/helpers/Wrapper';
import Home from './react/home/Home';
import Installation from './react/installation/Installation';
import Accordion from './react/components/Accordion';
import Alert from './react/components/Alert';
import Badge from './react/components/Badge';
import Button from './react/components/Button';
import ButtonGroup from './react/components/ButtonGroup';
import Card from './react/components/Card';
import Checkbox from './react/components/Checkbox';
import ConfirmAlert from './react/components/ConfirmAlert';
import Dialog from './react/components/Dialog';
import Divider from './react/components/Divider';
import InfiniteScroll from './react/components/InfiniteScroll';
import Input from './react/components/Input';
import Link from './react/components/Link';
import Linkify from './react/components/Linkify';
import Menu from './react/components/Menu';
import Popover from './react/components/Popover';
import Progress from './react/components/Progress';
import RadioGroup from './react/components/RadioGroup';
import Select from './react/components/Select';
import Sheet from './react/components/Sheet';
import Skeleton from './react/components/Skeleton';
import Slider from './react/components/Slider';
import Switch from './react/components/Switch';
import Tabs from './react/components/Tabs';
import Textarea from './react/components/Textarea';
import Toast from './react/components/Toast';
import Tooltip from './react/components/Tooltip';
import Contributions from './react/contributions/Contributions';
import Loading from './react/components/Loading';
import Table from './react/components/Table';
import Components from './react/components/Components';
import FormInput from './react/components/FormInput';
import SEOMaster from './react/devtools/seo-master/SEOMaster';
import Tags from './react/tags/Tags';
import TagsDetails from './react/tags/TagsDetails';
import Devtools from './react/devtools/Devtools';

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  return (
    <NTheme theme={theme}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/components">
            <Route index element={<Components />} />
            <Route path="accordion" element={<Accordion />} />
            <Route path="alert" element={<Alert />} />
            <Route path="badge" element={<Badge />} />
            <Route path="button" element={<Button />} />
            <Route path="button-group" element={<ButtonGroup />} />
            <Route path="card" element={<Card />} />
            <Route path="checkbox" element={<Checkbox />} />
            <Route path="confirm-alert" element={<ConfirmAlert />} />
            <Route path="dialog" element={<Dialog />} />
            <Route path="divider" element={<Divider />} />
            <Route path="infinite-scroll" element={<InfiniteScroll />} />
            <Route path="input" element={<Input />} />
            <Route path="input-hook-form" element={<FormInput />} />
            <Route path="link" element={<Link />} />
            <Route path="linkify" element={<Linkify />} />
            <Route path="loading" element={<Loading />} />
            <Route path="menu" element={<Menu />} />
            <Route path="popover" element={<Popover />} />
            <Route path="progress" element={<Progress />} />
            <Route path="radio-group" element={<RadioGroup />} />
            <Route path="select" element={<Select />} />
            <Route path="sheet" element={<Sheet />} />
            <Route path="skeleton" element={<Skeleton />} />
            <Route path="slider" element={<Slider />} />
            <Route path="switch" element={<Switch />} />
            <Route path="table" element={<Table />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="textarea" element={<Textarea />} />
            <Route path="toast" element={<Toast />} />
            <Route path="tooltip" element={<Tooltip />} />
          </Route>

          <Route path="/tags">
            <Route index element={<Tags />} />
            <Route path=":tag" element={<TagsDetails />} />
          </Route>

          <Route path="/devtools">
            <Route index element={<Devtools />} />
            <Route path="seo-master" element={<SEOMaster />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
    </NTheme>
  );
};

export default App;
