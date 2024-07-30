import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer IEwcX0fkyrDUWui1jtBC4tjhaMvm6xEaHHrbZMT0pFHWiR5aHJGRD4_cFYH1cf7BhrsGIoA4VK-NnG3mf_t5PZHn-9mOVu_H1eBEC2SiUCQOIMT5Uit9Vm5z3zXTZHYx'


    }
})