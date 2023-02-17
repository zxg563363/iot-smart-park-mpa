<template>
  <div
    class="company-info-all"
  >
    <div class="comp-title">
      <img src="/static/images/logo.png"> 远光软件股份有限公司
    </div>
    <div class="comp-desc">
      远光软件股份有限公司(SZ:
      002063)，是国内主流的企业管理、能源互联和社会服务信息技术、产品和服务提供商，公司控股股东为国家电网全资子公司国网数字科技控股有限公司。
    </div>
    <div class="comp-desc">
      公司是国家鼓励的重点软件企业，作为民族软件品牌，公司高度重视自主可控、安全可靠，始终坚持自主创街，连续多年研发投入占营收比重超20%，并且与国内外知名企业、机构、高救建立了密切的战略合作联盟，连续6度荣获“可靠企业核心软件品牌”。
    </div>
    <el-divider />
    <div class="rygm item">
      <img
        src="/static/images/ic-rygm.png"
        class="cat-img"
      >
      <div class="category">
        <div class="name">
          人员规模 >>
        </div>
        <div class="en">
          Size of persionnet
        </div>
      </div>
      <div class="detail">
        <div class="per-item">
          5000+ 人
        </div>
      </div>
    </div>
    <div class="zzjg item">
      <img
        src="/static/images/ic-zzjg.png"
        class="cat-img"
      >
      <div class="category">
        <div class="name">
          组织结构 >>
        </div>
        <div class="en">
          Structure of organization
        </div>
      </div>
      <div class="detail">
        <vue2-org-tree :data="orgData" />
        <!-- <div class="struc-list">
          <div class="struc-item">2个总部(北京&珠海)</div>
          <div class="struc-item">3 个研发中心</div>
          <div class="struc-item">1 个博士后科研工作站</div>
          <div class="struc-item">1个前沿技术实验室</div>
          <div class="struc-item">13 个下属公司</div>
          <div class="struc-item">35个分支机构</div>
        </div> -->
      </div>
    </div>
    <div class="zyyw item">
      <img
        src="/static/images/ic-zyyw.png"
        class="cat-img"
      >
      <div class="category">
        <div class="name">
          主营业务 >>
        </div>
        <div class="en">
          Main business
        </div>
      </div>
      <div class="detail">
        <div class="desc">
          公司专注大型集团企业管理信息化逾30年，主营产品与服务包括数字企业、智慧能源、信创平台、社会互联等。公司扎根能源电力行业，并在该行业企业管理软件领域长期处于领先地位。
        </div>
        <div class="biz-list">
          <div class="biz-item">
            智慧能源
          </div>
          <div class="biz-item">
            智能物联平台
          </div>
          <div class="biz-item">
            智慧燃料
          </div>
          <div class="biz-item">
            智慧消防
          </div>
          <div class="biz-item">
            智慧政务
          </div>
          <div class="biz-item">
            数据中台
          </div>
          <div class="biz-item">
            企业云平台
          </div>
          <div class="biz-item">
            人工智能
          </div>
          <div class="biz-item">
            区块链应用服务平台
          </div>
          <div class="biz-item">
            ......
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CompanyInfo',
  data () {
    return {
      orgData: {
        label: '2个总部(北京&珠海)',
        children: [
          { label: '3 个研发中心' },
          // { label: '1 个博士后科研工作站' },
          // { label: '6 个前沿技术实验室' },
          { label: '9 个下属公司' },
          { label: '34个分支机构' }
        ]
      }
    }
  }
}
</script>

<style lang="less">
@import '~vue2-org-tree/dist/style.css';

.company-info-all {
  background: rgba(0, 0, 0, 0.85) !important;
  color: #fff;
  margin: 0 30px;
  width: auto !important;
  padding: 50px 30px !important;

  .comp-title {
    align-items: center;
    display: inline-flex;
    color: #fff;
    font-size: 40px;
    letter-spacing: 10;

    img {
      margin-right: 20px;
    }
  }

  .comp-desc {
    margin: 20px 0;
    font-size: 18px;
  }

  .el-divider {
    margin-top: 50px;
  }

  .rygm,
  .zzjg {
    margin: 60px 0;
  }

  .zzjg .detail {
    .org-tree-container {
      background: transparent;
      color: #fff;
      padding: 15px 0;

      .org-tree-node-label {
        width: 190px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 12px;
        border: 1px solid #ffffff;

        .org-tree-node-label-inner {
          padding: 0;
        }
      }
    }
  }

  .item {
    display: flex;
    align-items: flex-start;

    .cat-img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    .category {
      width: 200px;

      .name {
        font-size: 20px;
        color: #fff;
      }

      .en {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 0px;
        color: rgba(143, 143, 143, 1);
        vertical-align: top;
        margin-top: 15px;
      }
    }

    .detail {
      width: calc(100% - 220px);

      .desc {
        margin-bottom: 30px;
        font-size: 18px;
      }

      .struc-list,
      .biz-list {
        display: flex;
        flex-wrap: wrap;
      }

      .per-item,
      .struc-item,
      .biz-item {
        color: #fff;
        width: 190px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 1);
        margin-right: 40px;
      }

      .biz-item {
        margin-bottom: 30px;
        width: 220px;
      }
    }
  }
}
</style>
