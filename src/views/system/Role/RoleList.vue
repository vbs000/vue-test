<template>
   <el-main>
       <!-- 搜索框 -->
       <el-form size="mini" :model="roleForm" label-width="80px">
           <el-row>
               <el-col :span="5">
                    <el-form-item label="名称">
                        <el-input v-model="roleForm.roleName" placeholder="请输入角色名称"></el-input>
                    </el-form-item>
               </el-col>
                <el-button size="mini" type="primary" icon="el-icon-search" class="btn-left">搜索</el-button>
                <el-button size="mini" type="primary" icon="el-icon-plus" @click="openAddRole" >新增</el-button>
           </el-row>
           
       </el-form>

       <!-- 数据表格 
       :data 表格数据绑定
       height 表格高度
       只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
       border 表格边框
       prop 属性需要跟表格数据对应
        -->
        
            <el-table
            :data="tableData"
            size="mini"
            :height="tableHeight"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column label="操作" width="160" align="center">
                <template>
                <el-button
                @click.native.prevent="editRole()" type="primary"
                size="mini" >编辑
                </el-button>
                <el-button
                @click.native.prevent="deleteRole()" type="danger"
                size="mini" >删除
                </el-button>
                </template>
            </el-table-column>
            </el-table>
            <!-- 分页组件
            size-change page size改变时调用
            current-change 页数改变时调用
            current-page 当前页
            page-size 页容量
            total 总条数
             -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="tableData.length">
            </el-pagination>
            <!--新增角色对话框-->
            <el-dialog :title="dialogTitle" :visible.sync="visible" width="45%">
            <el-form :rules="rules" ref="addRole" :model="addRoleForm" size="mini" :inline="true">
                <el-form-item prop="name" label="角色名称" label-width="80px">
                <el-input v-model="addRoleForm.name" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <el-form-item prop="remark" label="角色描述" label-width="80px">
                <el-input v-model="addRoleForm.remark" placeholder="请输入角色描述"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="confirmBtn">确 定</el-button>
            </span>
            </el-dialog>
            

   </el-main>
</template>

<script>
    export default {
        methods: {
            //确认新增或编辑
            confirmBtn() {
                let _this = this;
                _this.$refs.addRole.validate(valid => {
                    if(valid){
                        _this.visible = false;
                    }
                })
               
            },
            openAddRole() {
                this.resetForm("addRole");
                this.dialogTitle = "新增角色";
                this.visible = true;
            },
            //删除角色事件
            deleteRole(){

            },
            //编辑角色事件
            editRole(){

            },
            //分配角色事件
            assignRole(){
                
            },
            //page size改变时调用
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            //页数改变时调用
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            resetForm(formName) {
                if (this.$refs[formName]) {
                    this.$refs[formName].resetFields();
                }
            }
        },
        data(){
            return{
                //当前页
                currentPage:1,
                //表单验证
                rules: {
                    name: [
                    {
                        required: true,
                        trigger: "change",
                        message: "请输入角色名称"
                    }
                    ]
                },
                 //新增或编辑角色时数据绑定对象
                addRoleForm: {
                    name: "",
                    remark: ""
                },
                  //对话框标题
                dialogTitle: "",
                //控制对话框显示和影藏 true 时显示 false 影藏
                visible: false,
                //搜索框数据绑定
                //搜索框数据绑定
                roleForm:{
                    roleName:""
                },
                //表格高度
                tableHeight:window.innerHeight,
                //表格数据
                 tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }]
            }
        },
        mounted() {
            this.$nextTick(() => {
            this.tableHeight = window.innerHeight - 220; //后面的50：根据需求空出的高度，自行调整
            });
        }
    }
</script>

<style lang="scss" scoped>
.btn-left{
    margin-left: 30px;
}
.el-main{
    padding-top: 5px !important;
}
</style>