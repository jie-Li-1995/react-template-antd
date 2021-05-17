const columns = [
  {
    title: 'Role Status',
    dataIndex: 'statusText',
    key: 'statusText',
    width: 200,
    ellipsis: true
  },
  {
    title: 'Role',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    ellipsis: true
  },
  {
    title: 'Site',
    dataIndex: 'site',
    key: 'site',
    width: 150,
    ellipsis: true
  },
  {
    title: 'Description',
    dataIndex: 'detailedDescribe',
    key: 'detailedDescribe',
    ellipsis: {
      showTitle: true
    }
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

export default  columns
