<template>
  <div id="app">
    <s-row>
      <s-col :span="24">
        <div class="r"></div>
      </s-col>
    </s-row>
    <!--  -->
    <s-row>
      <s-col :span="12">
        <div class="r"></div>
      </s-col>
      <s-col :span="12">
        <div class="g"></div>
      </s-col>
    </s-row>
    <!--  -->
    <s-row>
      <s-col :span="8">
        <div class="r"></div>
      </s-col>
      <s-col :span="8">
        <div class="g"></div>
      </s-col>
      <s-col :span="8">
        <div class="b"></div>
      </s-col>
    </s-row>
    <!--  -->
    <s-row>
      <s-col :span="4">
        <div class="r"></div>
      </s-col>
      <s-col :span="4">
        <div class="b"></div>
      </s-col>
      <s-col :span="4">
        <div class="g"></div>
      </s-col>
      <s-col :span="4">
        <div class="r"></div>
      </s-col>
      <s-col :span="4">
        <div class="b"></div>
      </s-col>
      <s-col :span="4">
        <div class="g"></div>
      </s-col>
    </s-row>
    <!--  -->
    <s-row>
      <s-col :span="6">
        <div class="r"></div>
      </s-col>
      <s-col :offset="12" :span="6">
        <div class="r"></div>
      </s-col>
    </s-row>
    <!--  -->
    <div class="btn">
      <s-button>默认按钮</s-button>
      <s-button type="primary" @click="handleClick('1')"
        >默认按钮__点击</s-button
      >
      <s-button type="warning">警告按钮</s-button>
      <s-button type="success">成功按钮</s-button>
      <s-button type="danger">危险按钮</s-button>
      <s-button icon="icon-xiazai" type="info">其他按钮</s-button>
      <s-button type="success" icon="icon-sousuo">搜索</s-button>
      <s-button type="danger" :loading="true">加载按钮</s-button>
    </div>
    <div>
      <s-button-group>
        <s-button icon="icon-jiantouarrowhead7">上一页</s-button>
        <s-button icon="icon-jiantouyou" iconPosition="right">下一页</s-button>
      </s-button-group>
    </div>
    <div class="icon">
      <s-icon fontSize="32px" icon="icon-xiazai"></s-icon>
      <s-icon fontSize="26px" icon="icon-sousuo"></s-icon>
    </div>

    <!-- input -->
    <div>
      <s-input v-model="a" placeholder="用户名" />
      <s-input v-model="b" type="password" placeholder="密码" />
      <s-input v-model="c" disabled placeholder="禁用" />
      <s-input v-model="d" clearable />
      <s-input
        v-model="e"
        type="password"
        showPassword
        placeholder="可查看密码"
      />
      <s-input placeholder="带图标" prefixIcon="icon-bianji" />
      <s-input placeholder="带图标" suffixIcon="icon-bianji" />
      <!-- <p>{{d}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      a: "普通输入框",
      b: "password",
      c: "禁用",
      d: "可以清空",
      e: "123456",
    };
  },
  methods: {
    handleClick(index) {
      alert(index);
    },
  },
};
</script>

<style lang="scss">
.r {
  background-color: #99a9bf;
  height: 40px;
}
.b {
  background-color: #d3dce6;
  height: 40px;
}
.g {
  background-color: #e5e9f2;
  height: 40px;
}
</style>
