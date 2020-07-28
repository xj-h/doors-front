<template>
  <div class="container">
    <a-carousel>
      <div v-for="item in items" :key="item.id">
        <!-- <img src="../assets/imgs/banner1920＊630.png" alt="" width="100%"> -->
        <img :src="item" alt="" width="100%">
      </div>
    </a-carousel>
    <div>
      <img :src="homeImgs[0]" alt="产融协作，共创平台 -- 我们的定位" width="100%">
    </div>
    <div>
      <img :src="homeImgs[1]" alt="定向服务，助力小微 -- 我们的服务" width="100%">
    </div>
    <div>
      <img :src="homeImgs[2]" alt="持续赋能，创新驱动 -- 我们的优势" width="100%">
    </div>
    <div class="feature-service">
      <div class="wrap" style="padding:150px 0 80px;">
        <div class="feature-wrap">
          <div v-for="item in featureItems" :key="item.id" class="service-item">
            <p class="feature-name">
              {{ item.name }}
            </p>
            <div><img src="../assets/imgs/about_phone.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="wrap finance-service">
      <h2 class="finance-service-title">
        金融服务
      </h2>
      <p class="finance-service-tip">
        共生 共享 共成长
      </p>
      <div>
        <h3>热门金融产品</h3>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      items: [
        require('../assets/imgs/banner1920＊630.png')
      ],
      homeImgs: [
        require('../assets/imgs/home_position.png'),
        require('../assets/imgs/home_service.png'),
        require('../assets/imgs/home_odds.png')
      ],
      featureItems: [
        { name: '进销存管理' },
        { name: '资产估价' },
        { name: '资产估价财税诊断' },
        { name: '云财务服务' },
        { name: '工业品集采' },
        { name: '互联网资讯' },
        { name: '云办公服务' },
        { name: '电气供应链' }
      ],
      financeItems: [
        {
          id: '111',
          title: '瀚华信贷 - 好享贷',
          content: '好享贷是一款针对小商户开发的小额度、手续简单的标准化经营性贷款产品，主要适用于经营规模较小、贷款需求额度较低的小微型企业、个体工商户及合作平台可以证明实质为经营商户的个人',
          img: require('../assets/imgs/about_company.png')
        },
        {
          id: '112',
          title: '瀚华信贷 - 好享贷',
          content: '好享贷是一款针对小商户开发的小额度、手续简单的标准化经营性贷款产品，主要适用于经营规模较小、贷款需求额度较低的小微型企业、个体工商户及合作平台可以证明实质为经营商户的个人',
          img: require('../assets/imgs/about_company.png')
        },
        {
          id: '113',
          title: '瀚华信贷 - 好享贷',
          content: '好享贷是一款针对小商户开发的小额度、手续简单的标准化经营性贷款产品，主要适用于经营规模较小、贷款需求额度较低的小微型企业、个体工商户及合作平台可以证明实质为经营商户的个人',
          img: require('../assets/imgs/about_company.png')
        }
      ]
    }
  }
}
</script>
<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
  }
  /* carousel */
  .ant-carousel .slick-list{
    max-height: 630px;
    overflow: hidden;
  }
  .ant-carousel .slick-slide {
    overflow: hidden;
    width: 100%;
    max-height: 630px;
    text-align: center;
    overflow: hidden;
  }
  /* carousel end */
  .feature-service{
    background: url('../assets/imgs/feature_service_bg.png') no-repeat center;
    background-size: cover;
  }
  .feature-wrap{
    display: grid;
    grid-template-columns:25% 25% 25% 25%;
    grid-template-rows: 200px 200px;
    background-color: #fff;
  }
  .service-item{
    padding-top:20px;
    border:1px solid #e5e5e5;
    text-align: center;
  }
  .feature-name{
    color: #9FA7B8;
  }
  .feature-name::before{
    display: inline-block;
    content: '';
    width:28px;
    height:1.5px;
    margin-bottom: 3px;
    background: linear-gradient(to right, #fff , #9FA7B8);
  }
  .feature-name::after{
    display: inline-block;
    content: '';
    width:28px;
    height: 1.5px;
    margin-bottom: 4px;
    background: linear-gradient(to left, #fff , #9FA7B8);
  }
  .finance-service{
    padding: 50px 0;
  }
  .finance-service-title{
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: #232323;
  }
  .finance-service-tip{
    font-size: 14px;
    text-align: center;
    color: #A0A0A0;
  }
</style>
