import React from 'react'
import { Input, Button, Table, Modal, message } from 'antd'
import { roleApi } from '@/api'
import Page from '@/components/mix/page'
import columns from './columns'

@Page
class RoleList extends React.Component {
  columns = columns
  state = {
    roleOrSite: '',
    page: {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    },
    tableData: []
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

  changeState = (label, type = 'value') => {
    return (event) => {
      this.setState(
        () => ({
          [label]: event.target[type]
        })
      )
    }
  }

  render () {
    const { tableData, page } = this.state
    console.log(this)
    return (
      <div className="role-list">
        <div className="common-tool">
          <Input
            onChange={this.changeState('roleOrSite')}
            onPressEnter={this.search}
          />
          <Button type="primary" onClick={this.addRole}>Add</Button>
        </div>
        <Table
          rowKey="id"
          pagination={{
            position: ['bottomCenter'],
            total: page.total,
            current: page.pageIndex,
            pageSize: page.pageSize,
            onChange: this.handleCurrentChange
          }}
          columns={this.columns}
          dataSource={tableData} />
      </div>
    )
  }
}

export default RoleList
