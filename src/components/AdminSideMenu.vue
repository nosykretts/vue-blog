<template>
  <Sider :style="{background: '#fff'}">
      <Menu  active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="onSelected">
          <MenuItem name="AdminIndex">
           <Icon type="log-in"></Icon>
                Dashboard
          </MenuItem>
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Posts
              </template>
              <MenuItem name="AdminPostManager">Manage Posts</MenuItem>
              <MenuItem name="PostCreate">Create New Post</MenuItem>
          </Submenu>
      </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'AdminSideMenu',
  methods: {
    onSelected(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style>

</style>
