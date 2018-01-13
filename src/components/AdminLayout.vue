<template>
  <Layout>
    <admin-side-menu></admin-side-menu>
    <Layout :style="{padding: '0 24px 24px'}">
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          <router-view></router-view>
        </Content>
    </Layout>
  </Layout>    
</template>

<script>
import AdminSideMenu from './AdminSideMenu'

export default {
  name: 'AdminLayout',
  components: {AdminSideMenu}
};
</script>

<style>

</style>
