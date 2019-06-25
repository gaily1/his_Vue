//默认容器组件
import DefaultContainer from "../containers/DefaultContainer";

//挂号首页组件
import RegisterHome from "../views/register/registerHome";


export default {
  path: '/register',
  name: 'register',
  component: DefaultContainer,
  children: [
    {
      path: 'registerHome',
      name: 'registerHome',
      component: RegisterHome
    },
  ]
}
