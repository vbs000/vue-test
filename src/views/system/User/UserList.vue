<template>
    <el-container>
        <el-aside width="200px">部门树</el-aside>
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
    export default {
        methods: {
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
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>