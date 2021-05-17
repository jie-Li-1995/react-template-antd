const Page = PageComponent => {
  return class extends PageComponent {
    componentDidMount () {
      this.search()
    }

    search = () => {
      this.handleCurrentChange(1)
    }

    handleCurrentChange = (pageIndex) => {
      this.setState(({ page }) => ({ page: { ...page, pageIndex } }), this.tableList)
    }

    render () {
      return super.render()
    }
  }
}

export default Page
