/**
 * @file element 按需加载
 */
import Vue from 'vue';
import {
    Container,
    Aside,
    Main,
    Header,
    Button,
    Link,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup,
    Input,
    Checkbox,
    CheckboxGroup,
    Select,
    Option,
    Dialog,
    Notification,
    Loading,
    Message,
    MessageBox,
    Alert,
    Form,
    FormItem,
    Card,
    DatePicker,
    Pagination,
    Table,
    TableColumn,
    Row,
    Col,
    Cascader,
    InputNumber,
    TimePicker,
    Popover,
    Tooltip,
    TabPane,
    Tabs,
    Drawer,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    TimeSelect,
    Upload,
    Switch,
    RadioGroup,
    Radio,
    Progress,
    Collapse,
    collapseItem
} from 'element-ui';

[
    Container,
    Aside,
    Main,
    Header,
    Button,
    Link,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup,
    Input,
    Checkbox,
    CheckboxGroup,
    Select,
    Option,
    Dialog,
    Loading,
    Alert,
    Form,
    FormItem,
    Card,
    DatePicker,
    Pagination,
    Table,
    TableColumn,
    Row,
    Col,
    Cascader,
    InputNumber,
    TimePicker,
    Popover,
    Tooltip,
    TabPane,
    Tabs,
    Drawer,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    TimeSelect,
    Upload,
    Switch,
    RadioGroup,
    Radio,
    Progress,
    Collapse,
    collapseItem
].forEach((Comp) => Vue.use(Comp));
Vue.prototype.$ELEMENT = {size: 'small'};
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$fullLoading = () => Loading.service({lock: true, background: 'rgba(0, 0, 0, 0.7)'});
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
