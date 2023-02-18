import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      //component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/', // '/'가 /teams의 별칭이 된다. 즉 localhost:8081/로 접속하면 /teams로 접속한 것 같이 TeamsList가 보이게 되는데, url은 /teams가 아니라 그낭 / 이다.
      children: [
        { // 
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // teams/t1
      ],
    },
    {
      path: '/users',
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        // '라우터 구성 수준 레벨'
        // global beforeeach 실행 다 되고 난 후 이게 실행됨.
        // 만약 global beforeeach에서 next(false)로 막아버린다면, 여기 실행 X.
        console.log('Users beforeEnter');
        console.log(to, from);
        next();
        console.log('Users beforeEnter ends =-=-=-=-=-');
      },
    },
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   props: true, // Vue 라우터에 동적 매개변수가 $route 프로퍼티에만 전달되는 게 아니라, 즉 url의 :teamId가 $route.params.teamId 이렇게만 접근할 수 있는 게 아니라,
    //   // props로서 component에 전달외어야 한다고 알려주는 기능. TeamMembers 에서 url에 있는 :teamId를 props: ['teamId']와 같이 받아서 사용할 수 있다.
    // },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    console.log('===== scrollBehavior =====');
    console.log(to, from, savedPosition);
    console.log('===== end of scrollBehavior =====');

    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

router.beforeEach(function (to, from, next) {
  console.log('----- Global beforeEach!-----')
  console.log(to, from);
  // next(); // you allow nevigation, confirm it!
  // next(false); // you cancel the nevigation!

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-members',
  //     params: {
  //       teamId: 't2'
  //     }
  //   });
  // }
  next();
  console.log('----- end of Global beforeEach! -----')
});

const app = createApp(App);
app.use(router);
app.mount('#app');
