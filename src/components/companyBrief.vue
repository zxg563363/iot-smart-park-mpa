<template>
  <div
    class="company-info"
  >
    <div
      class="title cursor-pointer"
      @click="openIntro"
    >
      公司简介
    </div>
    <div class="detail">
      <div class="item zb">
        <div class="name">
          总部
        </div>
        <div class="en">
          Headquarters
        </div>
        <div class="num">
          <img src="/static/images/ic-zb.png"> 2
        </div>
      </div>
      <div class="item yfzx">
        <div class="name">
          研发中心
        </div>
        <div class="en">
          R&D center
        </div>
        <div class="num">
          <img src="/static/images/ic-yfzx.png"> 3
        </div>
      </div>
      <div class="item fzjg">
        <div class="name">
          分支机构
        </div>
        <div class="en">
          Branch office
        </div>
        <div class="num">
          <img src="/static/images/ic-fzjg.png"> 34
        </div>
      </div>
    </div>
    <div class="total-emp">
      <div class="tag">
        <div class="name">
          企业总人数
        </div>
        <div class="en">
          Total number of employees
        </div>
      </div>
      <div class="num">
        5000+<span class="unit">人</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyBrief',
  methods: {
    openIntro () {
      this.showDialog = true
    }
  }
}
</script>

<style lang="less">
.company-info {
  width: 300px;
  opacity: 0.8;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 30px 20px;

  .title {
    width: 106px;
    height: 40px;
    line-height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 1);
    text-align: center;
  }

  .detail {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 18px;
    }

    .num {
      margin-top: 10px;
      font-size: 24px;
      display: inline-flex;
      align-items: center;

      img {
        margin-right: 5px;
      }
    }

    .item {
      width: 100%;

      &:not(:first-child) {
        padding-left: 20px;
      }

      &.yfzx {
        border-left: 1px solid rgba(112, 112, 112, 1);
        border-right: 1px solid rgba(112, 112, 112, 1);
      }
    }
  }

  .en {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(143, 143, 143, 1);
    vertical-align: top;
    margin-top: 10px;
  }

  .total-emp {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    .num {
      font-size: 20px;
    }

    .unit {
      font-size: 12px;
    }
  }
}
</style>
