<template>
  <Sider hide-trigger :style="{background: '#fff'}">
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Posts
              </template>
              <MenuItem name="1-1">Post List</MenuItem>
              <MenuItem name="1-2">Create New Post</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
      </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'AdminSideMenu'
}
</script>

<style>

</style>
