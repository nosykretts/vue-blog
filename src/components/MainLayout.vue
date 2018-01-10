<template>
 <div class="layout">
        <Layout>
            <main-header/>
            <Content :style="{padding: '0 20px'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">2018 &copy; Fajar Patappari</Footer>
        </Layout>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  name: 'PublicLayout',
  components: { MainHeader },
};
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}

.ivu-layout-header{
    margin-bottom: 30px;
}

.ivu-layout-content{
  min-height: 100vh;
}
</style>
