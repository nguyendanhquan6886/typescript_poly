import instance from './index'

const getAllproduct = async () => {
  try {
    const { data } = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getAllproduct
