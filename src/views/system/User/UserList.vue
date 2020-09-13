<template>
    <el-container>
        <el-aside width="200px">
             <div class="ub cross-center" style="margin-left:5px;font-size:16px;margin-top:5px;">
                <i class="el-icon-s-grid"></i>
                <span style="margin-left:3px;">组织机构</span>
            </div>
            <tree
            style="padding-left: 0px;padding-top: 5px;"
            :nodes="nodes"
            :setting="setting"
            @onCreated="handleCreated"
            />
        </el-aside>
        <el-main>
            <el-form size="mini" :model="searchForm" ref="searchForm" label-width="80px">
              <el-row>
                <el-col :span="5">
                    <el-form-item label="用户名">
                    <el-input v-model="searchForm.username" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="电话">
                  <el-input v-model="searchForm.phone" placeholder=""></el-input>
              </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="邮箱">
                        <el-input v-model="searchForm.email" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                 <el-button style="margin-left:20px;" size="mini" type="primary" icon='el-icon-search'>搜索</el-button>
                <el-button size="mini" type="primary" icon='el-icon-plus'>新增</el-button>
              </el-row>
            </el-form>
            <el-table
            size="mini"
            :data="tableData"
            :height="tableHeight"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column width="170" align="center" label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
            </el-pagination>
        </el-main>
    </el-container>
</template>

<script>
    //引入ztree组件
    import tree from "vue-giant-tree";
    export default {
        //注册组件
        components:{
            tree
        },
        methods: {
            //ztree树点击事件回调函数
            ztreeOnClick(event, treeId, treeNode){
                console.log(event);
                console.log(treeId);
                console.log(treeNode);
            },
            //树创建成功后调用
            handleCreated(obj){
                this.ztreeObj = obj;
                obj.expandAll(true);
            },
            //编辑事件
            handleEdit(index,row){
                console.log(index);
                console.log(row);
            },
             //删除事件
            handleDelete(index,row){
                console.log(index);
                console.log(row);
            },
            //pagesize改变时触发
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            //页数改变时触发
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            this.$nextTick(() => {
            this.tableHeight = window.innerHeight - 250; //后面的50：根据需求空出的高度，自行调整
            });
        },
        data() {
            return {
                //树插件配置
                ztreeObj: null,
                setting: {
                    view: {
                        showLine: true,//连接线
                        showIcon: false,
                        fontCss: { "font-size": "12px", color: "#333" }
                    },
                    //设置这里会显示复选框
                    // check: {
                    // enable: true
                    // },
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: "id",
                            pIdKey: "pid",
                            rootPId: "0"
                        }
                    },
                    //配置回调函数
                    callback: {
                        //树的点击事件
                        onClick: this.ztreeOnClick
                    }
                },
                nodes: [{
                "id": "1000000362292826",
                "pid": "1000001251633881",
                "likeId": "0,100000177618509910000012516338811000000362292826",
                "parentName": "销售部门",
                "manager": null,
                "name": "销售1",
                "deptCode": "",
                "deptAddress": "",
                "deptPhone": "",
                "orderNum": 0
                }, {
                "id": "1000001251633881",
                "pid": "1000001776185099",
                "likeId": "0,10000017761850991000001251633881",
                "parentName": "秘咖科技有限公司",
                "manager": null,
                "name": "销售部门",
                "deptCode": null,
                "deptAddress": null,
                "deptPhone": null,
                "orderNum": null
                }, {
                "id": "1000001341234088",
                "pid": "1000001776185099",
                "likeId": "0,1000001776185099",
                "parentName": "秘咖网络科技有限公司",
                "manager": null,
                "name": "人才管理部1",
                "deptCode": "RCGL",
                "deptAddress": "",
                "deptPhone": "",
                "orderNum": 0
                }, {
                "id": "1000001620535597",
                "pid": "1000001776185099",
                "likeId": "0,10000017761850991000001620535597",
                "parentName": "秘咖网络科技有限公司",
                "manager": null,
                "name": "软件研发部",
                "deptCode": null,
                "deptAddress": null,
                "deptPhone": null,
                "orderNum": null
                }, {
                "id": "1000001776185099",
                "pid": "0",
                "likeId": "0,1000001776185099",
                "parentName": "顶级部门",
                "manager": null,
                "name": "秘咖网络科技有限公司",
                "deptCode": null,
                "deptAddress": null,
                "deptPhone": null,
                "orderNum": null
                }, {
                "id": "1000002097176073",
                "pid": "1000001776185099",
                "likeId": "0,10000017761850991000002097176073",
                "parentName": "秘咖网络科技有限公司",
                "manager": "464156",
                "name": "售后服务部",
                "deptCode": "SHFWB",
                "deptAddress": "昆明",
                "deptPhone": "18687171906",
                "orderNum": null
                }],
                searchForm:{
                    username:'',
                    phone:'',
                    email:''
                },
                //当前页
                currentPage:1,
                //表格合适高度
                tableHeight:0,
                //用户table数据
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
                }],
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>