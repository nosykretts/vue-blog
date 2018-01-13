<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onSelected">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <MenuItem name="HomePage">
                <Icon type="ios-home"></Icon>
                Home
            </MenuItem>
            <MenuItem name="AdminIndex">
                <Icon type="ios-paper-outline"></Icon>
                Dashboard
            </MenuItem>            
            <MenuItem name="Signin">
                <Icon type="log-in"></Icon>
                Sign In
            </MenuItem>
            <MenuItem name="Signup">
                <Icon type="ios-analytics"></Icon>
                Sign Up
            </MenuItem>
            <MenuItem name="Signout">
                <Icon type="log-out"></Icon>
                Sign Out
            </MenuItem>
        </div>
    </Menu>
</Header>
</template>

<script>
export default {
  name: 'MainHeader',
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
