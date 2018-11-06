<template>
  <!-- layout -->
  <div class='layout'>
    <el-container v-loading='loading' class='main-container'>
      <!-- header -->
      <el-header>
        <div class='title'>
          <img :src='logoPath' alt='' class='logo'>
          <span>{{ companyName }}</span>
          <span class='desc'>后台管理系统</span>
        </div>
        <el-dropdown size='medium' class='user-info' trigger='click'>
          <div class='user-info'>
            <span>{{ userName }}</span>
            <img :src='avatarPath' alt='' class='avatar'>
          </div>
          <el-dropdown-menu slot='dropdown'>
            <el-dropdown-item @click.native='logoutHandler'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <!-- sidebar导航 -->
        <el-aside>
          <el-menu
            :default-active='activePage'
            :router='activeRouter'
            background-color='#545c64'
            text-color='#fff'
            active-text-color='#ffd04b'
          >
            <el-menu-item v-for='(nav,index) in sidebarNav' :key='index' :index='nav.path'>
              <template slot='title'>
                <font-awesome-icon :icon='nav.iconCls' class='nav-icon' />
                <span slot='title'>{{ nav.name }}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主内容区 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'VUE商城',
      logoPath: require('./assets/images/logo.png'),
      avatarPath: require('./assets/images/user.jpg'),
      userName: 'admin',
      activeRouter: true,
      loading: false,
    }
  },
  computed: {
    // 侧边栏导航
    sidebarNav() {
      let pages = this.$router.options.routes[0].children
      return pages
    },

    // 当前active页面
    activePage() {
      let path = this.$route.fullPath
      return path
    }
  },

  created() {

  },
  methods: {
    // 退出
    logoutHandler() {
      this.$confirm('退出系统？', '退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logout()
      }).catch(() => {})
    },
        
    // 提交退出
    logout() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({path: '/login'})
      }, 300)
    }
  },
}
</script>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
}
.desc {
  color: #ffd04b;
  font-size: 18px;
  font-style: italic;
  margin-left: 10px;
}
.main-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #f1f1f1;
}

.el-header {
  height: 70px !important;
  background: #545c64;
  color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #666666;
  box-sizing: border-box;
}

.el-aside {
  width: 200px !important;
  background-color: #545c64;
}
.el-menu {
  width: 200px;
}
.el-main {
  margin: 5px;
  position: relative;
  padding: 5px;
}
.sub-nav-item {
  text-indent: 50px;
}
.el-menu-item i {
  color: #ffffff;
}
.el-menu-item.is-active i {
  color: rgb(255, 208, 75);
}
</style>
