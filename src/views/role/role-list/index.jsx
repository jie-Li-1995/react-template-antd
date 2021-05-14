import React from 'react'
import { Input, Button, Pagination, Table, Modal, message } from 'antd'
import { roleApi } from '@/api'

export default class RoleList extends React.Component {
  state = {
    roleOrSite: '',
    page: {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    },
    tableData: []
  }

  columns = [
    {
      title: 'Role Status',
      dataIndex: 'statusText',
      key: 'statusText',
      width: 200
    },
    {
      title: 'Role',
      dataIndex: 'name',
      key: 'name',
      width: 200
    },
    {
      title: 'Site',
      dataIndex: 'site',
      key: 'site',
      width: 150
    },
    {
      title: 'Description',
      dataIndex: 'detailedDescribe',
      key: 'detailedDescribe'
    },
    {
      title: 'Operation',
      dataIndex: 'Operation',
      key: 'Operation',
      width: 150,
      render: (_, { id, accountStatus }) => {
        return (
          <div className="operation">
            <i className="ccw-font-edit-active" onClick={() => this.editRole(id)} />
            {
              accountStatus
                ? <i
                  className="ccw-font-inactive"
                  onClick={() => this.beforeChangeStatus(id, false)}
                />
                : <i
                  className="ccw-font-active"
                  onClick={() => this.changeStatus(id, true)}
                />
            }
            <i className="ccw-font-delete-active" onClick={() => this.deleteUser(id)} />
          </div>
        )
      }
    }
  ]

  componentDidMount () {
    this.tableList()
  }

  beforeChangeStatus = (id, status) => {
    Modal.confirm({
      title: 'Tips',
      content: 'This operation will inactive the Role. Confirm inactive?',
      okText: 'Yes',
      cancelText: 'No',
      type: 'warning',
      onOk: () => this.changeStatus(id, status),
      onCancel: () => message.info('Cancelled')
    })
  }

  changeStatus = async (id, status) => {
    const res = await roleApi.changeStatus({
      roleId: id,
      status
    })
    if (res.data.success) {
      message.success('Success')
      this.search(this.tableList)
    }
  }

  editRole = (id) => {
    if (this.currentStatus) {
      this.props.history.push({ name: '/layout/role/roleEdit', params: { id } })
    } else {
      this.props.history.push({ name: 'adminRoleEdit', params: { id } })
    }
  }

  addRole () {
    if (this.currentStatus) {
      this.props.history.push({ name: 'roleCreate' })
    } else {
      this.props.history.push({ name: 'adminRoleCreate' })
    }
  }

  deleteUser = () => {

  }

  tableList = async () => {
    let total = 0
    let tableData = []
    const res = await roleApi.list({
      roleOrSite: this.state.roleOrSite,
      pageIndex: this.state.page.pageIndex,
      pageSize: this.state.page.pageSize
    })
    if (res.data.success) {
      tableData = res.data.data.list.map((item) => {
        return { ...item, statusText: item.accountStatus ? 'Active' : 'Inactive' }
      })
      total = res.data.data.total
    }
    this.setState(({ page }) => ({ tableData, page: { ...page, total } }))
  }

  render () {
    const { tableData } = this.state
    return (
      <div className="role-list">
        <div className="common-tool">
          <Input />
          <Button type="primary" onClick={this.addRole}>Add</Button>
        </div>
        <Table rowKey="id" columns={this.columns} dataSource={tableData} />
        <div className="tac mt20">
          {/*<Pagination*/}
          {/*  onChange={this.handleCurrentChange}*/}
          {/*  current={this.page.pageIndex}*/}
          {/*  pageSize={this.page.pageSize}*/}
          {/*  total={100} />*/}
        </div>
      </div>
    )
  }
}

