<template>
  <Layout>
    <main-header/>
    
    <Layout :style="{padding: '0 24px 24px'}">
        <Sider hide-trigger :style="{background: '#fff'}">
           <admin-side-menu></admin-side-menu>
        </Sider>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          <router-view></router-view>
        </Content>
    </Layout>
  </Layout>    
</template>

<script>
import AdminSideMenu from './AdminSideMenu';
import MainHeader from '@/components/MainHeader';

export default {
  name: 'AdminLayout',
  components: { AdminSideMenu, MainHeader },
};
</script>

<style>

</style>
