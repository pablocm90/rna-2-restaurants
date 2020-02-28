import axios from "axios";


export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer sgyE6C42upAl2SQ6Dxw3t6InHFN1BKMA1P3f8O2W8ypFNIStZdhRncQrGtlA7T2HpCzjn1jvEs7iKWBgdGTtE-9gO10cfQaTbUg6kmMLWfiFgHiiJiSXDilogP5XXnYx'
  }
})
