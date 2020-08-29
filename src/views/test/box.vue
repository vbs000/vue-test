<template>
  <div>
    <h3>DIV默认是垂直方向排列的</h3>
    <div style="background-color:#C0C0C0;height:250px;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>DIV默认是水平方向排列的</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>flex-direction:row 主轴在水平方向，起点在左端</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;flex-direction:row;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>flex-direction:row-reverse 主轴在水平方向，起点在右端</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;flex-direction:row-reverse;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>justify-content: flex-end 右对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;justify-content: flex-end;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>justify-content: flex-end 居中对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;justify-content: center;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>justify-content: flex-end 左对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;justify-content: flex-start;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>justify-content: space-between 两端对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;justify-content: space-between;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>justify-content: space-around 两端对齐2</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;justify-content: space-around;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>flex-direction: column div变成盒子模型，垂直方向排列</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;flex-direction: column;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>flex-direction: column-reverse div变成盒子模型，垂直方向排列</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;flex-direction: column-reverse;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>align-items: flex-start div变成盒子模型，交叉轴起点对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;align-items: flex-start;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>align-items: center div变成盒子模型，交叉轴居中对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;align-items: center;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>align-items: flex-end div变成盒子模型，交叉轴终点对齐</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;align-items: flex-end;">
        <div style="background-color:#FF9933;height:50px;width:50px;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;">4</div>
    </div>
    <h3>flex-grow: 1 div变成盒子模型，子元素平分父元素</h3>
    <div style="background-color:#C0C0C0;height:250px;display: flex;">
        <div style="background-color:#FF9933;height:50px;width:50px;flex-grow: 1;">1</div>
        <div style="background-color:#33CC00;height:50px;width:50px;flex-grow: 1;">2</div>
        <div style="background-color:#66FFFF;height:50px;width:50px;flex-grow: 1;">3</div>
        <div style="background-color:#FFFF00;height:50px;width:50px;flex-grow: 1;">4</div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>