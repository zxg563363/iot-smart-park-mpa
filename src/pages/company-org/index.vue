<template>
  <div
    class="company-org"
  >
    <div
      v-for="(item, idx) in compTypeList"
      :key="`comp-type-${idx}`"
      :class="['comp-type', item.type === selectOrgType && 'is-active']"
      @click="selectOrg(item.type)"
    >
      <div class="icon">
        <!-- <img :src="`/static/images/${item.icon}`"> -->
        <object
          :data="`/static/images/${item.icon}`"
          height="50"
        />
      </div>
      <div class="tag">
        <div class="name">
          {{ item.name }}
        </div>
        <div class="en">
          {{ item.en }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyOrg',
  data () {
    return {
      selectOrgType: '',
      compTypeList: [
        {
          name: '总部',
          en: 'Headquarters',
          icon: 'zb.svg',
          type: 'zb'
        },
        {
          name: '研发中心',
          en: 'R&D center',
          icon: 'yfzx.svg',
          type: 'yfzx'
        },
        // {
        //   name: '博士后科研工作站',
        //   en: 'Postdoctoral Research Station',
        //   icon: 'yjs.svg',
        //   type: 'yjs'
        // },
        // {
        //   name: '前沿技术实验室',
        //   en: 'Frontier Technology Laboratory',
        //   icon: 'sys.svg',
        //   type: 'sys'
        // },
        {
          name: '下属公司',
          en: 'Subsidiary company',
          icon: 'xsgs.svg',
          type: 'xsgs'
        },
        {
          name: '分支机构',
          en: 'Branch office',
          icon: 'fzjg.svg',
          type: 'fzjg'
        }
      ]
    }
  },
  method: {
    selectOrg (org) {
      if (org === this.selectOrgType) {
        this.selectOrgType = ''
      } else {
        this.selectOrgType = org
      }
    }
  }
}
</script>

<style lang="less">
.company-org {
  width: 260px;
  opacity: 0.8;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 30px 20px;

  .comp-type {
    display: flex;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid transparent;

    &.is-active {
      border-color: #3080e9;
    }

    &:not(:first-child) {
      margin-top: 5px;
    }

    .icon {
      width: 60px;
      height: 50px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 1);
      text-align: center;

      img {
        width: 40px;
        height: 40px;
        margin: 5px;
      }
    }

    .tag {
      margin-left: 10px;
      width: 100%;

      .name {
        font-size: 18px;
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
    }
  }
}
</style>
